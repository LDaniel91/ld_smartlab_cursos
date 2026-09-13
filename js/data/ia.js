/* ============================================================
   Datos del curso IA (Básico-Intermedio)
   ============================================================ */
const slides = [];

// ======== DÍA 1: INTRODUCCIÓN Y HERRAMIENTAS INICIALES ========
slides.push({
    title: '¿Qué es la Inteligencia Artificial?',
    content: [
        { icon: '🧠', text: '<strong>Definición:</strong> La IA es la simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos. Incluye aprendizaje, razonamiento y autocorrección.' },
        { icon: '📜', text: '<strong>Historia:</strong> Desde los años 50 con Turing, hasta el auge del machine learning y deep learning en la última década.' },
        { icon: '🎯', text: '<strong>Objetivo del curso:</strong> Conocer las principales herramientas de IA generativa y de búsqueda, y cómo aplicarlas en investigación, negocios y vida cotidiana.' }
    ]
});
slides.push({
    title: 'Tipos de IA: Débil vs. Fuerte',
    content: [
        { icon: '🤖', text: '<strong>IA Débil (Estrecha):</strong> Diseñada para tareas específicas (ej. reconocimiento facial, asistentes de voz). Es la que usamos hoy.' },
        { icon: '🧠', text: '<strong>IA Fuerte (General):</strong> Capacidad de entender y razonar como un humano. Aún no existe, es un objetivo a largo plazo.' },
        { icon: '⚡', text: '<strong>IA Generativa:</strong> Subconjunto que crea contenido nuevo (texto, imágenes, audio) a partir de patrones aprendidos.' }
    ]
});
slides.push({
    title: 'IA Generativa vs. Discriminativa',
    content: [
        { icon: '🎨', text: '<strong>Generativa:</strong> Modelos que generan datos nuevos (ej. ChatGPT, DALL-E). Aprenden la distribución de los datos.' },
        { icon: '🔍', text: '<strong>Discriminativa:</strong> Modelos que clasifican o predicen (ej. detección de spam, reconocimiento de imágenes). Distinguen entre categorías.' },
        { icon: '💡', text: '<strong>Ejemplo:</strong> GPT-4 es generativo; un clasificador de correos es discriminativo.' }
    ]
});
slides.push({
    title: 'Ética y sesgos en IA',
    content: [
        { icon: '⚖️', text: '<strong>Sesgos:</strong> Los modelos pueden reflejar sesgos de los datos de entrenamiento, generando discriminación.' },
        { icon: '🔒', text: '<strong>Privacidad:</strong> El uso de datos personales debe ser transparente y consentido.' },
        { icon: '📜', text: '<strong>Regulación:</strong> Leyes como el GDPR en Europa, y el AI Act, buscan regular el uso ético de la IA.' }
    ]
});
slides.push({
    title: 'Aplicaciones generales de la IA',
    content: [
        { icon: '🏥', text: '<strong>Salud:</strong> Diagnóstico por imágenes, descubrimiento de fármacos, medicina personalizada.' },
        { icon: '🚗', text: '<strong>Automoción:</strong> Vehículos autónomos, optimización de rutas.' },
        { icon: '💰', text: '<strong>Finanzas:</strong> Detección de fraudes, trading algorítmico, análisis de riesgos.' },
        { icon: '📚', text: '<strong>Educación:</strong> Tutores virtuales, generación de ejercicios, evaluación automática.' }
    ]
});

