/* ============================================================
   Motor del curso de IA
   ============================================================ */
let currentIndex = 0;
const totalSlides = slides.length;

const mainTitle = document.getElementById('mainTitle');
const badgeLevel = document.getElementById('badgeLevel');
const slideCounter = document.getElementById('slideCounter');
const slideContent = document.getElementById('slideContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indexBtn = document.getElementById('indexBtn');
const modal = document.getElementById('indexModal');
const indexList = document.getElementById('indexList');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalTitle = document.getElementById('modalTitle');
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

function renderSlide(index) {
    const slide = slides[index];
    if (!slide) return;
    const day = Math.floor(index / 40) + 1;
    mainTitle.textContent = `🧠 Curso de IA - Día ${day}`;
    slideCounter.textContent = `${index + 1} / ${totalSlides}`;

    let html = `<h2>${slide.title}</h2>`;
    html += `<ul class="step-list">`;
    slide.content.forEach(item => {
        html += `<li>`;
        html += `<span class="icon">${item.icon || '📌'}</span>`;
        html += `<span class="text">${item.text}</span>`;
        html += `</li>`;
    });
    html += `</ul>`;
    if (slide.title.includes('Prompt Engineering')) {
        html += `<div class="tip">💡 <strong>Consejo:</strong> Prueba a darle a la IA un rol específico (ej. "actúa como un abogado") para obtener respuestas más precisas.</div>`;
    }
    if (slide.title.includes('Ética')) {
        html += `<div class="tip">⚖️ <strong>Reflexión:</strong> La ética en IA es responsabilidad de todos: desarrolladores, usuarios y reguladores.</div>`;
    }
    slideContent.innerHTML = html;
    prevBtn.disabled = (index === 0);
    const isLast = (index === totalSlides - 1);
    nextBtn.textContent = isLast ? '🏁 Finalizar' : 'Siguiente ▶';
}

function goTo(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    currentIndex = index;
    renderSlide(currentIndex);
}

prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
nextBtn.addEventListener('click', () => {
    if (currentIndex === totalSlides - 1) {
        alert('🎉 ¡Has completado el curso de IA! Revisa el índice para repasar.');
        return;
    }
    goTo(currentIndex + 1);
});

function openIndex() {
    let html = '';
    slides.forEach((slide, idx) => {
        const day = Math.floor(idx / 40) + 1;
        html += `<div class="index-item" data-index="${idx}">
                    <span>${slide.title}</span>
                    <span class="idx-badge">Día ${day}</span>
                </div>`;
    });
    indexList.innerHTML = html;
    document.querySelectorAll('.index-item').forEach(el => {
        el.addEventListener('click', function () {
            const idx = parseInt(this.dataset.index);
            goTo(idx);
            modal.classList.remove('active');
        });
    });
    modal.classList.add('active');
}

indexBtn.addEventListener('click', openIndex);
closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeLabel.textContent = 'Claro';
    themeToggle.querySelector('i').className = 'fas fa-sun';
}
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeLabel.textContent = 'Oscuro';
        themeToggle.querySelector('i').className = 'fas fa-moon';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeLabel.textContent = 'Claro';
        themeToggle.querySelector('i').className = 'fas fa-sun';
    }
});

renderSlide(0);