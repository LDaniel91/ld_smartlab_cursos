/* ============================================================
   LD SMARTLAB - Motor de cursos de idiomas
   ============================================================ */

const state = { lang: 'ingles', level: 'basico', lesson: 0 };

const langSelect = document.getElementById('langSelect');
const levelSelect = document.getElementById('levelSelect');
const lessonSelect = document.getElementById('lessonSelect');
const lessonContainer = document.getElementById('lessonContainer');
const themeToggle = document.getElementById('themeToggle');

try {
    Object.entries(COURSES).forEach(([key, course]) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = course.flag + ' ' + course.name;
        langSelect.appendChild(opt);
    });
} catch (e) {
    console.error('Error al cargar idiomas:', e);
    lessonContainer.innerHTML = '<div class="welcome"><h2>Error al cargar los cursos</h2><p>' + e.message + '</p></div>';
}

function updateLessons() {
    const course = COURSES[state.lang];
    const lessons = course[state.level];
    lessonSelect.innerHTML = '';
    lessons.forEach((lesson, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = (idx + 1) + '. ' + lesson.title;
        lessonSelect.appendChild(opt);
    });
}

function renderLesson() {
    const course = COURSES[state.lang];
    const lesson = course[state.level][state.lesson];
    const totalLessons = course[state.level].length;
    const progress = ((state.lesson + 1) / totalLessons) * 100;

    lessonContainer.innerHTML =
        '<div class="lesson-content">' +
            '<div class="lesson-header">' +
                '<h2>' + course.flag + ' ' + lesson.title + '</h2>' +
                '<div class="subtitle">' + lesson.subtitle + '</div>' +
                '<div class="progress-bar"><div class="progress-fill" style="width: ' + progress + '%"></div></div>' +
            '</div>' +
            '<div class="lesson-body">' +
                '<div class="section"><h3>📖 Vocabulario</h3><div class="vocab-grid">' +
                    lesson.vocab.map(v => '<div class="vocab-card"><div class="vocab-word">' + v.w + '</div><div class="vocab-pron">' + v.p + '</div><div class="vocab-trans">' + v.t + '</div></div>').join('') +
                '</div></div>' +
                '<div class="section"><h3>💬 Frases útiles</h3><ul class="phrases-list">' +
                    lesson.phrases.map(p => '<li><div class="phrase-orig">' + p.o + '</div><div class="phrase-trans">' + p.t + '</div></li>').join('') +
                '</ul></div>' +
                '<div class="section"><h3>🎭 Diálogo</h3><div class="dialogue">' +
                    lesson.dialogue.map(d => '<div class="dialogue-line"><span class="dialogue-speaker">' + d.s + ':</span><span>' + d.l + '</span></div>').join('') +
                '</div></div>' +
                '<div class="section"><h3>🌍 Nota cultural</h3><div class="cultural-note">' + lesson.culture + '</div></div>' +
                '<div class="section"><h3>🎯 Autoevaluación</h3><div class="quiz-container" id="quizContainer">' +
                    lesson.quiz.map((q, qi) => '<div class="quiz-question" data-correct="' + q.a + '"><p>' + (qi + 1) + '. ' + q.q + '</p><div class="quiz-options">' +
                        q.opts.map((o, oi) => '<button class="quiz-option" data-index="' + oi + '">' + o + '</button>').join('') +
                    '</div><div class="quiz-feedback"></div></div>').join('') +
                '</div><div class="quiz-summary" id="quizSummary"><div>¡Has completado la evaluación!</div><div class="score" id="quizScore">0/5</div><div id="quizMessage"></div></div></div>' +
                '<div class="nav-buttons">' +
                    '<button class="btn btn-secondary" id="prevBtn"' + (state.lesson === 0 ? ' disabled' : '') + '>← Anterior</button>' +
                    '<button class="btn btn-primary" id="nextBtn"' + (state.lesson === totalLessons - 1 ? ' disabled' : '') + '>Siguiente →</button>' +
                '</div>' +
            '</div>' +
        '</div>';

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (state.lesson > 0) { state.lesson--; lessonSelect.value = state.lesson; renderLesson(); window.scrollTo({top: 0, behavior: 'smooth'}); }
    });
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (state.lesson < totalLessons - 1) { state.lesson++; lessonSelect.value = state.lesson; renderLesson(); window.scrollTo({top: 0, behavior: 'smooth'}); }
    });

    const quizQuestions = document.querySelectorAll('.quiz-question');
    let correctCount = 0;
    let answeredCount = 0;

    quizQuestions.forEach((question) => {
        const correct = parseInt(question.dataset.correct);
        const options = question.querySelectorAll('.quiz-option');
        const feedback = question.querySelector('.quiz-feedback');

        options.forEach(option => {
            option.addEventListener('click', () => {
                if (option.disabled) return;
                const selected = parseInt(option.dataset.index);
                options.forEach(o => o.disabled = true);

                if (selected === correct) {
                    option.classList.add('correct');
                    feedback.textContent = '✓ ¡Correcto!';
                    feedback.classList.add('correct', 'show');
                    correctCount++;
                } else {
                    option.classList.add('wrong');
                    options[correct].classList.add('correct');
                    feedback.textContent = '✗ La respuesta correcta es: ' + options[correct].textContent;
                    feedback.classList.add('wrong', 'show');
                }

                answeredCount++;
                if (answeredCount === lesson.quiz.length) {
                    const summary = document.getElementById('quizSummary');
                    const score = document.getElementById('quizScore');
                    const message = document.getElementById('quizMessage');
                    score.textContent = correctCount + '/' + lesson.quiz.length;
                    const pct = (correctCount / lesson.quiz.length) * 100;
                    if (pct === 100) message.textContent = '🏆 ¡Perfecto! Dominas esta lección.';
                    else if (pct >= 80) message.textContent = '🌟 ¡Excelente trabajo!';
                    else if (pct >= 60) message.textContent = '👍 Buen progreso, sigue practicando.';
                    else message.textContent = '💪 Repasa el vocabulario e intenta de nuevo.';
                    summary.classList.add('show');
                    localStorage.setItem('score_' + state.lang + '_' + state.level + '_' + state.lesson, correctCount);
                }
            });
        });
    });
}

langSelect.addEventListener('change', (e) => { state.lang = e.target.value; state.lesson = 0; updateLessons(); renderLesson(); });
levelSelect.addEventListener('change', (e) => { state.level = e.target.value; state.lesson = 0; updateLessons(); renderLesson(); });
lessonSelect.addEventListener('change', (e) => { state.lesson = parseInt(e.target.value); renderLesson(); });

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro';
    localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);
updateLessons();
lessonSelect.value = 0;
renderLesson();