function addToolSlides(toolName, icon, description, features, examples, useCases, isGenerative, strengths, weaknesses, searchCapabilities) {
    slides.push({
        title: `Introducción a ${toolName}`,
        content: [
            { icon: icon, text: `<strong>${toolName}</strong> es una herramienta de IA que ${description}` },
            { icon: '⚙️', text: `<strong>Características principales:</strong> ${features.join(' • ')}` },
            { icon: '📌', text: `<strong>¿Es generativa?</strong> ${isGenerative}` }
        ]
    });
    slides.push({
        title: `Ejemplos prácticos con ${toolName}`,
        content: [
            { icon: '💡', text: `<strong>Ejemplo 1:</strong> ${examples[0]}` },
            { icon: '💡', text: `<strong>Ejemplo 2:</strong> ${examples[1]}` },
            { icon: '💡', text: `<strong>Ejemplo 3:</strong> ${examples[2]}` }
        ]
    });
    slides.push({
        title: `Casos de uso de ${toolName}`,
        content: [
            { icon: '📚', text: `<strong>Investigación:</strong> ${useCases.research}` },
            { icon: '💼', text: `<strong>Negocios:</strong> ${useCases.business}` },
            { icon: '📊', text: `<strong>Marketing:</strong> ${useCases.marketing}` }
        ]
    });
    slides.push({
        title: `Fortalezas y debilidades de ${toolName}`,
        content: [
            { icon: '✅', text: `<strong>Fortalezas:</strong> ${strengths}` },
            { icon: '❌', text: `<strong>Debilidades:</strong> ${weaknesses}` },
            { icon: '🔍', text: `<strong>Capacidad de búsqueda:</strong> ${searchCapabilities}` }
        ]
    });
}

addToolSlides(
    'DeepSeek', '🧠',
    'es un modelo de lenguaje avanzado desarrollado por la empresa china DeepSeek, especializado en razonamiento matemático y lógico.',
    ['Modelo open-source', 'Rendimiento en matemáticas y programación', 'Contexto de 1M tokens'],
    ['Resolver problemas complejos de cálculo', 'Generar código Python para análisis de datos', 'Explicar teoremas matemáticos paso a paso'],
    {
        research: 'Ideal para tesis de ciencias exactas, resolución de ecuaciones diferenciales, y simulaciones.',
        business: 'Análisis financiero avanzado, predicción de tendencias con modelos estadísticos.',
        marketing: 'Segmentación de clientes basada en algoritmos de clustering.'
    },
    'Sí, es generativa y puede crear código, explicaciones y textos originales.',
    'Excelente en lógica y matemáticas; código eficiente; gratuito para uso no comercial.',
    'Puede tener sesgos en temas no matemáticos; menos conocido en el mundo occidental.',
    'No tiene búsqueda en internet nativa, pero puede procesar grandes volúmenes de texto.'
);

addToolSlides(
    'Perplexity', '🔍',
    'es un motor de búsqueda impulsado por IA que proporciona respuestas con citas de fuentes confiables.',
    ['Búsqueda en tiempo real', 'Citas y referencias', 'Modo Pro con análisis más profundos'],
    ['Preguntar "¿Cuál es el PIB de España en 2025?" y obtener respuesta con fuente del INE.', 'Investigar sobre los últimos avances en IA con enlaces a artículos científicos.', 'Obtener un resumen ejecutivo de un informe extenso con referencias.'],
    {
        research: 'Perfecto para revisión bibliográfica, obtener datos actualizados y verificar hechos.',
        business: 'Monitoreo de competidores, análisis de mercado con fuentes verificadas.',
        marketing: 'Identificar tendencias de consumo, buscar palabras clave y temas virales.'
    },
    'No es puramente generativa, sino que combina búsqueda con síntesis de información.',
    'Respuestas con fuentes, actualización constante, interfaz amigable.',
    'Puede ser limitado en preguntas muy técnicas sin información pública.',
    'Sí, búsqueda en internet con citas.'
);

addToolSlides(
    'Kimi AI', '📄',
    'es un asistente de IA desarrollado por Moonshot, especializado en procesamiento de documentos largos (hasta 2M tokens).',
    ['Procesamiento de documentos largos (novelas, tesis)', 'Extracción de información', 'Resumen automático'],
    ['Cargar una tesis de 300 páginas y pedir un resumen ejecutivo.', 'Extraer todas las fechas y nombres de un contrato legal.', 'Generar preguntas y respuestas basadas en un manual de usuario.'],
    {
        research: 'Análisis de artículos científicos, extracción de datos de estudios clínicos.',
        business: 'Revisión de contratos, informes anuales, due diligence.',
        marketing: 'Análisis de sentimiento de reseñas de clientes a gran escala.'
    },
    'Sí, generativa con enfoque en documentos.',
    'Manejo de contexto muy grande, ideal para documentos extensos.',
    'Limitado a texto, no tiene capacidades multimodales.',
    'No tiene búsqueda en internet, pero puede procesar archivos subidos.'
);

