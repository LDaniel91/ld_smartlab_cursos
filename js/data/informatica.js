/* ============================================================
   Datos del curso Informática (Básico + Intermedio)
   ============================================================ */

const CURSO_INFORMATICA_BASICO = [
    {
        title: '¿Qué es la informática?',
        content: [
            { icon: '💻', text: '<strong>Definición:</strong> La informática es la ciencia que estudia el tratamiento automático de la información mediante computadoras.' },
            { icon: '📀', text: '<strong>Áreas:</strong> Hardware (partes físicas), software (programas), redes, bases de datos, seguridad, etc.' },
            { icon: '🎯', text: '<strong>Objetivo del curso:</strong> Adquirir habilidades básicas para usar una computadora con confianza y eficiencia.' }
        ]
    },
    {
        title: 'Hardware básico: CPU, monitor, teclado, ratón',
        content: [
            { icon: '🖥️', text: '<strong>CPU (unidad central de procesamiento):</strong> Es el cerebro de la computadora, procesa todas las instrucciones.' },
            { icon: '🖥️', text: '<strong>Monitor:</strong> Muestra la información visualmente.' },
            { icon: '⌨️', text: '<strong>Teclado:</strong> Dispositivo de entrada para escribir texto y comandos.' },
            { icon: '🖱️', text: '<strong>Ratón:</strong> Permite señalar y seleccionar elementos en la pantalla.' }
        ]
    },
    {
        title: 'Software: sistemas operativos y aplicaciones',
        content: [
            { icon: '🖧', text: '<strong>Sistema operativo (SO):</strong> Programa que gestiona el hardware y permite ejecutar otras aplicaciones. Ej: Windows, macOS, Linux.' },
            { icon: '📱', text: '<strong>Aplicaciones:</strong> Programas que realizan tareas específicas: navegadores, procesadores de texto, hojas de cálculo, etc.' },
            { icon: '💡', text: '<strong>Ejemplos:</strong> Word, Excel, Chrome, Photoshop, reproductores multimedia.' }
        ]
    },
    {
        title: 'Encender y apagar la computadora correctamente',
        content: [
            { icon: '🔌', text: '<strong>Encender:</strong> Presionar el botón de encendido en la CPU o laptop. Esperar a que cargue el sistema operativo.' },
            { icon: '🔄', text: '<strong>Reiniciar:</strong> Usar la opción "Reiniciar" en el menú de inicio para solucionar problemas.' },
            { icon: '⏻', text: '<strong>Apagar:</strong> Siempre usar el menú de inicio > Apagar. No desconectar la corriente mientras está encendida.' }
        ]
    },
    {
        title: 'El escritorio y la barra de tareas (Windows)',
        content: [
            { icon: '🖥️', text: '<strong>Escritorio:</strong> Pantalla principal donde aparecen iconos de accesos directos y archivos.' },
            { icon: '📌', text: '<strong>Barra de tareas:</strong> Generalmente en la parte inferior. Muestra el botón de inicio, aplicaciones abiertas y el reloj.' },
            { icon: '📂', text: '<strong>Accesos directos:</strong> Iconos que abren programas o archivos al hacer doble clic.' }
        ]
    },
    {
        title: 'Navegar por el explorador de archivos',
        content: [
            { icon: '📁', text: '<strong>Explorador de archivos:</strong> Herramienta para ver y organizar archivos y carpetas.' },
            { icon: '🗂️', text: '<strong>Unidades:</strong> Disco local (C:), USB, discos externos.' },
            { icon: '📂', text: '<strong>Carpetas:</strong> Contenedores para organizar archivos. Se pueden crear, renombrar y eliminar.' }
        ]
    },
    {
        title: 'Crear, renombrar y eliminar carpetas',
        content: [
            { icon: '📁', text: '<strong>Crear carpeta:</strong> Clic derecho en el lugar deseado > Nuevo > Carpeta. Escribir el nombre.' },
            { icon: '✏️', text: '<strong>Renombrar:</strong> Clic derecho sobre la carpeta > Cambiar nombre, o presionar F2.' },
            { icon: '🗑️', text: '<strong>Eliminar:</strong> Clic derecho > Eliminar o arrastrar a la Papelera de reciclaje.' }
        ]
    },
    {
        title: 'Copiar, mover y pegar archivos',
        content: [
            { icon: '📋', text: '<strong>Copiar (Ctrl+C):</strong> Duplica el archivo o carpeta en el portapapeles.' },
            { icon: '✂️', text: '<strong>Cortar (Ctrl+X):</strong> Mueve el archivo al portapapeles (se elimina del origen).' },
            { icon: '📋', text: '<strong>Pegar (Ctrl+V):</strong> Coloca el contenido del portapapeles en la ubicación actual.' }
        ]
    },
    {
        title: 'Buscar archivos y carpetas',
        content: [
            { icon: '🔍', text: '<strong>Buscar:</strong> En el explorador, usa la barra de búsqueda (lupa) para encontrar archivos por nombre.' },
            { icon: '📅', text: '<strong>Filtros:</strong> Puedes buscar por fecha, tipo de archivo (imagen, documento), tamaño.' },
            { icon: '💡', text: '<strong>Consejo:</strong> Usa el comodín * para búsquedas parciales (ej. *informe*.docx).' }
        ]
    },
    {
        title: 'Accesorios de Windows: Bloc de notas, Calculadora, Paint',
        content: [
            { icon: '📝', text: '<strong>Bloc de notas:</strong> Editor de texto simple para tomar notas rápidas.' },
            { icon: '🧮', text: '<strong>Calculadora:</strong> Realiza operaciones básicas y científicas.' },
            { icon: '🎨', text: '<strong>Paint:</strong> Editor de dibujo simple para crear y editar imágenes.' }
        ]
    },
    {
        title: 'Navegadores web: Edge, Chrome, Firefox',
        content: [
            { icon: '🌐', text: '<strong>Navegadores:</strong> Programas para acceder a páginas web. Los más comunes: Microsoft Edge, Google Chrome, Mozilla Firefox.' },
            { icon: '🔗', text: '<strong>Barra de direcciones:</strong> Escribe la URL (ej. www.google.com) y presiona Enter.' },
            { icon: '📑', text: '<strong>Pestañas:</strong> Abrir varias páginas en la misma ventana (Ctrl+T nueva pestaña).' }
        ]
    },
    {
        title: 'Uso básico de un motor de búsqueda (Google)',
        content: [
            { icon: '🔎', text: '<strong>Buscar:</strong> Escribe palabras clave en la barra de búsqueda y presiona Enter.' },
            { icon: '📋', text: '<strong>Resultados:</strong> Haz clic en los enlaces para visitar las páginas.' },
            { icon: '💡', text: '<strong>Consejos:</strong> Usa comillas para búsquedas exactas ("receta de paella"). Usa - para excluir palabras.' }
        ]
    },
    {
        title: 'Correo electrónico: crear cuenta, enviar y recibir',
        content: [
            { icon: '✉️', text: '<strong>Crear cuenta:</strong> Ve a Gmail, Outlook u otro proveedor y sigue los pasos para registrarte.' },
            { icon: '📨', text: '<strong>Enviar correo:</strong> Haz clic en "Redactar" o "Nuevo", escribe el destinatario, asunto y mensaje.' },
            { icon: '📬', text: '<strong>Recibir:</strong> Revisa la bandeja de entrada. Haz clic en los correos para leerlos.' }
        ]
    },
    {
        title: 'Redes sociales básicas (Facebook, Instagram, WhatsApp)',
        content: [
            { icon: '📱', text: '<strong>Facebook:</strong> Red social para conectar con amigos, compartir publicaciones, fotos y eventos.' },
            { icon: '📸', text: '<strong>Instagram:</strong> Enfocado en compartir fotos y videos cortos, con historias y mensajes directos.' },
            { icon: '💬', text: '<strong>WhatsApp:</strong> Aplicación de mensajería instantánea para enviar mensajes, llamadas y videollamadas.' }
        ]
    },
    {
        title: 'Almacenamiento en la nube: OneDrive, Google Drive, Dropbox',
        content: [
            { icon: '☁️', text: '<strong>Nube:</strong> Servicio que permite guardar archivos en internet y acceder desde cualquier dispositivo.' },
            { icon: '📂', text: '<strong>Google Drive:</strong> Ofrece 15 GB gratis, integración con Gmail y documentos.' },
            { icon: '💾', text: '<strong>OneDrive:</strong> Integrado con Windows y Office, ofrece 5 GB gratis.' },
            { icon: '📁', text: '<strong>Dropbox:</strong> Popular por su simplicidad, ofrece 2 GB gratis.' }
        ]
    },
    {
        title: 'Seguridad básica: contraseñas, antivirus, phishing',
        content: [
            { icon: '🔒', text: '<strong>Contraseñas seguras:</strong> Usa al menos 8 caracteres con mayúsculas, minúsculas, números y símbolos. No uses la misma para todo.' },
            { icon: '🛡️', text: '<strong>Antivirus:</strong> Programa que protege contra virus y malware. Windows trae Microsoft Defender.' },
            { icon: '🎣', text: '<strong>Phishing:</strong> Correos o mensajes falsos que intentan robar información. No hagas clic en enlaces sospechosos.' }
        ]
    },
    {
        title: 'Conectar dispositivos: USB, impresora, auriculares',
        content: [
            { icon: '🔌', text: '<strong>USB:</strong> Conecta la memoria USB a un puerto. Aparecerá como unidad en el explorador.' },
            { icon: '🖨️', text: '<strong>Impresora:</strong> Conecta vía USB o Wi-Fi. Instala los controladores si es necesario.' },
            { icon: '🎧', text: '<strong>Auriculares:</strong> Conéctalos al puerto de audio o vía Bluetooth.' }
        ]
    },
    {
        title: 'Imprimir documentos (paso a paso)',
        content: [
            { icon: '🖨️', text: '<strong>Paso 1:</strong> Abre el documento o imagen que quieres imprimir.' },
            { icon: '📋', text: '<strong>Paso 2:</strong> Ve a Archivo > Imprimir o presiona Ctrl+P.' },
            { icon: '📄', text: '<strong>Paso 3:</strong> Selecciona la impresora, número de copias, páginas a imprimir.' },
            { icon: '▶️', text: '<strong>Paso 4:</strong> Haz clic en Imprimir.' }
        ]
    },
    {
        title: 'Resolución de problemas comunes',
        content: [
            { icon: '🔄', text: '<strong>Computadora lenta:</strong> Cierra programas no usados, reinicia, verifica espacio en disco.' },
            { icon: '🚫', text: '<strong>No responde:</strong> Presiona Ctrl+Alt+Supr y abre el Administrador de tareas para finalizar aplicaciones.' },
            { icon: '🔌', text: '<strong>Sin internet:</strong> Verifica el cable o Wi-Fi, reinicia el módem.' }
        ]
    },
    {
        title: 'Atajos de teclado esenciales',
        content: [
            { icon: '⌨️', text: '<strong>Ctrl+C:</strong> Copiar.' },
            { icon: '⌨️', text: '<strong>Ctrl+V:</strong> Pegar.' },
            { icon: '⌨️', text: '<strong>Ctrl+X:</strong> Cortar.' },
            { icon: '⌨️', text: '<strong>Ctrl+Z:</strong> Deshacer.' },
            { icon: '⌨️', text: '<strong>Alt+Tab:</strong> Cambiar entre ventanas abiertas.' },
            { icon: '⌨️', text: '<strong>Ctrl+S:</strong> Guardar.' }
        ]
    },
    {
        title: 'Resumen y consejos (Básico)',
        content: [
            { icon: '🌟', text: '<strong>Has aprendido:</strong> Conceptos de hardware/software, uso del sistema operativo, archivos y carpetas, navegación web, correo electrónico, redes sociales, nube, seguridad básica, impresión y resolución de problemas.' },
            { icon: '🚀', text: '<strong>Siguiente nivel:</strong> Informática Intermedia profundiza en redes, ofimática avanzada, mantenimiento, virtualización y más.' },
            { icon: '💪', text: '<strong>Práctica:</strong> Crea una estructura de carpetas para tus documentos, envía un correo con un archivo adjunto y busca información en Google usando filtros.' }
        ]
    }
];

