/* ============================================================
   Datos del curso Word (Básico + Intermedio)
   ============================================================ */

const CURSO_WORD_BASICO = [
    {
        title: 'Introducción a Word',
        content: [
            { icon: '📝', text: '<strong>¿Qué es Word?</strong> Procesador de textos de Microsoft, usado para crear documentos, cartas, informes, currículums, etc.' },
            { icon: '🎯', text: '<strong>Objetivo del curso:</strong> Aprender a crear y formatear documentos profesionales desde cero.' },
            { icon: '📅', text: '<strong>Estructura:</strong> 3 días con teoría, ejemplos y ejercicios prácticos.' }
        ]
    },
    {
        title: 'Interfaz de Word',
        content: [
            { icon: '🖥️', text: '<strong>Elementos principales:</strong> Barra de título, Cinta de opciones (pestañas: Inicio, Insertar, Diseño, etc.), Área de trabajo, Barra de estado.' },
            { icon: '🔍', text: '<strong>Vistas:</strong> Diseño de impresión, Lectura, Diseño web, Esquema, Borrador.' },
            { icon: '📐', text: '<strong>Regla y zoom:</strong> Mostrar/ocultar regla, ajustar zoom para ver mejor el documento.' }
        ]
    },
    {
        title: 'Crear y guardar un documento',
        content: [
            { icon: '📄', text: '<strong>Nuevo:</strong> Archivo > Nuevo > Documento en blanco o usar una plantilla.' },
            { icon: '💾', text: '<strong>Guardar:</strong> Ctrl+G o Archivo > Guardar como > elegir ubicación y nombre.' },
            { icon: '📂', text: '<strong>Abrir:</strong> Archivo > Abrir o Ctrl+A para buscar un documento existente.' }
        ]
    },
    {
        title: 'Editar y seleccionar texto',
        content: [
            { icon: '✏️', text: '<strong>Escribir:</strong> Colocar el cursor y teclear.' },
            { icon: '🖱️', text: '<strong>Seleccionar:</strong> Arrastrar con ratón, doble clic para seleccionar palabra, triple clic para párrafo.' },
            { icon: '⌨️', text: '<strong>Teclas:</strong> Ctrl+Inicio/Fin, Mayús+teclas de flecha para seleccionar.' }
        ]
    },
    {
        title: 'Formato de fuente (tipo, tamaño, color)',
        content: [
            { icon: '🔤', text: '<strong>Fuente:</strong> Inicio > Fuente > elegir tipo (Arial, Times, etc.) y tamaño.' },
            { icon: '🎨', text: '<strong>Color:</strong> Inicio > Color de fuente para cambiar el color del texto.' },
            { icon: '💪', text: '<strong>Negrita, cursiva, subrayado:</strong> Usar los botones en Inicio o Ctrl+N, Ctrl+K, Ctrl+S.' }
        ]
    },
    {
        title: 'Alineación y espaciado de párrafos',
        content: [
            { icon: '↔️', text: '<strong>Alineación:</strong> Inicio > Alinear a la izquierda, centrar, derecha o justificar.' },
            { icon: '📏', text: '<strong>Interlineado:</strong> Inicio > Espaciado entre líneas y párrafos (1.0, 1.5, 2.0).' },
            { icon: '📐', text: '<strong>Sangría:</strong> Usar la regla o Inicio > Aumentar/Disminuir sangría.' }
        ]
    },
    {
        title: 'Listas con viñetas y numeración',
        content: [
            { icon: '📋', text: '<strong>Viñetas:</strong> Seleccionar texto > Inicio > Viñetas (punto, cuadrado, etc.).' },
            { icon: '🔢', text: '<strong>Numeración:</strong> Inicio > Numeración (1, 2, 3 o a, b, c).' },
            { icon: '📐', text: '<strong>Jerarquías:</strong> Usar Aumentar/Disminuir sangría para crear sublistas.' }
        ]
    },
    {
        title: 'Insertar y editar tablas',
        content: [
            { icon: '📊', text: '<strong>Insertar tabla:</strong> Insertar > Tabla > elegir número de filas y columnas.' },
            { icon: '✏️', text: '<strong>Editar:</strong> Agregar texto en celdas, seleccionar filas/columnas.' },
            { icon: '🎨', text: '<strong>Diseño:</strong> Herramientas de tabla > Diseño para aplicar estilos, bordes y sombreado.' }
        ]
    },
    {
        title: 'Insertar imágenes desde archivo y en línea',
        content: [
            { icon: '🖼️', text: '<strong>Desde archivo:</strong> Insertar > Imágenes > Este dispositivo... y seleccionar.' },
            { icon: '🌐', text: '<strong>Imágenes en línea:</strong> Insertar > Imágenes > Imágenes de archivo (Bing, OneDrive).' },
            { icon: '✂️', text: '<strong>Recortar y ajustar:</strong> Seleccionar imagen > Formato > Recortar, ajustar brillo/contraste.' }
        ]
    },
    {
        title: 'Insertar formas y dibujos',
        content: [
            { icon: '🔷', text: '<strong>Formas:</strong> Insertar > Formas > elegir rectángulo, círculo, flecha, etc. y dibujar.' },
            { icon: '🎨', text: '<strong>Formato de forma:</strong> Relleno, contorno, efectos (sombra, reflexión).' },
            { icon: '📐', text: '<strong>Agrupar:</strong> Seleccionar varias formas > Formato > Agrupar para moverlas juntas.' }
        ]
    },
    {
        title: 'Estilos predefinidos y títulos',
        content: [
            { icon: '🎨', text: '<strong>Estilos:</strong> Inicio > Estilos > elegir Título 1, Título 2, Normal, etc. Aplican formato consistente.' },
            { icon: '📋', text: '<strong>Modificar estilo:</strong> Clic derecho en un estilo > Modificar > cambiar fuente, tamaño, color.' },
            { icon: '📑', text: '<strong>Beneficio:</strong> Los estilos facilitan la creación de tablas de contenido automáticas.' }
        ]
    },
    {
        title: 'Diseño de página: márgenes, orientación, tamaño',
        content: [
            { icon: '📄', text: '<strong>Márgenes:</strong> Diseño > Márgenes > elegir Normal, Estrecho, o personalizado.' },
            { icon: '🔄', text: '<strong>Orientación:</strong> Vertical u Horizontal.' },
            { icon: '📏', text: '<strong>Tamaño de papel:</strong> Carta, A4, oficio, etc.' }
        ]
    },
    {
        title: 'Revisión ortográfica y gramatical',
        content: [
            { icon: '✅', text: '<strong>Ortografía:</strong> Revisar > Ortografía y gramática. Se resaltan errores y sugiere correcciones.' },
            { icon: '📝', text: '<strong>Diccionario personalizado:</strong> Agregar palabras al diccionario para que no las marque como error.' },
            { icon: '🔧', text: '<strong>Configurar:</strong> Archivo > Opciones > Revisión para ajustar reglas gramaticales.' }
        ]
    },
    {
        title: 'Buscar y reemplazar texto',
        content: [
            { icon: '🔍', text: '<strong>Buscar:</strong> Inicio > Buscar o Ctrl+B. Permite encontrar palabras o frases.' },
            { icon: '🔄', text: '<strong>Reemplazar:</strong> Inicio > Reemplazar o Ctrl+L. Cambiar una palabra por otra en todo el documento.' },
            { icon: '🎯', text: '<strong>Opciones:</strong> Coincidir mayúsculas/minúsculas, buscar solo palabras completas.' }
        ]
    },
    {
        title: 'Vista previa e impresión',
        content: [
            { icon: '🖨️', text: '<strong>Vista previa:</strong> Archivo > Imprimir, se muestra una previsualización del documento.' },
            { icon: '📋', text: '<strong>Configuración:</strong> Elegir impresora, número de copias, páginas a imprimir.' },
            { icon: '📐', text: '<strong>Ajustes:</strong> Tamaño de papel, orientación, márgenes, y escalado (Ajustar a la página).' }
        ]
    },
    {
        title: 'Plantillas y temas',
        content: [
            { icon: '📄', text: '<strong>Plantillas:</strong> Archivo > Nuevo > buscar plantillas (currículum, carta, informes).' },
            { icon: '🎨', text: '<strong>Temas:</strong> Diseño > Temas para cambiar colores, fuentes y efectos globalmente.' },
            { icon: '💡', text: '<strong>Consejo:</strong> Guarda tus documentos como plantillas (.dotx) para reutilizar.' }
        ]
    },
    {
        title: 'Atajos de teclado útiles',
        content: [
            { icon: '⌨️', text: '<strong>Ctrl+G:</strong> Guardar.' },
            { icon: '⌨️', text: '<strong>Ctrl+Z:</strong> Deshacer.' },
            { icon: '⌨️', text: '<strong>Ctrl+C / Ctrl+V:</strong> Copiar y pegar.' },
            { icon: '⌨️', text: '<strong>Ctrl+N:</strong> Negrita.' },
            { icon: '⌨️', text: '<strong>Ctrl+B:</strong> Buscar.' }
        ]
    },
    {
        title: 'Resumen y consejos (Básico)',
        content: [
            { icon: '🌟', text: '<strong>Has aprendido:</strong> Crear documentos, formato de texto, párrafos, listas, tablas, imágenes, formas, estilos, diseño de página, revisión, buscar/reemplazar, imprimir y usar plantillas.' },
            { icon: '🚀', text: '<strong>Siguiente nivel:</strong> Word Intermedio para dominar tablas de contenido, combinación de correspondencia, macros y más.' },
            { icon: '💪', text: '<strong>Práctica:</strong> Redacta un informe de 3 páginas aplicando títulos, estilos, imágenes y tabla.' }
        ]
    }
];