addToolSlides(
    'Claude (Anthropic)', '🤝',
    'es un modelo de IA conversacional de Anthropic, enfocado en ser útil, honesto y seguro, con contexto de 200K tokens.',
    ['Ética y seguridad', 'Contexto largo (200K tokens)', 'Capacidad de análisis de documentos'],
    ['Analizar un libro completo y responder preguntas específicas.', 'Generar código para una aplicación web a partir de una descripción.', 'Actuar como tutor de programación explicando conceptos complejos.'],
    {
        research: 'Revisión de literatura, generación de ideas de investigación, redacción de artículos.',
        business: 'Automatización de atención al cliente, generación de informes.',
        marketing: 'Creación de contenido persuasivo, análisis de campañas.'
    },
    'Sí, generativa y muy versátil.',
    'Excelente en razonamiento, seguridad, y manejo de contexto largo.',
    'Menos conocido que ChatGPT, algunas funciones limitadas en versión gratuita.',
    'No tiene búsqueda en internet nativa, pero puede procesar archivos.'
);

addToolSlides(
    'ChatGPT (OpenAI)', '💬',
    'es el modelo de lenguaje más popular, desarrollado por OpenAI, con capacidades multimodales (GPT-4).',
    ['Modelo multimodal (texto, imágenes)', 'Plugins y navegación web (en versión de pago)', 'API para integraciones'],
    ['Generar un plan de negocios para una startup de tecnología.', 'Crear imágenes a partir de descripciones con DALL-E integrado.', 'Analizar sentimientos de tweets sobre un producto.'],
    {
        research: 'Redacción de borradores, generación de hipótesis, traducción de papers.',
        business: 'Generación de reportes, análisis de datos, automatización de tareas.',
        marketing: 'Creación de campañas, copywriting, segmentación de audiencia.'
    },
    'Sí, generativa y multimodal.',
    'Amplio conocimiento, versatilidad, integración con herramientas externas.',
    'Puede alucinar, requiere verificación de hechos.',
    'En versión de pago permite búsqueda en internet.'
);

addToolSlides(
    'Gemini AI (Google)', '🌟',
    'es la familia de modelos multimodales de Google, integrada con el ecosistema de Google (Docs, Gmail, etc.).',
    ['Multimodal (texto, imágenes, audio, video)', 'Integración con Google Workspace', 'Capacidad de razonamiento avanzado'],
    ['Extraer información de un video y generar un resumen.', 'Crear una presentación en Google Slides a partir de un documento.', 'Analizar una hoja de cálculo y generar gráficos.'],
    {
        research: 'Análisis de datos científicos, generación de informes integrados con Google Sheets.',
        business: 'Automatización de flujos de trabajo en Gmail y Docs.',
        marketing: 'Análisis de tendencias de búsqueda en Google Trends.'
    },
    'Sí, generativa y multimodal.',
    'Integración con productos Google, gran capacidad de razonamiento.',
    'Disponibilidad limitada en algunos países, dependencia del ecosistema Google.',
    'Sí, búsqueda integrada con Google.'
);

addToolSlides(
    'Microsoft Copilot', '🖥️',
    'es el asistente de IA de Microsoft, integrado en Windows 11, Office 365 y Edge, basado en GPT-4.',
    ['Integración en Windows y Office', 'Búsqueda en Bing', 'Generación de código y documentos'],
    ['Pedirle que te ayude a escribir un correo en Outlook con un tono profesional.', 'Crear una presentación en PowerPoint a partir de un documento de Word.', 'Generar código VBA para automatizar tareas en Excel.'],
    {
        research: 'Síntesis de información, búsqueda en Bing con fuentes.',
        business: 'Automatización de documentos, análisis de datos en Excel.',
        marketing: 'Generación de contenido para redes sociales con sugerencias de diseño.'
    },
    'Sí, generativa y con búsqueda.',
    'Profunda integración con Microsoft, acceso a datos de usuario (con permiso).',
    'Requiere suscripción a Microsoft 365 para funciones avanzadas.',
    'Sí, búsqueda en Bing.'
);