const CURSO_INFORMATICA_INTERMEDIO = [
    {
        title: 'Redes informáticas: LAN, WAN, Internet',
        content: [
            { icon: '🌐', text: '<strong>Red LAN:</strong> Red local que conecta dispositivos en un área pequeña (oficina, casa).' },
            { icon: '🌍', text: '<strong>WAN:</strong> Red de área amplia, como Internet, que conecta redes de todo el mundo.' },
            { icon: '📶', text: '<strong>Wi-Fi:</strong> Tecnología inalámbrica para conectar dispositivos a la red sin cables.' }
        ]
    },
    {
        title: 'Configurar una red doméstica (router, DHCP, IP)',
        content: [
            { icon: '📶', text: '<strong>Router:</strong> Dispositivo que distribuye la señal de internet a los dispositivos.' },
            { icon: '🔢', text: '<strong>IP:</strong> Dirección única que identifica cada dispositivo en la red.' },
            { icon: '⚙️', text: '<strong>DHCP:</strong> Protocolo que asigna automáticamente direcciones IP a los dispositivos.' }
        ]
    },
    {
        title: 'Periféricos avanzados: escáner, webcam, micrófono',
        content: [
            { icon: '🖨️', text: '<strong>Escáner:</strong> Digitaliza documentos e imágenes, convirtiéndolos en archivos.' },
            { icon: '🎥', text: '<strong>Webcam:</strong> Cámara para videoconferencias, transmisiones y grabación.' },
            { icon: '🎤', text: '<strong>Micrófono:</strong> Captura audio para llamadas, grabaciones o asistentes de voz.' }
        ]
    },
    {
        title: 'Virtualización: máquinas virtuales (VM)',
        content: [
            { icon: '🖥️', text: '<strong>Máquina virtual:</strong> Simulación de una computadora dentro de otra, permite probar sistemas operativos sin afectar el principal.' },
            { icon: '🔄', text: '<strong>Software:</strong> VirtualBox, VMware Workstation, Hyper-V (Windows).' },
            { icon: '💡', text: '<strong>Usos:</strong> Pruebas de software, entornos de desarrollo, ejecutar sistemas antiguos.' }
        ],
        tip: 'VirtualBox es gratuito y fácil de usar para empezar con máquinas virtuales.'
    },
    {
        title: 'Almacenamiento en la nube avanzado (sincronización, copias de seguridad)',
        content: [
            { icon: '☁️', text: '<strong>Sincronización:</strong> Mantener los mismos archivos actualizados en múltiples dispositivos.' },
            { icon: '🔄', text: '<strong>Copia de seguridad automática:</strong> Programar respaldos periódicos en la nube.' },
            { icon: '🔒', text: '<strong>Cifrado:</strong> Proteger archivos con contraseña antes de subirlos a la nube.' }
        ]
    },
    {
        title: 'Ofimática avanzada: integración de documentos (Word, Excel, PowerPoint)',
        content: [
            { icon: '📊', text: '<strong>Vincular datos:</strong> Insertar hojas de Excel en Word o PowerPoint y mantener la actualización.' },
            { icon: '🔗', text: '<strong>Objetos incrustados:</strong> Insertar un documento de Word dentro de otro, o una presentación dentro de un informe.' },
            { icon: '📋', text: '<strong>Combinar correspondencia:</strong> Usar datos de Excel para generar cartas personalizadas en Word.' }
        ]
    },
    {
        title: 'Mantenimiento preventivo: limpieza de archivos, desfragmentación',
        content: [
            { icon: '🧹', text: '<strong>Liberador de espacio:</strong> Herramienta de Windows para eliminar archivos temporales y vaciar la papelera.' },
            { icon: '🔄', text: '<strong>Desfragmentación:</strong> Optimiza la ubicación de archivos en el disco duro para mejorar el rendimiento (no necesario en SSD).' },
            { icon: '📊', text: '<strong>Monitor de recursos:</strong> Ver el uso de CPU, memoria y disco para identificar cuellos de botella.' }
        ],
        extra: '🧹 <strong>Comando:</strong> cleanmgr (Liberador de espacio) en Ejecutar (Win+R).'
    },
    {
        title: 'Seguridad avanzada: firewall, VPN, autenticación de dos factores',
        content: [
            { icon: '🔥', text: '<strong>Firewall:</strong> Barrera que bloquea accesos no autorizados a la red o computadora.' },
            { icon: '🔒', text: '<strong>VPN:</strong> Red privada virtual que cifra la conexión y oculta la IP.' },
            { icon: '🔑', text: '<strong>Autenticación 2FA:</strong> Requiere un segundo factor (código SMS, app) además de la contraseña.' }
        ]
    },
    {
        title: 'Copias de seguridad (backup) locales y en la nube',
        content: [
            { icon: '💾', text: '<strong>Backup local:</strong> Guardar copias en discos externos o unidades USB.' },
            { icon: '☁️', text: '<strong>Backup en la nube:</strong> Usar servicios como Backblaze, Carbonite o iDrive.' },
            { icon: '📅', text: '<strong>Programación:</strong> Configurar copias automáticas diarias o semanales.' }
        ]
    },
    {
        title: 'Resolución de problemas avanzada: administrador de tareas, visor de eventos',
        content: [
            { icon: '🔧', text: '<strong>Administrador de tareas:</strong> Ctrl+Alt+Supr > Administrador de tareas. Permite finalizar procesos, ver rendimiento.' },
            { icon: '📋', text: '<strong>Visor de eventos:</strong> Muestra registros de errores y advertencias del sistema.' },
            { icon: '💡', text: '<strong>Consejo:</strong> Busca el código de error en internet para encontrar soluciones.' }
        ]
    },
    {
        title: 'Control parental y gestión de cuentas de usuario',
        content: [
            { icon: '👨‍👩‍👦', text: '<strong>Control parental:</strong> Limitar el tiempo de uso, bloquear contenido inapropiado y restringir compras.' },
            { icon: '👤', text: '<strong>Cuentas de usuario:</strong> Crear cuentas separadas para cada persona, con permisos específicos (administrador, estándar).' },
            { icon: '🔒', text: '<strong>Privacidad:</strong> Configurar qué información comparten las aplicaciones.' }
        ]
    },
    {
        title: 'Accesibilidad: herramientas para personas con discapacidad',
        content: [
            { icon: '👁️', text: '<strong>Narrador:</strong> Lee en voz alta el texto de la pantalla (Windows).' },
            { icon: '🔍', text: '<strong>Lupa:</strong> Amplía partes de la pantalla.' },
            { icon: '⌨️', text: '<strong>Teclado en pantalla:</strong> Permite escribir usando el ratón.' }
        ]
    },
    {
        title: 'Introducción a la programación: algoritmos y lógica básica',
        content: [
            { icon: '🧩', text: '<strong>Algoritmo:</strong> Secuencia de pasos para resolver un problema. Ej: receta de cocina.' },
            { icon: '🔤', text: '<strong>Lenguajes:</strong> Python, JavaScript, C#, etc. Se usan para escribir programas.' },
            { icon: '📝', text: '<strong>Estructuras:</strong> Condicionales (SI), bucles (PARA, MIENTRAS) y variables.' }
        ]
    },
    {
        title: 'Automatización con scripts simples (Batch, PowerShell)',
        content: [
            { icon: '📜', text: '<strong>Batch (.bat):</strong> Scripts para Windows que ejecutan comandos en secuencia.' },
            { icon: '🔧', text: '<strong>PowerShell:</strong> Shell avanzado con capacidades de automatización y administración.' },
            { icon: '📁', text: '<strong>Ejemplo:</strong> Crear un script que copie archivos de una carpeta a otra automáticamente.' }
        ]
    },
    {
        title: 'Bases de datos: conceptos básicos (tablas, registros, SQL)',
        content: [
            { icon: '📊', text: '<strong>Base de datos:</strong> Conjunto de datos organizados para su fácil acceso y gestión.' },
            { icon: '📋', text: '<strong>Tablas:</strong> Estructura con filas (registros) y columnas (campos).' },
            { icon: '🔍', text: '<strong>SQL:</strong> Lenguaje de consulta para recuperar y manipular datos (SELECT, INSERT, UPDATE).' }
        ]
    },
    {
        title: 'Administración básica de sistemas: usuarios, permisos, servicios',
        content: [
            { icon: '👤', text: '<strong>Usuarios:</strong> Crear y administrar cuentas de usuario, asignar contraseñas.' },
            { icon: '🔒', text: '<strong>Permisos:</strong> Controlar qué archivos y carpetas puede acceder cada usuario.' },
            { icon: '⚙️', text: '<strong>Servicios:</strong> Programas que se ejecutan en segundo plano (impresión, actualizaciones).' }
        ]
    },
    {
        title: 'Internet de las cosas (IoT) y dispositivos inteligentes',
        content: [
            { icon: '📱', text: '<strong>IoT:</strong> Dispositivos conectados a internet que recopilan y comparten datos (termostatos, cámaras, electrodomésticos).' },
            { icon: '🏠', text: '<strong>Domótica:</strong> Automatización del hogar mediante asistentes como Alexa o Google Home.' },
            { icon: '🔐', text: '<strong>Seguridad:</strong> Cambiar contraseñas por defecto de los dispositivos IoT.' }
        ]
    },
    {
        title: 'Ética y legislación en informática (protección de datos, derechos de autor)',
        content: [
            { icon: '⚖️', text: '<strong>Protección de datos:</strong> Leyes como GDPR o LOPD regulan el tratamiento de datos personales.' },
            { icon: '📄', text: '<strong>Derechos de autor:</strong> Respetar la propiedad intelectual de software, música, imágenes.' },
            { icon: '🔒', text: '<strong>Privacidad:</strong> No compartir información sensible sin consentimiento.' }
        ]
    },
    {
        title: 'Atajos avanzados y productividad',
        content: [
            { icon: '⌨️', text: '<strong>Win+D:</strong> Mostrar escritorio.' },
            { icon: '⌨️', text: '<strong>Win+E:</strong> Abrir explorador de archivos.' },
            { icon: '⌨️', text: '<strong>Win+L:</strong> Bloquear la computadora.' },
            { icon: '⌨️', text: '<strong>Win+I:</strong> Abrir configuración.' },
            { icon: '⌨️', text: '<strong>Ctrl+Shift+Esc:</strong> Abrir administrador de tareas.' }
        ]
    },
    {
        title: 'Resumen y siguientes pasos (Intermedio)',
        content: [
            { icon: '🌟', text: '<strong>Has aprendido:</strong> Redes, virtualización, ofimática avanzada, mantenimiento, seguridad avanzada, copias de seguridad, accesibilidad, programación básica, automatización, bases de datos, administración de sistemas, IoT y ética.' },
            { icon: '🚀', text: '<strong>Siguiente nivel:</strong> Profundizar en programación (Python, JavaScript), administración de servidores, ciberseguridad, análisis de datos.' },
            { icon: '💪', text: '<strong>Proyecto final:</strong> Configura una red doméstica con DHCP, crea un script de copia de seguridad automática y diseña un pequeño informe sobre ciberseguridad.' }
        ]
    }
];