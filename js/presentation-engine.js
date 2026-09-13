/* ============================================================
   Motor de presentaciones reutilizable
   Soporta: slides normales, video único y galería de videos.
   ============================================================ */

const PresentationEngine = (function () {
    let config = null;
    let currentLevel = null;
    let currentIndex = 0;
    let els = {};

    function getSlides() { return config.levels[currentLevel].slides; }
    function getTotal() { return getSlides().length; }
    function isIntermedio() { return currentLevel === 'intermedio'; }
    function hasMultipleLevels() { return Object.keys(config.levels).length > 1; }

    /* ----------------------------------------------------------
       RENDERIZADO DE CADA TIPO DE SLIDE
    ---------------------------------------------------------- */

    function renderNormalSlide(slide, inter) {
        let html = `<ul class="step-list">`;
        (slide.content || []).forEach(item => {
            html += `<li class="${inter ? 'intermedio' : ''}">`;
            html += `<span class="icon">${item.icon || '📌'}</span>`;
            html += `<span class="text">${item.text}</span>`;
            html += `</li>`;
        });
        html += `</ul>`;

        if (slide.extra) {
            html += `<div class="example-box ${inter ? 'intermedio' : ''}">${slide.extra}</div>`;
        }
        if (slide.tip) {
            html += `<div class="tip">💡 <strong>Tip:</strong> ${slide.tip}</div>`;
        }
        if (slide.visual) {
            html += `<div class="visual-grid">`;
            slide.visual.forEach(v => { html += `<div class="item">${v}</div>`; });
            html += `</div>`;
        }
        if (slide.table) {
            html += `<div class="data-table">`;
            slide.table.forEach((row, ri) => {
                row.forEach(cell => {
                    html += `<div class="cell ${ri === 0 ? 'header-cell' : ''}">${cell}</div>`;
                });
            });
            html += `</div>`;
        }
        return html;
    }

    function renderVideoSlide(slide) {
        const poster = slide.poster ? `poster="${slide.poster}"` : '';
        return `
            <div class="video-slide">
                <video controls preload="metadata" ${poster}>
                    <source src="${slide.src}" type="video/mp4">
                    Tu navegador no soporta la etiqueta <code>video</code>.
                </video>
                <div class="video-error">
                    ⚠️ No se pudo cargar el video. Verifica que exista en <code>${slide.src}</code>
                </div>
                ${slide.caption ? `<div class="video-caption">${slide.caption}</div>` : ''}
                ${slide.description ? `<div class="video-description">${slide.description}</div>` : ''}
            </div>
        `;
    }

    function renderVideoGallery(slide) {
        if (!slide.videos || slide.videos.length === 0) {
            return `
                <div class="video-gallery-empty">
                    <i class="fas fa-video-slash"></i>
                    <p>No hay videos disponibles en esta sección.</p>
                </div>
            `;
        }

        let html = `<div class="video-gallery">`;
        slide.videos.forEach((v, idx) => {
            const poster = v.poster ? `poster="${v.poster}"` : '';
            html += `
                <div class="video-item">
                    <video controls preload="metadata" ${poster} data-video-index="${idx}">
                        <source src="${v.src}" type="video/mp4">
                        Tu navegador no soporta la etiqueta <code>video</code>.
                    </video>
                    <div class="video-error">
                        ⚠️ No se pudo cargar: <code>${v.src}</code>
                    </div>
                    ${v.title ? `<div class="video-title">🎬 ${v.title}</div>` : ''}
                    ${v.description ? `<div class="video-desc">${v.description}</div>` : ''}
                    ${v.meta ? `<div class="video-meta">${v.meta}</div>` : ''}
                </div>
            `;
        });
        html += `</div>`;
        return html;
    }

    /* ----------------------------------------------------------
       RENDERIZADO PRINCIPAL DE LA DIAPOSITIVA
    ---------------------------------------------------------- */

    function renderSlide(index) {
        const slides = getSlides();
        const slide = slides[index];
        if (!slide) return;

        const inter = isIntermedio();
        const nivel = config.levels[currentLevel];
        const dayNum = slide.day || Math.floor(index / 6) + 1;

        els.mainTitle.textContent = `${nivel.emoji} ${config.title} ${nivel.label} - Día ${dayNum}`;
        els.badgeLevel.textContent = nivel.label;
        els.badgeLevel.className = `badge ${inter ? 'badge-intermedio' : 'badge-basico'}`;
        els.slideCounter.textContent = `${index + 1} / ${getTotal()}`;

        // Encabezado
        let html = `<h2 class="${inter ? 'intermedio' : ''}">${slide.title}</h2>`;

        // Cuerpo según tipo de slide
        switch (slide.type) {
            case 'video':
                html += renderVideoSlide(slide);
                break;
            case 'video-gallery':
                html += renderVideoGallery(slide);
                break;
            default:
                html += renderNormalSlide(slide, inter);
        }

        els.slideContent.innerHTML = html;

        // Detectar errores de carga de video (uno por uno)
        els.slideContent.querySelectorAll('video').forEach(videoEl => {
            videoEl.addEventListener('error', () => {
                videoEl.classList.add('error');
            });
            // También revisar si el <source> falla
            videoEl.querySelectorAll('source').forEach(sourceEl => {
                sourceEl.addEventListener('error', () => {
                    videoEl.classList.add('error');
                });
            });
        });

        // Pausar todos los videos al cambiar de slide (evita audio residual)
        els.slideContent.querySelectorAll('video').forEach(v => {
            v.pause();
        });

        // Botones
        els.prevBtn.disabled = index === 0;
        const isLast = index === getTotal() - 1;
        els.nextBtn.textContent = isLast ? '🏁 Finalizar' : 'Siguiente ▶';
        els.nextBtn.className = `primary ${inter ? 'intermedio' : ''}`;
    }

    /* ----------------------------------------------------------
       NAVEGACIÓN
    ---------------------------------------------------------- */

    function goTo(index) {
        if (index < 0) index = 0;
        if (index >= getTotal()) index = getTotal() - 1;
        currentIndex = index;
        renderSlide(currentIndex);
    }

    function changeLevel(level) {
        if (level === currentLevel) return;
        currentLevel = level;
        currentIndex = 0;

        if (hasMultipleLevels()) {
            Object.keys(config.levels).forEach(k => {
                const btn = document.getElementById('btn-' + k);
                if (btn) btn.className = k === level ? `active-${k}` : '';
            });
        }
        if (els.modalTitle) {
            els.modalTitle.textContent = `📋 Índice - ${config.title} ${config.levels[level].label}`;
        }
        renderSlide(0);
    }

    /* ----------------------------------------------------------
       ÍNDICE
    ---------------------------------------------------------- */

    function openIndex() {
        const slides = getSlides();
        const inter = isIntermedio();
        const nivel = config.levels[currentLevel];
        let html = '';
        slides.forEach((slide, idx) => {
            const day = slide.day || Math.floor(idx / 6) + 1;
            let icon = nivel.emoji;
            if (slide.type === 'video') icon = '🎬';
            if (slide.type === 'video-gallery') icon = '📹';

            html += `<div class="index-item" data-index="${idx}">
                        <span>${icon} ${slide.title}</span>
                        <span class="idx-badge ${inter ? 'intermedio' : ''}">Día ${day}</span>
                    </div>`;
        });
        els.indexList.innerHTML = html;
        els.indexList.querySelectorAll('.index-item').forEach(el => {
            el.addEventListener('click', function () {
                goTo(parseInt(this.dataset.index));
                els.modal.classList.remove('active');
            });
        });
        els.modal.classList.add('active');
    }

    /* ----------------------------------------------------------
       SELECTOR DE NIVEL
    ---------------------------------------------------------- */

    function buildSelector() {
        const selector = document.getElementById('courseSelector');
        if (!selector || !hasMultipleLevels()) return;
        selector.hidden = false;
        selector.innerHTML = '';
        Object.keys(config.levels).forEach(k => {
            const lvl = config.levels[k];
            const btn = document.createElement('button');
            btn.id = 'btn-' + k;
            btn.textContent = `${lvl.emoji} ${config.title} ${lvl.label}`;
            btn.className = k === currentLevel ? `active-${k}` : '';
            btn.addEventListener('click', () => changeLevel(k));
            selector.appendChild(btn);
        });
    }

    /* ----------------------------------------------------------
       INICIALIZACIÓN
    ---------------------------------------------------------- */

    function init(userConfig) {
        config = userConfig;
        currentLevel = Object.keys(config.levels)[0];
        currentIndex = 0;

        els = {
            mainTitle: document.getElementById('mainTitle'),
            badgeLevel: document.getElementById('badgeLevel'),
            slideCounter: document.getElementById('slideCounter'),
            slideContent: document.getElementById('slideContent'),
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn'),
            indexBtn: document.getElementById('indexBtn'),
            modal: document.getElementById('indexModal'),
            indexList: document.getElementById('indexList'),
            closeModalBtn: document.getElementById('closeModalBtn'),
            modalTitle: document.getElementById('modalTitle')
        };

        buildSelector();

        els.prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
        els.nextBtn.addEventListener('click', () => {
            if (currentIndex === getTotal() - 1) {
                alert(`🎉 ¡Has completado el curso de ${config.title} ${config.levels[currentLevel].label}! Revisa el índice para repasar.`);
                return;
            }
            goTo(currentIndex + 1);
        });
        els.indexBtn.addEventListener('click', openIndex);
        els.closeModalBtn.addEventListener('click', () => els.modal.classList.remove('active'));
        els.modal.addEventListener('click', e => {
            if (e.target === els.modal) els.modal.classList.remove('active');
        });

        if (els.modalTitle) {
            els.modalTitle.textContent = `📋 Índice - ${config.title} ${config.levels[currentLevel].label}`;
        }
        renderSlide(0);
    }

    return { init };
})();