addToolSlides(
    'NotebookLM', '📓',
    'es un asistente de investigación de Google que permite cargar documentos y hacer preguntas sobre ellos, con citas precisas.',
    ['Basado en documentos subidos por el usuario', 'Generación de resúmenes y preguntas', 'Citas y referencias exactas'],
    ['Cargar 10 artículos académicos y pedir un resumen comparativo.', 'Hacer preguntas específicas sobre un libro cargado.', 'Generar un esquema para una tesis a partir de múltiples fuentes.'],
    {
        research: 'Ideal para revisión bibliográfica, generación de citas, organización de ideas.',
        business: 'Análisis de documentos legales, resúmenes ejecutivos.',
        marketing: 'Análisis de encuestas y estudios de mercado.'
    },
    'Sí, generativa pero enfocada en documentos del usuario.',
    'Citas precisas, manejo de fuentes, sin alucinaciones (se ciñe a los documentos).',
    'Requiere carga de documentos, no tiene acceso a internet externo.',
    'No tiene búsqueda en internet, solo en los documentos cargados.'
);

addToolSlides(
    'Qwen Studio', '🐉',
    'es la suite de modelos de Alibaba, incluyendo Qwen (modelo de lenguaje) y herramientas de generación de imágenes y código.',
    ['Multimodal', 'Generación de código y arte', 'Capacidad de razonamiento complejo'],
    ['Crear una imagen a partir de una descripción detallada usando Qwen-VL.', 'Generar un script de Python para web scraping.', 'Traducir un documento técnico al español manteniendo el formato.'],
    {
        research: 'Análisis de imágenes médicas, generación de diagramas.',
        business: 'Automatización de procesos con código generado.',
        marketing: 'Creación de contenido visual para campañas.'
    },
    'Sí, generativa y multimodal.',
    'Potente en código y razonamiento, soporte para idiomas asiáticos.',
    'Menos conocido fuera de Asia, documentación en inglés limitada.',
    'No tiene búsqueda integrada.'
);

