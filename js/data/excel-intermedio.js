/* ============================================================
   Datos del curso Excel Intermedio
   ============================================================ */
const CURSO_EXCEL_INTERMEDIO = [
    {
        title: 'Introducción al curso intermedio',
        content: [
            { icon: '🎯', text: '<strong>Objetivo:</strong> Dominar funciones avanzadas, tablas dinámicas, análisis de datos y automatización básica.' },
            { icon: '📅', text: '<strong>Estructura:</strong> 3 días con teoría, ejemplos y ejercicios prácticos.' },
            { icon: '💡', text: '<strong>Requisitos:</strong> Conocimientos básicos de Excel (fórmulas simples, formato, gráficos).' }
        ]
    },
    {
        title: 'Función SI - Sintaxis y uso básico',
        content: [
            { icon: '⚖️', text: '<strong>Sintaxis:</strong> =SI(prueba_lógica; valor_si_verdadero; valor_si_falso)' },
            { icon: '📝', text: '<strong>Ejemplo:</strong> =SI(A1>=18, "Mayor de edad", "Menor de edad")' },
            { icon: '📊', text: '<strong>Paso a paso:</strong> 1) Selecciona la celda. 2) Escribe =SI(. 3) Indica la condición. 4) Punto y coma. 5) Valor si verdadero. 6) Punto y coma. 7) Valor si falso. 8) Cierra paréntesis.' }
        ],
        extra: '🔍 <strong>Prueba:</strong> En A1 escribe 20, la fórmula devolverá "Mayor de edad".'
    },
    {
        title: 'Función SI con operadores lógicos (Y, O)',
        content: [
            { icon: '🤝', text: '<strong>Y:</strong> =Y(cond1; cond2; ...) - todas deben ser VERDADERO.' },
            { icon: '👥', text: '<strong>O:</strong> =O(cond1; cond2; ...) - al menos una debe ser VERDADERO.' },
            { icon: '📐', text: '<strong>Ejemplo combinado:</strong> =SI(Y(A1>=18; A1<=65); "Edad laboral"; "Fuera de rango")' }
        ]
    },
    {
        title: 'SI anidado - múltiples condiciones',
        content: [
            { icon: '🔗', text: '<strong>Sintaxis:</strong> =SI(cond1; val1; SI(cond2; val2; val3))' },
            { icon: '📊', text: '<strong>Ejemplo de notas:</strong> =SI(A1>=90; "Sobresaliente"; SI(A1>=70; "Notable"; SI(A1>=50; "Aprobado"; "Suspenso")))' },
            { icon: '💡', text: '<strong>Límite:</strong> Hasta 64 niveles, pero se recomienda usar IFS o BUSCAR para mayor claridad.' }
        ]
    },
    {
        title: 'Función IFS (alternativa a SI anidado)',
        content: [
            { icon: '🔄', text: '<strong>Sintaxis:</strong> =IFS(cond1; val1; cond2; val2; ...; [verdadero])' },
            { icon: '📝', text: '<strong>Ejemplo:</strong> =IFS(A1>=90; "Sobresaliente"; A1>=70; "Notable"; A1>=50; "Aprobado"; VERDADERO; "Suspenso")' },
            { icon: '✅', text: '<strong>Ventaja:</strong> Más legible que múltiples SI anidados.' }
        ]
    },
    {
        title: 'BUSCARV - Búsqueda vertical (paso a paso)',
        content: [
            { icon: '🔎', text: '<strong>Sintaxis:</strong> =BUSCARV(valor_buscado; tabla_matriz; num_columna; [ordenado])' },
            { icon: '📋', text: '<strong>Paso 1:</strong> Identifica el valor a buscar (ej. ID de producto).' },
            { icon: '📊', text: '<strong>Paso 2:</strong> Selecciona la tabla que contiene los datos (incluyendo la columna de búsqueda y la de retorno).' },
            { icon: '🔢', text: '<strong>Paso 3:</strong> Indica el número de columna de la cual quieres el resultado (1 = primera columna de la tabla).' },
            { icon: '🚫', text: '<strong>Paso 4:</strong> Usa FALSO para coincidencia exacta (recomendado).' }
        ],
        extra: '📌 <strong>Ejemplo:</strong> =BUSCARV("P001"; A2:C10; 3; FALSO) busca "P001" en A2:A10 y devuelve el valor de la columna C.'
    },
    {
        title: 'BUSCARV - Ejemplo con datos reales',
        content: [
            { icon: '📊', text: '<strong>Datos de ejemplo:</strong>' },
            { icon: '📋', text: 'Tabla: A1:C4 con Producto, Categoría, Precio. Buscar "Manzana" y devolver precio.' },
            { icon: '📝', text: '<strong>Fórmula:</strong> =BUSCARV("Manzana"; A2:C4; 3; FALSO) → 0.50 (ejemplo)' },
            { icon: '⚠️', text: '<strong>Error común:</strong> #N/D si no encuentra el valor. Usa SI.ERROR para manejar.' }
        ],
        table: [
            ['Producto', 'Categoría', 'Precio'],
            ['Manzana', 'Fruta', '0.50'],
            ['Leche', 'Lácteo', '1.20'],
            ['Pan', 'Panadería', '0.80']
        ]
    },
    {
        title: 'BUSCARH - Búsqueda horizontal',
        content: [
            { icon: '🔎', text: '<strong>Sintaxis:</strong> =BUSCARH(valor_buscado; tabla_matriz; num_fila; [ordenado])' },
            { icon: '📊', text: '<strong>Ejemplo:</strong> Buscar "Enero" en la primera fila y devolver el valor de la fila 3 (ventas).' },
            { icon: '🔄', text: '<strong>Diferencias:</strong> BUSCARV busca en columnas, BUSCARH en filas.' }
        ]
    },
    {
        title: 'COINCIDIR - Obtener posición',
        content: [
            { icon: '🎯', text: '<strong>Sintaxis:</strong> =COINCIDIR(valor_buscado; rango; [tipo])' },
            { icon: '🔢', text: '<strong>Ejemplo:</strong> =COINCIDIR("Manzana"; A2:A10; 0) devuelve la posición (ej. 3).' },
            { icon: '📌', text: '<strong>Tipo 0:</strong> coincidencia exacta (más usado).' }
        ]
    },
    {
        title: 'INDICE - Devolver valor por posición',
        content: [
            { icon: '📌', text: '<strong>Sintaxis:</strong> =INDICE(rango; num_fila; [num_columna])' },
            { icon: '📊', text: '<strong>Ejemplo:</strong> =INDICE(B2:B10; 3) devuelve el tercer valor de B2:B10.' },
            { icon: '🔗', text: '<strong>Combinación con COINCIDIR:</strong> =INDICE(rango_devolución; COINCIDIR(valor; rango_búsqueda; 0))' }
        ]
    },
    {
        title: 'BUSCARX (alternativa moderna)',
        content: [
            { icon: '🚀', text: '<strong>Disponible en Excel 2021 y 365.</strong> Más flexible que BUSCARV.' },
            { icon: '📝', text: '<strong>Sintaxis:</strong> =BUSCARX(valor; rango_búsqueda; rango_devolución; [si_no_se_encuentra]; [modo])' },
            { icon: '💡', text: '<strong>Ventajas:</strong> No requiere orden, puede buscar hacia arriba/izquierda, devuelve múltiples valores.' }
        ]
    },
    {
        title: 'Manejo de errores: SI.ERROR y SI.ND',
        content: [
            { icon: '⚠️', text: '<strong>SI.ERROR:</strong> =SI.ERROR(valor; valor_si_error) - captura cualquier error.' },
            { icon: '🚫', text: '<strong>SI.ND:</strong> =SI.ND(valor; valor_si_nd) - específico para #N/D.' },
            { icon: '🛡️', text: '<strong>Ejemplo:</strong> =SI.ERROR(BUSCARV(A2; B:C; 2; FALSO); "No encontrado")' }
        ]
    },
    {
        title: 'Ejercicios prácticos del día 1',
        content: [
            { icon: '📝', text: '<strong>Ejercicio 1:</strong> Clasificar edades en categorías (Niño, Adolescente, Adulto, Jubilado) usando SI anidado.' },
            { icon: '📝', text: '<strong>Ejercicio 2:</strong> Buscar el precio de un producto usando BUSCARV en una tabla de 50 productos.' },
            { icon: '📝', text: '<strong>Ejercicio 3:</strong> Usar INDICE+COINCIDIR para buscar en una tabla bidimensional (filas y columnas).' }
        ]
    },
    {
        title: 'Tablas dinámicas - Creación paso a paso',
        content: [
            { icon: '📊', text: '<strong>Paso 1:</strong> Selecciona el rango de datos (incluye encabezados).' },
            { icon: '🔄', text: '<strong>Paso 2:</strong> Ve a Insertar > Tabla dinámica.' },
            { icon: '📍', text: '<strong>Paso 3:</strong> Elige la ubicación (nueva hoja o existente).' },
            { icon: '📋', text: '<strong>Paso 4:</strong> Arrastra campos a FILAS, COLUMNAS, VALORES y FILTROS.' }
        ],
        tip: 'Asegúrate de que tus datos tengan encabezados únicos antes de crear la tabla dinámica.'
    },
    {
        title: 'Configurar campos de valores en tabla dinámica',
        content: [
            { icon: '🔢', text: '<strong>Por defecto:</strong> SUMA para campos numéricos, CONTARA para texto.' },
            { icon: '🔄', text: '<strong>Cambiar resumen:</strong> Clic derecho en el campo de valores > Configurar campo de valor > elegir: Promedio, Contar, Máx, Mín, etc.' },
            { icon: '📊', text: '<strong>Formato de número:</strong> Configurar campo de valor > Formato de número > elegir moneda, porcentaje, etc.' }
        ]
    },
    {
        title: 'Actualizar tabla dinámica y cambiar diseño',
        content: [
            { icon: '🔄', text: '<strong>Actualizar:</strong> Clic derecho > Actualizar, o en la pestaña Analizar > Actualizar.' },
            { icon: '🎨', text: '<strong>Estilos:</strong> Pestaña Diseño > Estilos de tabla dinámica.' },
            { icon: '📐', text: '<strong>Diseño:</strong> Mostrar subtotales, totales generales, diseño compacto/tabular/outline.' }
        ]
    },
    {
        title: 'Segmentaciones de datos (Slicers)',
        content: [
            { icon: '🧩', text: '<strong>Insertar segmentación:</strong> Seleccionar tabla dinámica > Analizar > Insertar segmentación.' },
            { icon: '🎛️', text: '<strong>Seleccionar campo:</strong> Ej. "Producto" o "Región". Aparece un panel con botones.' },
            { icon: '🔗', text: '<strong>Conectar a varias tablas:</strong> Clic derecho en segmentación > Conexiones de informe > elegir otras tablas.' }
        ]
    },
    {
        title: 'Formato condicional avanzado con fórmulas',
        content: [
            { icon: '🎨', text: '<strong>Inicio > Formato condicional > Nueva regla > Usar fórmula.</strong>' },
            { icon: '📐', text: '<strong>Ejemplo:</strong> Resaltar celdas donde el valor sea mayor que el promedio: =A1>PROMEDIO($A$1:$A$10)' },
            { icon: '🏷️', text: '<strong>Aplicar formato:</strong> Relleno verde para valores altos, rojo para bajos.' }
        ]
    },
    {
        title: 'Barras de datos y escalas de color',
        content: [
            { icon: '📊', text: '<strong>Barras de datos:</strong> Formato condicional > Barras de datos. Muestra una barra proporcional al valor.' },
            { icon: '🌈', text: '<strong>Escalas de color:</strong> Gradiente de dos o tres colores según el valor.' },
            { icon: '🏷️', text: '<strong>Conjuntos de iconos:</strong> Flechas, semáforos, estrellas para indicar tendencias.' }
        ]
    },
    {
        title: 'Validación de datos - Listas desplegables',
        content: [
            { icon: '✅', text: '<strong>Paso 1:</strong> Seleccionar celdas donde quieres la lista.' },
            { icon: '📋', text: '<strong>Paso 2:</strong> Datos > Validación de datos > Permitir: Lista.' },
            { icon: '📝', text: '<strong>Paso 3:</strong> En Origen, escribir valores separados por comas (ej. "Rojo,Azul,Verde") o seleccionar un rango.' },
            { icon: '💬', text: '<strong>Mensaje de entrada:</strong> Mostrar instrucciones al seleccionar la celda.' }
        ],
        tip: 'Puedes usar un rango en otra hoja para la lista, así es más fácil de mantener.'
    },
    {
        title: 'Validación de datos - Alertas y mensajes',
        content: [
            { icon: '⚠️', text: '<strong>Alerta de error:</strong> Configurar estilo (Alto, Advertencia, Información) y mensaje personalizado.' },
            { icon: '📝', text: '<strong>Mensaje de entrada:</strong> Se muestra cuando la celda está activa. Útil para dar instrucciones.' },
            { icon: '🔒', text: '<strong>Otras validaciones:</strong> Números enteros, decimales, fechas, longitud de texto, personalizada con fórmula.' }
        ]
    },
    {
        title: 'Funciones de texto: IZQUIERDA, DERECHA, EXTRAE',
        content: [
            { icon: '🔠', text: '<strong>IZQUIERDA:</strong> =IZQUIERDA(texto; num_caracteres) - extrae desde la izquierda.' },
            { icon: '🔡', text: '<strong>DERECHA:</strong> =DERECHA(texto; num_caracteres) - desde la derecha.' },
            { icon: '✂️', text: '<strong>EXTRAE:</strong> =EXTRAE(texto; pos_inicio; num_caracteres) - desde una posición específica.' },
            { icon: '📇', text: '<strong>Ejemplo:</strong> =EXTRAE("Excel2023"; 6; 4) → "2023"' }
        ]
    },
    {
        title: 'CONCATENAR y TEXTOUNIR',
        content: [
            { icon: '🔗', text: '<strong>CONCATENAR:</strong> =CONCATENAR(texto1; texto2; ...) o usar & (ej. A1 & " " & B1).' },
            { icon: '🧵', text: '<strong>TEXTOUNIR:</strong> =TEXTOUNIR(delimitador; ignorar_vacío; texto1; ...) - une varios textos con un delimitador.' },
            { icon: '📇', text: '<strong>Ejemplo:</strong> =TEXTOUNIR(", "; VERDADERO; A1:A5) → "Manzana, Pera, Naranja, ..."' }
        ]
    },
    {
        title: 'Ejercicios prácticos día 2',
        content: [
            { icon: '📝', text: '<strong>Ejercicio 1:</strong> Crear una tabla dinámica con datos de ventas por región y producto.' },
            { icon: '📝', text: '<strong>Ejercicio 2:</strong> Aplicar formato condicional para destacar los 5 valores más altos.' },
            { icon: '📝', text: '<strong>Ejercicio 3:</strong> Crear una lista desplegable con nombres de empleados y mostrar su departamento usando BUSCARV.' }
        ]
    },
    {
        title: 'Funciones de fecha y hora - HOY, AHORA, DIA, MES, AÑO',
        content: [
            { icon: '📅', text: '<strong>HOY:</strong> =HOY() - devuelve la fecha actual.' },
            { icon: '🕒', text: '<strong>AHORA:</strong> =AHORA() - fecha y hora actual.' },
            { icon: '📆', text: '<strong>DIA, MES, AÑO:</strong> =DIA(fecha), =MES(fecha), =AÑO(fecha) - extraen componentes.' },
            { icon: '📅', text: '<strong>DIAS.LAB:</strong> =DIAS.LAB(fecha_inicio; días; [feriados]) - calcula días hábiles.' }
        ]
    },
    {
        title: 'Función FECHA y operaciones con fechas',
        content: [
            { icon: '📆', text: '<strong>FECHA:</strong> =FECHA(año; mes; día) - crea una fecha.' },
            { icon: '➕', text: '<strong>Sumar días:</strong> =A1+30 (suma 30 días a la fecha en A1).' },
            { icon: '📅', text: '<strong>DIAS:</strong> =DIAS(fecha_final; fecha_inicial) - diferencia en días.' }
        ]
    },
    {
        title: 'Referencias 3D - Sumar en varias hojas',
        content: [
            { icon: '📚', text: '<strong>Referencia 3D:</strong> =SUMA(Hoja1:Hoja3!A1) - suma la celda A1 en las hojas Hoja1, Hoja2, Hoja3.' },
            { icon: '🔄', text: '<strong>Requisito:</strong> Las hojas deben estar contiguas en el orden de pestañas.' },
            { icon: '📊', text: '<strong>Uso típico:</strong> Consolidar datos mensuales donde cada mes es una hoja.' }
        ]
    },
    {
        title: 'Consolidación de datos por posición',
        content: [
            { icon: '📊', text: '<strong>Datos > Consolidar.</strong>' },
            { icon: '🔢', text: '<strong>Función:</strong> Elige SUMA, PROMEDIO, CONTAR, etc.' },
            { icon: '📋', text: '<strong>Referencias:</strong> Agrega los rangos de cada hoja que quieras consolidar.' },
            { icon: '🔗', text: '<strong>Crear vínculos:</strong> Marca la opción para que los datos se actualicen si cambian.' }
        ]
    },
    {
        title: 'Consolidación por etiquetas (filas y columnas)',
        content: [
            { icon: '🏷️', text: '<strong>Útil cuando las tablas tienen filas y columnas con nombres.</strong>' },
            { icon: '📊', text: '<strong>Procedimiento:</strong> En Consolidar, elige "Usar etiquetas de la fila superior" y "Usar etiquetas de la columna izquierda".' },
            { icon: '🔄', text: '<strong>Excel combina:</strong> Suma los valores que coinciden en fila y columna.' }
        ]
    },
    {
        title: 'Grabar una macro - Automatización básica',
        content: [
            { icon: '🎬', text: '<strong>Paso 1:</strong> Vista > Macros > Grabar macro.' },
            { icon: '📝', text: '<strong>Paso 2:</strong> Asigna un nombre y una tecla de método abreviado (opcional).' },
            { icon: '▶️', text: '<strong>Paso 3:</strong> Realiza las acciones que quieras grabar (formato, fórmulas, etc.).' },
            { icon: '⏹️', text: '<strong>Paso 4:</strong> Detener grabación.' }
        ]
    },
    {
        title: 'Ejecutar y asignar macro a un botón',
        content: [
            { icon: '▶️', text: '<strong>Ejecutar:</strong> Vista > Macros > Ver macros > seleccionar > Ejecutar.' },
            { icon: '🔘', text: '<strong>Asignar a botón:</strong> Insertar un botón de formulario (Desarrollador > Insertar > Botón). Asignar la macro.' },
            { icon: '📌', text: '<strong>Botón de Control de formulario:</strong> Se puede colocar en la hoja y asignar macro fácilmente.' }
        ]
    },
    {
        title: 'Introducción al Editor de VBA (Alt+F11)',
        content: [
            { icon: '📝', text: '<strong>Abrir editor:</strong> Alt+F11.' },
            { icon: '📂', text: '<strong>Estructura:</strong> Proyecto (VBAProject) > Módulos > Código.' },
            { icon: '✏️', text: '<strong>Escribir código:</strong> Sub Macro1() ... End Sub. Puedes modificar la macro grabada.' },
            { icon: '📖', text: '<strong>Ejemplo simple:</strong> Range("A1").Value = "Hola" - escribe en A1.' }
        ]
    },
    {
        title: 'Macro para aplicar formato automático',
        content: [
            { icon: '🎨', text: '<strong>Ejemplo de macro:</strong> Aplica negrita, color de fondo y bordes a una selección.' },
            { icon: '📝', text: '<strong>Código:</strong> Selection.Font.Bold = True; Selection.Interior.Color = RGB(255,255,0);' },
            { icon: '▶️', text: '<strong>Ejecutar:</strong> Selecciona un rango y ejecuta la macro.' }
        ]
    },
    {
        title: 'Resumen y siguientes pasos',
        content: [
            { icon: '🌟', text: '<strong>Has aprendido:</strong> Funciones lógicas avanzadas, búsquedas (BUSCARV, BUSCARH, INDICE+COINCIDIR, BUSCARX), tablas dinámicas, formato condicional avanzado, validación, funciones de texto y fecha, referencias 3D, consolidación y macros básicas.' },
            { icon: '🚀', text: '<strong>Siguiente nivel:</strong> VBA avanzado, Power Query, Power Pivot, modelos de datos, automatización compleja.' },
            { icon: '💪', text: '<strong>Práctica final:</strong> Crea un dashboard interactivo con tablas dinámicas, segmentaciones y formato condicional a partir de un conjunto de datos grande.' }
        ]
    }
];