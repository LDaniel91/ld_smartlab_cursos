const CURSO_EXCEL_BASICO = [
    {
        title: 'Introducción a Excel',
        content: [
            { icon: '📊', text: '<strong>¿Qué es Excel?</strong> Hoja de cálculo electrónica de Microsoft, usada para organizar, analizar y visualizar datos.' },
            { icon: '💼', text: '<strong>Aplicaciones comunes:</strong> Finanzas, contabilidad, administración, análisis de datos, planificación, etc.' },
            { icon: '🖥️', text: '<strong>Versiones:</strong> Excel 2016, 2019, 2021, Microsoft 365 (la mayoría de funciones son similares).' }
        ]
    },

    // ⬇️⬇️⬇️ NUEVO SLIDE DE VIDEO ⬇️⬇️⬇️
    {
        type: 'video',
        title: '🎬 Video: Primeros pasos en Excel',
        src: '../assets/videos/excel-basico-video001.mp4',
        poster: '../assets/img/excel-poster.jpg',
        caption: 'Duración: 5 min aprox.',
        description: 'En este video verás cómo abrir Excel, identificar los elementos de la interfaz y escribir tu primera fórmula paso a paso.'
    },
    // ⬆️⬆️⬆️ FIN DEL SLIDE DE VIDEO ⬆️⬆️⬆️

    {
        title: 'Interfaz de Excel',
        content: [
            { icon: '📌', text: '<strong>Elementos principales:</strong> Barra de título, cinta de opciones (pestañas: Inicio, Insertar, etc.), barra de fórmulas, cuadrícula de celdas, barra de estado.' },
            // ...
        ]
    },
    // ... resto de slides
];