slides.push({
    title: 'IA para investigación académica',
    content: [
        { icon: '📚', text: '<strong>Revisión bibliográfica:</strong> Perplexity y NotebookLM ayudan a encontrar y resumir artículos.' },
        { icon: '✍️', text: '<strong>Redacción de borradores:</strong> ChatGPT, Claude y Gemini generan textos coherentes y estructurados.' },
        { icon: '🔬', text: '<strong>Análisis de datos:</strong> DeepSeek y Qwen pueden procesar grandes conjuntos de datos y generar código para análisis.' },
        { icon: '📊', text: '<strong>Generación de gráficos:</strong> Copilot en Excel puede crear visualizaciones automáticamente.' }
    ]
});
slides.push({
    title: 'IA para tesis de maestría y doctorado',
    content: [
        { icon: '📖', text: '<strong>Organización de ideas:</strong> NotebookLM puede estructurar capítulos basados en fuentes cargadas.' },
        { icon: '📝', text: '<strong>Redacción y estilo:</strong> ChatGPT y Claude pueden mejorar la redacción académica.' },
        { icon: '🔍', text: '<strong>Búsqueda de referencias:</strong> Perplexity proporciona citas actualizadas de artículos revisados por pares.' },
        { icon: '📋', text: '<strong>Generación de citas:</strong> Herramientas como Zotero integradas con IA pueden automatizar las referencias.' }
    ]
});
slides.push({
    title: 'IA para publicación de artículos científicos',
    content: [
        { icon: '📜', text: '<strong>Redacción de resúmenes y abstract:</strong> Gemini y DeepSeek pueden generar versiones concisas.' },
        { icon: '📈', text: '<strong>Análisis de resultados:</strong> Qwen Studio y Copilot pueden ayudar a interpretar datos complejos.' },
        { icon: '🌍', text: '<strong>Traducción y adaptación:</strong> Modelos multilingües como Qwen traducen artículos a otros idiomas.' },
        { icon: '📊', text: '<strong>Creación de figuras:</strong> DALL-E o Qwen-VL pueden generar ilustraciones conceptuales.' }
    ]
});
slides.push({
    title: 'IA para ventas y negocios',
    content: [
        { icon: '💼', text: '<strong>Generación de propuestas:</strong> ChatGPT y Claude redactan documentos comerciales.' },
        { icon: '📊', text: '<strong>Análisis de mercado:</strong> Perplexity recopila datos de tendencias y competencia.' },
        { icon: '🤖', text: '<strong>Automatización de atención al cliente:</strong> Chatbots basados en Gemini o Copilot.' },
        { icon: '📈', text: '<strong>Predicción de ventas:</strong> DeepSeek puede crear modelos predictivos.' }
    ]
});
slides.push({
    title: 'IA para marketing',
    content: [
        { icon: '📢', text: '<strong>Copywriting:</strong> ChatGPT y Claude generan anuncios, correos y publicaciones.' },
        { icon: '🎨', text: '<strong>Creación de contenido visual:</strong> Qwen Studio y Gemini pueden generar imágenes y videos.' },
        { icon: '🔍', text: '<strong>SEO y keywords:</strong> Perplexity busca palabras clave y tendencias de búsqueda.' },
        { icon: '📊', text: '<strong>Análisis de campañas:</strong> Copilot integrado con Excel analiza métricas.' }
    ]
});
slides.push({
    title: 'Comparativa de herramientas: ¿Cuál usar?',
    content: [
        { icon: '🔍', text: '<strong>Búsqueda y verificación:</strong> Perplexity es la mejor para información actualizada con fuentes.' },
        { icon: '📄', text: '<strong>Documentos largos:</strong> Kimi y NotebookLM son ideales para procesar y analizar textos extensos.' },
        { icon: '💬', text: '<strong>Conversación y versatilidad:</strong> ChatGPT y Claude son los más equilibrados.' },
        { icon: '🧮', text: '<strong>Matemáticas y lógica:</strong> DeepSeek sobresale en razonamiento complejo.' },
        { icon: '🖥️', text: '<strong>Integración con herramientas:</strong> Copilot y Gemini son excelentes si usas Microsoft o Google.' }
    ]
});
slides.push({
    title: 'Mejores prácticas para usar IA',
    content: [
        { icon: '🎯', text: '<strong>Ser específico:</strong> Cuanto más detallado el prompt, mejor la respuesta.' },
        { icon: '🔁', text: '<strong>Iterar:</strong> Refina las preguntas para obtener resultados más precisos.' },
        { icon: '📚', text: '<strong>Verificar fuentes:</strong> Siempre contrasta la información generada, especialmente para investigación.' },
        { icon: '⚖️', text: '<strong>Ética:</strong> No uses IA para generar contenido engañoso o plagiar.' }
    ]
});
slides.push({
    title: 'El futuro de la IA y sus implicaciones',
    content: [
        { icon: '🚀', text: '<strong>Avances:</strong> Modelos cada vez más grandes y multimodales, integración con el mundo físico (robótica).' },
        { icon: '⚖️', text: '<strong>Regulación:</strong> Creciente legislación para garantizar transparencia y seguridad.' },
        { icon: '🧑‍🏫', text: '<strong>Educación:</strong> La IA personalizará el aprendizaje, pero también requerirá nuevas habilidades.' },
        { icon: '💼', text: '<strong>Empleo:</strong> La IA automatizará tareas rutinarias, pero creará nuevos roles.' }
    ]
});
slides.push({
    title: 'Resumen del curso',
    content: [
        { icon: '🧠', text: '<strong>Has aprendido:</strong> Los fundamentos de la IA, las principales herramientas (DeepSeek, Perplexity, Kimi, Claude, ChatGPT, Gemini, Copilot, NotebookLM, Qwen Studio) y sus aplicaciones en investigación, negocios y marketing.' },
        { icon: '🎯', text: '<strong>Próximos pasos:</strong> Practica con cada herramienta, desarrolla proyectos personales y mantente actualizado.' },
        { icon: '📧', text: '<strong>Contacto:</strong> Para dudas o sugerencias, escribe a luisdanielramoscorona@outlook.com' }
    ]
});

