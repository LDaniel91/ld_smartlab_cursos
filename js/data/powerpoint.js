/* ============================================================
   Datos del curso PowerPoint (Básico + Intermedio)
   ============================================================ */

const CURSO_POWERPOINT_BASICO = [
    {
        title: 'Introducción a PowerPoint',
        content: [
            { icon: '🖥️', text: '<strong>¿Qué es PowerPoint?</strong> Herramienta de presentaciones de Microsoft, usada para crear diapositivas con texto, imágenes, gráficos y multimedia.' },
            { icon: '🎯', text: '<strong>Objetivo del curso:</strong> Aprender a crear presentaciones atractivas y funcionales desde cero.' },
            { icon: '📅', text: '<strong>Estructura:</strong> 3 días con teoría, ejemplos y ejercicios prácticos.' }
        ]
    },
    {
        title: 'Interfaz de PowerPoint',
        content: [
            { icon: '📌', text: '<strong>Elementos principales:</strong> Barra de título, Cinta de opciones (pestañas: Inicio, Insertar, Diseño, etc.), Panel de diapositivas, Área de trabajo, Barra de estado.' },
            { icon: '🔍', text: '<strong>Vistas:</strong> Normal, Clasificador de diapositivas, Lectura, Presentación con diapositivas.' },
            { icon: '📐', text: '<strong>Panel de diapositivas:</strong> Muestra miniaturas de todas las diapositivas. Permite reorganizar y duplicar.' }
        ]
    },
    {
        title: 'Crear una nueva presentación',
        content: [
            { icon: '📄', text: '<strong>Nuevo:</strong> Archivo > Nuevo > Presentación en blanco o usar una plantilla.' },
            { icon: '➕', text: '<strong>Agregar diapositiva:</strong> Inicio > Nueva diapositiva o Ctrl+M.' },
            { icon: '📋', text: '<strong>Elegir diseño:</strong> En el menú de Nueva diapositiva, seleccionar Título, Título y contenido, Comparación, etc.' }
        ]
    },
    {
        title: 'Diseño y temas',
        content: [
            { icon: '🎨', text: '<strong>Diseño de diapositiva:</strong> Inicio > Diseño para cambiar la distribución de la diapositiva actual.' },
            { icon: '🌈', text: '<strong>Temas:</strong> Pestaña Diseño > seleccionar un tema (colores, fuentes y efectos predefinidos).' },
            { icon: '🖌️', text: '<strong>Variantes:</strong> Cambiar colores, fuentes o efectos dentro del mismo tema.' }
        ]
    },
    {
        title: 'Insertar y editar texto',
        content: [
            { icon: '✏️', text: '<strong>Cuadro de texto:</strong> Insertar > Cuadro de texto y dibujar en la diapositiva.' },
            { icon: '📝', text: '<strong>Editar texto:</strong> Clic en el marcador de posición o cuadro de texto y escribir.' },
            { icon: '🔤', text: '<strong>Formato:</strong> Inicio > Fuente (tipo, tamaño, negrita, color, etc.).' }
        ]
    },
    {
        title: 'Insertar imágenes',
        content: [
            { icon: '🖼️', text: '<strong>Desde archivo:</strong> Insertar > Imágenes > Este dispositivo... y seleccionar.' },
            { icon: '🌐', text: '<strong>Imágenes en línea:</strong> Insertar > Imágenes > Imágenes de archivo (Bing, OneDrive).' },
            { icon: '✂️', text: '<strong>Recortar y ajustar:</strong> Seleccionar imagen > Formato > Recortar, y ajustar brillo/contraste.' }
        ]
    },
    {
        title: 'Insertar formas y diagramas',
        content: [
            { icon: '🔷', text: '<strong>Formas:</strong> Insertar > Formas > elegir rectángulo, círculo, flecha, etc. y dibujar.' },
            { icon: '🎨', text: '<strong>Formato de forma:</strong> Relleno, contorno, efectos (sombra, reflejo).' },
            { icon: '🔗', text: '<strong>Conectores:</strong> Usar líneas con conectores para diagramas de flujo.' }
        ]
    },
    {
        title: 'Listas con viñetas y numeración',
        content: [
            { icon: '📋', text: '<strong>Viñetas:</strong> Seleccionar texto > Inicio > Viñetas (punto, guión, etc.).' },
            { icon: '🔢', text: '<strong>Numeración:</strong> Inicio > Numeración (1, 2, 3 o a, b, c).' },
            { icon: '📐', text: '<strong>Aumentar/disminuir sangría:</strong> Usar los botones en Inicio para jerarquizar.' }
        ]
    },
    {
        title: 'Insertar tablas',
        content: [
            { icon: '📊', text: '<strong>Insertar tabla:</strong> Insertar > Tabla > elegir número de filas y columnas.' },
            { icon: '✏️', text: '<strong>Editar:</strong> Clic en celdas, agregar texto, y usar Diseño de tabla para estilos.' },
            { icon: '🎨', text: '<strong>Estilos:</strong> Diseño > Estilos de tabla para aplicar colores y bordes.' }
        ]
    },
    {
        title: 'Insertar gráficos (barras, columnas, líneas)',
        content: [
            { icon: '📈', text: '<strong>Insertar gráfico:</strong> Insertar > Gráfico > elegir tipo (columna, barra, línea, circular).' },
            { icon: '📊', text: '<strong>Editar datos:</strong> Se abre una hoja de Excel para ingresar o pegar datos.' },
            { icon: '🎨', text: '<strong>Diseño y formato:</strong> Herramientas de gráfico > Diseño para cambiar colores y estilos.' }
        ]
    },
    {
        title: 'SmartArt - diagramas y organigramas',
        content: [
            { icon: '🧩', text: '<strong>Insertar SmartArt:</strong> Insertar > SmartArt > elegir un tipo (jerarquía, proceso, ciclo, etc.).' },
            { icon: '✏️', text: '<strong>Escribir texto:</strong> En el panel de texto o directamente en las formas.' },
            { icon: '🎨', text: '<strong>Cambiar diseño:</strong> Herramientas de SmartArt > Diseño para cambiar colores y estilo.' }
        ]
    },
    {
        title: 'Transiciones entre diapositivas',
        content: [
            { icon: '🔄', text: '<strong>Aplicar transición:</strong> Seleccionar diapositiva > Transiciones > elegir un efecto (desvanecer, empujar, etc.).' },
            { icon: '⏱️', text: '<strong>Duración y avance:</strong> Configurar duración, y opción "Al hacer clic" o "Después de" tiempo.' },
            { icon: '🔁', text: '<strong>Aplicar a todas:</strong> Botón "Aplicar a todas" para usar la misma transición en todas las diapositivas.' }
        ]
    },
    {
        title: 'Animaciones básicas (entrada, énfasis, salida)',
        content: [
            { icon: '✨', text: '<strong>Agregar animación:</strong> Seleccionar objeto > Animaciones > elegir efecto (entrada, énfasis, salida).' },
            { icon: '⏳', text: '<strong>Configurar:</strong> Opciones de efectos (dirección, duración, inicio: al hacer clic, con anterior, después).' },
            { icon: '📋', text: '<strong>Panel de animación:</strong> Permite ordenar y ajustar la temporización de varias animaciones.' }
        ]
    },
    {
        title: 'Revisión ortográfica y comentarios',
        content: [
            { icon: '✅', text: '<strong>Revisar ortografía:</strong> Revisar > Ortografía > se resaltan errores y sugiere correcciones.' },
            { icon: '💬', text: '<strong>Insertar comentario:</strong> Revisar > Nuevo comentario para dejar notas en diapositivas.' },
            { icon: '✏️', text: '<strong>Responder y resolver:</strong> En los comentarios, se puede responder y marcarlos como resueltos.' }
        ]
    },
    {
        title: 'Guardar y exportar presentación',
        content: [
            { icon: '💾', text: '<strong>Guardar:</strong> Ctrl+G o Archivo > Guardar como > elegir ubicación y nombre.' },
            { icon: '📄', text: '<strong>Exportar a PDF:</strong> Archivo > Exportar > Crear PDF/XPS.' },
            { icon: '🎞️', text: '<strong>Exportar a video:</strong> Archivo > Exportar > Crear un vídeo (MP4 o WMV).' }
        ]
    },
    {
        title: 'Configurar presentación con diapositivas',
        content: [
            { icon: '▶️', text: '<strong>Iniciar presentación:</strong> F5 (desde el principio) o Mayús+F5 (desde diapositiva actual).' },
            { icon: '🖱️', text: '<strong>Navegación:</strong> Clic o teclas Av/Re, tecla ESC para salir.' },
            { icon: '✏️', text: '<strong>Anotaciones:</strong> Durante la presentación, usar el lápiz o resaltador para marcar.' }
        ]
    },
    {
        title: 'Impresión de diapositivas',
        content: [
            { icon: '🖨️', text: '<strong>Imprimir:</strong> Archivo > Imprimir. Elegir impresora y configuración.' },
            { icon: '📋', text: '<strong>Diseño de impresión:</strong> Diapositivas completas, Notas, Esquema, o Documentos (2, 3, 6 diapositivas por página).' },
            { icon: '📐', text: '<strong>Ajustes:</strong> Orientación, tamaño de papel, márgenes.' }
        ]
    },
    {
        title: 'Resumen y consejos (Básico)',
        content: [
            { icon: '🌟', text: '<strong>Has aprendido:</strong> Crear presentaciones, insertar texto, imágenes, formas, tablas, gráficos, SmartArt, transiciones, animaciones básicas, revisión, guardar, imprimir y presentar.' },
            { icon: '🚀', text: '<strong>Siguiente nivel:</strong> PowerPoint Intermedio para dominar diapositivas maestras, animaciones avanzadas, multimedia y más.' },
            { icon: '💪', text: '<strong>Práctica:</strong> Crea una presentación de 10 diapositivas sobre un tema de tu interés aplicando todo lo aprendido.' }
        ]
    }
];

