/* ============================================================
   Datos del curso Excel Básico
   Incluye 2 slides de tipo "video-gallery".
   ============================================================ */
const CURSO_EXCEL_BASICO = [
    {
        title: 'Introducción a Excel',
        content: [
            { icon: '📊', text: '<strong>¿Qué es Excel?</strong> Hoja de cálculo electrónica de Microsoft, usada para organizar, analizar y visualizar datos.' },
            { icon: '💼', text: '<strong>Aplicaciones comunes:</strong> Finanzas, contabilidad, administración, análisis de datos, planificación, etc.' },
            { icon: '🖥️', text: '<strong>Versiones:</strong> Excel 2016, 2019, 2021, Microsoft 365 (la mayoría de funciones son similares).' }
        ]
    },

    /* ============================================================
       GALERÍA DE VIDEOS #1 — Introducción audiovisual
       ============================================================ */
    {
        type: 'video-gallery',
        title: '🎬 Galería: Primeros pasos en Excel',
        day: 1,
        videos: [
            {
                src: '../assets/videos/excel-basico-video001.mp4',
                poster: '../assets/img/excel-poster-01.jpg',
                title: 'Conociendo la interfaz',
                description: 'Cómo abrir Excel y ubicar las partes principales: cinta de opciones, celdas, barra de fórmulas.',
                meta: '⏱️ Duración: 5 min'
            },
            {
                src: '../assets/videos/excel-basico-video002.mp4',
                poster: '../assets/img/excel-poster-02.jpg',
                title: 'Escribir tu primera fórmula',
                description: 'Aprende a escribir =A1+B1 y observa cómo Excel calcula automáticamente.',
                meta: '⏱️ Duración: 4 min'
            },
            {
                src: '../assets/videos/excel-basico-video003.mp4',
                poster: '../assets/img/excel-poster-03.jpg',
                title: 'Guardar y abrir archivos',
                description: 'Guarda tu primer libro de trabajo, elige formato .xlsx y ábrelo más tarde.',
                meta: '⏱️ Duración: 3 min'
            }
        ]
    },

    {
        title: 'Interfaz de Excel',
        content: [
            { icon: '📌', text: '<strong>Elementos principales:</strong> Barra de título, cinta de opciones (pestañas: Inicio, Insertar, etc.), barra de fórmulas, cuadrícula de celdas, barra de estado.' },
            { icon: '🔢', text: '<strong>Filas, columnas y celdas:</strong> Las filas se numeran (1,2,3...), las columnas con letras (A,B,C...). Una celda es la intersección (ej. B5).' },
            { icon: '📏', text: '<strong>Barra de fórmulas:</strong> Muestra el contenido de la celda seleccionada y permite escribir fórmulas.' }
        ]
    },
    {
        title: 'Navegación y selección',
        content: [
            { icon: '⌨️', text: '<strong>Teclas de desplazamiento:</strong> Flechas, Tab, Enter, Inicio, Fin, Ctrl+Inicio (ir a A1), Ctrl+Fin (última celda usada).' },
            { icon: '🖱️', text: '<strong>Selección con ratón:</strong> Clic en celda, arrastrar para seleccionar rango, Shift+clic para extender.' },
            { icon: '📋', text: '<strong>Seleccionar fila/columna:</strong> Clic en el número de fila o letra de columna. Para seleccionar toda la hoja, clic en el triángulo superior izquierdo.' }
        ]
    },
    {
        title: 'Ingreso de datos',
        content: [
            { icon: '✏️', text: '<strong>Escribir en una celda:</strong> Seleccionar, escribir y presionar Enter (o Tab para mover a la derecha).' },
            { icon: '📅', text: '<strong>Tipos de datos:</strong> Texto (izquierda), números (derecha), fechas (formato especial), fórmulas (empiezan con =).' },
            { icon: '📝', text: '<strong>Editar contenido:</strong> Doble clic en la celda o presionar F2. También borrar con Supr o Retroceso.' }
        ]
    },
    {
        title: 'Edición y deshacer',
        content: [
            { icon: '↩️', text: '<strong>Deshacer (Ctrl+Z):</strong> Revierte la última acción. Rehacer (Ctrl+Y) para repetir.' },
            { icon: '✂️', text: '<strong>Cortar, copiar y pegar:</strong> Ctrl+X, Ctrl+C, Ctrl+V. También con botones en Inicio.' },
            { icon: '🧹', text: '<strong>Borrar contenido:</strong> Seleccionar y presionar Supr. Para borrar formatos, usar Inicio > Borrar > Borrar formatos.' }
        ]
    },
    {
        title: 'Formatos básicos de celda',
        content: [
            { icon: '🔤', text: '<strong>Fuente, tamaño, negrita, cursiva:</strong> Usar la pestaña Inicio en el grupo Fuente.' },
            { icon: '🎨', text: '<strong>Color de fondo y fuente:</strong> Botones de color de relleno y color de fuente.' },
            { icon: '↔️', text: '<strong>Alineación:</strong> Izquierda, centro, derecha. También orientación vertical y ajuste de texto.' }
        ]
    },
    {
        title: 'Operaciones aritméticas básicas',
        content: [
            { icon: '➕', text: '<strong>Suma:</strong> =A1+B1 o =SUMA(A1:B1)' },
            { icon: '➖', text: '<strong>Resta:</strong> =A1-B1' },
            { icon: '✖️', text: '<strong>Multiplicación:</strong> =A1*B1' },
            { icon: '➗', text: '<strong>División:</strong> =A1/B1' },
            { icon: '📐', text: '<strong>Ejemplo:</strong> En A1=10, B1=5, en C1 escribe =A1+B1 → 15.' }
        ]
    },
    {
        title: 'Referencias relativas y absolutas',
        content: [
            { icon: '🔄', text: '<strong>Referencia relativa:</strong> Al copiar una fórmula, las referencias se ajustan automáticamente (ej. =A1+B1 al copiar a la derecha se convierte en =B1+C1).' },
            { icon: '🔒', text: '<strong>Referencia absoluta:</strong> Fija una celda con $ (ej. =$A$1+B1). Al copiar, $A$1 no cambia.' },
            { icon: '📌', text: '<strong>Mixtas:</strong> =$A1 (columna absoluta) o =A$1 (fila absoluta).' }
        ]
    },
    {
        title: 'Autosuma y relleno rápido',
        content: [
            { icon: '∑', text: '<strong>Autosuma:</strong> Botón Σ en Inicio, suma automáticamente un rango contiguo.' },
            { icon: '🧩', text: '<strong>Relleno rápido (Ctrl+E):</strong> Extrae patrones, por ejemplo, nombres completos a partir de nombre y apellido.' },
            { icon: '📥', text: '<strong>Rellenar hacia abajo/derecha:</strong> Seleccionar celda con fórmula y arrastrar el controlador de relleno (esquina inferior derecha).' }
        ]
    },
    {
        title: 'Guardar y abrir archivos',
        content: [
            { icon: '💾', text: '<strong>Guardar (Ctrl+G):</strong> Guarda el archivo. Guardar como para cambiar nombre o formato (.xlsx, .xls).' },
            { icon: '📂', text: '<strong>Abrir (Ctrl+A):</strong> Archivo > Abrir o navegar por el explorador.' },
            { icon: '📁', text: '<strong>Formatos:</strong> .xlsx (predeterminado), .xls (compatible con versiones antiguas), .csv (texto separado por comas).' }
        ]
    },
    {
        title: 'Funciones básicas: SUMA, PROMEDIO, CONTAR',
        content: [
            { icon: '📊', text: '<strong>SUMA:</strong> =SUMA(rango) - suma todos los números.' },
            { icon: '📈', text: '<strong>PROMEDIO:</strong> =PROMEDIO(rango) - calcula la media aritmética.' },
            { icon: '🔢', text: '<strong>CONTAR:</strong> =CONTAR(rango) - cuenta celdas con números.' },
            { icon: '📝', text: '<strong>CONTARA:</strong> =CONTARA(rango) - cuenta celdas no vacías (texto, números).' }
        ]
    },
    {
        title: 'Funciones MAX y MIN',
        content: [
            { icon: '⬆️', text: '<strong>MAX:</strong> =MAX(rango) - devuelve el valor máximo.' },
            { icon: '⬇️', text: '<strong>MIN:</strong> =MIN(rango) - devuelve el valor mínimo.' },
            { icon: '💡', text: '<strong>Ejemplo:</strong> =MAX(A1:A10) encuentra el número más alto en ese rango.' }
        ]
    },
    {
        title: 'Formato de números y fechas',
        content: [
            { icon: '💰', text: '<strong>Moneda:</strong> Seleccionar celdas > Inicio > Número > Moneda o Contabilidad.' },
            { icon: '%', text: '<strong>Porcentaje:</strong> Multiplica por 100 y añade %.' },
            { icon: '📅', text: '<strong>Fecha:</strong> Formato corto (dd/mm/aaaa) o largo.' },
            { icon: '🔢', text: '<strong>Número con decimales:</strong> Aumentar o disminuir decimales.' }
        ]
    },
    {
        title: 'Estilos y temas de celda',
        content: [
            { icon: '🎨', text: '<strong>Estilos predefinidos:</strong> Inicio > Estilos de celda. Aplican formato combinado.' },
            { icon: '🖌️', text: '<strong>Formato de tabla:</strong> Insertar > Tabla, convierte el rango en tabla con estilos y filtros automáticos.' },
            { icon: '🌈', text: '<strong>Temas:</strong> Diseño de página > Temas, cambia colores y fuentes globalmente.' }
        ]
    },
    {
        title: 'Insertar y eliminar filas/columnas',
        content: [
            { icon: '➕', text: '<strong>Insertar fila:</strong> Seleccionar fila > clic derecho > Insertar. O desde Inicio > Insertar > Insertar filas de hoja.' },
            { icon: '➖', text: '<strong>Eliminar fila:</strong> Similar, clic derecho > Eliminar.' },
            { icon: '↔️', text: '<strong>Insertar columna:</strong> Mismo procedimiento sobre una columna.' }
        ]
    },
    {
        title: 'Ordenar datos',
        content: [
            { icon: '🔽', text: '<strong>Orden ascendente:</strong> De A a Z o de menor a mayor.' },
            { icon: '🔼', text: '<strong>Orden descendente:</strong> De Z a A o de mayor a menor.' },
            { icon: '🧩', text: '<strong>Ordenar por varias columnas:</strong> Datos > Ordenar > Agregar nivel.' }
        ]
    },
    {
        title: 'Filtrado automático (Autofiltro)',
        content: [
            { icon: '🔍', text: '<strong>Activar filtro:</strong> Seleccionar rango > Datos > Filtro. Aparecen flechas en los encabezados.' },
            { icon: '✅', text: '<strong>Filtrar por valores:</strong> Desplegar y seleccionar los valores que quieres mostrar.' },
            { icon: '🎯', text: '<strong>Filtros personalizados:</strong> Filtros de texto, números o fechas (contiene, mayor que, etc.).' }
        ]
    },
    {
        title: 'Copiar y pegar especial',
        content: [
            { icon: '📋', text: '<strong>Pegado especial:</strong> Copiar (Ctrl+C) > clic derecho > Pegado especial. Opciones: Valores (solo números), Formatos, Fórmulas, Transponer, etc.' },
            { icon: '📐', text: '<strong>Transponer:</strong> Cambia filas por columnas. Útil para reorganizar tablas.' },
            { icon: '📏', text: '<strong>Pegar vínculo:</strong> Crea una referencia a los datos originales.' }
        ]
    },
    {
        title: 'Gráficos básicos (Columnas, Barras, Líneas)',
        content: [
            { icon: '📊', text: '<strong>Insertar gráfico:</strong> Seleccionar datos > Insertar > Gráficos recomendados o elegir tipo.' },
            { icon: '📈', text: '<strong>Gráfico de columnas:</strong> Compara categorías. Barras horizontales similares.' },
            { icon: '📉', text: '<strong>Gráfico de líneas:</strong> Muestra tendencias a lo largo del tiempo.' }
        ]
    },
    {
        title: 'Personalizar gráficos',
        content: [
            { icon: '✏️', text: '<strong>Títulos:</strong> Clic en el gráfico > Elementos del gráfico (➕) > Título del gráfico, títulos de ejes.' },
            { icon: '🏷️', text: '<strong>Etiquetas de datos:</strong> Mostrar valores sobre las barras.' },
            { icon: '🎨', text: '<strong>Colores y estilos:</strong> En Diseño de gráfico, cambiar colores y estilos rápidos.' }
        ]
    },
    {
        title: 'Configuración de página e impresión',
        content: [
            { icon: '📄', text: '<strong>Márgenes:</strong> Diseño de página > Márgenes > Personalizar.' },
            { icon: '🔄', text: '<strong>Orientación:</strong> Vertical u Horizontal.' },
            { icon: '📏', text: '<strong>Tamaño de papel:</strong> Carta, A4, etc.' }
        ]
    },
    {
        title: 'Vistas de Excel',
        content: [
            { icon: '👁️', text: '<strong>Normal:</strong> Vista estándar.' },
            { icon: '📐', text: '<strong>Diseño de página:</strong> Muestra márgenes y encabezados/pies de página.' },
            { icon: '📄', text: '<strong>Salto de página:</strong> Visualiza los saltos de página.' }
        ]
    },
    {
        title: 'Área de impresión y ajustes',
        content: [
            { icon: '🖨️', text: '<strong>Definir área de impresión:</strong> Seleccionar rango > Diseño de página > Área de impresión > Establecer.' },
            { icon: '📏', text: '<strong>Ajustar a una página:</strong> En configuración de impresión, elegir "Ajustar a: 1 página de ancho por 1 de alto".' },
            { icon: '📋', text: '<strong>Encabezados y pies:</strong> Personalizar en Diseño de página > Encabezado/pie de página.' }
        ]
    },
    {
        title: 'Proteger hoja y libro',
        content: [
            { icon: '🔒', text: '<strong>Proteger hoja:</strong> Revisar > Proteger hoja. Permite bloquear celdas para que no se modifiquen.' },
            { icon: '🔐', text: '<strong>Proteger libro:</strong> Revisar > Proteger libro. Evita añadir/eliminar hojas.' },
            { icon: '🔑', text: '<strong>Contraseña:</strong> Se puede establecer contraseña para abrir el archivo (Archivo > Información > Proteger libro).' }
        ]
    },

    /* ============================================================
       GALERÍA DE VIDEOS #2 — Repaso final
       ============================================================ */
    {
        type: 'video-gallery',
        title: '🎬 Galería: Repaso visual del curso',
        videos: [
            {
                src: '../assets/videos/excel-basico-video004.mp4',
                poster: '../assets/img/excel-poster-04.jpg',
                title: 'Funciones esenciales',
                description: 'Repaso rápido de SUMA, PROMEDIO, MAX y MIN con ejemplos prácticos.',
                meta: '⏱️ Duración: 6 min'
            },
            {
                src: '../assets/videos/excel-basico-video005.mp4',
                poster: '../assets/img/excel-poster-05.jpg',
                title: 'Gráficos en 5 minutos',
                description: 'Cómo crear un gráfico de columnas, personalizarlo y añadir etiquetas.',
                meta: '⏱️ Duración: 5 min'
            },
            {
                src: '../assets/videos/excel-basico-video006.mp4',
                poster: '../assets/img/excel-poster-06.jpg',
                title: 'Filtros y ordenación',
                description: 'Ordena y filtra datos grandes en segundos. Incluye pegado especial.',
                meta: '⏱️ Duración: 4 min'
            },
            {
                src: '../assets/videos/excel-basico-video007.mp4',
                poster: '../assets/img/excel-poster-07.jpg',
                title: 'Preparar para imprimir',
                description: 'Configura márgenes, orientación, área de impresión y encabezados.',
                meta: '⏱️ Duración: 4 min'
            }
        ]
    },

    {
        title: 'Resumen y consejos (Básico)',
        content: [
            { icon: '🌟', text: '<strong>Atajos útiles:</strong> Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+Inicio, Ctrl+F (buscar).' },
            { icon: '📚', text: '<strong>Práctica:</strong> Realiza ejercicios de suma, promedio, gráficos y filtros con datos reales.' },
            { icon: '🎯', text: '<strong>Siguiente nivel:</strong> Domina las bases para pasar al curso intermedio con confianza.' }
        ]
    }
];