const extraSlides = [
    { title: 'Ética en la IA: Sesgos y equidad', content: [
        { icon: '⚖️', text: '<strong>Sesgos algorítmicos:</strong> Los modelos reflejan los sesgos de los datos de entrenamiento, lo que puede llevar a discriminación.' },
        { icon: '🛡️', text: '<strong>Equidad:</strong> Se están desarrollando técnicas para mitigar sesgos, como el re-muestreo o la corrección de pesos.' },
        { icon: '📜', text: '<strong>Casos reales:</strong> Ejemplos de sesgos en contratación, justicia penal y crédito.' }
    ]},
    { title: 'IA Generativa: Prompt Engineering', content: [
        { icon: '✍️', text: '<strong>¿Qué es el prompt engineering?</strong> Es el arte de formular preguntas o instrucciones para obtener respuestas óptimas de los modelos de IA.' },
        { icon: '💡', text: '<strong>Técnicas:</strong> Dar contexto, ser específico, pedir paso a paso, usar ejemplos (few-shot).' },
        { icon: '📝', text: '<strong>Ejemplo:</strong> "Actúa como un experto en marketing y redacta un anuncio para un producto ecológico, destacando sus beneficios ambientales."' }
    ]},
    { title: 'IA en el análisis de sentimientos', content: [
        { icon: '😊', text: '<strong>Análisis de sentimientos:</strong> Determina la actitud (positiva, negativa, neutral) de un texto.' },
        { icon: '📊', text: '<strong>Aplicaciones:</strong> Monitoreo de redes sociales, evaluación de opiniones de clientes, análisis de encuestas.' },
        { icon: '🔧', text: '<strong>Herramientas:</strong> Gemini, ChatGPT y Claude pueden realizar este análisis con prompts adecuados.' }
    ]},
    { title: 'IA para generación de código', content: [
        { icon: '💻', text: '<strong>Generación de código:</strong> DeepSeek, ChatGPT, Qwen y Copilot son excelentes para generar, revisar y optimizar código.' },
        { icon: '🐍', text: '<strong>Ejemplo:</strong> "Escribe una función en Python que calcule el factorial de un número de forma recursiva."' },
        { icon: '🛠️', text: '<strong>Integración:</strong> Copilot está integrado en VS Code, ayudando a programar en tiempo real.' }
    ]},
    { title: 'IA en la educación', content: [
        { icon: '🏫', text: '<strong>Personalización:</strong> La IA puede adaptar el contenido al nivel y estilo de aprendizaje del estudiante.' },
        { icon: '📚', text: '<strong>Tutores virtuales:</strong> Claude y ChatGPT pueden actuar como tutores, resolviendo dudas y explicando conceptos.' },
        { icon: '📝', text: '<strong>Evaluación:</strong> La IA puede corregir exámenes y proporcionar retroalimentación instantánea.' }
    ]},
    { title: 'IA en la medicina', content: [
        { icon: '🏥', text: '<strong>Diagnóstico por imagen:</strong> Modelos de IA pueden detectar anomalías en radiografías, resonancias, etc.' },
        { icon: '💊', text: '<strong>Descubrimiento de fármacos:</strong> Acelera la identificación de compuestos prometedores.' },
        { icon: '📋', text: '<strong>Registros médicos:</strong> La IA puede extraer información de historiales clínicos para apoyar decisiones.' }
    ]},
    { title: 'IA en el arte y la creatividad', content: [
        { icon: '🎨', text: '<strong>Generación de imágenes:</strong> Herramientas como Qwen-VL y DALL-E crean arte a partir de descripciones.' },
        { icon: '🎵', text: '<strong>Música:</strong> Modelos como MusicLM generan composiciones originales.' },
        { icon: '✍️', text: '<strong>Escritura creativa:</strong> ChatGPT y Claude pueden ayudar a escribir poemas, guiones o cuentos.' }
    ]},
    { title: 'IA en la ciberseguridad', content: [
        { icon: '🔒', text: '<strong>Detección de amenazas:</strong> La IA identifica patrones anómalos en redes para prevenir ataques.' },
        { icon: '🛡️', text: '<strong>Respuesta automatizada:</strong> Los sistemas de IA pueden actuar rápidamente ante intrusiones.' },
        { icon: '📊', text: '<strong>Análisis de vulnerabilidades:</strong> Modelos generativos pueden simular ataques para probar defensas.' }
    ]},
    { title: 'IA y sostenibilidad', content: [
        { icon: '🌱', text: '<strong>Optimización energética:</strong> La IA ayuda a reducir el consumo en edificios y redes eléctricas.' },
        { icon: '♻️', text: '<strong>Reciclaje:</strong> Sistemas de visión por IA clasifican residuos para mejorar el reciclaje.' },
        { icon: '📈', text: '<strong>Modelos climáticos:</strong> La IA mejora las predicciones meteorológicas y el análisis del cambio climático.' }
    ]},
    { title: 'IA en el sector financiero', content: [
        { icon: '💰', text: '<strong>Trading algorítmico:</strong> La IA analiza mercados y ejecuta operaciones en milisegundos.' },
        { icon: '🕵️', text: '<strong>Detección de fraudes:</strong> Identifica transacciones sospechosas en tiempo real.' },
        { icon: '📊', text: '<strong>Análisis de riesgos:</strong> Evalúa la solvencia de clientes y préstamos.' }
    ]}
];
extraSlides.forEach(s => slides.push(s));

