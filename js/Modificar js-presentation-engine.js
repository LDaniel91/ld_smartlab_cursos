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

    let html = `<h2 class="${inter ? 'intermedio' : ''}">${slide.title}</h2>`;

    // ⬇️ NUEVO: Si el slide es de tipo video, renderiza el video en lugar de la lista
    if (slide.type === 'video') {
        html += `
            <div class="video-slide">
                <video controls preload="metadata" ${slide.poster ? `poster="${slide.poster}"` : ''}>
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
    } else {
        // Slide normal (lista de pasos)
        html += `<ul class="step-list">`;
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
    }

    els.slideContent.innerHTML = html;

    // Detectar si el video falla al cargar
    const videoEl = els.slideContent.querySelector('video');
    if (videoEl) {
        videoEl.addEventListener('error', () => {
            videoEl.classList.add('error');
        });
    }

    els.prevBtn.disabled = index === 0;
    const isLast = index === getTotal() - 1;
    els.nextBtn.textContent = isLast ? '🏁 Finalizar' : 'Siguiente ▶';
    els.nextBtn.className = `primary ${inter ? 'intermedio' : ''}`;
}