const CURSO_WORD_INTERMEDIO = [
    {
        title: 'Estilos avanzados y jerarquía',
        content: [
            { icon: '🎨', text: '<strong>Estilos personalizados:</strong> Crear nuevos estilos desde Inicio > Estilos > Crear un estilo.' },
            { icon: '📋', text: '<strong>Asignar atajos:</strong> Asignar teclas rápidas a estilos para agilizar el trabajo.' },
            { icon: '📑', text: '<strong>Jerarquía:</strong> Usar Título 1, 2, 3 para estructurar el documento correctamente.' }
        ]
    },
    {
        title: 'Esquema y vista de esquema',
        content: [
            { icon: '📊', text: '<strong>Vista Esquema:</strong> Ver > Esquema. Muestra los títulos y subtítulos jerárquicamente.' },
            { icon: '🔄', text: '<strong>Promover/Demover:</strong> Usar flechas para cambiar el nivel de un título.' },
            { icon: '📄', text: '<strong>Mostrar solo títulos:</strong> Permite reorganizar secciones fácilmente.' }
        ]
    },
    {
        title: 'Tabla de contenido automática',
        content: [
            { icon: '📑', text: '<strong>Insertar tabla:</strong> Referencias > Tabla de contenido > elegir un formato.' },
            { icon: '🔄', text: '<strong>Actualizar:</strong> Clic derecho en la tabla > Actualizar campo, cuando cambie el contenido.' },
            { icon: '🎨', text: '<strong>Personalizar:</strong> Modificar estilos de tabla de contenido para cambiar apariencia.' }
        ],
        tip: 'Para actualizar la tabla de contenido, pulsa F9 o clic derecho > Actualizar campo.'
    },
    {
        title: 'Encabezados y pies de página',
        content: [
            { icon: '📌', text: '<strong>Insertar:</strong> Insertar > Encabezado o Pie de página > elegir diseño.' },
            { icon: '📅', text: '<strong>Agregar campos:</strong> Número de página, fecha, título del documento, etc.' },
            { icon: '🔗', text: '<strong>Vinculación:</strong> Desvincular el encabezado/pie de la sección anterior para tener diferentes en cada sección.' }
        ]
    },
    {
        title: 'Columnas en un documento',
        content: [
            { icon: '📰', text: '<strong>Crear columnas:</strong> Diseño > Columnas > elegir número (2, 3, etc.).' },
            { icon: '📏', text: '<strong>Ancho y espacio:</strong> Columnas > Más columnas para personalizar.' },
            { icon: '↔️', text: '<strong>Saltos de columna:</strong> Insertar > Salto > Salto de columna para forzar el cambio.' }
        ],
        extra: '📰 <strong>Ejemplo:</strong> Ideal para boletines, folletos o artículos estilo periódico.'
    },
    {
        title: 'Saltos de página y secciones',
        content: [
            { icon: '📄', text: '<strong>Salto de página:</strong> Insertar > Salto > Salto de página (Ctrl+Intro).' },
            { icon: '📑', text: '<strong>Salto de sección:</strong> Insertar > Salto > Salto de sección (página siguiente, continua, etc.).' },
            { icon: '🔗', text: '<strong>Ventaja:</strong> Permite cambiar encabezados, pies, orientación y márgenes por sección.' }
        ]
    },
    {
        title: 'Tablas avanzadas: fórmulas y ordenar',
        content: [
            { icon: '📊', text: '<strong>Fórmulas en tablas:</strong> Seleccionar celda > Diseño (tabla) > Fórmula. Ej: =SUMA(IZQUIERDA)' },
            { icon: '🔢', text: '<strong>Ordenar:</strong> Seleccionar tabla > Inicio > Ordenar > elegir columna y criterio (ascendente/descendente).' },
            { icon: '📐', text: '<strong>Combinar celdas:</strong> Seleccionar varias celdas > Diseño > Combinar celdas.' }
        ]
    },
    {
        title: 'Insertar gráficos (barras, líneas, circulares)',
        content: [
            { icon: '📈', text: '<strong>Insertar gráfico:</strong> Insertar > Gráfico > elegir tipo (columna, barra, línea, circular).' },
            { icon: '📊', text: '<strong>Editar datos:</strong> Se abre una hoja de Excel para ingresar o pegar datos.' },
            { icon: '🎨', text: '<strong>Diseño y formato:</strong> Herramientas de gráfico > Diseño para cambiar colores y estilos.' }
        ]
    },
    {
        title: 'SmartArt - diagramas de flujo y organigramas',
        content: [
            { icon: '🧩', text: '<strong>Insertar SmartArt:</strong> Insertar > SmartArt > elegir un tipo (Proceso, Jerarquía, Ciclo, etc.).' },
            { icon: '✏️', text: '<strong>Escribir texto:</strong> En el panel de texto o directamente en las formas.' },
            { icon: '🎨', text: '<strong>Cambiar diseño:</strong> Herramientas de SmartArt > Diseño para cambiar colores y estilo.' }
        ]
    },
    {
        title: 'Combinar correspondencia (paso a paso)',
        content: [
            { icon: '📇', text: '<strong>Paso 1:</strong> Crear documento base (carta, etiqueta, etc.) con campos combinados.' },
            { icon: '🔗', text: '<strong>Paso 2:</strong> Correspondencia > Iniciar combinación > Elegir tipo de documento.' },
            { icon: '📋', text: '<strong>Paso 3:</strong> Seleccionar destinatarios > Usar lista existente (Excel, Outlook).' },
            { icon: '✏️', text: '<strong>Paso 4:</strong> Insertar campo combinado (Nombre, Dirección, etc.) en el documento.' },
            { icon: '▶️', text: '<strong>Paso 5:</strong> Finalizar y combinar > Imprimir o Editar documentos individuales.' }
        ],
        visual: ['📋 Documento base', '➕', '📇 Lista de datos (Excel)', '➡️', '📄 Documentos personalizados']
    },
    {
        title: 'Grabar y ejecutar macros básicas',
        content: [
            { icon: '🎬', text: '<strong>Grabar macro:</strong> Vista > Macros > Grabar macro. Asignar nombre y tecla.' },
            { icon: '▶️', text: '<strong>Ejecutar:</strong> Vista > Macros > Ver macros > Ejecutar.' },
            { icon: '🔘', text: '<strong>Asignar a botón:</strong> Insertar un botón en la barra de acceso rápido o en la cinta.' },
            { icon: '📖', text: '<strong>Editor de VBA:</strong> Alt+F11 para modificar o escribir código.' }
        ]
    },
    {
        title: 'Insertar objetos: Excel, PowerPoint, ecuaciones',
        content: [
            { icon: '🔗', text: '<strong>Insertar objeto:</strong> Insertar > Objeto > Crear desde archivo (incrustar hoja Excel, presentación).' },
            { icon: '📊', text: '<strong>Vincular:</strong> Marcar "Vincular" para que se actualice automáticamente al cambiar el origen.' },
            { icon: '📐', text: '<strong>Ecuaciones:</strong> Insertar > Ecuación para escribir fórmulas matemáticas con editor.' }
        ]
    },
    {
        title: 'Proteger documento con contraseña',
        content: [
            { icon: '🔒', text: '<strong>Proteger con contraseña:</strong> Archivo > Información > Proteger documento > Cifrar con contraseña.' },
            { icon: '🔑', text: '<strong>Escribir y confirmar contraseña.</strong> Se necesitará para abrir el archivo.' },
            { icon: '⚠️', text: '<strong>Importante:</strong> Guarda la contraseña en un lugar seguro, no se puede recuperar.' }
        ]
    },
    {
        title: 'Revisión colaborativa (control de cambios)',
        content: [
            { icon: '👥', text: '<strong>Activar control de cambios:</strong> Revisar > Control de cambios > Resaltar cambios.' },
            { icon: '✏️', text: '<strong>Insertar comentarios:</strong> Revisar > Nuevo comentario para dejar notas.' },
            { icon: '🔄', text: '<strong>Aceptar/rechazar:</strong> Revisar > Aceptar o Rechazar para aplicar cambios sugeridos.' }
        ]
    },
    {
        title: 'Tablas de figuras y tablas de ilustraciones',
        content: [
            { icon: '📊', text: '<strong>Insertar tabla de figuras:</strong> Referencias > Insertar tabla de ilustraciones. Requiere que las imágenes tengan títulos.' },
            { icon: '🏷️', text: '<strong>Agregar título:</strong> Clic derecho en imagen > Insertar título > elegir etiqueta (Figura, Tabla).' },
            { icon: '🔄', text: '<strong>Actualizar:</strong> Clic derecho en la tabla > Actualizar campo.' }
        ]
    },
    {
        title: 'Atajos avanzados y personalización',
        content: [
            { icon: '⌨️', text: '<strong>Ctrl+Mayús+N:</strong> Aplicar estilo Normal.' },
            { icon: '⌨️', text: '<strong>Ctrl+Alt+1/2/3:</strong> Aplicar Título 1, 2, 3.' },
            { icon: '⌨️', text: '<strong>F12:</strong> Guardar como.' },
            { icon: '⌨️', text: '<strong>Alt+F9:</strong> Mostrar códigos de campo.' }
        ]
    },
    {
        title: 'Resumen y siguientes pasos (Intermedio)',
        content: [
            { icon: '🌟', text: '<strong>Has aprendido:</strong> Estilos avanzados, esquemas, tabla de contenido, encabezados/pies, columnas, saltos, secciones, tablas avanzadas, gráficos, SmartArt, combinación de correspondencia, macros, objetos, protección, control de cambios y más.' },
            { icon: '🚀', text: '<strong>Siguiente nivel:</strong> Explorar VBA para Word, automatización compleja, integración con bases de datos.' },
            { icon: '💪', text: '<strong>Proyecto final:</strong> Crea un documento extenso con índice, tablas de figuras, combinación de correspondencia y una macro simple.' }
        ]
    }
];