const CURSO_POWERPOINT_INTERMEDIO = [
    {
        title: 'Diapositiva maestra (patrón)',
        content: [
            { icon: '👑', text: '<strong>¿Qué es?</strong> El patrón de diapositivas controla el diseño, fuentes, colores y elementos que aparecen en todas las diapositivas.' },
            { icon: '🔧', text: '<strong>Acceso:</strong> Vista > Patrón de diapositivas. Se abre una vista especial.' },
            { icon: '✏️', text: '<strong>Edición:</strong> Modifica el patrón principal o los diseños secundarios. Los cambios se aplican a toda la presentación.' }
        ],
        tip: 'El patrón principal afecta a todas las diapositivas, pero puedes modificar diseños individuales para variaciones.'
    },
    {
        title: 'Personalizar el patrón de diapositivas',
        content: [
            { icon: '🎨', text: '<strong>Agregar logotipo:</strong> Insertar imagen en el patrón principal, aparecerá en todas las diapositivas.' },
            { icon: '📐', text: '<strong>Cambiar marcadores de posición:</strong> Ajustar tamaño y posición de los cuadros de texto.' },
            { icon: '💡', text: '<strong>Consejo:</strong> Cerrar patrón al terminar (Cerrar vista patrón).' }
        ]
    },
    {
        title: 'Crear y guardar plantillas (.potx)',
        content: [
            { icon: '📄', text: '<strong>Guardar como plantilla:</strong> Archivo > Guardar como > elegir "Plantilla de PowerPoint (*.potx)".' },
            { icon: '📂', text: '<strong>Usar plantilla:</strong> Archivo > Nuevo > Personalizar > seleccionar la plantilla guardada.' },
            { icon: '🔄', text: '<strong>Ventaja:</strong> Mantiene consistencia en toda la organización.' }
        ]
    },
    {
        title: 'Encabezados, pies de página y numeración',
        content: [
            { icon: '📌', text: '<strong>Insertar:</strong> Insertar > Encabezado y pie de página.' },
            { icon: '📅', text: '<strong>Configurar:</strong> Fecha y hora, número de diapositiva, pie de página (texto fijo).' },
            { icon: '🔢', text: '<strong>Numeración:</strong> Activar "Número de diapositiva" y elegir posición en el patrón.' }
        ]
    },
    {
        title: 'Animaciones avanzadas (trayectorias)',
        content: [
            { icon: '🔄', text: '<strong>Trayectoria personalizada:</strong> Animaciones > Trayectoria de movimiento > dibujar una ruta.' },
            { icon: '⏱️', text: '<strong>Temporización avanzada:</strong> Configurar inicio, duración y retraso en el panel de animación.' },
            { icon: '🔁', text: '<strong>Repetir:</strong> Opción de repetición (hasta que se haga clic, o un número de veces).' }
        ]
    },
    {
        title: 'Animaciones en cadena (con disparadores)',
        content: [
            { icon: '⏯️', text: '<strong>Disparadores:</strong> Iniciar una animación al hacer clic en un objeto específico.' },
            { icon: '📋', text: '<strong>Configurar:</strong> Panel de animación > Opciones de efectos > Temporización > Disparadores > Iniciar efecto al hacer clic en...' },
            { icon: '🎯', text: '<strong>Útil:</strong> Crear presentaciones interactivas, menús, botones.' }
        ]
    },
    {
        title: 'Insertar audio y video',
        content: [
            { icon: '🎵', text: '<strong>Insertar audio:</strong> Insertar > Audio > Audio en mi PC o Grabar audio.' },
            { icon: '🎬', text: '<strong>Insertar video:</strong> Insertar > Video > Este dispositivo, o Video en línea (YouTube).' },
            { icon: '🎛️', text: '<strong>Opciones de reproducción:</strong> Inicio automático o al hacer clic, reproducción en bucle, ocultar durante la presentación.' }
        ]
    },
    {
        title: 'Hipervínculos y acciones',
        content: [
            { icon: '🔗', text: '<strong>Hipervínculo:</strong> Seleccionar objeto > Insertar > Hipervínculo > enlazar a diapositiva, archivo externo, página web o correo.' },
            { icon: '⚡', text: '<strong>Acciones:</strong> Insertar > Acción > Configurar al hacer clic o al pasar el mouse (ejecutar programa, macro, reproducir sonido).' },
            { icon: '🎯', text: '<strong>Ejemplo:</strong> Crear un menú interactivo con botones que vayan a diferentes secciones.' }
        ],
        extra: '🔗 <strong>Ejemplo:</strong> Crea un botón con hipervínculo a la diapositiva 5 para simular un menú.'
    },
    {
        title: 'Combinar correspondencia en PowerPoint',
        content: [
            { icon: '📇', text: '<strong>¿Qué es?</strong> Crear varias diapositivas personalizadas a partir de una lista de datos (ej. nombres, empresas).' },
            { icon: '🔗', text: '<strong>Pasos:</strong> Revisar > Combinar correspondencia > Usar lista existente (Excel) > Insertar campos combinados.' },
            { icon: '📄', text: '<strong>Resultado:</strong> Diapositivas individuales para cada registro, ideales para certificados o tarjetas.' }
        ],
        visual: ['📋 Lista en Excel', '➡️', '🖨️ Diapositivas personalizadas']
    },
    {
        title: 'Presentaciones personalizadas (secciones)',
        content: [
            { icon: '📂', text: '<strong>Crear secciones:</strong> Clic derecho en el panel de miniaturas > Agregar sección. Permite organizar por temas.' },
            { icon: '🎯', text: '<strong>Presentación personalizada:</strong> Presentación con diapositivas > Presentaciones personalizadas > Nueva. Elegir diapositivas específicas.' },
            { icon: '🔄', text: '<strong>Ventaja:</strong> Mostrar solo partes de la presentación a diferentes audiencias.' }
        ]
    },
    {
        title: 'Proteger presentación con contraseña',
        content: [
            { icon: '🔒', text: '<strong>Proteger con contraseña:</strong> Archivo > Información > Proteger presentación > Cifrar con contraseña.' },
            { icon: '🔑', text: '<strong>Escribir y confirmar contraseña.</strong> Se necesitará para abrir el archivo.' },
            { icon: '⚠️', text: '<strong>Importante:</strong> Guarda la contraseña en un lugar seguro, no se puede recuperar.' }
        ]
    },
    {
        title: 'Exportar a video y otros formatos',
        content: [
            { icon: '🎞️', text: '<strong>Exportar a MP4:</strong> Archivo > Exportar > Crear un vídeo > elegir calidad y tiempo de cada diapositiva.' },
            { icon: '📄', text: '<strong>Exportar a PDF:</strong> Archivo > Exportar > Crear PDF/XPS. Incluye todas las diapositivas.' },
            { icon: '🖼️', text: '<strong>Guardar diapositivas como imágenes:</strong> Archivo > Guardar como > seleccionar formato de imagen (JPEG, PNG).' }
        ]
    },
    {
        title: 'Trucos para presentaciones profesionales',
        content: [
            { icon: '🖥️', text: '<strong>Modo de presentación con notas:</strong> Usar el modo de presentador para ver notas y controles.' },
            { icon: '✏️', text: '<strong>Anotaciones en vivo:</strong> Durante la presentación, usar lápices digitales o resaltadores.' },
            { icon: '🎯', text: '<strong>Consejo:</strong> Practicar con el modo de presentación para familiarizarse con los controles.' }
        ]
    },
    {
        title: 'Atajos de teclado esenciales',
        content: [
            { icon: '⌨️', text: '<strong>F5:</strong> Iniciar presentación desde el principio.' },
            { icon: '⌨️', text: '<strong>Mayús+F5:</strong> Iniciar desde la diapositiva actual.' },
            { icon: '⌨️', text: '<strong>B / W:</strong> Pantalla en negro/blanco durante la presentación.' },
            { icon: '⌨️', text: '<strong>Ctrl+S:</strong> Guardar.' },
            { icon: '⌨️', text: '<strong>Ctrl+Z:</strong> Deshacer.' }
        ]
    },
    {
        title: 'Integración con otros programas (Word, Excel)',
        content: [
            { icon: '🔗', text: '<strong>Insertar objeto:</strong> Insertar > Objeto > Crear desde archivo para incrustar hojas de Excel o documentos Word.' },
            { icon: '📊', text: '<strong>Vinculación:</strong> Al insertar un objeto, elegir "Vincular" para que se actualice automáticamente al cambiar el origen.' },
            { icon: '📋', text: '<strong>Copiar y pegar especial:</strong> Desde Excel, copiar rango y pegar como tabla en PowerPoint manteniendo formato.' }
        ]
    },
    {
        title: 'Resumen y siguientes pasos (Intermedio)',
        content: [
            { icon: '🌟', text: '<strong>Has aprendido:</strong> Patrón de diapositivas, plantillas, encabezados/pies, animaciones avanzadas, multimedia, hipervínculos, combinación de correspondencia, protección, exportación y trucos profesionales.' },
            { icon: '🚀', text: '<strong>Siguiente nivel:</strong> Explorar VBA para PowerPoint, complementos, y diseño avanzado con herramientas externas.' },
            { icon: '💪', text: '<strong>Proyecto final:</strong> Crea una presentación interactiva con menús, vídeos y animaciones complejas sobre un tema de tu elección.' }
        ]
    }
];