slides.push({
    title: 'Caso práctico: Investigación con IA',
    content: [
        { icon: '📚', text: '<strong>Paso 1:</strong> Usa Perplexity para encontrar artículos recientes sobre "aprendizaje automático en medicina".' },
        { icon: '📄', text: '<strong>Paso 2:</strong> Carga los PDFs en NotebookLM para extraer información clave y generar un resumen.' },
        { icon: '✍️', text: '<strong>Paso 3:</strong> Utiliza ChatGPT para redactar la introducción y la discusión de tu artículo.' },
        { icon: '🔬', text: '<strong>Paso 4:</strong> Con DeepSeek, analiza los datos estadísticos y genera gráficos explicativos.' }
    ]
});
slides.push({
    title: 'Caso práctico: Creación de una tesis con IA',
    content: [
        { icon: '📖', text: '<strong>1. Organización:</strong> NotebookLM estructura los capítulos a partir de las fuentes.' },
        { icon: '📝', text: '<strong>2. Redacción:</strong> Claude redacta borradores de cada sección con estilo académico.' },
        { icon: '🔍', text: '<strong>3. Revisión:</strong> Gemini verifica la coherencia y la gramática.' },
        { icon: '📊', text: '<strong>4. Visualización:</strong> Copilot en Excel genera tablas y gráficos a partir de los resultados.' }
    ]
});
slides.push({
    title: 'Caso práctico: Marketing con IA',
    content: [
        { icon: '📢', text: '<strong>1. Investigación:</strong> Perplexity identifica las tendencias de consumo en tu sector.' },
        { icon: '✍️', text: '<strong>2. Contenido:</strong> ChatGPT genera publicaciones para redes sociales y correos.' },
        { icon: '🎨', text: '<strong>3. Visuales:</strong> Qwen Studio crea imágenes atractivas para campañas.' },
        { icon: '📊', text: '<strong>4. Análisis:</strong> Gemini analiza el engagement y sugiere mejoras.' }
    ]
});
slides.push({
    title: 'Caso práctico: Automatización de tareas con Copilot',
    content: [
        { icon: '🤖', text: '<strong>1. Excel:</strong> Copilot puede crear fórmulas complejas y macros con solo describir la necesidad.' },
        { icon: '📄', text: '<strong>2. Word:</strong> Genera informes completos a partir de datos de Excel.' },
        { icon: '📧', text: '<strong>3. Outlook:</strong> Redacta correos profesionales y organiza la bandeja de entrada.' },
        { icon: '🖥️', text: '<strong>4. Windows:</strong> Configura el sistema y resuelve problemas con comandos de voz.' }
    ]
});