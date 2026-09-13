/* ============================================================
   LD SMARTLAB - Datos de cursos de idiomas
   ============================================================ */

const COURSES = {
  ingles: {
    name: "Inglés", flag: "🇬🇧",
    basico: [
      {
        title: "Lección 1: Saludos y presentaciones",
        subtitle: "Aprende a saludar y presentarte en inglés",
        vocab: [
          {w:"Hello", p:"/jeˈloʊ/", t:"Hola"},
          {w:"Good morning", p:"/ɡʊd ˈmɔːrnɪŋ/", t:"Buenos días"},
          {w:"Good afternoon", p:"/ɡʊd ˌæftərˈnuːn/", t:"Buenas tardes"},
          {w:"Good evening", p:"/ɡʊd ˈiːvnɪŋ/", t:"Buenas noches (saludo)"},
          {w:"Goodbye", p:"/ɡʊdˈbaɪ/", t:"Adiós"},
          {w:"Please", p:"/pliːz/", t:"Por favor"},
          {w:"Thank you", p:"/θæŋk juː/", t:"Gracias"},
          {w:"My name is...", p:"/maɪ neɪm ɪz/", t:"Mi nombre es..."},
          {w:"Nice to meet you", p:"/naɪs tuː miːt juː/", t:"Encantado de conocerte"},
          {w:"How are you?", p:"/haʊ ɑːr juː/", t:"¿Cómo estás?"}
        ],
        phrases: [
          {o:"Hello, my name is Dani.", t:"Hola, mi nombre es Dani."},
          {o:"I'm from Cuba.", t:"Soy de Cuba."},
          {o:"What's your name?", t:"¿Cuál es tu nombre?"},
          {o:"I'm fine, thank you.", t:"Estoy bien, gracias."}
        ],
        dialogue: [
          {s:"Ana", l:"Hello! My name is Ana."},
          {s:"Luis", l:"Hi Ana! I'm Luis. Nice to meet you."},
          {s:"Ana", l:"Nice to meet you too. How are you?"},
          {s:"Luis", l:"I'm great, thanks. And you?"}
        ],
        culture: "En países angloparlantes, el handshake (estrechón de manos) es común en presentaciones formales. En contextos informales entre jóvenes, un simple 'Hi' basta.",
        quiz: [
          {q:"¿Cómo se dice 'Buenos días'?", opts:["Good night","Good morning","Good evening","Goodbye"], a:1},
          {q:"¿Qué significa 'Nice to meet you'?", opts:["Adiós","Buen viaje","Encantado de conocerte","¿Cómo estás?"], a:2},
          {q:"Traduce: 'Mi nombre es...'", opts:["I am...","My name is...","I have...","I like..."], a:1},
          {q:"¿Cuál es la forma correcta de agradecer?", opts:["Please","Sorry","Thank you","Hello"], a:2},
          {q:"¿Cómo preguntas '¿Cómo estás?'?", opts:["What is your name?","How are you?","Where are you?","Who are you?"], a:1}
        ]
      },
      {
        title: "Lección 2: Números y alfabeto",
        subtitle: "Domina los números del 1 al 20 y el alfabeto",
        vocab: [
          {w:"One", p:"/wʌn/", t:"Uno"}, {w:"Two", p:"/tuː/", t:"Dos"},
          {w:"Three", p:"/θriː/", t:"Tres"}, {w:"Four", p:"/fɔːr/", t:"Cuatro"},
          {w:"Five", p:"/faɪv/", t:"Cinco"}, {w:"Ten", p:"/tɛn/", t:"Diez"},
          {w:"Fifteen", p:"/ˌfɪfˈtiːn/", t:"Quince"}, {w:"Twenty", p:"/ˈtwɛnti/", t:"Veinte"},
          {w:"A", p:"/eɪ/", t:"Letra A"}, {w:"Z", p:"/ziː/", t:"Letra Z"}
        ],
        phrases: [
          {o:"I am thirty-five years old.", t:"Tengo treinta y cinco años."},
          {o:"My phone number is...", t:"Mi número de teléfono es..."},
          {o:"How many brothers do you have?", t:"¿Cuántos hermanos tienes?"}
        ],
        dialogue: [
          {s:"Teacher", l:"What's your phone number?"},
          {s:"Student", l:"It's five five five, zero one two three."},
          {s:"Teacher", l:"How old are you?"},
          {s:"Student", l:"I'm thirty-five."}
        ],
        culture: "En inglés americano los números de teléfono se dicen dígito por dígito. El cero se pronuncia 'zero' o 'oh'.",
        quiz: [
          {q:"¿Cómo se escribe 15?", opts:["Fiveteen","Fifteen","Fivteen","Fiftin"], a:1},
          {q:"¿Cuál es el número 'seven'?", opts:["6","7","8","9"], a:1},
          {q:"Traduce: 'Tengo 20 años'", opts:["I have 20 years","I am 20 years old","I'm 20 old","I have 20 old"], a:1},
          {q:"¿Cómo se pronuncia la letra 'Z' en inglés británico?", opts:["Zee","Zed","Zi","Ze"], a:1},
          {q:"¿Cuánto es 'twelve'?", opts:["10","11","12","13"], a:2}
        ]
      },
      {
        title: "Lección 3: La familia",
        subtitle: "Vocabulario para hablar de tu familia",
        vocab: [
          {w:"Father", p:"/ˈfɑːðər/", t:"Padre"}, {w:"Mother", p:"/ˈmʌðər/", t:"Madre"},
          {w:"Brother", p:"/ˈbrʌðər/", t:"Hermano"}, {w:"Sister", p:"/ˈsɪstər/", t:"Hermana"},
          {w:"Son", p:"/sʌn/", t:"Hijo"}, {w:"Daughter", p:"/ˈdɔːtər/", t:"Hija"},
          {w:"Grandfather", p:"/ˈɡrændˌfɑːðər/", t:"Abuelo"}, {w:"Grandmother", p:"/ˈɡrændˌmʌðər/", t:"Abuela"},
          {w:"Uncle", p:"/ˈʌŋkl/", t:"Tío"}, {w:"Aunt", p:"/ænt/", t:"Tía"}
        ],
        phrases: [
          {o:"I have two brothers and one sister.", t:"Tengo dos hermanos y una hermana."},
          {o:"My family is very big.", t:"Mi familia es muy grande."},
          {o:"This is my wife/husband.", t:"Esta es mi esposa/esposo."}
        ],
        dialogue: [
          {s:"María", l:"Do you have any siblings?"},
          {s:"Pedro", l:"Yes, I have one brother and two sisters."},
          {s:"María", l:"What are their names?"},
          {s:"Pedro", l:"My brother is Fernando and my sisters are Laura and Ana."}
        ],
        culture: "En inglés, 'siblings' es el término genérico para hermanos (sin importar género). 'Family' puede referirse tanto a familia nuclear como extendida.",
        quiz: [
          {q:"¿Cómo se dice 'abuela'?", opts:["Mother","Grandmother","Aunt","Sister"], a:1},
          {q:"¿Qué significa 'daughter'?", opts:["Hijo","Hija","Madre","Tía"], a:1},
          {q:"Traduce: 'Tengo un hermano'", opts:["I have a sister","I have a brother","I have an uncle","I have a son"], a:1},
          {q:"¿Cuál es el plural de 'child'?", opts:["Childs","Children","Childes","Childrens"], a:1},
          {q:"¿Cómo se dice 'esposo'?", opts:["Partner","Husband","Boyfriend","Father"], a:1}
        ]
      },
      {
        title: "Lección 4: Días, meses y estaciones",
        subtitle: "El tiempo calendario en inglés",
        vocab: [
          {w:"Monday", p:"/ˈmʌndeɪ/", t:"Lunes"}, {w:"Tuesday", p:"/ˈtuːzdeɪ/", t:"Martes"},
          {w:"Wednesday", p:"/ˈwɛnzdeɪ/", t:"Miércoles"}, {w:"January", p:"/ˈdʒænjueri/", t:"Enero"},
          {w:"February", p:"/ˈfɛbrueri/", t:"Febrero"}, {w:"March", p:"/mɑːrtʃ/", t:"Marzo"},
          {w:"Spring", p:"/sprɪŋ/", t:"Primavera"}, {w:"Summer", p:"/ˈsʌmər/", t:"Verano"},
          {w:"Autumn/Fall", p:"/ˈɔːtəm/ /fɔːl/", t:"Otoño"}, {w:"Winter", p:"/ˈwɪntər/", t:"Invierno"}
        ],
        phrases: [
          {o:"My birthday is in March.", t:"Mi cumpleaños es en marzo."},
          {o:"Today is Monday.", t:"Hoy es lunes."},
          {o:"I love summer.", t:"Me encanta el verano."}
        ],
        dialogue: [
          {s:"A", l:"What day is today?"},
          {s:"B", l:"Today is Wednesday."},
          {s:"A", l:"When is your birthday?"},
          {s:"B", l:"My birthday is on January 19th."}
        ],
        culture: "En inglés británico se usa más 'autumn', mientras que en inglés americano predomina 'fall'. Los meses y días siempre se escriben con mayúscula.",
        quiz: [
          {q:"¿Cómo se dice 'miércoles'?", opts:["Tuesday","Wednesday","Thursday","Monday"], a:1},
          {q:"¿Qué significa 'spring'?", opts:["Verano","Otoño","Primavera","Invierno"], a:2},
          {q:"¿En qué mes está el verano en el hemisferio norte?", opts:["January","June","September","December"], a:1},
          {q:"Traduce: 'Hoy es viernes'", opts:["Today is Thursday","Today is Friday","Today is Sunday","Today is Saturday"], a:1},
          {q:"¿Cómo se dice 'invierno'?", opts:["Winter","Summer","Spring","Fall"], a:0}
        ]
      },
      {
        title: "Lección 5: Colores y formas",
        subtitle: "Describe el mundo a tu alrededor",
        vocab: [
          {w:"Red", p:"/rɛd/", t:"Rojo"}, {w:"Blue", p:"/bluː/", t:"Azul"},
          {w:"Green", p:"/ɡriːn/", t:"Verde"}, {w:"Yellow", p:"/ˈjɛloʊ/", t:"Amarillo"},
          {w:"Black", p:"/blæk/", t:"Negro"}, {w:"White", p:"/waɪt/", t:"Blanco"},
          {w:"Circle", p:"/ˈsɜːrkl/", t:"Círculo"}, {w:"Square", p:"/skwɛr/", t:"Cuadrado"},
          {w:"Triangle", p:"/ˈtraɪæŋɡl/", t:"Triángulo"}, {w:"Rectangle", p:"/ˈrɛktæŋɡl/", t:"Rectángulo"}
        ],
        phrases: [
          {o:"The sky is blue.", t:"El cielo es azul."},
          {o:"My car is red.", t:"Mi carro es rojo."},
          {o:"The table is rectangular.", t:"La mesa es rectangular."}
        ],
        dialogue: [
          {s:"A", l:"What color is your house?"},
          {s:"B", l:"It's white with a red door."},
          {s:"A", l:"What shape is the window?"},
          {s:"B", l:"It's rectangular."}
        ],
        culture: "En inglés, los colores se usan como adjetivos sin concordancia: 'the red cars' (no 'reds').",
        quiz: [
          {q:"¿Cómo se dice 'verde'?", opts:["Blue","Green","Yellow","Red"], a:1},
          {q:"¿Qué significa 'circle'?", opts:["Cuadrado","Círculo","Triángulo","Rectángulo"], a:1},
          {q:"Traduce: 'El carro es negro'", opts:["The car is white","The car is black","The car is blue","The car is red"], a:1},
          {q:"¿Cómo se dice 'amarillo'?", opts:["Yellow","Orange","Gold","Brown"], a:0},
          {q:"¿Cuál es la forma de una pelota?", opts:["Square","Triangle","Circle","Rectangle"], a:2}
        ]
      },
      {
        title: "Lección 6: Comida y bebidas",
        subtitle: "Vocabulario esencial en la mesa",
        vocab: [
          {w:"Bread", p:"/brɛd/", t:"Pan"}, {w:"Water", p:"/ˈwɔːtər/", t:"Agua"},
          {w:"Meat", p:"/miːt/", t:"Carne"}, {w:"Fish", p:"/fɪʃ/", t:"Pescado"},
          {w:"Rice", p:"/raɪs/", t:"Arroz"}, {w:"Coffee", p:"/ˈkɒfi/", t:"Café"},
          {w:"Milk", p:"/mɪlk/", t:"Leche"}, {w:"Fruit", p:"/fruːt/", t:"Fruta"},
          {w:"Breakfast", p:"/ˈbrɛkfəst/", t:"Desayuno"}, {w:"Dinner", p:"/ˈdɪnər/", t:"Cena"}
        ],
        phrases: [
          {o:"I'm hungry.", t:"Tengo hambre."},
          {o:"I'd like a coffee, please.", t:"Quisiera un café, por favor."},
          {o:"The food is delicious.", t:"La comida está deliciosa."}
        ],
        dialogue: [
          {s:"Waiter", l:"Good evening. What would you like to order?"},
          {s:"Customer", l:"I'd like fish with rice, please."},
          {s:"Waiter", l:"And to drink?"},
          {s:"Customer", l:"A glass of water, please."}
        ],
        culture: "En países anglosajones, 'dinner' suele ser la comida principal del día, que puede ser al mediodía o por la noche según la región.",
        quiz: [
          {q:"¿Cómo se dice 'agua'?", opts:["Milk","Water","Juice","Coffee"], a:1},
          {q:"¿Qué significa 'breakfast'?", opts:["Almuerzo","Cena","Desayuno","Merienda"], a:2},
          {q:"Traduce: 'Tengo hambre'", opts:["I'm thirsty","I'm hungry","I'm tired","I'm full"], a:1},
          {q:"¿Cómo se dice 'pan'?", opts:["Bread","Rice","Meat","Fish"], a:0},
          {q:"¿Cuál es la palabra para 'café'?", opts:["Tea","Coffee","Milk","Water"], a:1}
        ]
      },
      {
        title: "Lección 7: La casa y habitaciones",
        subtitle: "Describe tu hogar en inglés",
        vocab: [
          {w:"House", p:"/haʊs/", t:"Casa"}, {w:"Room", p:"/ruːm/", t:"Habitación"},
          {w:"Kitchen", p:"/ˈkɪtʃɪn/", t:"Cocina"}, {w:"Bedroom", p:"/ˈbɛdruːm/", t:"Dormitorio"},
          {w:"Bathroom", p:"/ˈbɑːθruːm/", t:"Baño"}, {w:"Living room", p:"/ˈlɪvɪŋ ruːm/", t:"Sala"},
          {w:"Door", p:"/dɔːr/", t:"Puerta"}, {w:"Window", p:"/ˈwɪndoʊ/", t:"Ventana"},
          {w:"Table", p:"/ˈteɪbl/", t:"Mesa"}, {w:"Chair", p:"/tʃɛr/", t:"Silla"}
        ],
        phrases: [
          {o:"My house has three bedrooms.", t:"Mi casa tiene tres dormitorios."},
          {o:"The kitchen is big.", t:"La cocina es grande."},
          {o:"I'm in the living room.", t:"Estoy en la sala."}
        ],
        dialogue: [
          {s:"A", l:"How many rooms does your house have?"},
          {s:"B", l:"It has five rooms: two bedrooms, a kitchen, a bathroom and a living room."},
          {s:"A", l:"Is there a garden?"},
          {s:"B", l:"Yes, there's a small garden in the back."}
        ],
        culture: "En inglés, 'bathroom' incluye el inodoro. Si solo hay un lavabo, se dice 'restroom' o 'washroom' en contextos públicos.",
        quiz: [
          {q:"¿Cómo se dice 'cocina'?", opts:["Bedroom","Kitchen","Bathroom","Living room"], a:1},
          {q:"¿Qué significa 'window'?", opts:["Puerta","Ventana","Pared","Techo"], a:1},
          {q:"Traduce: 'Mi casa tiene dos dormitorios'", opts:["My house has two kitchens","My house has two bedrooms","My house has two bathrooms","My house has two living rooms"], a:1},
          {q:"¿Cómo se dice 'mesa'?", opts:["Chair","Table","Bed","Sofa"], a:1},
          {q:"¿Cuál es la palabra para 'silla'?", opts:["Table","Chair","Desk","Bed"], a:1}
        ]
      },
      {
        title: "Lección 8: La ciudad y direcciones",
        subtitle: "Muévete por la ciudad con confianza",
        vocab: [
          {w:"Street", p:"/striːt/", t:"Calle"}, {w:"City", p:"/ˈsɪti/", t:"Ciudad"},
          {w:"Hospital", p:"/ˈhɒspɪtl/", t:"Hospital"}, {w:"School", p:"/skuːl/", t:"Escuela"},
          {w:"Bank", p:"/bæŋk/", t:"Banco"}, {w:"Park", p:"/pɑːrk/", t:"Parque"},
          {w:"Left", p:"/lɛft/", t:"Izquierda"}, {w:"Right", p:"/raɪt/", t:"Derecha"},
          {w:"Straight", p:"/streɪt/", t:"Recto"}, {w:"Next to", p:"/nɛkst tuː/", t:"Al lado de"}
        ],
        phrases: [
          {o:"Where is the hospital?", t:"¿Dónde está el hospital?"},
          {o:"Turn left at the corner.", t:"Gira a la izquierda en la esquina."},
          {o:"It's next to the bank.", t:"Está al lado del banco."}
        ],
        dialogue: [
          {s:"Tourist", l:"Excuse me, where is the park?"},
          {s:"Local", l:"Go straight two blocks, then turn right."},
          {s:"Tourist", l:"Thank you very much!"},
          {s:"Local", l:"You're welcome."}
        ],
        culture: "En países anglosajones es común preguntar 'Excuse me' antes de interrumpir a un desconocido para pedir direcciones.",
        quiz: [
          {q:"¿Cómo se dice 'izquierda'?", opts:["Right","Left","Straight","Behind"], a:1},
          {q:"¿Qué significa 'hospital'?", opts:["Escuela","Hospital","Banco","Parque"], a:1},
          {q:"Traduce: 'Gira a la derecha'", opts:["Go straight","Turn left","Turn right","Go back"], a:2},
          {q:"¿Cómo se dice 'calle'?", opts:["Road","Street","Avenue","Highway"], a:1},
          {q:"¿Cuál es la palabra para 'ciudad'?", opts:["Town","City","Village","Country"], a:1}
        ]
      },
      {
        title: "Lección 9: Profesiones y trabajos",
        subtitle: "¿A qué te dedicas?",
        vocab: [
          {w:"Doctor", p:"/ˈdɒktər/", t:"Médico"}, {w:"Teacher", p:"/ˈtiːtʃər/", t:"Profesor"},
          {w:"Engineer", p:"/ˌɛndʒɪˈnɪr/", t:"Ingeniero"}, {w:"Nurse", p:"/nɜːrs/", t:"Enfermero/a"},
          {w:"Student", p:"/ˈstuːdnt/", t:"Estudiante"}, {w:"Police officer", p:"/pəˈliːs ˈɒfɪsər/", t:"Policía"},
          {w:"Driver", p:"/ˈdraɪvər/", t:"Conductor"}, {w:"Chef", p:"/ʃɛf/", t:"Cocinero"},
          {w:"Lawyer", p:"/ˈlɔːjər/", t:"Abogado"}, {w:"Programmer", p:"/ˈproʊɡræmər/", t:"Programador"}
        ],
        phrases: [
          {o:"What do you do?", t:"¿A qué te dedicas?"},
          {o:"I work at a hospital.", t:"Trabajo en un hospital."},
          {o:"She is an engineer.", t:"Ella es ingeniera."}
        ],
        dialogue: [
          {s:"A", l:"What do you do for a living?"},
          {s:"B", l:"I'm a computer engineer. I work at a military hospital."},
          {s:"A", l:"That sounds interesting!"},
          {s:"B", l:"Yes, I develop software for healthcare."}
        ],
        culture: "En inglés se usa 'a/an' antes de profesiones: 'I am AN engineer'. Nunca se omite el artículo como en español.",
        quiz: [
          {q:"¿Cómo se dice 'médico'?", opts:["Nurse","Doctor","Teacher","Engineer"], a:1},
          {q:"¿Qué significa 'engineer'?", opts:["Arquitecto","Ingeniero","Médico","Abogado"], a:1},
          {q:"Traduce: 'Soy profesor'", opts:["I am student","I am teacher","I am a teacher","I teacher"], a:2},
          {q:"¿Cómo se dice 'programador'?", opts:["Designer","Programmer","Developer","Engineer"], a:1},
          {q:"¿Cuál es la palabra para 'enfermero/a'?", opts:["Doctor","Nurse","Chef","Driver"], a:1}
        ]
      },
      {
        title: "Lección 10: Conversación cotidiana",
        subtitle: "Integra todo lo aprendido",
        vocab: [
          {w:"Today", p:"/təˈdeɪ/", t:"Hoy"}, {w:"Tomorrow", p:"/təˈmɒroʊ/", t:"Mañana"},
          {w:"Yesterday", p:"/ˈjɛstərdeɪ/", t:"Ayer"}, {w:"Always", p:"/ˈɔːlweɪz/", t:"Siempre"},
          {w:"Sometimes", p:"/ˈsʌmtaɪmz/", t:"A veces"}, {w:"Never", p:"/ˈnɛvər/", t:"Nunca"},
          {w:"Maybe", p:"/ˈmeɪbiː/", t:"Tal vez"}, {w:"Of course", p:"/əv kɔːrs/", t:"Por supuesto"},
          {w:"I think", p:"/aɪ θɪŋk/", t:"Yo creo"}, {w:"I don't know", p:"/aɪ doʊnt noʊ/", t:"No sé"}
        ],
        phrases: [
          {o:"I usually wake up at 7.", t:"Usualmente me despierto a las 7."},
          {o:"Sometimes I go to the gym.", t:"A veces voy al gimnasio."},
          {o:"I don't like cold weather.", t:"No me gusta el clima frío."}
        ],
        dialogue: [
          {s:"A", l:"What do you usually do on Sundays?"},
          {s:"B", l:"I usually spend time with my family. Sometimes we go to the park."},
          {s:"A", l:"Do you like cooking?"},
          {s:"B", l:"Yes, I love it! Of course, my son helps me sometimes."}
        ],
        culture: "Los adverbios de frecuencia (always, sometimes, never) van antes del verbo principal pero después del verbo 'to be'.",
        quiz: [
          {q:"¿Cómo se dice 'mañana' (tiempo)?", opts:["Today","Tomorrow","Yesterday","Now"], a:1},
          {q:"¿Qué significa 'sometimes'?", opts:["Siempre","Nunca","A veces","Casi nunca"], a:2},
          {q:"Traduce: 'No sé'", opts:["I don't understand","I don't know","I don't think","I don't like"], a:1},
          {q:"¿Cómo se dice 'por supuesto'?", opts:["Maybe","Of course","Perhaps","I think"], a:1},
          {q:"¿Cuál es el adverbio de 'siempre'?", opts:["Never","Sometimes","Always","Usually"], a:2}
        ]
      }
    ],
    intermedio: [
      {
        title: "Lección 1: Viajes y transporte",
        subtitle: "Desplázate con fluidez por el mundo",
        vocab: [
          {w:"Airport", p:"/ˈɛrpɔːrt/", t:"Aeropuerto"}, {w:"Flight", p:"/flaɪt/", t:"Vuelo"},
          {w:"Ticket", p:"/ˈtɪkɪt/", t:"Boleto"}, {w:"Luggage", p:"/ˈlʌɡɪdʒ/", t:"Equipaje"},
          {w:"Train", p:"/treɪn/", t:"Tren"}, {w:"Bus", p:"/bʌs/", t:"Autobús"},
          {w:"Subway", p:"/ˈsʌbweɪ/", t:"Metro"}, {w:"Reservation", p:"/ˌrɛzərˈveɪʃn/", t:"Reservación"},
          {w:"Departure", p:"/dɪˈpɑːrtʃər/", t:"Salida"}, {w:"Arrival", p:"/əˈraɪvl/", t:"Llegada"}
        ],
        phrases: [
          {o:"I'd like to book a flight to Madrid.", t:"Quisiera reservar un vuelo a Madrid."},
          {o:"What time does the train depart?", t:"¿A qué hora sale el tren?"},
          {o:"Where can I pick up my luggage?", t:"¿Dónde puedo recoger mi equipaje?"}
        ],
        dialogue: [
          {s:"Agent", l:"Good morning. How can I help you?"},
          {s:"Traveler", l:"I need to change my flight to tomorrow."},
          {s:"Agent", l:"Sure. There's a flight at 3:30 PM. Is that okay?"},
          {s:"Traveler", l:"Perfect, thank you."}
        ],
        culture: "En aeropuertos internacionales, 'gate' es la puerta de embarque. 'Boarding pass' es la tarjeta de embarque.",
        quiz: [
          {q:"¿Cómo se dice 'equipaje'?", opts:["Baggage","Luggage","Backpack","Suitcase"], a:1},
          {q:"¿Qué significa 'departure'?", opts:["Llegada","Salida","Escala","Retraso"], a:1},
          {q:"Traduce: 'Quisiera reservar un vuelo'", opts:["I want a flight","I'd like to book a flight","I need a ticket","I have a reservation"], a:1},
          {q:"¿Cómo se dice 'metro' (EE.UU.)?", opts:["Metro","Subway","Tube","Underground"], a:1},
          {q:"¿Cuál es la palabra para 'boleto'?", opts:["Pass","Ticket","Card","Voucher"], a:1}
        ]
      },
      {
        title: "Lección 2: Compras y dinero",
        subtitle: "Transacciona como un local",
        vocab: [
          {w:"Money", p:"/ˈmʌni/", t:"Dinero"}, {w:"Cash", p:"/kæʃ/", t:"Efectivo"},
          {w:"Credit card", p:"/ˈkrɛdɪt kɑːrd/", t:"Tarjeta de crédito"}, {w:"Price", p:"/praɪs/", t:"Precio"},
          {w:"Discount", p:"/ˈdɪskaʊnt/", t:"Descuento"}, {w:"Receipt", p:"/rɪˈsiːt/", t:"Recibo"},
          {w:"Expensive", p:"/ɪkˈspɛnsɪv/", t:"Caro"}, {w:"Cheap", p:"/tʃiːp/", t:"Barato"},
          {w:"Size", p:"/saɪz/", t:"Talla"}, {w:"Refund", p:"/ˈriːfʌnd/", t:"Reembolso"}
        ],
        phrases: [
          {o:"How much does this cost?", t:"¿Cuánto cuesta esto?"},
          {o:"Do you accept credit cards?", t:"¿Aceptan tarjetas de crédito?"},
          {o:"Can I get a refund?", t:"¿Puedo obtener un reembolso?"}
        ],
        dialogue: [
          {s:"Customer", l:"Excuse me, how much is this shirt?"},
          {s:"Clerk", l:"It's 25 dollars. We have a 10% discount today."},
          {s:"Customer", l:"Great. Can I pay by card?"},
          {s:"Clerk", l:"Of course. Here's your receipt."}
        ],
        culture: "En EE.UU. es común dar propina (tip) del 15-20% en restaurantes. En el Reino Unido, el 10-12.5% es más habitual.",
        quiz: [
          {q:"¿Cómo se dice 'descuento'?", opts:["Offer","Discount","Sale","Price"], a:1},
          {q:"¿Qué significa 'receipt'?", opts:["Receta","Recibo","Reembolso","Reserva"], a:1},
          {q:"Traduce: '¿Cuánto cuesta?'", opts:["What is this?","How much is this?","Where is this?","When is this?"], a:1},
          {q:"¿Cómo se dice 'caro'?", opts:["Cheap","Free","Expensive","Low"], a:2},
          {q:"¿Cuál es la palabra para 'efectivo'?", opts:["Card","Cash","Check","Coin"], a:1}
        ]
      },
      {
        title: "Lección 3: Salud y cuerpo humano",
        subtitle: "Comunica síntomas y necesidades médicas",
        vocab: [
          {w:"Headache", p:"/ˈhɛdeɪk/", t:"Dolor de cabeza"}, {w:"Fever", p:"/ˈfiːvər/", t:"Fiebre"},
          {w:"Cough", p:"/kɒf/", t:"Tos"}, {w:"Medicine", p:"/ˈmɛdɪsn/", t:"Medicina"},
          {w:"Appointment", p:"/əˈpɔɪntmənt/", t:"Cita"}, {w:"Symptom", p:"/ˈsɪmptəm/", t:"Síntoma"},
          {w:"Prescription", p:"/prɪˈskrɪpʃn/", t:"Receta médica"}, {w:"Allergy", p:"/ˈælərdʒi/", t:"Alergia"},
          {w:"Pain", p:"/peɪn/", t:"Dolor"}, {w:"Recovery", p:"/rɪˈkʌvəri/", t:"Recuperación"}
        ],
        phrases: [
          {o:"I have a headache and fever.", t:"Tengo dolor de cabeza y fiebre."},
          {o:"I'm allergic to penicillin.", t:"Soy alérgico a la penicilina."},
          {o:"I need to see a doctor.", t:"Necesito ver a un médico."}
        ],
        dialogue: [
          {s:"Doctor", l:"What seem to be the problem?"},
          {s:"Patient", l:"I've had a headache and fever for two days."},
          {s:"Doctor", l:"Are you allergic to any medication?"},
          {s:"Patient", l:"Yes, I'm allergic to penicillin."}
        ],
        culture: "En sistemas de salud anglosajones, primero se contacta al 'GP' (General Practitioner) antes de ir a un especialista.",
        quiz: [
          {q:"¿Cómo se dice 'fiebre'?", opts:["Cold","Fever","Flu","Cough"], a:1},
          {q:"¿Qué significa 'prescription'?", opts:["Presión","Receta médica","Presentación","Prevención"], a:1},
          {q:"Traduce: 'Soy alérgico a...'", opts:["I have pain...","I'm allergic to...","I need...","I feel..."], a:1},
          {q:"¿Cómo se dice 'dolor de cabeza'?", opts:["Stomachache","Headache","Backache","Toothache"], a:1},
          {q:"¿Cuál es la palabra para 'cita médica'?", opts:["Visit","Meeting","Appointment","Schedule"], a:2}
        ]
      },
      {
        title: "Lección 4: Clima y medio ambiente",
        subtitle: "Habla del tiempo y la naturaleza",
        vocab: [
          {w:"Weather", p:"/ˈwɛðər/", t:"Clima"}, {w:"Sunny", p:"/ˈsʌni/", t:"Soleado"},
          {w:"Rainy", p:"/ˈreɪni/", t:"Lluvioso"}, {w:"Cloudy", p:"/ˈklaʊdi/", t:"Nublado"},
          {w:"Temperature", p:"/ˈtɛmpərətʃər/", t:"Temperatura"}, {w:"Pollution", p:"/pəˈluːʃn/", t:"Contaminación"},
          {w:"Recycling", p:"/riːˈsaɪklɪŋ/", t:"Reciclaje"}, {w:"Environment", p:"/ɪnˈvaɪrənmənt/", t:"Medio ambiente"},
          {w:"Climate change", p:"/ˈklaɪmət tʃeɪndʒ/", t:"Cambio climático"}, {w:"Renewable", p:"/rɪˈnjuːəbl/", t:"Renovable"}
        ],
        phrases: [
          {o:"It's going to rain tomorrow.", t:"Va a llover mañana."},
          {o:"The temperature is 30 degrees.", t:"La temperatura es de 30 grados."},
          {o:"We should protect the environment.", t:"Debemos proteger el medio ambiente."}
        ],
        dialogue: [
          {s:"A", l:"What's the weather like today?"},
          {s:"B", l:"It's sunny but a bit windy. The temperature is around 28 degrees."},
          {s:"A", l:"Perfect for a walk. Have you heard about the new recycling program?"},
          {s:"B", l:"Yes! I think it will help reduce pollution."}
        ],
        culture: "En Reino Unido, hablar del clima es un tema de conversación social muy común, casi un ritual de cortesía.",
        quiz: [
          {q:"¿Cómo se dice 'lluvioso'?", opts:["Sunny","Rainy","Cloudy","Windy"], a:1},
          {q:"¿Qué significa 'climate change'?", opts:["Cambio de estación","Cambio climático","Clima cálido","Clima frío"], a:1},
          {q:"Traduce: 'La temperatura es de 25 grados'", opts:["It's 25 degrees","The weather is 25","It has 25 heat","The temp is 25"], a:0},
          {q:"¿Cómo se dice 'contaminación'?", opts:["Recycling","Pollution","Conservation","Protection"], a:1},
          {q:"¿Cuál es la palabra para 'renovable'?", opts:["Reusable","Recyclable","Renewable","Restorable"], a:2}
        ]
      },
      {
        title: "Lección 5: Trabajo y oficina",
        subtitle: "Comunícate profesionalmente",
        vocab: [
          {w:"Meeting", p:"/ˈmiːtɪŋ/", t:"Reunión"}, {w:"Deadline", p:"/ˈdɛdlaɪn/", t:"Fecha límite"},
          {w:"Project", p:"/ˈprɒdʒɛkt/", t:"Proyecto"}, {w:"Colleague", p:"/ˈkɒliːɡ/", t:"Colega"},
          {w:"Schedule", p:"/ˈʃɛdjuːl/", t:"Horario"}, {w:"Email", p:"/ˈiːmeɪl/", t:"Correo"},
          {w:"Report", p:"/rɪˈpɔːrt/", t:"Informe"}, {w:"Salary", p:"/ˈsæləri/", t:"Salario"},
          {w:"Promotion", p:"/prəˈmoʊʃn/", t:"Promoción"}, {w:"Remote work", p:"/rɪˈmoʊt wɜːrk/", t:"Trabajo remoto"}
        ],
        phrases: [
          {o:"Let's schedule a meeting for Monday.", t:"Programemos una reunión para el lunes."},
          {o:"The deadline is next Friday.", t:"La fecha límite es el próximo viernes."},
          {o:"I work remotely three days a week.", t:"Trabajo remotamente tres días a la semana."}
        ],
        dialogue: [
          {s:"Boss", l:"How's the project coming along?"},
          {s:"Employee", l:"It's going well. We'll meet the deadline."},
          {s:"Boss", l:"Great. Can you send me the report by email?"},
          {s:"Employee", l:"Sure, I'll send it this afternoon."}
        ],
        culture: "En entornos corporativos anglosajones, ser puntual es crucial. 'Time is money' es una filosofía muy arraigada.",
        quiz: [
          {q:"¿Cómo se dice 'fecha límite'?", opts:["Schedule","Deadline","Meeting","Report"], a:1},
          {q:"¿Qué significa 'colleague'?", opts:["Jefe","Cliente","Colega","Empleado"], a:2},
          {q:"Traduce: 'Trabajo remotamente'", opts:["I work from home","I work remotely","I work alone","I work online"], a:1},
          {q:"¿Cómo se dice 'reunión'?", opts:["Conference","Meeting","Event","Gathering"], a:1},
          {q:"¿Cuál es la palabra para 'salario'?", opts:["Money","Payment","Salary","Wage"], a:2}
        ]
      },
      {
        title: "Lección 6: Tecnología y comunicación",
        subtitle: "El lenguaje digital moderno",
        vocab: [
          {w:"Software", p:"/ˈsɒftwɛr/", t:"Software"}, {w:"Hardware", p:"/ˈhɑːrdwɛr/", t:"Hardware"},
          {w:"Network", p:"/ˈnɛtwɜːrk/", t:"Red"}, {w:"Database", p:"/ˈdeɪtəbeɪs/", t:"Base de datos"},
          {w:"Cloud", p:"/klaʊd/", t:"Nube"}, {w:"Artificial intelligence", p:"/ˌɑːrtɪˈfɪʃl ɪnˈtɛlɪdʒəns/", t:"Inteligencia artificial"},
          {w:"Cybersecurity", p:"/ˌsaɪbərsɪˈkjʊərəti/", t:"Ciberseguridad"}, {w:"Update", p:"/ˈʌpdeɪt/", t:"Actualizar"},
          {w:"Bug", p:"/bʌɡ/", t:"Error (informático)"}, {w:"Code", p:"/koʊd/", t:"Código"}
        ],
        phrases: [
          {o:"I develop software for healthcare.", t:"Desarrollo software para salud."},
          {o:"The system needs an update.", t:"El sistema necesita una actualización."},
          {o:"We use cloud storage.", t:"Usamos almacenamiento en la nube."}
        ],
        dialogue: [
          {s:"Dev", l:"I found a bug in the authentication module."},
          {s:"Lead", l:"Can you fix it before the next update?"},
          {s:"Dev", l:"Yes, I'll push the code to the repository tonight."},
          {s:"Lead", l:"Great. Also, let's improve the cybersecurity protocols."}
        ],
        culture: "En el mundo tech anglosajón, muchos términos se usan en inglés globalmente: 'bug', 'deploy', 'commit', 'merge'.",
        quiz: [
          {q:"¿Cómo se dice 'base de datos'?", opts:["Datastore","Database","Datacenter","Dataset"], a:1},
          {q:"¿Qué significa 'bug'?", opts:["Insecto","Error informático","Actualización","Función"], a:1},
          {q:"Traduce: 'Inteligencia artificial'", opts:["Automatic intelligence","Artificial intelligence","Advanced intelligence","Alternative intelligence"], a:1},
          {q:"¿Cómo se dice 'ciberseguridad'?", opts:["Netsecurity","Websecurity","Cybersecurity","Digitalsecurity"], a:2},
          {q:"¿Cuál es la palabra para 'nube' (tecnología)?" , opts:["Sky","Cloud","Server","Host"], a:1}
        ]
      },
      {
        title: "Lección 7: Cultura y tradiciones",
        subtitle: "Sumérgete en la cultura anglosajona",
        vocab: [
          {w:"Holiday", p:"/ˈhɒlɪdeɪ/", t:"Festivo/vacaciones"}, {w:"Celebration", p:"/ˌsɛlɪˈbreɪʃn/", t:"Celebración"},
          {w:"Tradition", p:"/trəˈdɪʃn/", t:"Tradición"}, {w:"Custom", p:"/ˈkʌstəm/", t:"Costumbre"},
          {w:"Festival", p:"/ˈfɛstɪvl/", t:"Festival"}, {w:"Gift", p:"/ɡɪft/", t:"Regalo"},
          {w:"Party", p:"/ˈpɑːrti/", t:"Fiesta"}, {w:"Wedding", p:"/ˈwɛdɪŋ/", t:"Boda"},
          {w:"Birthday", p:"/ˈbɜːrθdeɪ/", t:"Cumpleaños"}, {w:"Anniversary", p:"/ˌænɪˈvɜːrsəri/", t:"Aniversario"}
        ],
        phrases: [
          {o:"Merry Christmas!", t:"¡Feliz Navidad!"},
          {o:"Happy birthday!", t:"¡Feliz cumpleaños!"},
          {o:"We celebrate Thanksgiving in November.", t:"Celebramos Acción de Gracias en noviembre."}
        ],
        dialogue: [
          {s:"A", l:"How do you celebrate New Year's Eve?"},
          {s:"B", l:"We usually have dinner with family and watch the countdown."},
          {s:"A", l:"Do you exchange gifts?"},
          {s:"B", l:"Yes, and at midnight we toast with champagne."}
        ],
        culture: "Thanksgiving (EE.UU./Canadá) y Guy Fawkes Night (Reino Unido) son celebraciones únicas que reflejan historia local.",
        quiz: [
          {q:"¿Cómo se dice 'boda'?", opts:["Party","Wedding","Celebration","Anniversary"], a:1},
          {q:"¿Qué significa 'tradition'?", opts:["Costumbre","Tradición","Celebración","Festival"], a:1},
          {q:"Traduce: 'Feliz cumpleaños'", opts:["Happy holiday","Happy birthday","Happy anniversary","Happy party"], a:1},
          {q:"¿Cómo se dice 'regalo'?", opts:["Present","Gift","Prize","Reward"], a:1},
          {q:"¿Cuál es la fiesta del 31 de octubre?", opts:["Christmas","Halloween","Thanksgiving","Easter"], a:1}
        ]
      },
      {
        title: "Lección 8: Entretenimiento y ocio",
        subtitle: "Habla de lo que te gusta hacer",
        vocab: [
          {w:"Movie", p:"/ˈmuːvi/", t:"Película"}, {w:"Book", p:"/bʊk/", t:"Libro"},
          {w:"Concert", p:"/ˈkɒnsərt/", t:"Concierto"}, {w:"Museum", p:"/mjuːˈziːəm/", t:"Museo"},
          {w:"Theater", p:"/ˈθiːətər/", t:"Teatro"}, {w:"Hobby", p:"/ˈhɒbi/", t:"Pasatiempo"},
          {w:"Series", p:"/ˈsɪriːz/", t:"Serie"}, {w:"Game", p:"/ɡeɪm/", t:"Juego"},
          {w:"Travel", p:"/ˈtrævl/", t:"Viajar"}, {w:"Photography", p:"/fəˈtɒɡrəfi/", t:"Fotografía"}
        ],
        phrases: [
          {o:"I enjoy reading romantic novels.", t:"Disfruto leer novelas románticas."},
          {o:"What's your favorite movie?", t:"¿Cuál es tu película favorita?"},
          {o:"Let's go to the cinema tonight.", t:"Vamos al cine esta noche."}
        ],
        dialogue: [
          {s:"A", l:"What do you do in your free time?"},
          {s:"B", l:"I love watching series and reading. I'm also into photography."},
          {s:"A", l:"Nice! Have you seen any good movies lately?"},
          {s:"B", l:"Yes, I watched a great adventure film last weekend."}
        ],
        culture: "Hollywood (EE.UU.) y el West End (Londres) son los grandes centros mundiales del cine y el teatro en inglés.",
        quiz: [
          {q:"¿Cómo se dice 'película'?", opts:["Film","Movie","Video","Show"], a:1},
          {q:"¿Qué significa 'hobby'?", opts:["Trabajo","Pasatiempo","Deporte","Estudio"], a:1},
          {q:"Traduce: 'Me gusta leer'", opts:["I like write","I like read","I enjoy reading","I love book"], a:2},
          {q:"¿Cómo se dice 'museo'?", opts:["Gallery","Museum","Exhibition","Palace"], a:1},
          {q:"¿Cuál es la palabra para 'serie' (TV)?", opts:["Show","Program","Series","Episode"], a:2}
        ]
      },
      {
        title: "Lección 9: Educación y aprendizaje",
        subtitle: "El mundo académico en inglés",
        vocab: [
          {w:"University", p:"/ˌjuːnɪˈvɜːrsɪti/", t:"Universidad"}, {w:"Degree", p:"/dɪˈɡriː/", t:"Título"},
          {w:"Course", p:"/kɔːrs/", t:"Curso"}, {w:"Teacher", p:"/ˈtiːtʃər/", t:"Profesor"},
          {w:"Exam", p:"/ɪɡˈzæm/", t:"Examen"}, {w:"Homework", p:"/ˈhoʊmwɜːrk/", t:"Tarea"},
          {w:"Library", p:"/ˈlaɪbrəri/", t:"Biblioteca"}, {w:"Scholarship", p:"/ˈʃɒlərʃɪp/", t:"Beca"},
          {w:"Research", p:"/rɪˈsɜːrtʃ/", t:"Investigación"}, {w:"Thesis", p:"/ˈθiːsɪs/", t:"Tesis"}
        ],
        phrases: [
          {o:"I'm studying computer science.", t:"Estudio ciencias informáticas."},
          {o:"She has a PhD in medicine.", t:"Ella tiene un doctorado en medicina."},
          {o:"The exam is next week.", t:"El examen es la próxima semana."}
        ],
        dialogue: [
          {s:"Student", l:"Professor, I have a question about my thesis."},
          {s:"Professor", l:"Of course. What's the topic?"},
          {s:"Student", l:"It's about AI applications in healthcare."},
          {s:"Professor", l:"Excellent topic. Let's schedule a meeting to discuss it."}
        ],
        culture: "El sistema universitario anglosajón distingue: Bachelor (lic.), Master (máster) y PhD (doctorado).",
        quiz: [
          {q:"¿Cómo se dice 'beca'?", opts:["Grant","Scholarship","Award","Prize"], a:1},
          {q:"¿Qué significa 'thesis'?", opts:["Tema","Tesis","Teoría","Test"], a:1},
          {q:"Traduce: 'Estoy estudiando'", opts:["I study","I'm studying","I learn","I'm learning"], a:1},
          {q:"¿Cómo se dice 'biblioteca'?", opts:["Bookstore","Library","Archive","Study"], a:1},
          {q:"¿Cuál es la palabra para 'investigación'?", opts:["Study","Research","Analysis","Search"], a:1}
        ]
      },
      {
        title: "Lección 10: Relaciones y emociones",
        subtitle: "Expresa sentimientos con naturalidad",
        vocab: [
          {w:"Love", p:"/lʌv/", t:"Amor"}, {w:"Friendship", p:"/ˈfrɛndʃɪp/", t:"Amistad"},
          {w:"Happiness", p:"/ˈhæpɪnəs/", t:"Felicidad"}, {w:"Sadness", p:"/ˈsædnəs/", t:"Tristeza"},
          {w:"Trust", p:"/trʌst/", t:"Confianza"}, {w:"Respect", p:"/rɪˈspɛkt/", t:"Respeto"},
          {w:"Empathy", p:"/ˈɛmpəθi/", t:"Empatía"}, {w:"Relationship", p:"/rɪˈleɪʃnʃɪp/", t:"Relación"},
          {w:"Hug", p:"/hʌɡ/", t:"Abrazo"}, {w:"Apologize", p:"/əˈpɒlədʒaɪz/", t:"Disculparse"}
        ],
        phrases: [
          {o:"I love spending time with my family.", t:"Amo pasar tiempo con mi familia."},
          {o:"I'm sorry for being late.", t:"Perdón por llegar tarde."},
          {o:"I really appreciate your help.", t:"Realmente aprecio tu ayuda."}
        ],
        dialogue: [
          {s:"A", l:"You seem happy today. What happened?"},
          {s:"B", l:"I spent the weekend with my son. It was wonderful."},
          {s:"A", l:"That's great. Family is everything."},
          {s:"B", l:"I agree. I'm very grateful for them."}
        ],
        culture: "En culturas anglosajonas, expresar emociones abiertamente es cada vez más aceptado, especialmente tras la pandemia.",
        quiz: [
          {q:"¿Cómo se dice 'amistad'?", opts:["Love","Friendship","Relationship","Trust"], a:1},
          {q:"¿Qué significa 'empathy'?", opts:["Simpatía","Empatía","Antipatía","Apatía"], a:1},
          {q:"Traduce: 'Lo siento mucho'", opts:["I feel bad","I'm very sorry","I'm sad","I regret"], a:1},
          {q:"¿Cómo se dice 'abrazo'?", opts:["Kiss","Hug","Handshake","Pat"], a:1},
          {q:"¿Cuál es la palabra para 'confianza'?", opts:["Faith","Belief","Trust","Hope"], a:2}
        ]
      }
    ]
  },
  portugues: {
    name: "Portugués", flag: "🇵🇹",
    basico: [
      {
        title: "Lección 1: Saudações e apresentações",
        subtitle: "Aprende a saludar y presentarte en portugués",
        vocab: [
          {w:"Olá", p:"/oˈla/", t:"Hola"}, {w:"Bom dia", p:"/bõ ˈdʒia/", t:"Buenos días"},
          {w:"Boa tarde", p:"/ˈboa ˈtaʁdʒi/", t:"Buenas tardes"}, {w:"Boa noite", p:"/ˈboa ˈnoj.tʃi/", t:"Buenas noches"},
          {w:"Tchau", p:"/tʃaw/", t:"Adiós"}, {w:"Por favor", p:"/poʁ faˈvoʁ/", t:"Por favor"},
          {w:"Obrigado/a", p:"/obɾiˈɡadu/", t:"Gracias"}, {w:"Meu nome é...", p:"/mew ˈnõmi ɛ/", t:"Mi nombre es..."},
          {w:"Prazer", p:"/pɾaˈzeʁ/", t:"Gusto"}, {w:"Como vai?", p:"/ˈkomu vai/", t:"¿Cómo estás?"}
        ],
        phrases: [
          {o:"Olá, meu nome é Dani.", t:"Hola, mi nombre es Dani."},
          {o:"Eu sou de Cuba.", t:"Soy de Cuba."},
          {o:"Qual é o seu nome?", t:"¿Cuál es tu nombre?"},
          {o:"Estou bem, obrigado.", t:"Estoy bien, gracias."}
        ],
        dialogue: [
          {s:"Ana", l:"Olá! Meu nome é Ana."},
          {s:"Luis", l:"Oi Ana! Eu sou o Luis. Prazer em conhecê-la."},
          {s:"Ana", l:"O prazer é meu. Como vai você?"},
          {s:"Luis", l:"Estou ótimo, obrigado. E você?"}
        ],
        culture: "En Brasil se dice 'Oi' informalmente. En Portugal es más común 'Olá'. 'Obrigado' lo dice el hombre, 'obrigada' la mujer.",
        quiz: [
          {q:"¿Cómo se dice 'Buenos días'?", opts:["Boa noite","Bom dia","Boa tarde","Boa sorte"], a:1},
          {q:"¿Qué significa 'Prazer'?", opts:["Placer/Gusto","Plaza","Pregunta","Precio"], a:0},
          {q:"Traduce: 'Mi nombre es...'", opts:["Eu tenho...","Meu nome é...","Eu sou...","Eu estou..."], a:1},
          {q:"¿Cómo se dice 'Gracias' (dicho por hombre)?", opts:["Obrigada","Obrigado","Obrigação","Obrigante"], a:1},
          {q:"¿Cómo preguntas '¿Cómo estás?'?", opts:["Quem é você?","Como vai?","Onde está?","Quando vem?"], a:1}
        ]
      },
      {
        title: "Lección 2: Números e alfabeto",
        subtitle: "Los números del 1 al 20",
        vocab: [
          {w:"Um", p:"/ũ/", t:"Uno"}, {w:"Dois", p:"/dojs/", t:"Dos"},
          {w:"Três", p:"/tɾes/", t:"Tres"}, {w:"Quatro", p:"/ˈkwatɾu/", t:"Cuatro"},
          {w:"Cinco", p:"/ˈsĩku/", t:"Cinco"}, {w:"Dez", p:"/dɛs/", t:"Diez"},
          {w:"Quinze", p:"/ˈkĩzi/", t:"Quince"}, {w:"Vinte", p:"/ˈvĩtʃi/", t:"Veinte"},
          {w:"A", p:"/a/", t:"Letra A"}, {w:"Z", p:"/zɛ/", t:"Letra Z"}
        ],
        phrases: [
          {o:"Tenho trinta e cinco anos.", t:"Tengo treinta y cinco años."},
          {o:"Meu telefone é...", t:"Mi teléfono es..."},
          {o:"Quantos irmãos você tem?", t:"¿Cuántos hermanos tienes?"}
        ],
        dialogue: [
          {s:"Professor", l:"Qual é o seu número de telefone?"},
          {s:"Aluno", l:"É cinco cinco cinco, zero um dois três."},
          {s:"Professor", l:"Quantos anos você tem?"},
          {s:"Aluno", l:"Tenho trinta e cinco anos."}
        ],
        culture: "En portugués, los números compuestos usan 'e': 'trinta e cinco' (35), 'vinte e um' (21).",
        quiz: [
          {q:"¿Cómo se escribe 15?", opts:["Cinco","Quinze","Dezesseis","Catorze"], a:1},
          {q:"¿Cuál es el número 'sete'?", opts:["6","7","8","9"], a:1},
          {q:"Traduce: 'Tengo 20 años'", opts:["Tenho 20 anos","Sou 20 anos","Estou 20 anos","Fico 20 anos"], a:0},
          {q:"¿Cómo se dice 'ocho'?", opts:["Sete","Oito","Nove","Dez"], a:1},
          {q:"¿Cuánto es 'doze'?", opts:["10","11","12","13"], a:2}
        ]
      },
      {
        title: "Lección 3: A família",
        subtitle: "Vocabulario familiar",
        vocab: [
          {w:"Pai", p:"/paj/", t:"Padre"}, {w:"Mãe", p:"/mãj/", t:"Madre"},
          {w:"Irmão", p:"/iʁˈmɐ̃w/", t:"Hermano"}, {w:"Irmã", p:"/iʁˈmɐ̃/", t:"Hermana"},
          {w:"Filho", p:"/ˈfiʎu/", t:"Hijo"}, {w:"Filha", p:"/ˈfiʎa/", t:"Hija"},
          {w:"Avô", p:"/aˈvo/", t:"Abuelo"}, {w:"Avó", p:"/aˈvɔ/", t:"Abuela"},
          {w:"Tio", p:"/ˈtiu/", t:"Tío"}, {w:"Tia", p:"/ˈtia/", t:"Tía"}
        ],
        phrases: [
          {o:"Tenho dois irmãos e uma irmã.", t:"Tengo dos hermanos y una hermana."},
          {o:"Minha família é muito grande.", t:"Mi familia es muy grande."},
          {o:"Esta é minha esposa.", t:"Esta es mi esposa."}
        ],
        dialogue: [
          {s:"María", l:"Você tem irmãos?"},
          {s:"Pedro", l:"Sim, tenho um irmão e duas irmãs."},
          {s:"María", l:"Como eles se chamam?"},
          {s:"Pedro", l:"Meu irmão é Fernando e minhas irmãs são Laura e Ana."}
        ],
        culture: "En portugués brasileño, 'avô' (abuelo paterno) y 'avô materno' se distinguen por el contexto, igual que 'avó'.",
        quiz: [
          {q:"¿Cómo se dice 'abuela'?", opts:["Mãe","Avó","Tia","Irmã"], a:1},
          {q:"¿Qué significa 'filha'?", opts:["Hijo","Hija","Madre","Tía"], a:1},
          {q:"Traduce: 'Tengo un hermano'", opts:["Tenho uma irmã","Tenho um irmão","Tenho um tio","Tenho um filho"], a:1},
          {q:"¿Cuál es el plural de 'irmão'?", opts:["Irmãos","Irmães","Irmões","Irmans"], a:0},
          {q:"¿Cómo se dice 'esposo'?", opts:["Parceiro","Marido","Namorado","Pai"], a:1}
        ]
      },
      {
        title: "Lección 4: Dias, meses e estações",
        subtitle: "El tiempo calendario",
        vocab: [
          {w:"Segunda-feira", p:"/seˈgũda ˈfejɾa/", t:"Lunes"}, {w:"Terça-feira", p:"/ˈteʁsa ˈfejɾa/", t:"Martes"},
          {w:"Quarta-feira", p:"/ˈkwaʁta ˈfejɾa/", t:"Miércoles"}, {w:"Janeiro", p:"/ʒaˈnejɾu/", t:"Enero"},
          {w:"Fevereiro", p:"/feveˈɾejɾu/", t:"Febrero"}, {w:"Março", p:"/ˈmaʁsu/", t:"Marzo"},
          {w:"Primavera", p:"/pɾimaˈvɛɾa/", t:"Primavera"}, {w:"Verão", p:"/veˈɾɐ̃w/", t:"Verano"},
          {w:"Outono", p:"/oˈutowu/", t:"Otoño"}, {w:"Inverno", p:"/ĩˈveʁnu/", t:"Invierno"}
        ],
        phrases: [
          {o:"Meu aniversário é em março.", t:"Mi cumpleaños es en marzo."},
          {o:"Hoje é segunda-feira.", t:"Hoy es lunes."},
          {o:"Eu amo o verão.", t:"Amo el verano."}
        ],
        dialogue: [
          {s:"A", l:"Que dia é hoje?"},
          {s:"B", l:"Hoje é quarta-feira."},
          {s:"A", l:"Quando é seu aniversário?"},
          {s:"B", l:"Meu aniversário é em 19 de janeiro."}
        ],
        culture: "En portugués, los días de la semana llevan '-feira': segunda-feira, terça-feira, etc.",
        quiz: [
          {q:"¿Cómo se dice 'miércoles'?", opts:["Terça-feira","Quarta-feira","Quinta-feira","Segunda-feira"], a:1},
          {q:"¿Qué significa 'primavera'?", opts:["Verano","Otoño","Primavera","Invierno"], a:2},
          {q:"¿En qué mes está el verano en Brasil?", opts:["Janeiro","Junho","Setembro","Dezembro"], a:3},
          {q:"Traduce: 'Hoy es viernes'", opts:["Hoje é quinta","Hoje é sexta","Hoje é domingo","Hoje é sábado"], a:1},
          {q:"¿Cómo se dice 'invierno'?", opts:["Inverno","Verão","Primavera","Outono"], a:0}
        ]
      },
      {
        title: "Lección 5: Cores e formas",
        subtitle: "Describe el mundo",
        vocab: [
          {w:"Vermelho", p:"/veʁˈmeʎu/", t:"Rojo"}, {w:"Azul", p:"/aˈzuw/", t:"Azul"},
          {w:"Verde", p:"/ˈveʁdʒi/", t:"Verde"}, {w:"Amarelo", p:"/amaˈɾɛlu/", t:"Amarillo"},
          {w:"Preto", p:"/ˈpɾetu/", t:"Negro"}, {w:"Branco", p:"/ˈbɾɐ̃ku/", t:"Blanco"},
          {w:"Círculo", p:"/ˈsiʁkulu/", t:"Círculo"}, {w:"Quadrado", p:"/kwaˈdɾadu/", t:"Cuadrado"},
          {w:"Triângulo", p:"/tɾiˈɐ̃ɡulu/", t:"Triángulo"}, {w:"Retângulo", p:"/ʁeˈtɐ̃ɡulu/", t:"Rectángulo"}
        ],
        phrases: [
          {o:"O céu é azul.", t:"El cielo es azul."},
          {o:"Meu carro é vermelho.", t:"Mi carro es rojo."},
          {o:"A mesa é retangular.", t:"La mesa es rectangular."}
        ],
        dialogue: [
          {s:"A", l:"De que cor é sua casa?"},
          {s:"B", l:"É branca com a porta vermelha."},
          {s:"A", l:"Qual é a forma da janela?"},
          {s:"B", l:"É retangular."}
        ],
        culture: "En portugués, los colores concuerdan en género y número: 'carros vermelhos', 'casas brancas'.",
        quiz: [
          {q:"¿Cómo se dice 'verde'?", opts:["Azul","Verde","Amarelo","Vermelho"], a:1},
          {q:"¿Qué significa 'círculo'?", opts:["Cuadrado","Círculo","Triángulo","Rectángulo"], a:1},
          {q:"Traduce: 'El carro es negro'", opts:["O carro é branco","O carro é preto","O carro é azul","O carro é vermelho"], a:1},
          {q:"¿Cómo se dice 'amarillo'?", opts:["Amarelo","Laranja","Dourado","Marrom"], a:0},
          {q:"¿Cuál es la forma de una pelota?", opts:["Quadrado","Triângulo","Círculo","Retângulo"], a:2}
        ]
      },
      {
        title: "Lección 6: Comida e bebidas",
        subtitle: "Vocabulario gastronómico",
        vocab: [
          {w:"Pão", p:"/pɐ̃w/", t:"Pan"}, {w:"Água", p:"/ˈaɡwa/", t:"Agua"},
          {w:"Carne", p:"/ˈkaʁni/", t:"Carne"}, {w:"Peixe", p:"/ˈpejʃi/", t:"Pescado"},
          {w:"Arroz", p:"/aˈʁos/", t:"Arroz"}, {w:"Café", p:"/kaˈfɛ/", t:"Café"},
          {w:"Leite", p:"/ˈlejtʃi/", t:"Leche"}, {w:"Fruta", p:"/ˈfɾuta/", t:"Fruta"},
          {w:"Café da manhã", p:"/kaˈfɛ da maˈɲɐ̃/", t:"Desayuno"}, {w:"Jantar", p:"/ʒẽˈtaʁ/", t:"Cena"}
        ],
        phrases: [
          {o:"Estou com fome.", t:"Tengo hambre."},
          {o:"Quero um café, por favor.", t:"Quiero un café, por favor."},
          {o:"A comida está deliciosa.", t:"La comida está deliciosa."}
        ],
        dialogue: [
          {s:"Garçom", l:"Boa noite. O que gostaria de pedir?"},
          {s:"Cliente", l:"Quero peixe com arroz, por favor."},
          {s:"Garçom", l:"E para beber?"},
          {s:"Cliente", l:"Um copo de água, por favor."}
        ],
        culture: "En Brasil, 'feijoada' es el plato nacional: frijoles negros con carne de cerdo. En Portugal, el 'bacalhau' (bacalao) es icónico.",
        quiz: [
          {q:"¿Cómo se dice 'agua'?", opts:["Leite","Água","Suco","Café"], a:1},
          {q:"¿Qué significa 'café da manhã'?", opts:["Almuerzo","Cena","Desayuno","Merienda"], a:2},
          {q:"Traduce: 'Tengo hambre'", opts:["Estou com sede","Estou com fome","Estou cansado","Estou cheio"], a:1},
          {q:"¿Cómo se dice 'pan'?", opts:["Pão","Arroz","Carne","Peixe"], a:0},
          {q:"¿Cuál es la palabra para 'café'?", opts:["Chá","Café","Leite","Água"], a:1}
        ]
      },
      {
        title: "Lección 7: A casa e os cômodos",
        subtitle: "Describe tu hogar",
        vocab: [
          {w:"Casa", p:"/ˈkaza/", t:"Casa"}, {w:"Quarto", p:"/ˈkwaʁtu/", t:"Habitación"},
          {w:"Cozinha", p:"/koˈziɲa/", t:"Cocina"}, {w:"Dormitório", p:"/doʁmiˈtoɾju/", t:"Dormitorio"},
          {w:"Banheiro", p:"/bɐˈɲejɾu/", t:"Baño"}, {w:"Sala", p:"/ˈsala/", t:"Sala"},
          {w:"Porta", p:"/ˈpɔʁta/", t:"Puerta"}, {w:"Janela", p:"/ʒaˈnɛla/", t:"Ventana"},
          {w:"Mesa", p:"/ˈmeza/", t:"Mesa"}, {w:"Cadeira", p:"/kaˈdejɾa/", t:"Silla"}
        ],
        phrases: [
          {o:"Minha casa tem três quartos.", t:"Mi casa tiene tres habitaciones."},
          {o:"A cozinha é grande.", t:"La cocina es grande."},
          {o:"Estou na sala.", t:"Estoy en la sala."}
        ],
        dialogue: [
          {s:"A", l:"Quantos cômodos tem sua casa?"},
          {s:"B", l:"Tem cinco: dois quartos, cozinha, banheiro e sala."},
          {s:"A", l:"Tem jardim?"},
          {s:"B", l:"Sim, tem um jardim pequeno nos fundos."}
        ],
        culture: "En Brasil, 'banheiro' es el baño con inodoro. 'Lavabo' es solo lavabo.",
        quiz: [
          {q:"¿Cómo se dice 'cocina'?", opts:["Quarto","Cozinha","Banheiro","Sala"], a:1},
          {q:"¿Qué significa 'janela'?", opts:["Puerta","Ventana","Pared","Techo"], a:1},
          {q:"Traduce: 'Mi casa tiene dos dormitorios'", opts:["Minha casa tem duas cozinhas","Minha casa tem dois quartos","Minha casa tem dois banheiros","Minha casa tem duas salas"], a:1},
          {q:"¿Cómo se dice 'mesa'?", opts:["Cadeira","Mesa","Cama","Sofá"], a:1},
          {q:"¿Cuál es la palabra para 'silla'?", opts:["Mesa","Cadeira","Escrivaninha","Cama"], a:1}
        ]
      },
      {
        title: "Lección 8: A cidade e direções",
        subtitle: "Muévete por la ciudad",
        vocab: [
          {w:"Rua", p:"/ˈʁua/", t:"Calle"}, {w:"Cidade", p:"/siˈdadʒi/", t:"Ciudad"},
          {w:"Hospital", p:"/ospiˈtaw/", t:"Hospital"}, {w:"Escola", p:"/isˈkɔla/", t:"Escuela"},
          {w:"Banco", p:"/ˈbɐ̃ku/", t:"Banco"}, {w:"Parque", p:"/ˈpaʁki/", t:"Parque"},
          {w:"Esquerda", p:"/isˈkeʁda/", t:"Izquierda"}, {w:"Direita", p:"/diˈɾejta/", t:"Derecha"},
          {w:"Em frente", p:"/ẽ ˈfɾẽtʃi/", t:"Enfrente"}, {w:"Ao lado de", p:"/aw ˈladu dʒi/", t:"Al lado de"}
        ],
        phrases: [
          {o:"Onde fica o hospital?", t:"¿Dónde está el hospital?"},
          {o:"Vire à esquerda na esquina.", t:"Gira a la izquierda en la esquina."},
          {o:"Fica ao lado do banco.", t:"Está al lado del banco."}
        ],
        dialogue: [
          {s:"Turista", l:"Com licença, onde fica o parque?"},
          {s:"Morador", l:"Siga em frente duas quadras, depois vire à direita."},
          {s:"Turista", l:"Muito obrigado!"},
          {s:"Morador", l:"De nada."}
        ],
        culture: "En Brasil se dice 'Com licença' para pedir paso o atención. 'Por favor' es más para solicitudes.",
        quiz: [
          {q:"¿Cómo se dice 'izquierda'?", opts:["Direita","Esquerda","Em frente","Atrás"], a:1},
          {q:"¿Qué significa 'hospital'?", opts:["Escuela","Hospital","Banco","Parque"], a:1},
          {q:"Traduce: 'Gira a la derecha'", opts:["Siga em frente","Vire à esquerda","Vire à direita","Volte"], a:2},
          {q:"¿Cómo se dice 'calle'?", opts:["Estrada","Rua","Avenida","Rodovia"], a:1},
          {q:"¿Cuál es la palabra para 'ciudad'?", opts:["Vila","Cidade","Povoado","País"], a:1}
        ]
      },
      {
        title: "Lección 9: Profissões e trabalhos",
        subtitle: "¿A qué te dedicas?",
        vocab: [
          {w:"Médico", p:"/ˈmɛdʒiku/", t:"Médico"}, {w:"Professor", p:"/pɾofeˈsoʁ/", t:"Profesor"},
          {w:"Engenheiro", p:"/ẽʒeˈɲejɾu/", t:"Ingeniero"}, {w:"Enfermeiro", p:"/ẽfeʁˈmejɾu/", t:"Enfermero"},
          {w:"Estudante", p:"/istuˈdɐ̃tʃi/", t:"Estudiante"}, {w:"Policial", p:"/poliˈsjaw/", t:"Policía"},
          {w:"Motorista", p:"/motoˈɾista/", t:"Conductor"}, {w:"Cozinheiro", p:"/koziˈɲejɾu/", t:"Cocinero"},
          {w:"Advogado", p:"/advoˈɡadu/", t:"Abogado"}, {w:"Programador", p:"/pɾoɡɾamaˈdoʁ/", t:"Programador"}
        ],
        phrases: [
          {o:"O que você faz?", t:"¿A qué te dedicas?"},
          {o:"Trabalho em um hospital.", t:"Trabajo en un hospital."},
          {o:"Ela é engenheira.", t:"Ella es ingeniera."}
        ],
        dialogue: [
          {s:"A", l:"O que você faz da vida?"},
          {s:"B", l:"Sou engenheiro de computação. Trabalho em um hospital militar."},
          {s:"A", l:"Que interessante!"},
          {s:"B", l:"Sim, desenvolvo software para saúde."}
        ],
        culture: "En portugués, las profesiones tienen forma femenina: 'engenheira', 'médica', 'professora'.",
        quiz: [
          {q:"¿Cómo se dice 'médico'?", opts:["Enfermeiro","Médico","Professor","Engenheiro"], a:1},
          {q:"¿Qué significa 'engenheiro'?", opts:["Arquitecto","Ingeniero","Médico","Abogado"], a:1},
          {q:"Traduce: 'Soy profesor'", opts:["Sou estudante","Sou professor","Sou um professor","Eu professor"], a:1},
          {q:"¿Cómo se dice 'programador'?", opts:["Designer","Programador","Desenvolvedor","Engenheiro"], a:1},
          {q:"¿Cuál es la palabra para 'enfermero'?", opts:["Médico","Enfermeiro","Cozinheiro","Motorista"], a:1}
        ]
      },
      {
        title: "Lección 10: Conversação cotidiana",
        subtitle: "Integra todo lo aprendido",
        vocab: [
          {w:"Hoje", p:"/ˈoʒi/", t:"Hoy"}, {w:"Amanhã", p:"/amaˈɲɐ̃/", t:"Mañana"},
          {w:"Ontem", p:"/ˈõtẽj/", t:"Ayer"}, {w:"Sempre", p:"/ˈsẽpɾi/", t:"Siempre"},
          {w:"Às vezes", p:"/as ˈveziʃ/", t:"A veces"}, {w:"Nunca", p:"/ˈnũka/", t:"Nunca"},
          {w:"Talvez", p:"/tawˈvɛs/", t:"Tal vez"}, {w:"Claro", p:"/ˈklaɾu/", t:"Claro"},
          {w:"Eu acho", p:"/ew ˈaʃu/", t:"Yo creo"}, {w:"Não sei", p:"/nɐ̃w ˈsej/", t:"No sé"}
        ],
        phrases: [
          {o:"Geralmente acordo às 7.", t:"Usualmente me despierto a las 7."},
          {o:"Às vezes vou à academia.", t:"A veces voy al gimnasio."},
          {o:"Não gosto do tempo frio.", t:"No me gusta el clima frío."}
        ],
        dialogue: [
          {s:"A", l:"O que você costuma fazer aos domingos?"},
          {s:"B", l:"Geralmente passo tempo com minha família. Às vezes vamos ao parque."},
          {s:"A", l:"Você gosta de cozinhar?"},
          {s:"B", l:"Sim, adoro! Claro, meu filho às vezes me ajuda."}
        ],
        culture: "En portugués brasileño, 'costumar' + infinitivo expresa hábitos: 'costumo ler' = suelo leer.",
        quiz: [
          {q:"¿Cómo se dice 'mañana' (tiempo)?", opts:["Hoje","Amanhã","Ontem","Agora"], a:1},
          {q:"¿Qué significa 'às vezes'?", opts:["Siempre","Nunca","A veces","Casi nunca"], a:2},
          {q:"Traduce: 'No sé'", opts:["Não entendo","Não sei","Não acho","Não gosto"], a:1},
          {q:"¿Cómo se dice 'claro' (afirmación)?", opts:["Talvez","Claro","Quiçá","Acho"], a:1},
          {q:"¿Cuál es el adverbio de 'siempre'?", opts:["Nunca","Às vezes","Sempre","Geralmente"], a:2}
        ]
      }
    ],
    intermedio: [
      {
        title: "Lección 1: Viagens e transporte",
        subtitle: "Viaja con fluidez",
        vocab: [
          {w:"Aeroporto", p:"/aeɾuˈpoʁtu/", t:"Aeropuerto"}, {w:"Voo", p:"/vo/", t:"Vuelo"},
          {w:"Passagem", p:"/paˈsaʒẽj/", t:"Boleto"}, {w:"Bagagem", p:"/baˈɡaʒẽj/", t:"Equipaje"},
          {w:"Trem", p:"/tɾẽj/", t:"Tren"}, {w:"Ônibus", p:"/ˈõnibus/", t:"Autobús"},
          {w:"Metrô", p:"/meˈtɾɔ/", t:"Metro"}, {w:"Reserva", p:"/ʁeˈzɛʁva/", t:"Reservación"},
          {w:"Partida", p:"/paʁˈtʃida/", t:"Salida"}, {w:"Chegada", p:"/ʃeˈɡada/", t:"Llegada"}
        ],
        phrases: [
          {o:"Gostaria de reservar um voo para Madrid.", t:"Quisiera reservar un vuelo a Madrid."},
          {o:"A que horas o trem parte?", t:"¿A qué hora sale el tren?"},
          {o:"Onde posso pegar minha bagagem?", t:"¿Dónde puedo recoger mi equipaje?"}
        ],
        dialogue: [
          {s:"Agente", l:"Bom dia. Como posso ajudar?"},
          {s:"Viajante", l:"Preciso mudar meu voo para amanhã."},
          {s:"Agente", l:"Claro. Tem um voo às 15h30. Tudo bem?"},
          {s:"Viajante", l:"Perfeito, obrigado."}
        ],
        culture: "En Brasil se dice 'embarque' para boarding y 'desembarque' para desembarco.",
        quiz: [
          {q:"¿Cómo se dice 'equipaje'?", opts:["Mala","Bagagem","Mochila","Valise"], a:1},
          {q:"¿Qué significa 'partida'?", opts:["Llegada","Salida","Escala","Retraso"], a:1},
          {q:"Traduce: 'Quisiera reservar un vuelo'", opts:["Quero um voo","Gostaria de reservar um voo","Preciso de uma passagem","Tenho uma reserva"], a:1},
          {q:"¿Cómo se dice 'metro'?", opts:["Metro","Metrô","Subte","Subterrâneo"], a:1},
          {q:"¿Cuál es la palabra para 'boleto'?", opts:["Passe","Passagem","Cartão","Vale"], a:1}
        ]
      },
      {
        title: "Lección 2: Compras e dinheiro",
        subtitle: "Transacciona con confianza",
        vocab: [
          {w:"Dinheiro", p:"/diˈɲejɾu/", t:"Dinero"}, {w:"Dinheiro vivo", p:"/diˈɲejɾu ˈvivu/", t:"Efectivo"},
          {w:"Cartão de crédito", p:"/kaʁˈtɐ̃w dʒi kɾeˈditu/", t:"Tarjeta de crédito"}, {w:"Preço", p:"/ˈpɾesu/", t:"Precio"},
          {w:"Desconto", p:"/desˈkõtu/", t:"Descuento"}, {w:"Recibo", p:"/ʁeˈsibu/", t:"Recibo"},
          {w:"Caro", p:"/ˈkaɾu/", t:"Caro"}, {w:"Barato", p:"/baˈɾatu/", t:"Barato"},
          {w:"Tamanho", p:"/taˈmɐɲu/", t:"Talla"}, {w:"Devolução", p:"/devoluˈsɐ̃w/", t:"Devolución"}
        ],
        phrases: [
          {o:"Quanto custa isso?", t:"¿Cuánto cuesta esto?"},
          {o:"Aceitam cartão de crédito?", t:"¿Aceptan tarjetas de crédito?"},
          {o:"Posso ter um reembolso?", t:"¿Puedo obtener un reembolso?"}
        ],
        dialogue: [
          {s:"Cliente", l:"Com licença, quanto custa esta camisa?"},
          {s:"Vendedor", l:"São 25 reais. Hoje temos 10% de desconto."},
          {s:"Cliente", l:"Ótimo. Posso pagar com cartão?"},
          {s:"Vendedor", l:"Claro. Aqui está seu recibo."}
        ],
        culture: "En Brasil la moneda es el 'real' (R$). En Portugal, el euro (€).",
        quiz: [
          {q:"¿Cómo se dice 'descuento'?", opts:["Oferta","Desconto","Promoção","Preço"], a:1},
          {q:"¿Qué significa 'recibo'?", opts:["Receta","Recibo","Reembolso","Reserva"], a:1},
          {q:"Traduce: '¿Cuánto cuesta?'", opts:["O que é isso?","Quanto custa isso?","Onde é isso?","Quando é isso?"], a:1},
          {q:"¿Cómo se dice 'caro'?", opts:["Barato","Grátis","Caro","Baixo"], a:2},
          {q:"¿Cuál es la palabra para 'efectivo'?", opts:["Cartão","Dinheiro vivo","Cheque","Moeda"], a:1}
        ]
      },
      {
        title: "Lección 3: Saúde e corpo humano",
        subtitle: "Comunica síntomas",
        vocab: [
          {w:"Dor de cabeça", p:"/doʁ dʒi kaˈbesa/", t:"Dolor de cabeza"}, {w:"Febre", p:"/ˈfɛbɾi/", t:"Fiebre"},
          {w:"Tosse", p:"/ˈtosi/", t:"Tos"}, {w:"Remédio", p:"/ʁeˈmɛdʒu/", t:"Medicina"},
          {w:"Consulta", p:"/kõˈsuwta/", t:"Cita"}, {w:"Sintoma", p:"/sĩˈtoma/", t:"Síntoma"},
          {w:"Receita", p:"/ʁeˈsejta/", t:"Receta médica"}, {w:"Alergia", p:"/aleʁˈʒia/", t:"Alergia"},
          {w:"Dor", p:"/doʁ/", t:"Dolor"}, {w:"Recuperação", p:"/ʁekupeɾaˈsɐ̃w/", t:"Recuperación"}
        ],
        phrases: [
          {o:"Tenho dor de cabeça e febre.", t:"Tengo dolor de cabeza y fiebre."},
          {o:"Sou alérgico a penicilina.", t:"Soy alérgico a la penicilina."},
          {o:"Preciso consultar um médico.", t:"Necesito ver a un médico."}
        ],
        dialogue: [
          {s:"Médico", l:"Qual é o problema?"},
          {s:"Paciente", l:"Estou com dor de cabeça e febre há dois dias."},
          {s:"Médico", l:"Você é alérgico a algum medicamento?"},
          {s:"Paciente", l:"Sim, sou alérgico a penicilina."}
        ],
        culture: "En Brasil, el sistema público se llama SUS (Sistema Único de Saúde).",
        quiz: [
          {q:"¿Cómo se dice 'fiebre'?", opts:["Gripe","Febre","Resfriado","Tosse"], a:1},
          {q:"¿Qué significa 'receita'?", opts:["Presión","Receta médica","Presentación","Prevención"], a:1},
          {q:"Traduce: 'Soy alérgico a...'", opts:["Tenho dor...","Sou alérgico a...","Preciso...","Sinto..."], a:1},
          {q:"¿Cómo se dice 'dolor de cabeza'?", opts:["Dor de estômago","Dor de cabeça","Dor de costas","Dor de dente"], a:1},
          {q:"¿Cuál es la palabra para 'cita médica'?", opts:["Visita","Reunião","Consulta","Agenda"], a:2}
        ]
      },
      {
        title: "Lección 4: Clima e meio ambiente",
        subtitle: "Habla del tiempo y naturaleza",
        vocab: [
          {w:"Clima", p:"/ˈklima/", t:"Clima"}, {w:"Ensolarado", p:"/ẽsolaˈɾadu/", t:"Soleado"},
          {w:"Chuvoso", p:"/ʃuˈvozʊ/", t:"Lluvioso"}, {w:"Nublado", p:"/nuˈbladʊ/", t:"Nublado"},
          {w:"Temperatura", p:"/tẽpeɾaˈtuɾa/", t:"Temperatura"}, {w:"Poluição", p:"/poluˈsɐ̃w/", t:"Contaminación"},
          {w:"Reciclagem", p:"/ʁesiklaˈʒẽj/", t:"Reciclaje"}, {w:"Meio ambiente", p:"/ˈmejw ɐ̃ˈbjẽtʃi/", t:"Medio ambiente"},
          {w:"Mudança climática", p:"/muˈdɐ̃sa kliˈmatʃika/", t:"Cambio climático"}, {w:"Renovável", p:"/ʁenoˈvavɛw/", t:"Renovable"}
        ],
        phrases: [
          {o:"Vai chover amanhã.", t:"Va a llover mañana."},
          {o:"A temperatura é de 30 graus.", t:"La temperatura es de 30 grados."},
          {o:"Devemos proteger o meio ambiente.", t:"Debemos proteger el medio ambiente."}
        ],
        dialogue: [
          {s:"A", l:"Como está o tempo hoje?"},
          {s:"B", l:"Está ensolarado, mas um pouco ventoso. A temperatura está em 28 graus."},
          {s:"A", l:"Perfeito para uma caminhada. Você ouviu sobre o novo programa de reciclagem?"},
          {s:"B", l:"Sim! Acho que vai ajudar a reduzir a poluição."}
        ],
        culture: "El Amazonas es un tema central en la conciencia ambiental brasileña.",
        quiz: [
          {q:"¿Cómo se dice 'lluvioso'?", opts:["Ensolarado","Chuvoso","Nublado","Ventoso"], a:1},
          {q:"¿Qué significa 'mudança climática'?", opts:["Cambio de estación","Cambio climático","Clima cálido","Clima frío"], a:1},
          {q:"Traduce: 'La temperatura es de 25 grados'", opts:["Está 25 graus","O tempo é 25","Tem 25 de calor","A temp é 25"], a:0},
          {q:"¿Cómo se dice 'contaminación'?", opts:["Reciclagem","Poluição","Conservação","Proteção"], a:1},
          {q:"¿Cuál es la palabra para 'renovable'?", opts:["Reutilizável","Reciclável","Renovável","Restaurável"], a:2}
        ]
      },
      {
        title: "Lección 5: Trabalho e escritório",
        subtitle: "Comunicación profesional",
        vocab: [
          {w:"Reunião", p:"/ʃeũˈɲɐ̃w/", t:"Reunión"}, {w:"Prazo", p:"/ˈpɾazu/", t:"Fecha límite"},
          {w:"Projeto", p:"/pɾoˈʒetu/", t:"Proyecto"}, {w:"Colega", p:"/koˈlɛɡa/", t:"Colega"},
          {w:"Horário", p:"/oˈɾaɾju/", t:"Horario"}, {w:"E-mail", p:"/iˈmɛw/", t:"Correo"},
          {w:"Relatório", p:"/ʁelaˈtoɾju/", t:"Informe"}, {w:"Salário", p:"/saˈlaɾju/", t:"Salario"},
          {w:"Promoção", p:"/pɾomoˈsɐ̃w/", t:"Promoción"}, {w:"Trabalho remoto", p:"/tɾaˈbaʎu ʁeˈmotu/", t:"Trabajo remoto"}
        ],
        phrases: [
          {o:"Vamos agendar uma reunião para segunda.", t:"Programemos una reunión para el lunes."},
          {o:"O prazo é sexta que vem.", t:"La fecha límite es el próximo viernes."},
          {o:"Trabalho remotamente três dias por semana.", t:"Trabajo remotamente tres días a la semana."}
        ],
        dialogue: [
          {s:"Chefe", l:"Como está o projeto?"},
          {s:"Funcionário", l:"Está indo bem. Vamos cumprir o prazo."},
          {s:"Chefe", l:"Ótimo. Pode me enviar o relatório por e-mail?"},
          {s:"Funcionário", l:"Claro, envio ainda esta tarde."}
        ],
        culture: "En Brasil, la jornada laboral típica es de 44 horas semanales.",
        quiz: [
          {q:"¿Cómo se dice 'fecha límite'?", opts:["Horário","Prazo","Reunião","Relatório"], a:1},
          {q:"¿Qué significa 'colega'?", opts:["Jefe","Cliente","Colega","Empregado"], a:2},
          {q:"Traduce: 'Trabajo remotamente'", opts:["Trabalho em casa","Trabalho remotamente","Trabalho sozinho","Trabalho online"], a:1},
          {q:"¿Cómo se dice 'reunión'?", opts:["Conferência","Reunião","Evento","Encontro"], a:1},
          {q:"¿Cuál es la palabra para 'salario'?", opts:["Dinheiro","Pagamento","Salário","Ordenado"], a:2}
        ]
      },
      {
        title: "Lección 6: Tecnologia e comunicação",
        subtitle: "Lenguaje digital",
        vocab: [
          {w:"Software", p:"/ˈsoftweʁ/", t:"Software"}, {w:"Hardware", p:"/ˈxaʁdweʁ/", t:"Hardware"},
          {w:"Rede", p:"/ˈʁedʒi/", t:"Red"}, {w:"Banco de dados", p:"/ˈbɐ̃ku dʒi ˈdadus/", t:"Base de datos"},
          {w:"Nuvem", p:"/ˈnuvẽj/", t:"Nube"}, {w:"Inteligência artificial", p:"/ĩteliˈʒẽsjaw aʁtifiˈsjaw/", t:"Inteligencia artificial"},
          {w:"Cibersegurança", p:"/sibeʁseɡuˈɾɐ̃sa/", t:"Ciberseguridad"}, {w:"Atualização", p:"/atualizaˈsɐ̃w/", t:"Actualización"},
          {w:"Bug", p:"/bɡ/", t:"Error"}, {w:"Código", p:"/ˈkɔdʒigu/", t:"Código"}
        ],
        phrases: [
          {o:"Desenvolvo software para saúde.", t:"Desarrollo software para salud."},
          {o:"O sistema precisa de uma atualização.", t:"El sistema necesita una actualización."},
          {o:"Usamos armazenamento em nuvem.", t:"Usamos almacenamiento en la nube."}
        ],
        dialogue: [
          {s:"Dev", l:"Encontrei um bug no módulo de autenticação."},
          {s:"Líder", l:"Consegue corrigir antes da próxima atualização?"},
          {s:"Dev", l:"Sim, vou subir o código para o repositório hoje à noite."},
          {s:"Líder", l:"Ótimo. E vamos melhorar os protocolos de cibersegurança."}
        ],
        culture: "Brasil tiene un ecosistema tech pujante, con hubs en São Paulo, Florianópolis y Recife.",
        quiz: [
          {q:"¿Cómo se dice 'base de datos'?", opts:["Armazenamento","Banco de dados","Datacenter","Dataset"], a:1},
          {q:"¿Qué significa 'bug'?", opts:["Inseto","Erro informático","Atualização","Função"], a:1},
          {q:"Traduce: 'Inteligencia artificial'", opts:["Inteligência automática","Inteligência artificial","Inteligência avançada","Inteligência alternativa"], a:1},
          {q:"¿Cómo se dice 'ciberseguridad'?", opts:["Segurança de rede","Segurança web","Cibersegurança","Segurança digital"], a:2},
          {q:"¿Cuál es la palabra para 'nube' (tecnología)?", opts:["Céu","Nuvem","Servidor","Host"], a:1}
        ]
      },
      {
        title: "Lección 7: Cultura e tradições",
        subtitle: "Cultura lusófona",
        vocab: [
          {w:"Feriado", p:"/feˈɾjadu/", t:"Festivo"}, {w:"Comemoração", p:"/komemoɾaˈsɐ̃w/", t:"Celebración"},
          {w:"Tradição", p:"/tɾadiˈsɐ̃w/", t:"Tradición"}, {w:"Costume", p:"/kusˈtumi/", t:"Costumbre"},
          {w:"Festival", p:"/fɛstiˈvaw/", t:"Festival"}, {w:"Presente", p:"/pɾeˈzẽtʃi/", t:"Regalo"},
          {w:"Festa", p:"/ˈfɛsta/", t:"Fiesta"}, {w:"Casamento", p:"/kazaˈmẽtu/", t:"Boda"},
          {w:"Aniversário", p:"/aniveʁˈsaɾju/", t:"Cumpleaños"}, {w:"Bodas", p:"/ˈbodas/", t:"Aniversario"}
        ],
        phrases: [
          {o:"Feliz Natal!", t:"¡Feliz Navidad!"},
          {o:"Feliz aniversário!", t:"¡Feliz cumpleaños!"},
          {o:"Comemoramos o Carnaval em fevereiro.", t:"Celebramos el Carnaval en febrero."}
        ],
        dialogue: [
          {s:"A", l:"Como você comemora o Ano Novo?"},
          {s:"B", l:"Geralmente jantamos em família e vemos a contagem regressiva."},
          {s:"A", l:"Vocês trocam presentes?"},
          {s:"B", l:"Sim, e à meia-noite fazemos um brinde com champanhe."}
        ],
        culture: "El Carnaval de Río y las fiestas juninas son expresiones culturales únicas del Brasil.",
        quiz: [
          {q:"¿Cómo se dice 'boda'?", opts:["Festa","Casamento","Comemoração","Bodas"], a:1},
          {q:"¿Qué significa 'tradição'?", opts:["Costumbre","Tradición","Celebración","Festival"], a:1},
          {q:"Traduce: 'Feliz cumpleaños'", opts:["Boas festas","Feliz aniversário","Boas bodas","Boa festa"], a:1},
          {q:"¿Cómo se dice 'regalo'?", opts:["Presente","Lembrança","Prêmio","Recompensa"], a:0},
          {q:"¿Cuál es la fiesta más famosa de Brasil?", opts:["Natal","Carnaval","Páscoa","São João"], a:1}
        ]
      },
      {
        title: "Lección 8: Entretenimento e lazer",
        subtitle: "Lo que te gusta hacer",
        vocab: [
          {w:"Filme", p:"/ˈfiwmi/", t:"Película"}, {w:"Livro", p:"/ˈlivɾu/", t:"Libro"},
          {w:"Show", p:"/ʃow/", t:"Concierto"}, {w:"Museu", p:"/muˈzew/", t:"Museo"},
          {w:"Teatro", p:"/teˈatɾu/", t:"Teatro"}, {w:"Hobby", p:"/ˈxɔbi/", t:"Pasatiempo"},
          {w:"Série", p:"/ˈsɛɾi/", t:"Serie"}, {w:"Jogo", p:"/ˈʒoɡu/", t:"Juego"},
          {w:"Viajar", p:"/vjaˈʒaʁ/", t:"Viajar"}, {w:"Fotografia", p:"/fotogɾaˈfia/", t:"Fotografía"}
        ],
        phrases: [
          {o:"Gosto de ler romances românticos.", t:"Me gusta leer novelas románticas."},
          {o:"Qual é o seu filme favorito?", t:"¿Cuál es tu película favorita?"},
          {o:"Vamos ao cinema hoje à noite.", t:"Vamos al cine esta noche."}
        ],
        dialogue: [
          {s:"A", l:"O que você faz no tempo livre?"},
          {s:"B", l:"Adoro assistir séries e ler. Também gosto de fotografia."},
          {s:"A", l:"Legal! Viu algum filme bom ultimamente?"},
          {s:"B", l:"Sim, assisti a um filme de aventura ótimo no fim de semana."}
        ],
        culture: "La telenovela brasileña es un género culturalmente significativo en toda Lusofonía.",
        quiz: [
          {q:"¿Cómo se dice 'película'?", opts:["Filme","Vídeo","Programa","Show"], a:0},
          {q:"¿Qué significa 'hobby'?", opts:["Trabalho","Passatempo","Esporte","Estudo"], a:1},
          {q:"Traduce: 'Me gusta leer'", opts:["Gosto de escrever","Gosto de ler","Adoro leitura","Amo livro"], a:1},
          {q:"¿Cómo se dice 'museo'?", opts:["Galeria","Museu","Exposição","Palácio"], a:1},
          {q:"¿Cuál es la palabra para 'serie' (TV)?", opts:["Programa","Atração","Série","Episódio"], a:2}
        ]
      },
      {
        title: "Lección 9: Educação e aprendizagem",
        subtitle: "Mundo académico",
        vocab: [
          {w:"Universidade", p:"/univeʁsiˈdadʒi/", t:"Universidad"}, {w:"Diploma", p:"/diploˈma/", t:"Título"},
          {w:"Curso", p:"/ˈkuʁsu/", t:"Curso"}, {w:"Professor", p:"/pɾofeˈsoʁ/", t:"Profesor"},
          {w:"Prova", p:"/ˈpɾova/", t:"Examen"}, {w:"Tarefa", p:"/taˈɾefa/", t:"Tarea"},
          {w:"Biblioteca", p:"/bibljoˈtɛka/", t:"Biblioteca"}, {w:"Bolsa de estudos", p:"/ˈbolsa dʒi esˈtudus/", t:"Beca"},
          {w:"Pesquisa", p:"/peʁˈkiza/", t:"Investigación"}, {w:"Tese", p:"/ˈtɛzi/", t:"Tesis"}
        ],
        phrases: [
          {o:"Estudo ciências da computação.", t:"Estudio ciencias informáticas."},
          {o:"Ela tem doutorado em medicina.", t:"Ella tiene doctorado en medicina."},
          {o:"A prova é semana que vem.", t:"El examen es la próxima semana."}
        ],
        dialogue: [
          {s:"Aluno", l:"Professor, tenho uma dúvida sobre minha tese."},
          {s:"Professor", l:"Claro. Qual é o tema?"},
          {s:"Aluno", l:"É sobre aplicações de IA na saúde."},
          {s:"Professor", l:"Excelente tema. Vamos agendar uma reunião para discutir."}
        ],
        culture: "En Brasil, el sistema universitario incluye universidades públicas (USP, Unicamp) y privadas (PUC).",
        quiz: [
          {q:"¿Cómo se dice 'beca'?", opts:["Ajuda","Bolsa de estudos","Prêmio","Bônus"], a:1},
          {q:"¿Qué significa 'tese'?", opts:["Tema","Tesis","Teoria","Teste"], a:1},
          {q:"Traduce: 'Estoy estudiando'", opts:["Estudo","Estou estudando","Aprendo","Estou aprendendo"], a:1},
          {q:"¿Cómo se dice 'biblioteca'?", opts:["Livraria","Biblioteca","Arquivo","Estúdio"], a:1},
          {q:"¿Cuál es la palabra para 'investigación'?", opts:["Estudo","Pesquisa","Análise","Busca"], a:1}
        ]
      },
      {
        title: "Lección 10: Relações e emoções",
        subtitle: "Expresa sentimientos",
        vocab: [
          {w:"Amor", p:"/aˈmoʁ/", t:"Amor"}, {w:"Amizade", p:"/amiˈzadʒi/", t:"Amistad"},
          {w:"Felicidade", p:"/felisiˈdadʒi/", t:"Felicidad"}, {w:"Tristeza", p:"/tɾisˈteza/", t:"Tristeza"},
          {w:"Confiança", p:"/kõfiˈɐ̃sa/", t:"Confianza"}, {w:"Respeito", p:"/ʁesˈpejtu/", t:"Respeto"},
          {w:"Empatia", p:"/ẽpaˈtia/", t:"Empatía"}, {w:"Relacionamento", p:"/ʁelasionaˈmẽtu/", t:"Relación"},
          {w:"Abraço", p:"/aˈbɾasu/", t:"Abrazo"}, {w:"Pedir desculpas", p:"/peˈdʒi desˈkuwpas/", t:"Disculparse"}
        ],
        phrases: [
          {o:"Amo passar tempo com minha família.", t:"Amo pasar tiempo con mi familia."},
          {o:"Desculpe por chegar atrasado.", t:"Perdón por llegar tarde."},
          {o:"Agradeço muito sua ajuda.", t:"Agradezco mucho tu ayuda."}
        ],
        dialogue: [
          {s:"A", l:"Você parece feliz hoje. O que houve?"},
          {s:"B", l:"Passei o fim de semana com meu filho. Foi maravilhoso."},
          {s:"A", l:"Que bom. Família é tudo."},
          {s:"B", l:"Concordo. Sou muito grato por eles."}
        ],
        culture: "Los brasileños son conocidos por su calidez y contacto físico: abrazos y besos en la mejilla son comunes.",
        quiz: [
          {q:"¿Cómo se dice 'amistad'?", opts:["Amor","Amizade","Relacionamento","Confiança"], a:1},
          {q:"¿Qué significa 'empatia'?", opts:["Simpatia","Empatia","Antipatia","Apatia"], a:1},
          {q:"Traduce: 'Lo siento mucho'", opts:["Me sinto mal","Desculpe muito","Estou triste","Me arrependo"], a:1},
          {q:"¿Cómo se dice 'abrazo'?", opts:["Beijo","Abraço","Aperto de mão","Carinho"], a:1},
          {q:"¿Cuál es la palabra para 'confianza'?", opts:["Fé","Crença","Confiança","Esperança"], a:2}
        ]
      }
    ]
  },
  frances: {
    name: "Francés", flag: "🇫🇷",
    basico: [
      {
        title: "Leçon 1: Salutations et présentations",
        subtitle: "Saludos y presentaciones",
        vocab: [
          {w:"Bonjour", p:"/bɔ̃ʒuʁ/", t:"Buenos días"}, {w:"Bonsoir", p:"/bɔ̃swaʁ/", t:"Buenas noches"},
          {w:"Au revoir", p:"/o ʁəvwaʁ/", t:"Adiós"}, {w:"S'il vous plaît", p:"/sil vu plɛ/", t:"Por favor"},
          {w:"Merci", p:"/mɛʁsi/", t:"Gracias"}, {w:"Je m'appelle...", p:"/ʒə mapɛl/", t:"Me llamo..."},
          {w:"Enchanté", p:"/ɑ̃ʃɑ̃te/", t:"Encantado"}, {w:"Comment allez-vous?", p:"/kɔmɑ̃ tale vu/", t:"¿Cómo está usted?"},
          {w:"Oui", p:"/wi/", t:"Sí"}, {w:"Non", p:"/nɔ̃/", t:"No"}
        ],
        phrases: [
          {o:"Bonjour, je m'appelle Dani.", t:"Hola, me llamo Dani."},
          {o:"Je viens de Cuba.", t:"Vengo de Cuba."},
          {o:"Comment vous appelez-vous?", t:"¿Cómo se llama usted?"},
          {o:"Je vais bien, merci.", t:"Estoy bien, gracias."}
        ],
        dialogue: [
          {s:"Ana", l:"Bonjour! Je m'appelle Ana."},
          {s:"Luis", l:"Bonjour Ana! Moi, c'est Luis. Enchanté."},
          {s:"Ana", l:"Enchantée. Comment allez-vous?"},
          {s:"Luis", l:"Très bien, merci. Et vous?"}
        ],
        culture: "En Francia, 'Bonjour' se usa hasta las 18h, luego 'Bonsoir'. La bise (beso en la mejilla) es común entre conocidos.",
        quiz: [
          {q:"¿Cómo se dice 'Buenos días'?", opts:["Bonsoir","Bonjour","Bonne nuit","Au revoir"], a:1},
          {q:"¿Qué significa 'Enchanté'?", opts:["Adiós","Buen viaje","Encantado","¿Cómo estás?"], a:2},
          {q:"Traduce: 'Me llamo...'", opts:["Je suis...","Je m'appelle...","J'ai...","Je fais..."], a:1},
          {q:"¿Cuál es la forma correcta de agradecer?", opts:["S'il vous plaît","Pardon","Merci","Bonjour"], a:2},
          {q:"¿Cómo preguntas '¿Cómo está usted?'?", opts:["Qui êtes-vous?","Comment allez-vous?","Où êtes-vous?","Quand venez-vous?"], a:1}
        ]
      },
      {
        title: "Leçon 2: Nombres et alphabet",
        subtitle: "Números del 1 al 20",
        vocab: [
          {w:"Un", p:"/œ̃/", t:"Uno"}, {w:"Deux", p:"/dø/", t:"Dos"},
          {w:"Trois", p:"/tʁwa/", t:"Tres"}, {w:"Quatre", p:"/katʁ/", t:"Cuatro"},
          {w:"Cinq", p:"/sɛ̃k/", t:"Cinco"}, {w:"Dix", p:"/dis/", t:"Diez"},
          {w:"Quinze", p:"/kɛ̃z/", t:"Quince"}, {w:"Vingt", p:"/vɛ̃/", t:"Veinte"},
          {w:"A", p:"/a/", t:"Letra A"}, {w:"Z", p:"/zɛd/", t:"Letra Z"}
        ],
        phrases: [
          {o:"J'ai trente-cinq ans.", t:"Tengo treinta y cinco años."},
          {o:"Mon numéro de téléphone est...", t:"Mi número de teléfono es..."},
          {o:"Combien de frères as-tu?", t:"¿Cuántos hermanos tienes?"}
        ],
        dialogue: [
          {s:"Prof", l:"Quel est ton numéro de téléphone?"},
          {s:"Élève", l:"C'est cinq cinq cinq, zéro un deux trois."},
          {s:"Prof", l:"Quel âge as-tu?"},
          {s:"Élève", l:"J'ai trente-cinq ans."}
        ],
        culture: "En francés, los números 70-99 son compuestos: 70 = soixante-dix (60+10), 80 = quatre-vingts (4x20).",
        quiz: [
          {q:"¿Cómo se escribe 15?", opts:["Quatorze","Quinze","Seize","Treize"], a:1},
          {q:"¿Cuál es el número 'sept'?", opts:["6","7","8","9"], a:1},
          {q:"Traduce: 'Tengo 20 años'", opts:["J'ai 20 ans","Je suis 20 ans","Je fais 20 ans","Je reste 20 ans"], a:0},
          {q:"¿Cómo se dice 'ocho'?", opts:["Sept","Huit","Neuf","Dix"], a:1},
          {q:"¿Cuánto es 'douze'?", opts:["10","11","12","13"], a:2}
        ]
      },
      {
        title: "Leçon 3: La famille",
        subtitle: "Vocabulario familiar",
        vocab: [
          {w:"Père", p:"/pɛʁ/", t:"Padre"}, {w:"Mère", p:"/mɛʁ/", t:"Madre"},
          {w:"Frère", p:"/fʁɛʁ/", t:"Hermano"}, {w:"Sœur", p:"/sœʁ/", t:"Hermana"},
          {w:"Fils", p:"/fis/", t:"Hijo"}, {w:"Fille", p:"/fij/", t:"Hija"},
          {w:"Grand-père", p:"/ɡʁɑ̃ pɛʁ/", t:"Abuelo"}, {w:"Grand-mère", p:"/ɡʁɑ̃ mɛʁ/", t:"Abuela"},
          {w:"Oncle", p:"/ɔ̃kl/", t:"Tío"}, {w:"Tante", p:"/tɑ̃t/", t:"Tía"}
        ],
        phrases: [
          {o:"J'ai deux frères et une sœur.", t:"Tengo dos hermanos y una hermana."},
          {o:"Ma famille est très grande.", t:"Mi familia es muy grande."},
          {o:"Voici ma femme.", t:"Esta es mi esposa."}
        ],
        dialogue: [
          {s:"Marie", l:"As-tu des frères et sœurs?"},
          {s:"Pierre", l:"Oui, j'ai un frère et deux sœurs."},
          {s:"Marie", l:"Comment s'appellent-ils?"},
          {s:"Pierre", l:"Mon frère s'appelle Fernando et mes sœurs Laura et Ana."}
        ],
        culture: "En francés, 'fratrie' es el conjunto de hermanos. 'Beau-frère' puede ser cuñado o hermano político.",
        quiz: [
          {q:"¿Cómo se dice 'abuela'?", opts:["Mère","Grand-mère","Tante","Sœur"], a:1},
          {q:"¿Qué significa 'fille'?", opts:["Hijo","Hija","Madre","Tía"], a:1},
          {q:"Traduce: 'Tengo un hermano'", opts:["J'ai une sœur","J'ai un frère","J'ai un oncle","J'ai un fils"], a:1},
          {q:"¿Cuál es el plural de 'frère'?", opts:["Frères","Frèrs","Fréres","Freres"], a:0},
          {q:"¿Cómo se dice 'esposo'?", opts:["Partenaire","Mari","Petit ami","Père"], a:1}
        ]
      },
      {
        title: "Leçon 4: Jours, mois et saisons",
        subtitle: "Calendario francés",
        vocab: [
          {w:"Lundi", p:"/lœ̃di/", t:"Lunes"}, {w:"Mardi", p:"/maʁdi/", t:"Martes"},
          {w:"Mercredi", p:"/mɛʁkʁədi/", t:"Miércoles"}, {w:"Janvier", p:"/ʒɑ̃vje/", t:"Enero"},
          {w:"Février", p:"/fevʁije/", t:"Febrero"}, {w:"Mars", p:"/maʁs/", t:"Marzo"},
          {w:"Printemps", p:"/pʁɛ̃tɑ̃/", t:"Primavera"}, {w:"Été", p:"/ete/", t:"Verano"},
          {w:"Automne", p:"/otɔn/", t:"Otoño"}, {w:"Hiver", p:"/ivɛʁ/", t:"Invierno"}
        ],
        phrases: [
          {o:"Mon anniversaire est en mars.", t:"Mi cumpleaños es en marzo."},
          {o:"Aujourd'hui, c'est lundi.", t:"Hoy es lunes."},
          {o:"J'adore l'été.", t:"Me encanta el verano."}
        ],
        dialogue: [
          {s:"A", l:"Quel jour sommes-nous?"},
          {s:"B", l:"Aujourd'hui, c'est mercredi."},
          {s:"A", l:"Quand est ton anniversaire?"},
          {s:"B", l:"Mon anniversaire est le 19 janvier."}
        ],
        culture: "En francés, los días y meses NO se escriben con mayúscula: 'lundi', 'janvier'.",
        quiz: [
          {q:"¿Cómo se dice 'miércoles'?", opts:["Mardi","Mercredi","Jeudi","Lundi"], a:1},
          {q:"¿Qué significa 'printemps'?", opts:["Verano","Otoño","Primavera","Invierno"], a:2},
          {q:"¿En qué mes está el verano en Francia?", opts:["Janvier","Juin","Septembre","Décembre"], a:1},
          {q:"Traduce: 'Hoy es viernes'", opts:["Aujourd'hui c'est jeudi","Aujourd'hui c'est vendredi","Aujourd'hui c'est dimanche","Aujourd'hui c'est samedi"], a:1},
          {q:"¿Cómo se dice 'invierno'?", opts:["Hiver","Été","Printemps","Automne"], a:0}
        ]
      },
      {
        title: "Leçon 5: Couleurs et formes",
        subtitle: "Colores y formas",
        vocab: [
          {w:"Rouge", p:"/ʁuʒ/", t:"Rojo"}, {w:"Bleu", p:"/blø/", t:"Azul"},
          {w:"Vert", p:"/vɛʁ/", t:"Verde"}, {w:"Jaune", p:"/ʒon/", t:"Amarillo"},
          {w:"Noir", p:"/nwaʁ/", t:"Negro"}, {w:"Blanc", p:"/blɑ̃/", t:"Blanco"},
          {w:"Cercle", p:"/sɛʁkl/", t:"Círculo"}, {w:"Carré", p:"/kaʁe/", t:"Cuadrado"},
          {w:"Triangle", p:"/tʁijɑ̃ɡl/", t:"Triángulo"}, {w:"Rectangle", p:"/ʁɛktɑ̃ɡl/", t:"Rectángulo"}
        ],
        phrases: [
          {o:"Le ciel est bleu.", t:"El cielo es azul."},
          {o:"Ma voiture est rouge.", t:"Mi carro es rojo."},
          {o:"La table est rectangulaire.", t:"La mesa es rectangular."}
        ],
        dialogue: [
          {s:"A", l:"De quelle couleur est ta maison?"},
          {s:"B", l:"Elle est blanche avec une porte rouge."},
          {s:"A", l:"Quelle est la forme de la fenêtre?"},
          {s:"B", l:"Elle est rectangulaire."}
        ],
        culture: "En francés, los colores concuerdan en género y número: 'des voitures rouges'.",
        quiz: [
          {q:"¿Cómo se dice 'verde'?", opts:["Bleu","Vert","Jaune","Rouge"], a:1},
          {q:"¿Qué significa 'cercle'?", opts:["Cuadrado","Círculo","Triángulo","Rectángulo"], a:1},
          {q:"Traduce: 'El carro es negro'", opts:["La voiture est blanche","La voiture est noire","La voiture est bleue","La voiture est rouge"], a:1},
          {q:"¿Cómo se dice 'amarillo'?", opts:["Jaune","Orange","Or","Brun"], a:0},
          {q:"¿Cuál es la forma de una pelota?", opts:["Carré","Triangle","Cercle","Rectangle"], a:2}
        ]
      },
      {
        title: "Leçon 6: Nourriture et boissons",
        subtitle: "Gastronomía francesa",
        vocab: [
          {w:"Pain", p:"/pɛ̃/", t:"Pan"}, {w:"Eau", p:"/o/", t:"Agua"},
          {w:"Viande", p:"/vjɑ̃d/", t:"Carne"}, {w:"Poisson", p:"/pwasɔ̃/", t:"Pescado"},
          {w:"Riz", p:"/ʁi/", t:"Arroz"}, {w:"Café", p:"/kafe/", t:"Café"},
          {w:"Lait", p:"/lɛ/", t:"Leche"}, {w:"Fruit", p:"/fʁɥi/", t:"Fruta"},
          {w:"Petit-déjeuner", p:"/pəti deʒœne/", t:"Desayuno"}, {w:"Dîner", p:"/dine/", t:"Cena"}
        ],
        phrases: [
          {o:"J'ai faim.", t:"Tengo hambre."},
          {o:"Je voudrais un café, s'il vous plaît.", t:"Quisiera un café, por favor."},
          {o:"Le repas est délicieux.", t:"La comida está deliciosa."}
        ],
        dialogue: [
          {s:"Serveur", l:"Bonsoir. Que désirez-vous?"},
          {s:"Client", l:"Je voudrais du poisson avec du riz, s'il vous plaît."},
          {s:"Serveur", l:"Et comme boisson?"},
          {s:"Client", l:"Un verre d'eau, s'il vous plaît."}
        ],
        culture: "La cocina francesa es Patrimonio Inmaterial de la UNESCO. El 'plat du jour' es el plato del día.",
        quiz: [
          {q:"¿Cómo se dice 'agua'?", opts:["Lait","Eau","Jus","Café"], a:1},
          {q:"¿Qué significa 'petit-déjeuner'?", opts:["Almuerzo","Cena","Desayuno","Merienda"], a:2},
          {q:"Traduce: 'Tengo hambre'", opts:["J'ai soif","J'ai faim","Je suis fatigué","Je suis rassasié"], a:1},
          {q:"¿Cómo se dice 'pan'?", opts:["Pain","Riz","Viande","Poisson"], a:0},
          {q:"¿Cuál es la palabra para 'café'?", opts:["Thé","Café","Lait","Eau"], a:1}
        ]
      },
      {
        title: "Leçon 7: La maison et les pièces",
        subtitle: "Tu hogar en francés",
        vocab: [
          {w:"Maison", p:"/mɛzɔ̃/", t:"Casa"}, {w:"Pièce", p:"/pjɛs/", t:"Habitación"},
          {w:"Cuisine", p:"/kɥizin/", t:"Cocina"}, {w:"Chambre", p:"/ʃɑ̃bʁ/", t:"Dormitorio"},
          {w:"Salle de bains", p:"/sal də bɛ̃/", t:"Baño"}, {w:"Salon", p:"/salɔ̃/", t:"Sala"},
          {w:"Porte", p:"/pɔʁt/", t:"Puerta"}, {w:"Fenêtre", p:"/fənɛtʁ/", t:"Ventana"},
          {w:"Table", p:"/tabl/", t:"Mesa"}, {w:"Chaise", p:"/ʃɛz/", t:"Silla"}
        ],
        phrases: [
          {o:"Ma maison a trois chambres.", t:"Mi casa tiene tres dormitorios."},
          {o:"La cuisine est grande.", t:"La cocina es grande."},
          {o:"Je suis dans le salon.", t:"Estoy en la sala."}
        ],
        dialogue: [
          {s:"A", l:"Combien de pièces a ta maison?"},
          {s:"B", l:"Elle a cinq pièces: deux chambres, une cuisine, une salle de bains et un salon."},
          {s:"A", l:"Y a-t-il un jardin?"},
          {s:"B", l:"Oui, il y a un petit jardin derrière."}
        ],
        culture: "En francés, 'salle de bains' incluye bañera/ducha. 'Toilettes' es el inodoro separado.",
        quiz: [
          {q:"¿Cómo se dice 'cocina'?", opts:["Chambre","Cuisine","Salle de bains","Salon"], a:1},
          {q:"¿Qué significa 'fenêtre'?", opts:["Puerta","Ventana","Pared","Techo"], a:1},
          {q:"Traduce: 'Mi casa tiene dos dormitorios'", opts:["Ma maison a deux cuisines","Ma maison a deux chambres","Ma maison a deux salles de bains","Ma maison a deux salons"], a:1},
          {q:"¿Cómo se dice 'mesa'?", opts:["Chaise","Table","Lit","Canapé"], a:1},
          {q:"¿Cuál es la palabra para 'silla'?", opts:["Table","Chaise","Bureau","Lit"], a:1}
        ]
      },
      {
        title: "Leçon 8: La ville et les directions",
        subtitle: "Orientación urbana",
        vocab: [
          {w:"Rue", p:"/ʁy/", t:"Calle"}, {w:"Ville", p:"/vil/", t:"Ciudad"},
          {w:"Hôpital", p:"/opital/", t:"Hospital"}, {w:"École", p:"/ekɔl/", t:"Escuela"},
          {w:"Banque", p:"/bɑ̃k/", t:"Banco"}, {w:"Parc", p:"/paʁk/", t:"Parque"},
          {w:"Gauche", p:"/ɡoʃ/", t:"Izquierda"}, {w:"Droite", p:"/dʁwat/", t:"Derecha"},
          {w:"Tout droit", p:"/tu dʁwa/", t:"Recto"}, {w:"À côté de", p:"/a kote də/", t:"Al lado de"}
        ],
        phrases: [
          {o:"Où est l'hôpital?", t:"¿Dónde está el hospital?"},
          {o:"Tournez à gauche au coin.", t:"Gira a la izquierda en la esquina."},
          {o:"C'est à côté de la banque.", t:"Está al lado del banco."}
        ],
        dialogue: [
          {s:"Touriste", l:"Excusez-moi, où est le parc?"},
          {s:"Habitant", l:"Allez tout droit deux blocs, puis tournez à droite."},
          {s:"Touriste", l:"Merci beaucoup!"},
          {s:"Habitant", l:"Je vous en prie."}
        ],
        culture: "En Francia, 'Excusez-moi' es la fórmula de cortesía para interrumpir a un desconocido.",
        quiz: [
          {q:"¿Cómo se dice 'izquierda'?", opts:["Droite","Gauche","Tout droit","Derrière"], a:1},
          {q:"¿Qué significa 'hôpital'?", opts:["Escuela","Hospital","Banco","Parque"], a:1},
          {q:"Traduce: 'Gira a la derecha'", opts:["Allez tout droit","Tournez à gauche","Tournez à droite","Retournez"], a:2},
          {q:"¿Cómo se dice 'calle'?", opts:["Route","Rue","Avenue","Autoroute"], a:1},
          {q:"¿Cuál es la palabra para 'ciudad'?", opts:["Bourg","Ville","Village","Pays"], a:1}
        ]
      },
      {
        title: "Leçon 9: Professions et métiers",
        subtitle: "Profesiones",
        vocab: [
          {w:"Médecin", p:"/medsɛ̃/", t:"Médico"}, {w:"Professeur", p:"/pʁɔfesœʁ/", t:"Profesor"},
          {w:"Ingénieur", p:"/ɛ̃ʒenjœʁ/", t:"Ingeniero"}, {w:"Infirmier", p:"/ɛ̃fiʁmje/", t:"Enfermero"},
          {w:"Étudiant", p:"/etudjɑ̃/", t:"Estudiante"}, {w:"Policier", p:"/pɔlisje/", t:"Policía"},
          {w:"Chauffeur", p:"/ʃofœʁ/", t:"Conductor"}, {w:"Cuisinier", p:"/kɥizinje/", t:"Cocinero"},
          {w:"Avocat", p:"/avɔka/", t:"Abogado"}, {w:"Programmeur", p:"/pʁɔɡʁamœʁ/", t:"Programador"}
        ],
        phrases: [
          {o:"Que faites-vous dans la vie?", t:"¿A qué te dedicas?"},
          {o:"Je travaille dans un hôpital.", t:"Trabajo en un hospital."},
          {o:"Elle est ingénieure.", t:"Ella es ingeniera."}
        ],
        dialogue: [
          {s:"A", l:"Que faites-vous dans la vie?"},
          {s:"B", l:"Je suis ingénieur en informatique. Je travaille dans un hôpital militaire."},
          {s:"A", l:"C'est passionnant!"},
          {s:"B", l:"Oui, je développe des logiciels pour la santé."}
        ],
        culture: "En francés, las profesiones tienen forma femenina: 'ingénieure', 'médecin' (invariable), 'professeure'.",
        quiz: [
          {q:"¿Cómo se dice 'médico'?", opts:["Infirmier","Médecin","Professeur","Ingénieur"], a:1},
          {q:"¿Qué significa 'ingénieur'?", opts:["Arquitecto","Ingeniero","Médico","Abogado"], a:1},
          {q:"Traduce: 'Soy profesor'", opts:["Je suis étudiant","Je suis professeur","Je suis un professeur","Je professeur"], a:1},
          {q:"¿Cómo se dice 'programador'?", opts:["Designer","Programmeur","Développeur","Ingénieur"], a:1},
          {q:"¿Cuál es la palabra para 'enfermero'?", opts:["Médecin","Infirmier","Cuisinier","Chauffeur"], a:1}
        ]
      },
      {
        title: "Leçon 10: Conversation quotidienne",
        subtitle: "Conversación cotidiana",
        vocab: [
          {w:"Aujourd'hui", p:"/oʒuʁdɥi/", t:"Hoy"}, {w:"Demain", p:"/dəmɛ̃/", t:"Mañana"},
          {w:"Hier", p:"/jɛʁ/", t:"Ayer"}, {w:"Toujours", p:"/tuʒuʁ/", t:"Siempre"},
          {w:"Parfois", p:"/paʁfwa/", t:"A veces"}, {w:"Jamais", p:"/ʒamɛ/", t:"Nunca"},
          {w:"Peut-être", p:"/pøtɛtʁ/", t:"Tal vez"}, {w:"Bien sûr", p:"/bjɛ̃ syʁ/", t:"Por supuesto"},
          {w:"Je pense", p:"/ʒə pɑ̃s/", t:"Yo creo"}, {w:"Je ne sais pas", p:"/ʒə nə sɛ pa/", t:"No sé"}
        ],
        phrases: [
          {o:"D'habitude, je me réveille à 7h.", t:"Usualmente me despierto a las 7."},
          {o:"Parfois, je vais à la salle de sport.", t:"A veces voy al gimnasio."},
          {o:"Je n'aime pas le temps froid.", t:"No me gusta el clima frío."}
        ],
        dialogue: [
          {s:"A", l:"Que fais-tu d'habitude le dimanche?"},
          {s:"B", l:"D'habitude, je passe du temps avec ma famille. Parfois, nous allons au parc."},
          {s:"A", l:"Aimes-tu cuisiner?"},
          {s:"B", l:"Oui, j'adore! Bien sûr, mon fils m'aide parfois."}
        ],
        culture: "En francés, la negación requiere dos partes: 'ne' + verbo + 'pas': 'Je ne sais pas'.",
        quiz: [
          {q:"¿Cómo se dice 'mañana' (tiempo)?", opts:["Aujourd'hui","Demain","Hier","Maintenant"], a:1},
          {q:"¿Qué significa 'parfois'?", opts:["Siempre","Nunca","A veces","Casi nunca"], a:2},
          {q:"Traduce: 'No sé'", opts:["Je ne comprends pas","Je ne sais pas","Je ne pense pas","Je n'aime pas"], a:1},
          {q:"¿Cómo se dice 'por supuesto'?", opts:["Peut-être","Bien sûr","Probablement","Je pense"], a:1},
          {q:"¿Cuál es el adverbio de 'siempre'?", opts:["Jamais","Parfois","Toujours","D'habitude"], a:2}
        ]
      }
    ],
    intermedio: [
      {
        title: "Leçon 1: Voyages et transport",
        subtitle: "Viajar con fluidez",
        vocab: [
          {w:"Aéroport", p:"/aeʁɔpɔʁ/", t:"Aeropuerto"}, {w:"Vol", p:"/vɔl/", t:"Vuelo"},
          {w:"Billet", p:"/bijɛ/", t:"Boleto"}, {w:"Bagages", p:"/baɡaʒ/", t:"Equipaje"},
          {w:"Train", p:"/tʁɛ̃/", t:"Tren"}, {w:"Bus", p:"/bys/", t:"Autobús"},
          {w:"Métro", p:"/metʁo/", t:"Metro"}, {w:"Réservation", p:"/ʁezɛʁvasjɔ̃/", t:"Reservación"},
          {w:"Départ", p:"/depaʁ/", t:"Salida"}, {w:"Arrivée", p:"/aʁive/", t:"Llegada"}
        ],
        phrases: [
          {o:"Je voudrais réserver un vol pour Madrid.", t:"Quisiera reservar un vuelo a Madrid."},
          {o:"À quelle heure part le train?", t:"¿A qué hora sale el tren?"},
          {o:"Où puis-je récupérer mes bagages?", t:"¿Dónde puedo recoger mi equipaje?"}
        ],
        dialogue: [
          {s:"Agent", l:"Bonjour. Comment puis-je vous aider?"},
          {s:"Voyageur", l:"Je dois changer mon vol pour demain."},
          {s:"Agent", l:"Bien sûr. Il y a un vol à 15h30. Cela vous convient?"},
          {s:"Voyageur", l:"Parfait, merci."}
        ],
        culture: "En Francia, la SNCF opera trenes de alta velocidad (TGV) que conectan todo el país.",
        quiz: [
          {q:"¿Cómo se dice 'equipaje'?", opts:["Valise","Bagages","Sac à dos","Malle"], a:1},
          {q:"¿Qué significa 'départ'?", opts:["Llegada","Salida","Escala","Retraso"], a:1},
          {q:"Traduce: 'Quisiera reservar un vuelo'", opts:["Je veux un vol","Je voudrais réserver un vol","J'ai besoin d'un billet","J'ai une réservation"], a:1},
          {q:"¿Cómo se dice 'metro'?", opts:["Métro","Subway","Tube","Underground"], a:0},
          {q:"¿Cuál es la palabra para 'boleto'?", opts:["Pass","Billet","Carte","Bon"], a:1}
        ]
      },
      {
        title: "Leçon 2: Achats et argent",
        subtitle: "Compras y dinero",
        vocab: [
          {w:"Argent", p:"/aʁʒɑ̃/", t:"Dinero"}, {w:"Espèces", p:"/ɛspɛs/", t:"Efectivo"},
          {w:"Carte de crédit", p:"/kaʁt də kʁedi/", t:"Tarjeta de crédito"}, {w:"Prix", p:"/pʁi/", t:"Precio"},
          {w:"Remise", p:"/ʁəmiz/", t:"Descuento"}, {w:"Reçu", p:"/ʁəsy/", t:"Recibo"},
          {w:"Cher", p:"/ʃɛʁ/", t:"Caro"}, {w:"Bon marché", p:"/bɔ̃ maʁʃe/", t:"Barato"},
          {w:"Taille", p:"/taj/", t:"Talla"}, {w:"Remboursement", p:"/ʁɑ̃buʁsəmɑ̃/", t:"Reembolso"}
        ],
        phrases: [
          {o:"Combien ça coûte?", t:"¿Cuánto cuesta esto?"},
          {o:"Acceptez-vous les cartes de crédit?", t:"¿Aceptan tarjetas de crédito?"},
          {o:"Puis-je obtenir un remboursement?", t:"¿Puedo obtener un reembolso?"}
        ],
        dialogue: [
          {s:"Client", l:"Excusez-moi, combien coûte cette chemise?"},
          {s:"Vendeur", l:"Elle est à 25 euros. Nous avons une remise de 10% aujourd'hui."},
          {s:"Client", l:"Super. Puis-je payer par carte?"},
          {s:"Vendeur", l:"Bien sûr. Voici votre reçu."}
        ],
        culture: "En Francia, las rebajas oficiales ('soldes') están reguladas por ley: dos veces al año.",
        quiz: [
          {q:"¿Cómo se dice 'descuento'?", opts:["Offre","Remise","Promotion","Prix"], a:1},
          {q:"¿Qué significa 'reçu'?", opts:["Receta","Recibo","Reembolso","Reserva"], a:1},
          {q:"Traduce: '¿Cuánto cuesta?'", opts:["Qu'est-ce que c'est?","Combien ça coûte?","Où est-ce?","Quand est-ce?"], a:1},
          {q:"¿Cómo se dice 'caro'?", opts:["Bon marché","Gratuit","Cher","Bas"], a:2},
          {q:"¿Cuál es la palabra para 'efectivo'?", opts:["Carte","Espèces","Chèque","Pièce"], a:1}
        ]
      },
      {
        title: "Leçon 3: Santé et corps humain",
        subtitle: "Salud y cuerpo",
        vocab: [
          {w:"Mal de tête", p:"/mal də tɛt/", t:"Dolor de cabeza"}, {w:"Fièvre", p:"/fjɛvʁ/", t:"Fiebre"},
          {w:"Toux", p:"/tu/", t:"Tos"}, {w:"Médicament", p:"/medikamɑ̃/", t:"Medicina"},
          {w:"Rendez-vous", p:"/ʁɑ̃devu/", t:"Cita"}, {w:"Symptôme", p:"/sɛ̃ptom/", t:"Síntoma"},
          {w:"Ordonnance", p:"/ɔʁdɔnɑ̃s/", t:"Receta médica"}, {w:"Allergie", p:"/aleʁʒi/", t:"Alergia"},
          {w:"Douleur", p:"/dulœʁ/", t:"Dolor"}, {w:"Guérison", p:"/ɡeʁizɔ̃/", t:"Recuperación"}
        ],
        phrases: [
          {o:"J'ai mal à la tête et de la fièvre.", t:"Tengo dolor de cabeza y fiebre."},
          {o:"Je suis allergique à la pénicilline.", t:"Soy alérgico a la penicilina."},
          {o:"J'ai besoin de voir un médecin.", t:"Necesito ver a un médico."}
        ],
        dialogue: [
          {s:"Médecin", l:"Quel est le problème?"},
          {s:"Patient", l:"J'ai mal à la tête et de la fièvre depuis deux jours."},
          {s:"Médecin", l:"Êtes-vous allergique à un médicament?"},
          {s:"Patient", l:"Oui, je suis allergique à la pénicilline."}
        ],
        culture: "En Francia, el sistema de salud público (Sécurité Sociale) cubre la mayor parte de los gastos médicos.",
        quiz: [
          {q:"¿Cómo se dice 'fiebre'?", opts:["Rhume","Fièvre","Grippe","Toux"], a:1},
          {q:"¿Qué significa 'ordonnance'?", opts:["Presión","Receta médica","Presentación","Prevención"], a:1},
          {q:"Traduce: 'Soy alérgico a...'", opts:["J'ai mal...","Je suis allergique à...","J'ai besoin...","Je sens..."], a:1},
          {q:"¿Cómo se dice 'dolor de cabeza'?", opts:["Mal de ventre","Mal de tête","Mal de dos","Mal de dents"], a:1},
          {q:"¿Cuál es la palabra para 'cita médica'?", opts:["Visite","Réunion","Rendez-vous","Agenda"], a:2}
        ]
      },
      {
        title: "Leçon 4: Climat et environnement",
        subtitle: "Clima y medio ambiente",
        vocab: [
          {w:"Météo", p:"/meteo/", t:"Clima"}, {w:"Ensoleillé", p:"/ɑ̃sɔlɛje/", t:"Soleado"},
          {w:"Pluvieux", p:"/plyvjø/", t:"Lluvioso"}, {w:"Nuageux", p:"/nɥaʒø/", t:"Nublado"},
          {w:"Température", p:"/tɑ̃peʁatyʁ/", t:"Temperatura"}, {w:"Pollution", p:"/pɔlysjɔ̃/", t:"Contaminación"},
          {w:"Recyclage", p:"/ʁəsiklaʒ/", t:"Reciclaje"}, {w:"Environnement", p:"/ɑ̃viʁɔnmɑ̃/", t:"Medio ambiente"},
          {w:"Changement climatique", p:"/ʃɑ̃ʒəmɑ̃ klimatik/", t:"Cambio climático"}, {w:"Renouvelable", p:"/ʁənuvlabl/", t:"Renovable"}
        ],
        phrases: [
          {o:"Il va pleuvoir demain.", t:"Va a llover mañana."},
          {o:"La température est de 30 degrés.", t:"La temperatura es de 30 grados."},
          {o:"Nous devons protéger l'environnement.", t:"Debemos proteger el medio ambiente."}
        ],
        dialogue: [
          {s:"A", l:"Quel temps fait-il aujourd'hui?"},
          {s:"B", l:"Il fait soleil mais un peu venteux. La température est autour de 28 degrés."},
          {s:"A", l:"Parfait pour une promenade. As-tu entendu parler du nouveau programme de recyclage?"},
          {s:"B", l:"Oui! Je pense qu'il aidera à réduire la pollution."}
        ],
        culture: "Francia es líder en energía nuclear, que provee ~70% de su electricidad.",
        quiz: [
          {q:"¿Cómo se dice 'lluvioso'?", opts:["Ensoleillé","Pluvieux","Nuageux","Venteux"], a:1},
          {q:"¿Qué significa 'changement climatique'?", opts:["Cambio de estación","Cambio climático","Clima cálido","Clima frío"], a:1},
          {q:"Traduce: 'La temperatura es de 25 grados'", opts:["Il fait 25 degrés","Le temps est 25","Il a 25 de chaleur","La temp est 25"], a:0},
          {q:"¿Cómo se dice 'contaminación'?", opts:["Recyclage","Pollution","Conservation","Protection"], a:1},
          {q:"¿Cuál es la palabra para 'renovable'?", opts:["Réutilisable","Recyclable","Renouvelable","Restaurable"], a:2}
        ]
      },
      {
        title: "Leçon 5: Travail et bureau",
        subtitle: "Trabajo y oficina",
        vocab: [
          {w:"Réunion", p:"/ʁeynjɔ̃/", t:"Reunión"}, {w:"Échéance", p:"/eʃeɑ̃s/", t:"Fecha límite"},
          {w:"Projet", p:"/pʁɔʒɛ/", t:"Proyecto"}, {w:"Collègue", p:"/kɔlɛɡ/", t:"Colega"},
          {w:"Horaire", p:"/ɔʁɛʁ/", t:"Horario"}, {w:"Courriel", p:"/kuʁjɛl/", t:"Correo"},
          {w:"Rapport", p:"/ʁapɔʁ/", t:"Informe"}, {w:"Salaire", p:"/salɛʁ/", t:"Salario"},
          {w:"Promotion", p:"/pʁɔmosjɔ̃/", t:"Promoción"}, {w:"Télétravail", p:"/tele tʁavaj/", t:"Trabajo remoto"}
        ],
        phrases: [
          {o:"Planifions une réunion pour lundi.", t:"Programemos una reunión para el lunes."},
          {o:"L'échéance est vendredi prochain.", t:"La fecha límite es el próximo viernes."},
          {o:"Je travaille à distance trois jours par semaine.", t:"Trabajo remotamente tres días a la semana."}
        ],
        dialogue: [
          {s:"Chef", l:"Comment avance le projet?"},
          {s:"Employé", l:"Ça avance bien. Nous respecterons l'échéance."},
          {s:"Chef", l:"Super. Peux-tu m'envoyer le rapport par courriel?"},
          {s:"Employé", l:"Bien sûr, je l'envoie cet après-midi."}
        ],
        culture: "En Francia, la jornada laboral típica es de 35 horas semanales, una de las más bajas de Europa.",
        quiz: [
          {q:"¿Cómo se dice 'fecha límite'?", opts:["Horaire","Échéance","Réunion","Rapport"], a:1},
          {q:"¿Qué significa 'collègue'?", opts:["Chef","Client","Collègue","Employé"], a:2},
          {q:"Traduce: 'Trabajo remotamente'", opts:["Je travaille à la maison","Je travaille à distance","Je travaille seul","Je travaille en ligne"], a:1},
          {q:"¿Cómo se dice 'reunión'?", opts:["Conférence","Réunion","Événement","Rencontre"], a:1},
          {q:"¿Cuál es la palabra para 'salario'?", opts:["Argent","Paiement","Salaire","Gage"], a:2}
        ]
      },
      {
        title: "Leçon 6: Technologie et communication",
        subtitle: "Tecnología",
        vocab: [
          {w:"Logiciel", p:"/lɔʒisjɛl/", t:"Software"}, {w:"Matériel", p:"/mateʁjɛl/", t:"Hardware"},
          {w:"Réseau", p:"/ʁezo/", t:"Red"}, {w:"Base de données", p:"/baz də dɔne/", t:"Base de datos"},
          {w:"Cloud/Nuage", p:"/klawd/ /nɥaʒ/", t:"Nube"}, {w:"Intelligence artificielle", p:"/ɛ̃teliʒɑ̃s aʁtifiʃjɛl/", t:"Inteligencia artificial"},
          {w:"Cybersécurité", p:"/sibɛʁsekyʁite/", t:"Ciberseguridad"}, {w:"Mise à jour", p:"/miz a ʒuʁ/", t:"Actualización"},
          {w:"Bogue", p:"/bɔɡ/", t:"Error"}, {w:"Code", p:"/kɔd/", t:"Código"}
        ],
        phrases: [
          {o:"Je développe des logiciels pour la santé.", t:"Desarrollo software para salud."},
          {o:"Le système a besoin d'une mise à jour.", t:"El sistema necesita una actualización."},
          {o:"Nous utilisons le stockage en nuage.", t:"Usamos almacenamiento en la nube."}
        ],
        dialogue: [
          {s:"Dév", l:"J'ai trouvé un bogue dans le module d'authentification."},
          {s:"Chef", l:"Peux-tu le corriger avant la prochaine mise à jour?"},
          {s:"Dév", l:"Oui, je vais pousser le code dans le dépôt ce soir."},
          {s:"Chef", l:"Super. Améliorons aussi les protocoles de cybersécurité."}
        ],
        culture: "Francia tiene una fuerte industria tech con 'La French Tech', ecosistema de startups.",
        quiz: [
          {q:"¿Cómo se dice 'base de datos'?", opts:["Stockage","Base de données","Datacenter","Dataset"], a:1},
          {q:"¿Qué significa 'bogue'?", opts:["Insecto","Error informático","Actualización","Función"], a:1},
          {q:"Traduce: 'Inteligencia artificial'", opts:["Intelligence automatique","Intelligence artificielle","Intelligence avancée","Intelligence alternative"], a:1},
          {q:"¿Cómo se dice 'ciberseguridad'?", opts:["Sécurité réseau","Sécurité web","Cybersécurité","Sécurité digitale"], a:2},
          {q:"¿Cuál es la palabra para 'nube' (tecnología)?", opts:["Ciel","Nuage","Serveur","Hôte"], a:1}
        ]
      },
      {
        title: "Leçon 7: Culture et traditions",
        subtitle: "Cultura francesa",
        vocab: [
          {w:"Jour férié", p:"/ʒuʁ feʁje/", t:"Festivo"}, {w:"Célébration", p:"/selebʁasjɔ̃/", t:"Celebración"},
          {w:"Tradition", p:"/tʁadisjɔ̃/", t:"Tradición"}, {w:"Coutume", p:"/kutum/", t:"Costumbre"},
          {w:"Festival", p:"/fɛstival/", t:"Festival"}, {w:"Cadeau", p:"/kado/", t:"Regalo"},
          {w:"Fête", p:"/fɛt/", t:"Fiesta"}, {w:"Mariage", p:"/maʁjaʒ/", t:"Boda"},
          {w:"Anniversaire", p:"/anivɛʁsɛʁ/", t:"Cumpleaños"}, {w:"Anniversaire de mariage", p:"/anivɛʁsɛʁ də maʁjaʒ/", t:"Aniversario"}
        ],
        phrases: [
          {o:"Joyeux Noël!", t:"¡Feliz Navidad!"},
          {o:"Joyeux anniversaire!", t:"¡Feliz cumpleaños!"},
          {o:"Nous célébrons la Fête nationale le 14 juillet.", t:"Celebramos la Fiesta Nacional el 14 de julio."}
        ],
        dialogue: [
          {s:"A", l:"Comment célébrez-vous le Nouvel An?"},
          {s:"B", l:"D'habitude, nous dînons en famille et regardons le compte à rebours."},
          {s:"A", l:"Échangez-vous des cadeaux?"},
          {s:"B", l:"Oui, et à minuit nous trinquons avec du champagne."}
        ],
        culture: "El 14 de julio (Bastilla Day) es la fiesta nacional francesa, con desfiles y fuegos artificiales.",
        quiz: [
          {q:"¿Cómo se dice 'boda'?", opts:["Fête","Mariage","Célébration","Anniversaire"], a:1},
          {q:"¿Qué significa 'tradition'?", opts:["Costumbre","Tradición","Celebración","Festival"], a:1},
          {q:"Traduce: 'Feliz cumpleaños'", opts:["Bonnes fêtes","Joyeux anniversaire","Bon anniversaire de mariage","Bonne fête"], a:1},
          {q:"¿Cómo se dice 'regalo'?", opts:["Cadeau","Souvenir","Prix","Récompense"], a:0},
          {q:"¿Cuál es la fiesta nacional francesa?", opts:["Noël","14 juillet","Pâques","Toussaint"], a:1}
        ]
      },
      {
        title: "Leçon 8: Divertissement et loisirs",
        subtitle: "Entretenimiento",
        vocab: [
          {w:"Film", p:"/film/", t:"Película"}, {w:"Livre", p:"/livʁ/", t:"Libro"},
          {w:"Concert", p:"/kɔ̃sɛʁ/", t:"Concierto"}, {w:"Musée", p:"/myze/", t:"Museo"},
          {w:"Théâtre", p:"/teɑtʁ/", t:"Teatro"}, {w:"Loisir", p:"/lwaziʁ/", t:"Pasatiempo"},
          {w:"Série", p:"/seʁi/", t:"Serie"}, {w:"Jeu", p:"/ʒø/", t:"Juego"},
          {w:"Voyager", p:"/vwajaʒe/", t:"Viajar"}, {w:"Photographie", p:"/fɔtɔɡʁafi/", t:"Fotografía"}
        ],
        phrases: [
          {o:"J'aime lire des romans romantiques.", t:"Me gusta leer novelas románticas."},
          {o:"Quel est ton film préféré?", t:"¿Cuál es tu película favorita?"},
          {o:"Allons au cinéma ce soir.", t:"Vamos al cine esta noche."}
        ],
        dialogue: [
          {s:"A", l:"Que fais-tu pendant ton temps libre?"},
          {s:"B", l:"J'adore regarder des séries et lire. Je m'intéresse aussi à la photographie."},
          {s:"A", l:"Chouette! As-tu vu de bons films récemment?"},
          {s:"B", l:"Oui, j'ai vu un super film d'aventure le week-end dernier."}
        ],
        culture: "El Festival de Cannes es el evento cinematográfico más prestigioso del mundo francófono.",
        quiz: [
          {q:"¿Cómo se dice 'película'?", opts:["Film","Vidéo","Émission","Show"], a:0},
          {q:"¿Qué significa 'loisir'?", opts:["Trabajo","Pasatiempo","Deporte","Estudio"], a:1},
          {q:"Traduce: 'Me gusta leer'", opts:["J'aime écrire","J'aime lire","J'adore la lecture","J'adore le livre"], a:1},
          {q:"¿Cómo se dice 'museo'?", opts:["Galerie","Musée","Exposition","Palais"], a:1},
          {q:"¿Cuál es la palabra para 'serie' (TV)?", opts:["Émission","Programme","Série","Épisode"], a:2}
        ]
      },
      {
        title: "Leçon 9: Éducation et apprentissage",
        subtitle: "Educación",
        vocab: [
          {w:"Université", p:"/ynivɛʁsite/", t:"Universidad"}, {w:"Diplôme", p:"/diplom/", t:"Título"},
          {w:"Cours", p:"/kuʁ/", t:"Curso"}, {w:"Professeur", p:"/pʁɔfesœʁ/", t:"Profesor"},
          {w:"Examen", p:"/ɛɡzamɛ̃/", t:"Examen"}, {w:"Devoirs", p:"/dəvwɑʁ/", t:"Tarea"},
          {w:"Bibliothèque", p:"/biblijotɛk/", t:"Biblioteca"}, {w:"Bourse", p:"/buʁs/", t:"Beca"},
          {w:"Recherche", p:"/ʁəʃɛʁʃ/", t:"Investigación"}, {w:"Thèse", p:"/tɛz/", t:"Tesis"}
        ],
        phrases: [
          {o:"J'étudie l'informatique.", t:"Estudio ciencias informáticas."},
          {o:"Elle a un doctorat en médecine.", t:"Ella tiene un doctorado en medicina."},
          {o:"L'examen est la semaine prochaine.", t:"El examen es la próxima semana."}
        ],
        dialogue: [
          {s:"Étudiant", l:"Professeur, j'ai une question sur ma thèse."},
          {s:"Professeur", l:"Bien sûr. Quel est le sujet?"},
          {s:"Étudiant", l:"C'est sur les applications de l'IA en santé."},
          {s:"Professeur", l:"Excellent sujet. Planifions une réunion pour en discuter."}
        ],
        culture: "El sistema francés distingue: Licence (3 años), Master (5 años) y Doctorat (8+ años).",
        quiz: [
          {q:"¿Cómo se dice 'beca'?", opts:["Aide","Bourse","Prix","Bonus"], a:1},
          {q:"¿Qué significa 'thèse'?", opts:["Tema","Tesis","Teoría","Test"], a:1},
          {q:"Traduce: 'Estoy estudiando'", opts:["J'étudie","J'étudie en ce moment","J'apprends","J'apprends maintenant"], a:1},
          {q:"¿Cómo se dice 'biblioteca'?", opts:["Librairie","Bibliothèque","Archives","Studio"], a:1},
          {q:"¿Cuál es la palabra para 'investigación'?", opts:["Étude","Recherche","Analyse","Recherche"], a:1}
        ]
      },
      {
        title: "Leçon 10: Relations et émotions",
        subtitle: "Relaciones y emociones",
        vocab: [
          {w:"Amour", p:"/amuʁ/", t:"Amor"}, {w:"Amitié", p:"/amitje/", t:"Amistad"},
          {w:"Bonheur", p:"/bɔnœʁ/", t:"Felicidad"}, {w:"Tristesse", p:"/tistɛs/", t:"Tristeza"},
          {w:"Confiance", p:"/kɔ̃fjɑ̃s/", t:"Confianza"}, {w:"Respect", p:"/ʁɛspɛ/", t:"Respeto"},
          {w:"Empathie", p:"/ɑ̃pati/", t:"Empatía"}, {w:"Relation", p:"/ʁəlasjɔ̃/", t:"Relación"},
          {w:"Câlin", p:"/kalɛ̃/", t:"Abrazo"}, {w:"S'excuser", p:"/sɛkskyze/", t:"Disculparse"}
        ],
        phrases: [
          {o:"J'adore passer du temps avec ma famille.", t:"Amo pasar tiempo con mi familia."},
          {o:"Pardon d'être en retard.", t:"Perdón por llegar tarde."},
          {o:"J'apprécie vraiment ton aide.", t:"Realmente aprecio tu ayuda."}
        ],
        dialogue: [
          {s:"A", l:"Tu sembles heureux aujourd'hui. Que s'est-il passé?"},
          {s:"B", l:"J'ai passé le week-end avec mon fils. C'était merveilleux."},
          {s:"A", l:"C'est super. La famille, c'est tout."},
          {s:"B", l:"Je suis d'accord. Je leur suis très reconnaissant."}
        ],
        culture: "Los franceses valoran las conversaciones profundas y el debate intelectual en relaciones personales.",
        quiz: [
          {q:"¿Cómo se dice 'amistad'?", opts:["Amour","Amitié","Relation","Confiance"], a:1},
          {q:"¿Qué significa 'empathie'?", opts:["Sympathie","Empathie","Antipathie","Apathie"], a:1},
          {q:"Traduce: 'Lo siento mucho'", opts:["Je me sens mal","Je suis vraiment désolé","Je suis triste","Je regrette"], a:1},
          {q:"¿Cómo se dice 'abrazo'?", opts:["Bisou","Câlin","Poignée de main","Caresse"], a:1},
          {q:"¿Cuál es la palabra para 'confianza'?", opts:["Foi","Croyance","Confiance","Espoir"], a:2}
        ]
      }
    ]
  },
  aleman: {
    name: "Alemán", flag: "🇩🇪",
    basico: [
      {
        title: "Lektion 1: Begrüßungen und Vorstellungen",
        subtitle: "Saludos y presentaciones",
        vocab: [
          {w:"Hallo", p:"/halo/", t:"Hola"}, {w:"Guten Morgen", p:"/ɡuːtn̩ ˈmɔʁɡn̩/", t:"Buenos días"},
          {w:"Guten Tag", p:"/ɡuːtn̩ taːk/", t:"Buenas tardes"}, {w:"Guten Abend", p:"/ɡuːtn̩ ˈaːbn̩t/", t:"Buenas noches"},
          {w:"Auf Wiedersehen", p:"/aʊf ˈviːdɐˌzeːən/", t:"Adiós"}, {w:"Bitte", p:"/ˈbɪtə/", t:"Por favor"},
          {w:"Danke", p:"/ˈdaŋkə/", t:"Gracias"}, {w:"Ich heiße...", p:"/ɪç ˈhaɪsə/", t:"Me llamo..."},
          {w:"Freut mich", p:"/fʁɔʏt mɪç/", t:"Encantado"}, {w:"Wie geht es Ihnen?", p:"/viː ɡeːt ɛs ˈiːnən/", t:"¿Cómo está usted?"}
        ],
        phrases: [
          {o:"Hallo, ich heiße Dani.", t:"Hola, me llamo Dani."},
          {o:"Ich komme aus Kuba.", t:"Vengo de Cuba."},
          {o:"Wie heißen Sie?", t:"¿Cómo se llama usted?"},
          {o:"Mir geht es gut, danke.", t:"Estoy bien, gracias."}
        ],
        dialogue: [
          {s:"Ana", l:"Hallo! Ich heiße Ana."},
          {s:"Luis", l:"Hallo Ana! Ich bin Luis. Freut mich."},
          {s:"Ana", l:"Freut mich auch. Wie geht es Ihnen?"},
          {s:"Luis", l:"Sehr gut, danke. Und Ihnen?"}
        ],
        culture: "En Alemania, el handshake es estándar en contextos formales. 'Guten Tag' se usa hasta las 18h, luego 'Guten Abend'.",
        quiz: [
          {q:"¿Cómo se dice 'Buenos días'?", opts:["Guten Abend","Guten Morgen","Gute Nacht","Auf Wiedersehen"], a:1},
          {q:"¿Qué significa 'Freut mich'?", opts:["Adiós","Buen viaje","Encantado","¿Cómo estás?"], a:2},
          {q:"Traduce: 'Me llamo...'", opts:["Ich bin...","Ich heiße...","Ich habe...","Ich mache..."], a:1},
          {q:"¿Cuál es la forma correcta de agradecer?", opts:["Bitte","Entschuldigung","Danke","Hallo"], a:2},
          {q:"¿Cómo preguntas '¿Cómo está usted?'?", opts:["Wer sind Sie?","Wie geht es Ihnen?","Wo sind Sie?","Wann kommen Sie?"], a:1}
        ]
      },
      {
        title: "Lektion 2: Zahlen und Alphabet",
        subtitle: "Números del 1 al 20",
        vocab: [
          {w:"Eins", p:"/aɪns/", t:"Uno"}, {w:"Zwei", p:"/tsvaɪ/", t:"Dos"},
          {w:"Drei", p:"/draɪ/", t:"Tres"}, {w:"Vier", p:"/fiːɐ/", t:"Cuatro"},
          {w:"Fünf", p:"/fʏnf/", t:"Cinco"}, {w:"Zehn", p:"/tseːn/", t:"Diez"},
          {w:"Fünfzehn", p:"/ˈfʏnftseːn/", t:"Quince"}, {w:"Zwanzig", p:"/ˈtsvantsɪç/", t:"Veinte"},
          {w:"A", p:"/aː/", t:"Letra A"}, {w:"Z", p:"/tsɛt/", t:"Letra Z"}
        ],
        phrases: [
          {o:"Ich bin fünfunddreißig Jahre alt.", t:"Tengo treinta y cinco años."},
          {o:"Meine Telefonnummer ist...", t:"Mi número de teléfono es..."},
          {o:"Wie viele Geschwister hast du?", t:"¿Cuántos hermanos tienes?"}
        ],
        dialogue: [
          {s:"Lehrer", l:"Wie ist deine Telefonnummer?"},
          {s:"Schüler", l:"Fünf fünf fünf, null eins zwei drei."},
          {s:"Lehrer", l:"Wie alt bist du?"},
          {s:"Schüler", l:"Ich bin fünfunddreißig."}
        ],
        culture: "En alemán, los números del 21 al 99 se dicen al revés: 25 = fünfundzwanzig (cinco-y-veinte).",
        quiz: [
          {q:"¿Cómo se escribe 15?", opts:["Vierzehn","Fünfzehn","Sechzehn","Dreizehn"], a:1},
          {q:"¿Cuál es el número 'sieben'?", opts:["6","7","8","9"], a:1},
          {q:"Traduce: 'Tengo 20 años'", opts:["Ich bin 20 Jahre alt","Ich habe 20 Jahre","Ich mache 20 Jahre","Ich bleibe 20 Jahre"], a:0},
          {q:"¿Cómo se dice 'ocho'?", opts:["Sechs","Acht","Neun","Zehn"], a:1},
          {q:"¿Cuánto es 'zwölf'?", opts:["10","11","12","13"], a:2}
        ]
      },
      {
        title: "Lektion 3: Die Familie",
        subtitle: "La familia",
        vocab: [
          {w:"Vater", p:"/ˈfaːtɐ/", t:"Padre"}, {w:"Mutter", p:"/ˈmʊtɐ/", t:"Madre"},
          {w:"Bruder", p:"/ˈbʁuːdɐ/", t:"Hermano"}, {w:"Schwester", p:"/ˈʃvɛstɐ/", t:"Hermana"},
          {w:"Sohn", p:"/zoːn/", t:"Hijo"}, {w:"Tochter", p:"/ˈtɔxtɐ/", t:"Hija"},
          {w:"Großvater", p:"/ˈɡʁoːsfaːtɐ/", t:"Abuelo"}, {w:"Großmutter", p:"/ˈɡʁoːsmuːtɐ/", t:"Abuela"},
          {w:"Onkel", p:"/ˈɔŋkl̩/", t:"Tío"}, {w:"Tante", p:"/ˈtantə/", t:"Tía"}
        ],
        phrases: [
          {o:"Ich habe zwei Brüder und eine Schwester.", t:"Tengo dos hermanos y una hermana."},
          {o:"Meine Familie ist sehr groß.", t:"Mi familia es muy grande."},
          {o:"Das ist meine Frau.", t:"Esta es mi esposa."}
        ],
        dialogue: [
          {s:"Maria", l:"Hast du Geschwister?"},
          {s:"Peter", l:"Ja, ich habe einen Bruder und zwei Schwestern."},
          {s:"Maria", l:"Wie heißen sie?"},
          {s:"Peter", l:"Mein Bruder heißt Fernando und meine Schwestern Laura und Ana."}
        ],
        culture: "En alemán, 'Geschwister' es el término colectivo para hermanos. 'Schwager' es cuñado.",
        quiz: [
          {q:"¿Cómo se dice 'abuela'?", opts:["Mutter","Großmutter","Tante","Schwester"], a:1},
          {q:"¿Qué significa 'Tochter'?", opts:["Hijo","Hija","Madre","Tía"], a:1},
          {q:"Traduce: 'Tengo un hermano'", opts:["Ich habe eine Schwester","Ich habe einen Bruder","Ich habe einen Onkel","Ich habe einen Sohn"], a:1},
          {q:"¿Cuál es el plural de 'Bruder'?", opts:["Brüder","Bruders","Brüders","Brüden"], a:0},
          {q:"¿Cómo se dice 'esposo'?", opts:["Partner","Ehemann","Freund","Vater"], a:1}
        ]
      },
      {
        title: "Lektion 4: Tage, Monate und Jahreszeiten",
        subtitle: "Calendario",
        vocab: [
          {w:"Montag", p:"/ˈmoːntaːk/", t:"Lunes"}, {w:"Dienstag", p:"/ˈdiːnstaːk/", t:"Martes"},
          {w:"Mittwoch", p:"/ˈmɪtvɔx/", t:"Miércoles"}, {w:"Januar", p:"/ˈjanuaːɐ/", t:"Enero"},
          {w:"Februar", p:"/ˈfeːbʁuaːɐ/", t:"Febrero"}, {w:"März", p:"/mɛʁts/", t:"Marzo"},
          {w:"Frühling", p:"/ˈfʁyːlɪŋ/", t:"Primavera"}, {w:"Sommer", p:"/ˈzɔmɐ/", t:"Verano"},
          {w:"Herbst", p:"/hɛʁpst/", t:"Otoño"}, {w:"Winter", p:"/ˈvɪntɐ/", t:"Invierno"}
        ],
        phrases: [
          {o:"Mein Geburtstag ist im März.", t:"Mi cumpleaños es en marzo."},
          {o:"Heute ist Montag.", t:"Hoy es lunes."},
          {o:"Ich liebe den Sommer.", t:"Amo el verano."}
        ],
        dialogue: [
          {s:"A", l:"Welcher Tag ist heute?"},
          {s:"B", l:"Heute ist Mittwoch."},
          {s:"A", l:"Wann hast du Geburtstag?"},
          {s:"B", l:"Mein Geburtstag ist am 19. Januar."}
        ],
        culture: "En alemán, los días, meses y estaciones se escriben con MAYÚSCULA: 'Montag', 'Januar', 'Sommer'.",
        quiz: [
          {q:"¿Cómo se dice 'miércoles'?", opts:["Dienstag","Mittwoch","Donnerstag","Montag"], a:1},
          {q:"¿Qué significa 'Frühling'?", opts:["Verano","Otoño","Primavera","Invierno"], a:2},
          {q:"¿En qué mes está el verano en Alemania?", opts:["Januar","Juni","September","Dezember"], a:1},
          {q:"Traduce: 'Hoy es viernes'", opts:["Heute ist Donnerstag","Heute ist Freitag","Heute ist Sonntag","Heute ist Samstag"], a:1},
          {q:"¿Cómo se dice 'invierno'?", opts:["Winter","Sommer","Frühling","Herbst"], a:0}
        ]
      },
      {
        title: "Lektion 5: Farben und Formen",
        subtitle: "Colores y formas",
        vocab: [
          {w:"Rot", p:"/ʁoːt/", t:"Rojo"}, {w:"Blau", p:"/blaʊ/", t:"Azul"},
          {w:"Grün", p:"/ɡʁyːn/", t:"Verde"}, {w:"Gelb", p:"/ɡɛlp/", t:"Amarillo"},
          {w:"Schwarz", p:"/ʃvaʁts/", t:"Negro"}, {w:"Weiß", p:"/vaɪs/", t:"Blanco"},
          {w:"Kreis", p:"/kʁaɪs/", t:"Círculo"}, {w:"Quadrat", p:"/kvaˈdʁaːt/", t:"Cuadrado"},
          {w:"Dreieck", p:"/ˈdʁaɪ.ɛk/", t:"Triángulo"}, {w:"Rechteck", p:"/ˈʁɛçt.ɛk/", t:"Rectángulo"}
        ],
        phrases: [
          {o:"Der Himmel ist blau.", t:"El cielo es azul."},
          {o:"Mein Auto ist rot.", t:"Mi carro es rojo."},
          {o:"Der Tisch ist rechteckig.", t:"La mesa es rectangular."}
        ],
        dialogue: [
          {s:"A", l:"Welche Farbe hat dein Haus?"},
          {s:"B", l:"Es ist weiß mit einer roten Tür."},
          {s:"A", l:"Welche Form hat das Fenster?"},
          {s:"B", l:"Es ist rechteckig."}
        ],
        culture: "En alemán, los colores concuerdan con el sustantivo cuando van antes: 'ein rotes Auto' (neutro).",
        quiz: [
          {q:"¿Cómo se dice 'verde'?", opts:["Blau","Grün","Gelb","Rot"], a:1},
          {q:"¿Qué significa 'Kreis'?", opts:["Cuadrado","Círculo","Triángulo","Rectángulo"], a:1},
          {q:"Traduce: 'El carro es negro'", opts:["Das Auto ist weiß","Das Auto ist schwarz","Das Auto ist blau","Das Auto ist rot"], a:1},
          {q:"¿Cómo se dice 'amarillo'?", opts:["Gelb","Orange","Gold","Braun"], a:0},
          {q:"¿Cuál es la forma de una pelota?", opts:["Quadrat","Dreieck","Kreis","Rechteck"], a:2}
        ]
      },
      {
        title: "Lektion 6: Essen und Trinken",
        subtitle: "Comida y bebidas",
        vocab: [
          {w:"Brot", p:"/bʁoːt/", t:"Pan"}, {w:"Wasser", p:"/ˈvasɐ/", t:"Agua"},
          {w:"Fleisch", p:"/flaɪʃ/", t:"Carne"}, {w:"Fisch", p:"/fɪʃ/", t:"Pescado"},
          {w:"Reis", p:"/ʁaɪs/", t:"Arroz"}, {w:"Kaffee", p:"/ˈkafe/", t:"Café"},
          {w:"Milch", p:"/mɪlç/", t:"Leche"}, {w:"Obst", p:"/oːpst/", t:"Fruta"},
          {w:"Frühstück", p:"/ˈfʁyːʃtʏk/", t:"Desayuno"}, {w:"Abendessen", p:"/ˈaːbn̩t.ɛsn̩/", t:"Cena"}
        ],
        phrases: [
          {o:"Ich habe Hunger.", t:"Tengo hambre."},
          {o:"Ich möchte einen Kaffee, bitte.", t:"Quisiera un café, por favor."},
          {o:"Das Essen ist köstlich.", t:"La comida está deliciosa."}
        ],
        dialogue: [
          {s:"Kellner", l:"Guten Abend. Was möchten Sie bestellen?"},
          {s:"Gast", l:"Ich möchte Fisch mit Reis, bitte."},
          {s:"Kellner", l:"Und zu trinken?"},
          {s:"Gast", l:"Ein Glas Wasser, bitte."}
        ],
        culture: "Alemania es famosa por sus más de 300 tipos de pan y sus salchichas (Wurst).",
        quiz: [
          {q:"¿Cómo se dice 'agua'?", opts:["Milch","Wasser","Saft","Kaffee"], a:1},
          {q:"¿Qué significa 'Frühstück'?", opts:["Almuerzo","Cena","Desayuno","Merienda"], a:2},
          {q:"Traduce: 'Tengo hambre'", opts:["Ich habe Durst","Ich habe Hunger","Ich bin müde","Ich bin satt"], a:1},
          {q:"¿Cómo se dice 'pan'?", opts:["Brot","Reis","Fleisch","Fisch"], a:0},
          {q:"¿Cuál es la palabra para 'café'?", opts:["Tee","Kaffee","Milch","Wasser"], a:1}
        ]
      },
      {
        title: "Lektion 7: Das Haus und die Zimmer",
        subtitle: "La casa",
        vocab: [
          {w:"Haus", p:"/haʊs/", t:"Casa"}, {w:"Zimmer", p:"/ˈtsɪmɐ/", t:"Habitación"},
          {w:"Küche", p:"/ˈkʏçə/", t:"Cocina"}, {w:"Schlafzimmer", p:"/ˈʃlaːf.tsɪmɐ/", t:"Dormitorio"},
          {w:"Badezimmer", p:"/ˈbaːdə.tsɪmɐ/", t:"Baño"}, {w:"Wohnzimmer", p:"/ˈvoːn.tsɪmɐ/", t:"Sala"},
          {w:"Tür", p:"/tyːɐ/", t:"Puerta"}, {w:"Fenster", p:"/ˈfɛnstɐ/", t:"Ventana"},
          {w:"Tisch", p:"/tɪʃ/", t:"Mesa"}, {w:"Stuhl", p:"/ʃtuːl/", t:"Silla"}
        ],
        phrases: [
          {o:"Mein Haus hat drei Schlafzimmer.", t:"Mi casa tiene tres dormitorios."},
          {o:"Die Küche ist groß.", t:"La cocina es grande."},
          {o:"Ich bin im Wohnzimmer.", t:"Estoy en la sala."}
        ],
        dialogue: [
          {s:"A", l:"Wie viele Zimmer hat dein Haus?"},
          {s:"B", l:"Es hat fünf Zimmer: zwei Schlafzimmer, eine Küche, ein Badezimmer und ein Wohnzimmer."},
          {s:"A", l:"Gibt es einen Garten?"},
          {s:"B", l:"Ja, es gibt einen kleinen Garten hinten."}
        ],
        culture: "En alemán, las palabras compuestas se escriben juntas: 'Schlafzimmer' = dormir + habitación.",
        quiz: [
          {q:"¿Cómo se dice 'cocina'?", opts:["Schlafzimmer","Küche","Badezimmer","Wohnzimmer"], a:1},
          {q:"¿Qué significa 'Fenster'?", opts:["Puerta","Ventana","Pared","Techo"], a:1},
          {q:"Traduce: 'Mi casa tiene dos dormitorios'", opts:["Mein Haus hat zwei Küchen","Mein Haus hat zwei Schlafzimmer","Mein Haus hat zwei Badezimmer","Mein Haus hat zwei Wohnzimmer"], a:1},
          {q:"¿Cómo se dice 'mesa'?", opts:["Stuhl","Tisch","Bett","Sofa"], a:1},
          {q:"¿Cuál es la palabra para 'silla'?", opts:["Tisch","Stuhl","Schreibtisch","Bett"], a:1}
        ]
      },
      {
        title: "Lektion 8: Die Stadt und Richtungen",
        subtitle: "La ciudad",
        vocab: [
          {w:"Straße", p:"/ʃtʁaːsə/", t:"Calle"}, {w:"Stadt", p:"/ʃtat/", t:"Ciudad"},
          {w:"Krankenhaus", p:"/ˈkʁaŋkənˌhaʊs/", t:"Hospital"}, {w:"Schule", p:"/ʃuːlə/", t:"Escuela"},
          {w:"Bank", p:"/baŋk/", t:"Banco"}, {w:"Park", p:"/paʁk/", t:"Parque"},
          {w:"Links", p:"/lɪŋks/", t:"Izquierda"}, {w:"Rechts", p:"/ʁɛçts/", t:"Derecha"},
          {w:"Geradeaus", p:"/ɡəˈʁaːdə.aʊs/", t:"Recto"}, {w:"Neben", p:"/ˈneːbn̩/", t:"Al lado"}
        ],
        phrases: [
          {o:"Wo ist das Krankenhaus?", t:"¿Dónde está el hospital?"},
          {o:"Biegen Sie an der Ecke links ab.", t:"Gira a la izquierda en la esquina."},
          {o:"Es ist neben der Bank.", t:"Está al lado del banco."}
        ],
        dialogue: [
          {s:"Tourist", l:"Entschuldigung, wo ist der Park?"},
          {s:"Einwohner", l:"Gehen Sie zwei Blocks geradeaus, dann biegen Sie rechts ab."},
          {s:"Tourist", l:"Vielen Dank!"},
          {s:"Einwohner", l:"Bitte schön."}
        ],
        culture: "En Alemania, 'Entschuldigung' es la fórmula de cortesía para interrumpir o pedir disculpas.",
        quiz: [
          {q:"¿Cómo se dice 'izquierda'?", opts:["Rechts","Links","Geradeaus","Hinten"], a:1},
          {q:"¿Qué significa 'Krankenhaus'?", opts:["Escuela","Hospital","Banco","Parque"], a:1},
          {q:"Traduce: 'Gira a la derecha'", opts:["Gehen Sie geradeaus","Biegen Sie links ab","Biegen Sie rechts ab","Gehen Sie zurück"], a:2},
          {q:"¿Cómo se dice 'calle'?", opts:["Weg","Straße","Allee","Autobahn"], a:1},
          {q:"¿Cuál es la palabra para 'ciudad'?", opts:["Dorf","Stadt","Städtchen","Land"], a:1}
        ]
      },
      {
        title: "Lektion 9: Berufe und Arbeiten",
        subtitle: "Profesiones",
        vocab: [
          {w:"Arzt", p:"/aːʁtst/", t:"Médico"}, {w:"Lehrer", p:"/ˈleːʁɐ/", t:"Profesor"},
          {w:"Ingenieur", p:"/ɪnʒeˈni̯øːɐ/", t:"Ingeniero"}, {w:"Krankenpfleger", p:"/ˈkʁaŋknpfleːɡɐ/", t:"Enfermero"},
          {w:"Student", p:"/ʃtuˈdɛnt/", t:"Estudiante"}, {w:"Polizist", p:"/poliˈtsɪst/", t:"Policía"},
          {w:"Fahrer", p:"/ˈfaːʁɐ/", t:"Conductor"}, {w:"Koch", p:"/kɔx/", t:"Cocinero"},
          {w:"Anwalt", p:"/ˈanvalt/", t:"Abogado"}, {w:"Programmierer", p:"/pʁoɡʁaˈmiːʁɐ/", t:"Programador"}
        ],
        phrases: [
          {o:"Was machen Sie beruflich?", t:"¿A qué te dedicas?"},
          {o:"Ich arbeite in einem Krankenhaus.", t:"Trabajo en un hospital."},
          {o:"Sie ist Ingenieurin.", t:"Ella es ingeniera."}
        ],
        dialogue: [
          {s:"A", l:"Was machen Sie beruflich?"},
          {s:"B", l:"Ich bin Computeringenieur. Ich arbeite in einem Militärkrankenhaus."},
          {s:"A", l:"Das klingt interessant!"},
          {s:"B", l:"Ja, ich entwickle Software für das Gesundheitswesen."}
        ],
        culture: "En alemán, las profesiones tienen forma femenina añadiendo '-in': 'Lehrerin', 'Ärztin', 'Ingenieurin'.",
        quiz: [
          {q:"¿Cómo se dice 'médico'?", opts:["Krankenpfleger","Arzt","Lehrer","Ingenieur"], a:1},
          {q:"¿Qué significa 'Ingenieur'?", opts:["Arquitecto","Ingeniero","Médico","Abogado"], a:1},
          {q:"Traduce: 'Soy profesor'", opts:["Ich bin Student","Ich bin Lehrer","Ich bin ein Lehrer","Ich Lehrer"], a:1},
          {q:"¿Cómo se dice 'programador'?", opts:["Designer","Programmierer","Entwickler","Ingenieur"], a:1},
          {q:"¿Cuál es la palabra para 'enfermero'?", opts:["Arzt","Krankenpfleger","Koch","Fahrer"], a:1}
        ]
      },
      {
        title: "Lektion 10: Alltagsgespräch",
        subtitle: "Conversación cotidiana",
        vocab: [
          {w:"Heute", p:"/ˈhɔʏtə/", t:"Hoy"}, {w:"Morgen", p:"/ˈmɔʁɡn̩/", t:"Mañana"},
          {w:"Gestern", p:"/ˈɡɛstɐn/", t:"Ayer"}, {w:"Immer", p:"/ˈɪmɐ/", t:"Siempre"},
          {w:"Manchmal", p:"/ˈmançmaːl/", t:"A veces"}, {w:"Nie", p:"/niː/", t:"Nunca"},
          {w:"Vielleicht", p:"/fiˈlaɪçt/", t:"Tal vez"}, {w:"Natürlich", p:"/naˈtyːɐlɪç/", t:"Por supuesto"},
          {w:"Ich denke", p:"/ɪç ˈdɛŋkə/", t:"Yo creo"}, {w:"Ich weiß nicht", p:"/ɪç vaɪs nɪçt/", t:"No sé"}
        ],
        phrases: [
          {o:"Normalerweise stehe ich um 7 auf.", t:"Usualmente me despierto a las 7."},
          {o:"Manchmal gehe ich ins Fitnessstudio.", t:"A veces voy al gimnasio."},
          {o:"Ich mag kein kaltes Wetter.", t:"No me gusta el clima frío."}
        ],
        dialogue: [
          {s:"A", l:"Was machst du normalerweise am Sonntag?"},
          {s:"B", l:"Normalerweise verbringe ich Zeit mit meiner Familie. Manchmal gehen wir in den Park."},
          {s:"A", l:"Kochst du gerne?"},
          {s:"B", l:"Ja, ich liebe es! Natürlich hilft mir mein Sohn manchmal."}
        ],
        culture: "Los alemanes valoran la puntualidad. 'Pünktlichkeit' es una virtud social muy apreciada.",
        quiz: [
          {q:"¿Cómo se dice 'mañana' (tiempo)?", opts:["Heute","Morgen","Gestern","Jetzt"], a:1},
          {q:"¿Qué significa 'manchmal'?", opts:["Siempre","Nunca","A veces","Casi nunca"], a:2},
          {q:"Traduce: 'No sé'", opts:["Ich verstehe nicht","Ich weiß nicht","Ich denke nicht","Ich mag nicht"], a:1},
          {q:"¿Cómo se dice 'por supuesto'?", opts:["Vielleicht","Natürlich","Wahrscheinlich","Ich denke"], a:1},
          {q:"¿Cuál es el adverbio de 'siempre'?", opts:["Nie","Manchmal","Immer","Normalerweise"], a:2}
        ]
      }
    ],
    intermedio: [
      {
        title: "Lektion 1: Reisen und Verkehr",
        subtitle: "Viajes y transporte",
        vocab: [
          {w:"Flughafen", p:"/ˈfluːkhaːfn̩/", t:"Aeropuerto"}, {w:"Flug", p:"/fluːk/", t:"Vuelo"},
          {w:"Fahrkarte", p:"/ˈfaːɐ̯kaʁtə/", t:"Boleto"}, {w:"Gepäck", p:"/ɡəˈpɛk/", t:"Equipaje"},
          {w:"Zug", p:"/tsuːk/", t:"Tren"}, {w:"Bus", p:"/bʊs/", t:"Autobús"},
          {w:"U-Bahn", p:"/ˈuːbaːn/", t:"Metro"}, {w:"Reservierung", p:"/ʁezɛʁˈviːʁʊŋ/", t:"Reservación"},
          {w:"Abfahrt", p:"/ˈapfaːʁt/", t:"Salida"}, {w:"Ankunft", p:"/ˈankʊnft/", t:"Llegada"}
        ],
        phrases: [
          {o:"Ich möchte einen Flug nach Madrid buchen.", t:"Quisiera reservar un vuelo a Madrid."},
          {o:"Wann fährt der Zug ab?", t:"¿A qué hora sale el tren?"},
          {o:"Wo kann ich mein Gepäck abholen?", t:"¿Dónde puedo recoger mi equipaje?"}
        ],
        dialogue: [
          {s:"Agent", l:"Guten Tag. Wie kann ich Ihnen helfen?"},
          {s:"Reisender", l:"Ich muss meinen Flug auf morgen ändern."},
          {s:"Agent", l:"Gerne. Es gibt einen Flug um 15:30 Uhr. Ist das in Ordnung?"},
          {s:"Reisender", l:"Perfekt, danke."}
        ],
        culture: "El Deutsche Bahn (DB) es el sistema ferroviario alemán, famoso por su puntualidad (aunque ha mejorado).",
        quiz: [
          {q:"¿Cómo se dice 'equipaje'?", opts:["Tasche","Gepäck","Rucksack","Koffer"], a:1},
          {q:"¿Qué significa 'Abfahrt'?", opts:["Llegada","Salida","Escala","Retraso"], a:1},
          {q:"Traduce: 'Quisiera reservar un vuelo'", opts:["Ich will einen Flug","Ich möchte einen Flug buchen","Ich brauche eine Fahrkarte","Ich habe eine Reservierung"], a:1},
          {q:"¿Cómo se dice 'metro'?", opts:["Metro","U-Bahn","Subway","Underground"], a:1},
          {q:"¿Cuál es la palabra para 'boleto'?", opts:["Pass","Fahrkarte","Karte","Gutschein"], a:1}
        ]
      },
      {
        title: "Lektion 2: Einkaufen und Geld",
        subtitle: "Compras y dinero",
        vocab: [
          {w:"Geld", p:"/ɡɛlt/", t:"Dinero"}, {w:"Bargeld", p:"/ˈbaːɐ̯ɡɛlt/", t:"Efectivo"},
          {w:"Kreditkarte", p:"/kʁeˈdiːtˌkaʁtə/", t:"Tarjeta de crédito"}, {w:"Preis", p:"/pʁaɪs/", t:"Precio"},
          {w:"Rabatt", p:"/ʁaˈbat/", t:"Descuento"}, {w:"Quittung", p:"/ˈkvɪtʊŋ/", t:"Recibo"},
          {w:"Teuer", p:"/ˈtɔʏɐ/", t:"Caro"}, {w:"Billig", p:"/ˈbɪlɪç/", t:"Barato"},
          {w:"Größe", p:"/ˈɡʁøːsə/", t:"Talla"}, {w:"Rückerstattung", p:"/ˈʁʏk.ɛʁˌʃtatʊŋ/", t:"Reembolso"}
        ],
        phrases: [
          {o:"Wie viel kostet das?", t:"¿Cuánto cuesta esto?"},
          {o:"Akzeptieren Sie Kreditkarten?", t:"¿Aceptan tarjetas de crédito?"},
          {o:"Kann ich eine Rückerstattung bekommen?", t:"¿Puedo obtener un reembolso?"}
        ],
        dialogue: [
          {s:"Kunde", l:"Entschuldigung, wie viel kostet dieses Hemd?"},
          {s:"Verkäufer", l:"Es kostet 25 Euro. Wir haben heute 10% Rabatt."},
          {s:"Kunde", l:"Super. Kann ich mit Karte zahlen?"},
          {s:"Verkäufer", l:"Natürlich. Hier ist Ihre Quittung."}
        ],
        culture: "En Alemania, el regateo no es común en tiendas, pero sí en mercadillos (Flohmarkt).",
        quiz: [
          {q:"¿Cómo se dice 'descuento'?", opts:["Angebot","Rabatt","Sale","Preis"], a:1},
          {q:"¿Qué significa 'Quittung'?", opts:["Receta","Recibo","Reembolso","Reserva"], a:1},
          {q:"Traduce: '¿Cuánto cuesta?'", opts:["Was ist das?","Wie viel kostet das?","Wo ist das?","Wann ist das?"], a:1},
          {q:"¿Cómo se dice 'caro'?", opts:["Billig","Kostenlos","Teuer","Niedrig"], a:2},
          {q:"¿Cuál es la palabra para 'efectivo'?", opts:["Karte","Bargeld","Scheck","Münze"], a:1}
        ]
      },
      {
        title: "Lektion 3: Gesundheit und menschlicher Körper",
        subtitle: "Salud",
        vocab: [
          {w:"Kopfschmerzen", p:"/ˈkɔpfˌʃmɛʁtsn̩/", t:"Dolor de cabeza"}, {w:"Fieber", p:"/ˈfiːbɐ/", t:"Fiebre"},
          {w:"Husten", p:"/ˈhʊstn̩/", t:"Tos"}, {w:"Medizin", p:"/mediˈtsiːn/", t:"Medicina"},
          {w:"Termin", p:"/tɛʁˈmiːn/", t:"Cita"}, {w:"Symptom", p:"/zʏmpˈtoːm/", t:"Síntoma"},
          {w:"Rezept", p:"/ʁeˈtsɛpt/", t:"Receta médica"}, {w:"Allergie", p:"/aleˈɡʁiː/", t:"Alergia"},
          {w:"Schmerz", p:"/ʃmɛʁts/", t:"Dolor"}, {w:"Genesung", p:"/ɡəˈneːzʊŋ/", t:"Recuperación"}
        ],
        phrases: [
          {o:"Ich habe Kopfschmerzen und Fieber.", t:"Tengo dolor de cabeza y fiebre."},
          {o:"Ich bin allergisch gegen Penicillin.", t:"Soy alérgico a la penicilina."},
          {o:"Ich muss einen Arzt sehen.", t:"Necesito ver a un médico."}
        ],
        dialogue: [
          {s:"Arzt", l:"Was fehlt Ihnen?"},
          {s:"Patient", l:"Ich habe seit zwei Tagen Kopfschmerzen und Fieber."},
          {s:"Arzt", l:"Sind Sie allergisch gegen Medikamente?"},
          {s:"Patient", l:"Ja, ich bin allergisch gegen Penicillin."}
        ],
        culture: "En Alemania, el sistema de salud es mixto: público (gesetzliche) y privado (private Krankenversicherung).",
        quiz: [
          {q:"¿Cómo se dice 'fiebre'?", opts:["Erkältung","Fieber","Grippe","Husten"], a:1},
          {q:"¿Qué significa 'Rezept'?", opts:["Presión","Receta médica","Presentación","Prevención"], a:1},
          {q:"Traduce: 'Soy alérgico a...'", opts:["Ich habe Schmerzen...","Ich bin allergisch gegen...","Ich brauche...","Ich fühle..."], a:1},
          {q:"¿Cómo se dice 'dolor de cabeza'?", opts:["Bauchschmerzen","Kopfschmerzen","Rückenschmerzen","Zahnschmerzen"], a:1},
          {q:"¿Cuál es la palabra para 'cita médica'?", opts:["Besuch","Treffen","Termin","Plan"], a:2}
        ]
      },
      {
        title: "Lektion 4: Klima und Umwelt",
        subtitle: "Clima y medio ambiente",
        vocab: [
          {w:"Wetter", p:"/ˈvɛtɐ/", t:"Clima"}, {w:"Sonnig", p:"/ˈzɔnɪç/", t:"Soleado"},
          {w:"Regnerisch", p:"/ˈʁɛɡnəʁɪʃ/", t:"Lluvioso"}, {w:"Bewölkt", p:"/bəˈvœlkt/", t:"Nublado"},
          {w:"Temperatur", p:"/tɛmpəʁaˈtuːɐ/", t:"Temperatura"}, {w:"Verschmutzung", p:"/fɛɐ̯ˈʃmʊtsʊŋ/", t:"Contaminación"},
          {w:"Recycling", p:"/ˈʁeːsaɪklɪŋ/", t:"Reciclaje"}, {w:"Umwelt", p:"/ˈʊmvɛlt/", t:"Medio ambiente"},
          {w:"Klimawandel", p:"/ˈkliːmaˌvandl̩/", t:"Cambio climático"}, {w:"Erneuerbar", p:"/ɛɐ̯ˈnɔʏɐbaːɐ/", t:"Renovable"}
        ],
        phrases: [
          {o:"Morgen wird es regnen.", t:"Va a llover mañana."},
          {o:"Die Temperatur beträgt 30 Grad.", t:"La temperatura es de 30 grados."},
          {o:"Wir sollten die Umwelt schützen.", t:"Debemos proteger el medio ambiente."}
        ],
        dialogue: [
          {s:"A", l:"Wie ist das Wetter heute?"},
          {s:"B", l:"Es ist sonnig, aber etwas windig. Die Temperatur liegt bei etwa 28 Grad."},
          {s:"A", l:"Perfekt für einen Spaziergang. Hast du vom neuen Recycling-Programm gehört?"},
          {s:"B", l:"Ja! Ich denke, es wird helfen, die Verschmutzung zu reduzieren."}
        ],
        culture: "Alemania es líder mundial en energías renovables (Energiewende).",
        quiz: [
          {q:"¿Cómo se dice 'lluvioso'?", opts:["Sonnig","Regnerisch","Bewölkt","Windig"], a:1},
          {q:"¿Qué significa 'Klimawandel'?", opts:["Cambio de estación","Cambio climático","Clima cálido","Clima frío"], a:1},
          {q:"Traduce: 'La temperatura es de 25 grados'", opts:["Es sind 25 Grad","Das Wetter ist 25","Es hat 25 Wärme","Die Temp ist 25"], a:0},
          {q:"¿Cómo se dice 'contaminación'?", opts:["Recycling","Verschmutzung","Erhaltung","Schutz"], a:1},
          {q:"¿Cuál es la palabra para 'renovable'?", opts:["Wiederverwendbar","Recycelbar","Erneuerbar","Wiederherstellbar"], a:2}
        ]
      },
      {
        title: "Lektion 5: Arbeit und Büro",
        subtitle: "Trabajo y oficina",
        vocab: [
          {w:"Besprechung", p:"/bəˈʃpʁɛçʊŋ/", t:"Reunión"}, {w:"Frist", p:"/fʁɪst/", t:"Fecha límite"},
          {w:"Projekt", p:"/pʁoˈjɛkt/", t:"Proyecto"}, {w:"Kollege", p:"/koˈleːɡə/", t:"Colega"},
          {w:"Zeitplan", p:"/ˈtsaɪtˌplaːn/", t:"Horario"}, {w:"E-Mail", p:"/ˈiːmɛl/", t:"Correo"},
          {w:"Bericht", p:"/bəˈʁɪçt/", t:"Informe"}, {w:"Gehalt", p:"/ɡəˈhalt/", t:"Salario"},
          {w:"Beförderung", p:"/bəˈfœʁdəʁʊŋ/", t:"Promoción"}, {w:"Heimarbeit", p:"/ˈhaɪmˌaʁbaɪt/", t:"Trabajo remoto"}
        ],
        phrases: [
          {o:"Lass uns eine Besprechung für Montag planen.", t:"Programemos una reunión para el lunes."},
          {o:"Die Frist ist nächsten Freitag.", t:"La fecha límite es el próximo viernes."},
          {o:"Ich arbeite drei Tage pro Woche remote.", t:"Trabajo remotamente tres días a la semana."}
        ],
        dialogue: [
          {s:"Chef", l:"Wie läuft das Projekt?"},
          {s:"Mitarbeiter", l:"Es läuft gut. Wir werden die Frist einhalten."},
          {s:"Chef", l:"Super. Kannst du mir den Bericht per E-Mail schicken?"},
          {s:"Mitarbeiter", l:"Klar, ich schicke ihn heute Nachmittag."}
        ],
        culture: "En Alemania, la puntualidad es esencial. 'Pünktlichkeit' es una virtud profesional fundamental.",
        quiz: [
          {q:"¿Cómo se dice 'fecha límite'?", opts:["Zeitplan","Frist","Besprechung","Bericht"], a:1},
          {q:"¿Qué significa 'Kollege'?", opts:["Chef","Kunde","Kollege","Mitarbeiter"], a:2},
          {q:"Traduce: 'Trabajo remotamente'", opts:["Ich arbeite zu Hause","Ich arbeite remote","Ich arbeite allein","Ich arbeite online"], a:1},
          {q:"¿Cómo se dice 'reunión'?", opts:["Konferenz","Besprechung","Veranstaltung","Treffen"], a:1},
          {q:"¿Cuál es la palabra para 'salario'?", opts:["Geld","Bezahlung","Gehalt","Lohn"], a:2}
        ]
      },
      {
        title: "Lektion 6: Technologie und Kommunikation",
        subtitle: "Tecnología",
        vocab: [
          {w:"Software", p:"/ˈzɔftvɛːɐ/", t:"Software"}, {w:"Hardware", p:"/ˈhaːdveːɐ/", t:"Hardware"},
          {w:"Netzwerk", p:"/ˈnɛtsvɛʁk/", t:"Red"}, {w:"Datenbank", p:"/ˈdaːtn̩ˌbaŋk/", t:"Base de datos"},
          {w:"Cloud", p:"/klaʊt/", t:"Nube"}, {w:"Künstliche Intelligenz", p:"/ˈkʏnstlɪçə ɪntɛliˈɡɛnts/", t:"Inteligencia artificial"},
          {w:"Cybersicherheit", p:"/ˈsʏbɐˌzɪçɐhaɪt/", t:"Ciberseguridad"}, {w:"Update", p:"/ˈʌpdeɪt/", t:"Actualización"},
          {w:"Bug", p:"/bʌɡ/", t:"Error"}, {w:"Code", p:"/koːt/", t:"Código"}
        ],
        phrases: [
          {o:"Ich entwickle Software für das Gesundheitswesen.", t:"Desarrollo software para salud."},
          {o:"Das System braucht ein Update.", t:"El sistema necesita una actualización."},
          {o:"Wir nutzen Cloud-Speicher.", t:"Usamos almacenamiento en la nube."}
        ],
        dialogue: [
          {s:"Entwickler", l:"Ich habe einen Bug im Authentifizierungsmodul gefunden."},
          {s:"Leiter", l:"Kannst du ihn vor dem nächsten Update beheben?"},
          {s:"Entwickler", l:"Ja, ich pushe den Code heute Abend ins Repository."},
          {s:"Leiter", l:"Super. Lass uns auch die Cybersicherheitsprotokolle verbessern."}
        ],
        culture: "Alemania tiene un ecosistema tech fuerte, con Berlín como hub de startups europeo.",
        quiz: [
          {q:"¿Cómo se dice 'base de datos'?", opts:["Speicherung","Datenbank","Datacenter","Dataset"], a:1},
          {q:"¿Qué significa 'Bug'?", opts:["Insekt","Softwarefehler","Update","Funktion"], a:1},
          {q:"Traduce: 'Inteligencia artificial'", opts:["Automatische Intelligenz","Künstliche Intelligenz","Fortschrittliche Intelligenz","Alternative Intelligenz"], a:1},
          {q:"¿Cómo se dice 'ciberseguridad'?", opts:["Netzwerksicherheit","Websicherheit","Cybersicherheit","Digitale Sicherheit"], a:2},
          {q:"¿Cuál es la palabra para 'nube' (tecnología)?", opts:["Himmel","Cloud","Server","Host"], a:1}
        ]
      },
      {
        title: "Lektion 7: Kultur und Traditionen",
        subtitle: "Cultura alemana",
        vocab: [
          {w:"Feiertag", p:"/ˈfaɪɐ̯taːk/", t:"Festivo"}, {w:"Feier", p:"/ˈfaɪɐ/", t:"Celebración"},
          {w:"Tradition", p:"/tʁadiˈtsjoːn/", t:"Tradición"}, {w:"Brauch", p:"/bʁaʊx/", t:"Costumbre"},
          {w:"Festival", p:"/fɛstiˈvaːl/", t:"Festival"}, {w:"Geschenk", p:"/ɡəˈʃɛŋk/", t:"Regalo"},
          {w:"Party", p:"/ˈpaːɐ̯ti/", t:"Fiesta"}, {w:"Hochzeit", p:"/ˈhɔxˌtsaɪt/", t:"Boda"},
          {w:"Geburtstag", p:"/ɡəˈbuːɐ̯tsˌtaːk/", t:"Cumpleaños"}, {w:"Jahrestag", p:"/ˈjaːʁəsˌtaːk/", t:"Aniversario"}
        ],
        phrases: [
          {o:"Frohe Weihnachten!", t:"¡Feliz Navidad!"},
          {o:"Alles Gute zum Geburtstag!", t:"¡Feliz cumpleaños!"},
          {o:"Wir feiern Erntedankfest im Oktober.", t:"Celebramos el Día de Acción de Gracias en octubre."}
        ],
        dialogue: [
          {s:"A", l:"Wie feierst du Silvester?"},
          {s:"B", l:"Wir essen normalerweise mit der Familie zu Abend und schauen den Countdown."},
          {s:"A", l:"Tauscht ihr Geschenke aus?"},
          {s:"B", l:"Ja, und um Mitternacht stoßen wir mit Sekt an."}
        ],
        culture: "El Oktoberfest de Múnich es el festival popular más grande del mundo.",
        quiz: [
          {q:"¿Cómo se dice 'boda'?", opts:["Party","Hochzeit","Feier","Jahrestag"], a:1},
          {q:"¿Qué significa 'Tradition'?", opts:["Brauch","Tradición","Feier","Festival"], a:1},
          {q:"Traduce: 'Feliz cumpleaños'", opts:["Frohe Feiertage","Alles Gute zum Geburtstag","Gute Hochzeit","Gute Party"], a:1},
          {q:"¿Cómo se dice 'regalo'?", opts:["Geschenk","Erinnerung","Preis","Belohnung"], a:0},
          {q:"¿Cuál es el festival más famoso de Alemania?", opts:["Weihnachten","Oktoberfest","Ostern","Pfingsten"], a:1}
        ]
      },
      {
        title: "Lektion 8: Unterhaltung und Freizeit",
        subtitle: "Entretenimiento",
        vocab: [
          {w:"Film", p:"/fɪlm/", t:"Película"}, {w:"Buch", p:"/buːx/", t:"Libro"},
          {w:"Konzert", p:"/kɔnˈtsɛʁt/", t:"Concierto"}, {w:"Museum", p:"/muˈzeːʊm/", t:"Museo"},
          {w:"Theater", p:"/teˈaːtɐ/", t:"Teatro"}, {w:"Hobby", p:"/ˈhɔbi/", t:"Pasatiempo"},
          {w:"Serie", p:"/ˈzeːʁiə/", t:"Serie"}, {w:"Spiel", p:"/ʃpiːl/", t:"Juego"},
          {w:"Reisen", p:"/ˈʁaɪzn̩/", t:"Viajar"}, {w:"Fotografie", p:"/fotoɡʁaˈfiː/", t:"Fotografía"}
        ],
        phrases: [
          {o:"Ich lese gerne romantische Romane.", t:"Me gusta leer novelas románticas."},
          {o:"Was ist dein Lieblingsfilm?", t:"¿Cuál es tu película favorita?"},
          {o:"Lass uns heute Abend ins Kino gehen.", t:"Vamos al cine esta noche."}
        ],
        dialogue: [
          {s:"A", l:"Was machst du in deiner Freizeit?"},
          {s:"B", l:"Ich schaue gerne Serien und lese. Ich interessiere mich auch für Fotografie."},
          {s:"A", l:"Schön! Hast du in letzter Zeit gute Filme gesehen?"},
          {s:"B", l:"Ja, ich habe letztes Wochenende einen tollen Abenteuerfilm gesehen."}
        ],
        culture: "Alemania tiene una rica tradición de música clásica: Bach, Beethoven, Wagner.",
        quiz: [
          {q:"¿Cómo se dice 'película'?", opts:["Film","Video","Show","Programm"], a:0},
          {q:"¿Qué significa 'Hobby'?", opts:["Arbeit","Freizeitbeschäftigung","Sport","Studium"], a:1},
          {q:"Traduce: 'Me gusta leer'", opts:["Ich schreibe gerne","Ich lese gerne","Ich liebe das Lesen","Ich liebe das Buch"], a:1},
          {q:"¿Cómo se dice 'museo'?", opts:["Galerie","Museum","Ausstellung","Palast"], a:1},
          {q:"¿Cuál es la palabra para 'serie' (TV)?", opts:["Show","Programm","Serie","Episode"], a:2}
        ]
      },
      {
        title: "Lektion 9: Bildung und Lernen",
        subtitle: "Educación",
        vocab: [
          {w:"Universität", p:"/univɛʁziˈtɛːt/", t:"Universidad"}, {w:"Abschluss", p:"/ˈapʃlʊs/", t:"Título"},
          {w:"Kurs", p:"/kʊʁs/", t:"Curso"}, {w:"Lehrer", p:"/ˈleːʁɐ/", t:"Profesor"},
          {w:"Prüfung", p:"/ˈpʁyːfʊŋ/", t:"Examen"}, {w:"Hausaufgaben", p:"/ˈhaʊsˌ.aʊfɡaːbn̩/", t:"Tarea"},
          {w:"Bibliothek", p:"/biblioˈteːk/", t:"Biblioteca"}, {w:"Stipendium", p:"/ʃtiˈpɛndi̯ʊm/", t:"Beca"},
          {w:"Forschung", p:"/ˈfɔʁʃʊŋ/", t:"Investigación"}, {w:"These", p:"/ˈteːzə/", t:"Tesis"}
        ],
        phrases: [
          {o:"Ich studiere Informatik.", t:"Estudio ciencias informáticas."},
          {o:"Sie hat einen Doktortitel in Medizin.", t:"Ella tiene un doctorado en medicina."},
          {o:"Die Prüfung ist nächste Woche.", t:"El examen es la próxima semana."}
        ],
        dialogue: [
          {s:"Student", l:"Herr Professor, ich habe eine Frage zu meiner Doktorarbeit."},
          {s:"Professor", l:"Gerne. Was ist das Thema?"},
          {s:"Student", l:"Es geht um KI-Anwendungen im Gesundheitswesen."},
          {s:"Professor", l:"Ausgezeichnetes Thema. Lass uns ein Treffen vereinbaren."}
        ],
        culture: "El sistema alemán distingue: Bachelor (3-4 años), Master (2 años) y Doktor (3-5 años).",
        quiz: [
          {q:"¿Cómo se dice 'beca'?", opts:["Hilfe","Stipendium","Preis","Bonus"], a:1},
          {q:"¿Qué significa 'These'?", opts:["Thema","Tesis","Theorie","Test"], a:1},
          {q:"Traduce: 'Estoy estudiando'", opts:["Ich studiere","Ich studiere gerade","Ich lerne","Ich lerne gerade"], a:1},
          {q:"¿Cómo se dice 'biblioteca'?", opts:["Buchhandlung","Bibliothek","Archiv","Studio"], a:1},
          {q:"¿Cuál es la palabra para 'investigación'?", opts:["Studie","Forschung","Analyse","Suche"], a:1}
        ]
      },
      {
        title: "Lektion 10: Beziehungen und Emotionen",
        subtitle: "Relaciones y emociones",
        vocab: [
          {w:"Liebe", p:"/ˈliːbə/", t:"Amor"}, {w:"Freundschaft", p:"/ˈfʁɔʏntʃaft/", t:"Amistad"},
          {w:"Glück", p:"/ɡlʏk/", t:"Felicidad"}, {w:"Traurigkeit", p:"/ˈtʁaʊʁɪçkaɪt/", t:"Tristeza"},
          {w:"Vertrauen", p:"/fɛɐ̯ˈtʁaʊən/", t:"Confianza"}, {w:"Respekt", p:"/ʁeˈspɛkt/", t:"Respeto"},
          {w:"Empathie", p:"/ɛm paˈtiː/", t:"Empatía"}, {w:"Beziehung", p:"/bəˈtsiːʊŋ/", t:"Relación"},
          {w:"Umarmung", p:"/ˈʊm.aʁmʊŋ/", t:"Abrazo"}, {w:"Sich entschuldigen", p:"/zɪç ɛntˈʃʊldɪɡn̩/", t:"Disculparse"}
        ],
        phrases: [
          {o:"Ich verbringe gerne Zeit mit meiner Familie.", t:"Amo pasar tiempo con mi familia."},
          {o:"Entschuldige, dass ich zu spät komme.", t:"Perdón por llegar tarde."},
          {o:"Ich schätze deine Hilfe sehr.", t:"Realmente aprecio tu ayuda."}
        ],
        dialogue: [
          {s:"A", l:"Du siehst heute glücklich aus. Was ist passiert?"},
          {s:"B", l:"Ich habe das Wochenende mit meinem Sohn verbracht. Es war wunderbar."},
          {s:"A", l:"Das ist schön. Familie ist alles."},
          {s:"B", l:"Ich stimme zu. Ich bin ihnen sehr dankbar."}
        ],
        culture: "Los alemanes valoran la honestidad directa y las relaciones profundas sobre las superficiales.",
        quiz: [
          {q:"¿Cómo se dice 'amistad'?", opts:["Liebe","Freundschaft","Beziehung","Vertrauen"], a:1},
          {q:"¿Qué significa 'Empathie'?", opts:["Sympathie","Empathie","Antipathie","Apathie"], a:1},
          {q:"Traduce: 'Lo siento mucho'", opts:["Mir geht es schlecht","Es tut mir sehr leid","Ich bin traurig","Ich bereue"], a:1},
          {q:"¿Cómo se dice 'abrazo'?", opts:["Kuss","Umarmung","Handschlag","Streicheln"], a:1},
          {q:"¿Cuál es la palabra para 'confianza'?", opts:["Glaube","Überzeugung","Vertrauen","Hoffnung"], a:2}
        ]
      }
    ]
  },
  ruso: {
    name: "Ruso", flag: "🇷🇺",
    basico: [
      {
        title: "Урок 1: Приветствия и представления",
        subtitle: "Saludos y presentaciones",
        vocab: [
          {w:"Здравствуйте", p:"/zdraˈstvujtʲe/", t:"Hola (formal)"}, {w:"Привет", p:"/prʲiˈvʲet/", t:"Hola (informal)"},
          {w:"Доброе утро", p:"/ˈdobrəjə ˈutrə/", t:"Buenos días"}, {w:"Добрый день", p:"/ˈdobrɨj ˈdʲenʲ/", t:"Buenas tardes"},
          {w:"До свидания", p:"/də svidaˈnʲijə/", t:"Adiós"}, {w:"Пожалуйста", p:"/pɐˈžalujstə/", t:"Por favor"},
          {w:"Спасибо", p:"/spɐˈsʲibə/", t:"Gracias"}, {w:"Меня зовут...", p:"/mʲɪˈnʲa zɐˈvut/", t:"Me llamo..."},
          {w:"Очень приятно", p:"/ˈotʲɪnʲ ˈprʲijətnə/", t:"Encantado"}, {w:"Как дела?", p:"/kɐk dʲɪˈla/", t:"¿Cómo estás?"}
        ],
        phrases: [
          {o:"Здравствуйте, меня зовут Дани.", t:"Hola, me llamo Dani."},
          {o:"Я из Кубы.", t:"Soy de Cuba."},
          {o:"Как вас зовут?", t:"¿Cómo se llama usted?"},
          {o:"У меня всё хорошо, спасибо.", t:"Estoy bien, gracias."}
        ],
        dialogue: [
          {s:"Анна", l:"Здравствуйте! Меня зовут Анна."},
          {s:"Луис", l:"Привет, Анна! Я Луис. Очень приятно."},
          {s:"Анна", l:"Мне тоже приятно. Как дела?"},
          {s:"Луис", l:"Отлично, спасибо. А у вас?"}
        ],
        culture: "En ruso, 'Здравствуйте' es formal. Entre amigos se usa 'Привет'. Dar la mano es común entre hombres.",
        quiz: [
          {q:"¿Cómo se dice 'Buenos días'?", opts:["Добрый вечер","Доброе утро","Доброй ночи","До свидания"], a:1},
          {q:"¿Qué significa 'Очень приятно'?", opts:["Adiós","Buen viaje","Encantado","¿Cómo estás?"], a:2},
          {q:"Traduce: 'Me llamo...'", opts:["Я есть...","Меня зовут...","Я имею...","Я делаю..."], a:1},
          {q:"¿Cuál es la forma correcta de agradecer?", opts:["Пожалуйста","Извините","Спасибо","Привет"], a:2},
          {q:"¿Cómo preguntas '¿Cómo estás?'?", opts:["Кто вы?","Как дела?","Где вы?","Когда придёте?"], a:1}
        ]
      },
      {
        title: "Урок 2: Числа и алфавит",
        subtitle: "Números del 1 al 20",
        vocab: [
          {w:"Один", p:"/ɐˈdʲin/", t:"Uno"}, {w:"Два", p:"/dva/", t:"Dos"},
          {w:"Три", p:"/trʲi/", t:"Tres"}, {w:"Четыре", p:"/ˈtɕetɨrʲɪ/", t:"Cuatro"},
          {w:"Пять", p:"/pʲætʲ/", t:"Cinco"}, {w:"Десять", p:"/ˈdʲesʲɪtʲ/", t:"Diez"},
          {w:"Пятнадцать", p:"/ˈpʲitnət͡sətʲ/", t:"Quince"}, {w:"Двадцать", p:"/ˈdvat͡sətʲ/", t:"Veinte"},
          {w:"А", p:"/a/", t:"Letra A"}, {w:"Я", p:"/ja/", t:"Letra Ya"}
        ],
        phrases: [
          {o:"Мне тридцать пять лет.", t:"Tengo treinta y cinco años."},
          {o:"Мой номер телефона...", t:"Mi número de teléfono es..."},
          {o:"Сколько у тебя братьев?", t:"¿Cuántos hermanos tienes?"}
        ],
        dialogue: [
          {s:"Учитель", l:"Какой у тебя номер телефона?"},
          {s:"Ученик", l:"Пять пять пять, ноль один два три."},
          {s:"Учитель", l:"Сколько тебе лет?"},
          {s:"Ученик", l:"Мне тридцать пять лет."}
        ],
        culture: "El alfabeto cirílico tiene 33 letras. El ruso usa casos gramaticales que modifican las terminaciones.",
        quiz: [
          {q:"¿Cómo se escribe 15?", opts:["Четырнадцать","Пятнадцать","Шестнадцать","Тринадцать"], a:1},
          {q:"¿Cuál es el número 'семь'?", opts:["6","7","8","9"], a:1},
          {q:"Traduce: 'Tengo 20 años'", opts:["Мне 20 лет","Я 20 лет","У меня 20 лет","Я делаю 20 лет"], a:0},
          {q:"¿Cómo se dice 'ocho'?", opts:["Шесть","Восемь","Девять","Десять"], a:1},
          {q:"¿Cuánto es 'двенадцать'?", opts:["10","11","12","13"], a:2}
        ]
      },
      {
        title: "Урок 3: Семья",
        subtitle: "La familia",
        vocab: [
          {w:"Отец", p:"/ɐˈtʲets/", t:"Padre"}, {w:"Мать", p:"/matʲ/", t:"Madre"},
          {w:"Брат", p:"/brat/", t:"Hermano"}, {w:"Сестра", p:"/sʲɪˈstra/", t:"Hermana"},
          {w:"Сын", p:"/sɨn/", t:"Hijo"}, {w:"Дочь", p:"/dotɕ/", t:"Hija"},
          {w:"Дедушка", p:"/ˈdʲedʊʂkə/", t:"Abuelo"}, {w:"Бабушка", p:"/ˈbabʊʂkə/", t:"Abuela"},
          {w:"Дядя", p:"/ˈdʲadʲə/", t:"Tío"}, {w:"Тётя", p:"/ˈtʲɵtʲə/", t:"Tía"}
        ],
        phrases: [
          {o:"У меня два брата и одна сестра.", t:"Tengo dos hermanos y una hermana."},
          {o:"Моя семья очень большая.", t:"Mi familia es muy grande."},
          {o:"Это моя жена.", t:"Esta es mi esposa."}
        ],
        dialogue: [
          {s:"Мария", l:"У тебя есть братья или сёстры?"},
          {s:"Пётр", l:"Да, у меня один брат и две сестры."},
          {s:"Мария", l:"Как их зовут?"},
          {s:"Пётр", l:"Моего брата зовут Фернандо, а сестёр — Лаура и Ана."}
        ],
        culture: "En ruso, 'бабушка' (abuela) tiene un rol cultural muy importante en la crianza de los nietos.",
        quiz: [
          {q:"¿Cómo se dice 'abuela'?", opts:["Мать","Бабушка","Тётя","Сестра"], a:1},
          {q:"¿Qué significa 'дочь'?", opts:["Hijo","Hija","Madre","Tía"], a:1},
          {q:"Traduce: 'Tengo un hermano'", opts:["У меня сестра","У меня брат","У меня дядя","У меня сын"], a:1},
          {q:"¿Cuál es el plural de 'брат'?", opts:["Братья","Браты","Браты","Братов"], a:0},
          {q:"¿Cómo se dice 'esposo'?", opts:["Партнёр","Муж","Друг","Отец"], a:1}
        ]
      },
      {
        title: "Урок 4: Дни, месяцы и времена года",
        subtitle: "Calendario",
        vocab: [
          {w:"Понедельник", p:"/pənʲɪˈdʲelʲnʲɪk/", t:"Lunes"}, {w:"Вторник", p:"/ˈftornʲɪk/", t:"Martes"},
          {w:"Среда", p:"/srʲɪˈda/", t:"Miércoles"}, {w:"Январь", p:"/ˈjanvərʲ/", t:"Enero"},
          {w:"Февраль", p:"/fʲɪvˈralʲ/", t:"Febrero"}, {w:"Март", p:"/mart/", t:"Marzo"},
          {w:"Весна", p:"/vʲɪˈsna/", t:"Primavera"}, {w:"Лето", p:"/ˈlʲetə/", t:"Verano"},
          {w:"Осень", p:"/ˈosʲɪnʲ/", t:"Otoño"}, {w:"Зима", p:"/ˈzʲimə/", t:"Invierno"}
        ],
        phrases: [
          {o:"Мой день рождения в марте.", t:"Mi cumpleaños es en marzo."},
          {o:"Сегодня понедельник.", t:"Hoy es lunes."},
          {o:"Я люблю лето.", t:"Amo el verano."}
        ],
        dialogue: [
          {s:"А", l:"Какой сегодня день?"},
          {s:"Б", l:"Сегодня среда."},
          {s:"А", l:"Когда у тебя день рождения?"},
          {s:"Б", l:"Мой день рождения 19 января."}
        ],
        culture: "En ruso, los días de la semana derivan de los números: понедельник = después del domingo (primer día).",
        quiz: [
          {q:"¿Cómo se dice 'miércoles'?", opts:["Вторник","Среда","Четверг","Понедельник"], a:1},
          {q:"¿Qué significa 'весна'?", opts:["Verano","Otoño","Primavera","Invierno"], a:2},
          {q:"¿En qué mes está el verano en Rusia?", opts:["Январь","Июнь","Сентябрь","Декабрь"], a:1},
          {q:"Traduce: 'Hoy es viernes'", opts:["Сегодня четверг","Сегодня пятница","Сегодня воскресенье","Сегодня суббота"], a:1},
          {q:"¿Cómo se dice 'invierno'?", opts:["Зима","Лето","Весна","Осень"], a:0}
        ]
      },
      {
        title: "Урок 5: Цвета и формы",
        subtitle: "Colores y formas",
        vocab: [
          {w:"Красный", p:"/ˈkrasnɨj/", t:"Rojo"}, {w:"Синий", p:"/ˈsʲinʲij/", t:"Azul"},
          {w:"Зелёный", p:"/zʲɪˈlʲɵnɨj/", t:"Verde"}, {w:"Жёлтый", p:"/ˈžoltɨj/", t:"Amarillo"},
          {w:"Чёрный", p:"/ˈtɕɵrnɨj/", t:"Negro"}, {w:"Белый", p:"/ˈbʲelɨj/", t:"Blanco"},
          {w:"Круг", p:"/kruk/", t:"Círculo"}, {w:"Квадрат", p:"/kvɐˈdrat/", t:"Cuadrado"},
          {w:"Треугольник", p:"/trʲɪˈuɡolʲnʲɪk/", t:"Triángulo"}, {w:"Прямоугольник", p:"/prʲɪməˈuɡolʲnʲɪk/", t:"Rectángulo"}
        ],
        phrases: [
          {o:"Небо синее.", t:"El cielo es azul."},
          {o:"Моя машина красная.", t:"Mi carro es rojo."},
          {o:"Стол прямоугольный.", t:"La mesa es rectangular."}
        ],
        dialogue: [
          {s:"А", l:"Какого цвета твой дом?"},
          {s:"Б", l:"Он белый с красной дверью."},
          {s:"А", l:"Какой формы окно?"},
          {s:"Б", l:"Оно прямоугольное."}
        ],
        culture: "En ruso, los colores concuerdan en género, número y caso con el sustantivo.",
        quiz: [
          {q:"¿Cómo se dice 'verde'?", opts:["Синий","Зелёный","Жёлтый","Красный"], a:1},
          {q:"¿Qué significa 'круг'?", opts:["Cuadrado","Círculo","Triángulo","Rectángulo"], a:1},
          {q:"Traduce: 'El carro es negro'", opts:["Машина белая","Машина чёрная","Машина синяя","Машина красная"], a:1},
          {q:"¿Cómo se dice 'amarillo'?", opts:["Жёлтый","Оранжевый","Золотой","Коричневый"], a:0},
          {q:"¿Cuál es la forma de una pelota?", opts:["Квадрат","Треугольник","Круг","Прямоугольник"], a:2}
        ]
      },
      {
        title: "Урок 6: Еда и напитки",
        subtitle: "Comida y bebidas",
        vocab: [
          {w:"Хлеб", p:"/xlʲep/", t:"Pan"}, {w:"Вода", p:"/ˈvadə/", t:"Agua"},
          {w:"Мясо", p:"/ˈmʲasə/", t:"Carne"}, {w:"Рыба", p:"/ˈrɨbə/", t:"Pescado"},
          {w:"Рис", p:"/rʲis/", t:"Arroz"}, {w:"Кофе", p:"/ˈkofʲe/", t:"Café"},
          {w:"Молоко", p:"/mɐˈloko/", t:"Leche"}, {w:"Фрукт", p:"/frukt/", t:"Fruta"},
          {w:"Завтрак", p:"/ˈzaftrək/", t:"Desayuno"}, {w:"Ужин", p:"/ˈuʐɨn/", t:"Cena"}
        ],
        phrases: [
          {o:"Я голоден.", t:"Tengo hambre."},
          {o:"Я хочу кофе, пожалуйста.", t:"Quisiera un café, por favor."},
          {o:"Еда очень вкусная.", t:"La comida está deliciosa."}
        ],
        dialogue: [
          {s:"Повар", l:"Добрый вечер. Что будете заказывать?"},
          {s:"Гость", l:"Я хочу рыбу с рисом, пожалуйста."},
          {s:"Повар", l:"А что выпить?"},
          {s:"Гость", l:"Стакан воды, пожалуйста."}
        ],
        culture: "El 'борщ' (sopa de remolacha) y 'блины' (crepes) son platos icónicos rusos.",
        quiz: [
          {q:"¿Cómo se dice 'agua'?", opts:["Молоко","Вода","Сок","Кофе"], a:1},
          {q:"¿Qué significa 'завтрак'?", opts:["Almuerzo","Cena","Desayuno","Merienda"], a:2},
          {q:"Traduce: 'Tengo hambre'", opts:["Я хочу пить","Я голоден","Я устал","Я сыт"], a:1},
          {q:"¿Cómo se dice 'pan'?", opts:["Хлеб","Рис","Мясо","Рыба"], a:0},
          {q:"¿Cuál es la palabra para 'café'?", opts:["Чай","Кофе","Молоко","Вода"], a:1}
        ]
      },
      {
        title: "Урок 7: Дом и комнаты",
        subtitle: "La casa",
        vocab: [
          {w:"Дом", p:"/dom/", t:"Casa"}, {w:"Комната", p:"/ˈkomnətə/", t:"Habitación"},
          {w:"Кухня", p:"/ˈkuxnʲə/", t:"Cocina"}, {w:"Спальня", p:"/ˈspalʲnʲə/", t:"Dormitorio"},
          {w:"Ванная", p:"/ˈvanːəjə/", t:"Baño"}, {w:"Гостиная", p:"/ɡɐˈstʲinəjə/", t:"Sala"},
          {w:"Дверь", p:"/dvʲerʲ/", t:"Puerta"}, {w:"Окно", p:"/ɐˈkno/", t:"Ventana"},
          {w:"Стол", p:"/stol/", t:"Mesa"}, {w:"Стул", p:"/stul/", t:"Silla"}
        ],
        phrases: [
          {o:"В моём доме три спальни.", t:"Mi casa tiene tres dormitorios."},
          {o:"Кухня большая.", t:"La cocina es grande."},
          {o:"Я в гостиной.", t:"Estoy en la sala."}
        ],
        dialogue: [
          {s:"А", l:"Сколько комнат в твоём доме?"},
          {s:"Б", l:"Пять: две спальни, кухня, ванная и гостиная."},
          {s:"А", l:"Есть ли сад?"},
          {s:"Б", l:"Да, сзади есть небольшой сад."}
        ],
        culture: "En Rusia, muchas familias viven en apartamentos (квартира) en edificios soviéticos.",
        quiz: [
          {q:"¿Cómo se dice 'cocina'?", opts:["Спальня","Кухня","Ванная","Гостиная"], a:1},
          {q:"¿Qué significa 'окно'?", opts:["Puerta","Ventana","Pared","Techo"], a:1},
          {q:"Traduce: 'Mi casa tiene dos dormitorios'", opts:["В доме две кухни","В доме две спальни","В доме две ванные","В доме две гостиные"], a:1},
          {q:"¿Cómo se dice 'mesa'?", opts:["Стул","Стол","Кровать","Диван"], a:1},
          {q:"¿Cuál es la palabra para 'silla'?", opts:["Стол","Стул","Письменный стол","Кровать"], a:1}
        ]
      },
      {
        title: "Урок 8: Город и направления",
        subtitle: "La ciudad",
        vocab: [
          {w:"Улица", p:"/ˈulʲɪtsə/", t:"Calle"}, {w:"Город", p:"/ˈgorət/", t:"Ciudad"},
          {w:"Больница", p:"/bɐlʲˈnʲitsə/", t:"Hospital"}, {w:"Школа", p:"/˂ʂkolə/", t:"Escuela"},
          {w:"Банк", p:"/bank/", t:"Banco"}, {w:"Парк", p:"/park/", t:"Parque"},
          {w:"Налево", p:"/nɐˈlʲevə/", t:"Izquierda"}, {w:"Направо", p:"/nɐˈpravə/", t:"Derecha"},
          {w:"Прямо", p:"/ˈprʲamə/", t:"Recto"}, {w:"Рядом с", p:"/ˈrʲadəm s/", t:"Al lado de"}
        ],
        phrases: [
          {o:"Где больница?", t:"¿Dónde está el hospital?"},
          {o:"Поверните налево на углу.", t:"Gira a la izquierda en la esquina."},
          {o:"Это рядом с банком.", t:"Está al lado del banco."}
        ],
        dialogue: [
          {s:"Турист", l:"Извините, где парк?"},
          {s:"Местный", l:"Идите прямо два квартала, потом поверните направо."},
          {s:"Турист", l:"Большое спасибо!"},
          {s:"Местный", l:"Пожалуйста."}
        ],
        culture: "En ruso, 'Извините' es la fórmula de cortesía para interrumpir o pedir disculpas.",
        quiz: [
          {q:"¿Cómo se dice 'izquierda'?", opts:["Направо","Налево","Прямо","Назад"], a:1},
          {q:"¿Qué significa 'больница'?", opts:["Escuela","Hospital","Banco","Parque"], a:1},
          {q:"Traduce: 'Gira a la derecha'", opts:["Идите прямо","Поверните налево","Поверните направо","Возвращайтесь"], a:2},
          {q:"¿Cómo se dice 'calle'?", opts:["Дорога","Улица","Проспект","Шоссе"], a:1},
          {q:"¿Cuál es la palabra para 'ciudad'?", opts:["Деревня","Город","Посёлок","Страна"], a:1}
        ]
      },
      {
        title: "Урок 9: Профессии и работы",
        subtitle: "Profesiones",
        vocab: [
          {w:"Врач", p:"/vratɕ/", t:"Médico"}, {w:"Учитель", p:"/ˈutʲɪtʲɪlʲ/", t:"Profesor"},
          {w:"Инженер", p:"/ɪnʐɨˈnʲer/", t:"Ingeniero"}, {w:"Медбрат/медсестра", p:"/mʲɪdˈbrat/", t:"Enfermero/a"},
          {w:"Студент", p:"/stʊˈdʲent/", t:"Estudiante"}, {w:"Полицейский", p:"/pəlʲɪˈtsɛjskʲɪj/", t:"Policía"},
          {w:"Водитель", p:"/vɐˈdʲitʲɪlʲ/", t:"Conductor"}, {w:"Повар", p:"/ˈpovar/", t:"Cocinero"},
          {w:"Адвокат", p:"/ɐdvɐˈkat/", t:"Abogado"}, {w:"Программист", p:"/prəɡrɐˈmʲist/", t:"Programador"}
        ],
        phrases: [
          {o:"Кем вы работаете?", t:"¿A qué te dedicas?"},
          {o:"Я работаю в больнице.", t:"Trabajo en un hospital."},
          {o:"Она инженер.", t:"Ella es ingeniera."}
        ],
        dialogue: [
          {s:"А", l:"Кем вы работаете?"},
          {s:"Б", l:"Я инженер-программист. Работаю в военном госпитале."},
          {s:"А", l:"Это звучит интересно!"},
          {s:"Б", l:"Да, я разрабатываю программное обеспечение для здравоохранения."}
        ],
        culture: "En ruso, muchas profesiones tienen formas masculinas y femeninas distintas.",
        quiz: [
          {q:"¿Cómo se dice 'médico'?", opts:["Медбрат","Врач","Учитель","Инженер"], a:1},
          {q:"¿Qué significa 'инженер'?", opts:["Arquitecto","Ingeniero","Médico","Abogado"], a:1},
          {q:"Traduce: 'Soy profesor'", opts:["Я студент","Я учитель","Я есть учитель","Я учитель есть"], a:1},
          {q:"¿Cómo se dice 'programador'?", opts:["Дизайнер","Программист","Разработчик","Инженер"], a:1},
          {q:"¿Cuál es la palabra para 'enfermero'?", opts:["Врач","Медбрат","Повар","Водитель"], a:1}
        ]
      },
      {
        title: "Урок 10: Повседневный разговор",
        subtitle: "Conversación cotidiana",
        vocab: [
          {w:"Сегодня", p:"/sʲɪˈvodnʲə/", t:"Hoy"}, {w:"Завтра", p:"/ˈzaftrə/", t:"Mañana"},
          {w:"Вчера", p:"/ˈftɕerə/", t:"Ayer"}, {w:"Всегда", p:"/fsʲɪɡˈda/", t:"Siempre"},
          {w:"Иногда", p:"/ɪnɐɡˈda/", t:"A veces"}, {w:"Никогда", p:"/nʲɪkɐɡˈda/", t:"Nunca"},
          {w:"Может быть", p:"/ˈmoʐɨt ˈbɨtʲ/", t:"Tal vez"}, {w:"Конечно", p:"/kɐˈnʲeʂnə/", t:"Por supuesto"},
          {w:"Я думаю", p:"/ja ˈduməjʊ/", t:"Yo creo"}, {w:"Я не знаю", p:"/ja nʲɪ ˈznəjʊ/", t:"No sé"}
        ],
        phrases: [
          {o:"Обычно я просыпаюсь в 7.", t:"Usualmente me despierto a las 7."},
          {o:"Иногда я хожу в спортзал.", t:"A veces voy al gimnasio."},
          {o:"Я не люблю холодную погоду.", t:"No me gusta el clima frío."}
        ],
        dialogue: [
          {s:"А", l:"Что ты обычно делаешь в воскресенье?"},
          {s:"Б", l:"Обычно провожу время с семьёй. Иногда ходим в парк."},
          {s:"А", l:"Ты любишь готовить?"},
          {s:"Б", l:"Да, обожаю! Конечно, сын иногда мне помогает."}
        ],
        culture: "En ruso, la negación requiere 'не' antes del verbo: 'Я не знаю' (no sé).",
        quiz: [
          {q:"¿Cómo se dice 'mañana' (tiempo)?", opts:["Сегодня","Завтра","Вчера","Сейчас"], a:1},
          {q:"¿Qué significa 'иногда'?", opts:["Siempre","Nunca","A veces","Casi nunca"], a:2},
          {q:"Traduce: 'No sé'", opts:["Я не понимаю","Я не знаю","Я не думаю","Я не люблю"], a:1},
          {q:"¿Cómo se dice 'por supuesto'?", opts:["Может быть","Конечно","Возможно","Я думаю"], a:1},
          {q:"¿Cuál es el adverbio de 'siempre'?", opts:["Никогда","Иногда","Всегда","Обычно"], a:2}
        ]
      }
    ],
    intermedio: [
      {
        title: "Урок 1: Путешествия и транспорт",
        subtitle: "Viajes y transporte",
        vocab: [
          {w:"Аэропорт", p:"/ɐˈerəport/", t:"Aeropuerto"}, {w:"Полёт", p:"/pɐˈlʲot/", t:"Vuelo"},
          {w:"Билет", p:"/bʲɪˈlʲet/", t:"Boleto"}, {w:"Багаж", p:"/bɐˈɡaʂ/", t:"Equipaje"},
          {w:"Поезд", p:"/ˈpojest/", t:"Tren"}, {w:"Автобус", p:"/ˈaftobʊs/", t:"Autobús"},
          {w:"Метро", p:"/mʲɪˈtro/", t:"Metro"}, {w:"Бронирование", p:"/brənʲɪˈrovənʲɪjə/", t:"Reservación"},
          {w:"Отправление", p:"/ɐtˈpravʲlʲɪnʲɪjə/", t:"Salida"}, {w:"Прибытие", p:"/prʲɪˈbɨtʲɪjə/", t:"Llegada"}
        ],
        phrases: [
          {o:"Я хотел бы забронировать рейс в Мадрид.", t:"Quisiera reservar un vuelo a Madrid."},
          {o:"Во сколько отправляется поезд?", t:"¿A qué hora sale el tren?"},
          {o:"Где я могу получить свой багаж?", t:"¿Dónde puedo recoger mi equipaje?"}
        ],
        dialogue: [
          {s:"Агент", l:"Добрый день. Чем могу помочь?"},
          {s:"Путешественник", l:"Мне нужно изменить рейс на завтра."},
          {s:"Агент", l:"Конечно. Есть рейс в 15:30. Вас устраивает?"},
          {s:"Путешественник", l:"Отлично, спасибо."}
        ],
        culture: "El metro de Moscú es famoso por sus estaciones decoradas como palacios.",
        quiz: [
          {q:"¿Cómo se dice 'equipaje'?", opts:["Чемодан","Багаж","Рюкзак","Сумка"], a:1},
          {q:"¿Qué significa 'отправление'?", opts:["Llegada","Salida","Escala","Retraso"], a:1},
          {q:"Traduce: 'Quisiera reservar un vuelo'", opts:["Я хочу рейс","Я хотел бы забронировать рейс","Мне нужен билет","У меня бронирование"], a:1},
          {q:"¿Cómo se dice 'metro'?", opts:["Метро","Сабвей","Тьюб","Андерграунд"], a:0},
          {q:"¿Cuál es la palabra para 'boleto'?", opts:["Пропуск","Билет","Карта","Талон"], a:1}
        ]
      },
      {
        title: "Урок 2: Покупки и деньги",
        subtitle: "Compras y dinero",
        vocab: [
          {w:"Деньги", p:"/ˈdʲenʲɡʲɪ/", t:"Dinero"}, {w:"Наличные", p:"/nɐˈlʲitɕnɨjə/", t:"Efectivo"},
          {w:"Кредитная карта", p:"/krʲɪˈdʲitnəjə ˈkartə/", t:"Tarjeta de crédito"}, {w:"Цена", p:"/tsɨˈna/", t:"Precio"},
          {w:"Скидка", p:"/ˈskʲitkə/", t:"Descuento"}, {w:"Чек", p:"/tɕek/", t:"Recibo"},
          {w:"Дорогой", p:"/dɐˈroj/", t:"Caro"}, {w:"Дешёвый", p:"/dʲɪˈʂɵvɨj/", t:"Barato"},
          {w:"Размер", p:"/rɐzˈmʲer/", t:"Talla"}, {w:"Возврат", p:"/vɐzˈvrat/", t:"Reembolso"}
        ],
        phrases: [
          {o:"Сколько это стоит?", t:"¿Cuánto cuesta esto?"},
          {o:"Вы принимаете кредитные карты?", t:"¿Aceptan tarjetas de crédito?"},
          {o:"Могу ли я получить возврат?", t:"¿Puedo obtener un reembolso?"}
        ],
        dialogue: [
          {s:"Покупатель", l:"Извините, сколько стоит эта рубашка?"},
          {s:"Продавец", l:"25 евро. Сегодня у нас скидка 10%."},
          {s:"Покупатель", l:"Отлично. Могу я оплатить картой?"},
          {s:"Продавец", l:"Конечно. Вот ваш чек."}
        ],
        culture: "En Rusia, el regateo es común en mercados tradicionales, no en tiendas formales.",
        quiz: [
          {q:"¿Cómo se dice 'descuento'?", opts:["Предложение","Скидка","Акция","Цена"], a:1},
          {q:"¿Qué significa 'чек'?", opts:["Рецепт","Чек","Возврат","Бронирование"], a:1},
          {q:"Traduce: '¿Cuánto cuesta?'", opts:["Что это?","Сколько это стоит?","Где это?","Когда это?"], a:1},
          {q:"¿Cómo se dice 'caro'?", opts:["Дешёвый","Бесплатный","Дорогой","Низкий"], a:2},
          {q:"¿Cuál es la palabra para 'efectivo'?", opts:["Карта","Наличные","Чек","Монета"], a:1}
        ]
      },
      {
        title: "Урок 3: Здоровье и тело человека",
        subtitle: "Salud",
        vocab: [
          {w:"Головная боль", p:"/ɡəlɐˈvʲenəjə ˈbolʲ/", t:"Dolor de cabeza"}, {w:"Жар/температура", p:"/ʐar/", t:"Fiebre"},
          {w:"Кашель", p:"/ˈkaʂɨlʲ/", t:"Tos"}, {w:"Лекарство", p:"/lʲɪˈkarstvə/", t:"Medicina"},
          {w:"Приём", p:"/prʲɪˈjom/", t:"Cita"}, {w:"Симптом", p:"/ˈsʲimptəm/", t:"Síntoma"},
          {w:"Рецепт", p:"/rʲɪˈtsɛpt/", t:"Receta médica"}, {w:"Аллергия", p:"/ɐˈlʲerɡʲɪjə/", t:"Alergia"},
          {w:"Боль", p:"/bolʲ/", t:"Dolor"}, {w:"Выздоровление", p:"/vɨzːdərɐˈvlʲenʲɪjə/", t:"Recuperación"}
        ],
        phrases: [
          {o:"У меня головная боль и жар.", t:"Tengo dolor de cabeza y fiebre."},
          {o:"У меня аллергия на пенициллин.", t:"Soy alérgico a la penicilina."},
          {o:"Мне нужно к врачу.", t:"Necesito ver a un médico."}
        ],
        dialogue: [
          {s:"Врач", l:"Что вас беспокоит?"},
          {s:"Пациент", l:"У меня два дня головная боль и жар."},
          {s:"Врач", l:"У вас есть аллергия на лекарства?"},
          {s:"Пациент", l:"Да, у меня аллергия на пенициллин."}
        ],
        culture: "El sistema de salud ruso tiene un componente público (ОМС) y uno privado.",
        quiz: [
          {q:"¿Cómo se dice 'fiebre'?", opts:["Простуда","Жар","Грипп","Кашель"], a:1},
          {q:"¿Qué significa 'рецепт'?", opts:["Давление","Рецепт","Презентация","Профилактика"], a:1},
          {q:"Traduce: 'Soy alérgico a...'", opts:["У меня боль...","У меня аллергия на...","Мне нужно...","Я чувствую..."], a:1},
          {q:"¿Cómo se dice 'dolor de cabeza'?", opts:["Боль в животе","Головная боль","Боль в спине","Зубная боль"], a:1},
          {q:"¿Cuál es la palabra para 'cita médica'?", opts:["Визит","Встреча","Приём","План"], a:2}
        ]
      },
      {
        title: "Урок 4: Климат и окружающая среда",
        subtitle: "Clima y medio ambiente",
        vocab: [
          {w:"Погода", p:"/pɐˈɡodə/", t:"Clima"}, {w:"Солнечно", p:"/ˈsonʲɪtɕnə/", t:"Soleado"},
          {w:"Дождливо", p:"/dɐʐdʲˈlʲivə/", t:"Lluvioso"}, {w:"Облачно", p:"/ˈoblətnə/", t:"Nublado"},
          {w:"Температура", p:"/tʲɪmpʲɪrɐˈturə/", t:"Temperatura"}, {w:"Загрязнение", p:"/zəɡrʲɪzˈnʲenʲɪjə/", t:"Contaminación"},
          {w:"Переработка", p:"/pʲɪrʲɪˈrabotkə/", t:"Reciclaje"}, {w:"Окружающая среда", p:"/ɐkruˈʐajʊɕːəjə srʲɪˈda/", t:"Medio ambiente"},
          {w:"Изменение климата", p:"/ɪzmʲɪˈnʲenʲɪjə ˈklʲimətə/", t:"Cambio climático"}, {w:"Возобновляемый", p:"/vəzəbnɐˈvlʲajɪmɨj/", t:"Renovable"}
        ],
        phrases: [
          {o:"Завтра будет дождь.", t:"Va a llover mañana."},
          {o:"Температура 30 градусов.", t:"La temperatura es de 30 grados."},
          {o:"Мы должны защищать окружающую среду.", t:"Debemos proteger el medio ambiente."}
        ],
        dialogue: [
          {s:"А", l:"Какая сегодня погода?"},
          {s:"Б", l:"Солнечно, но немного ветрено. Температура около 28 градусов."},
          {s:"А", l:"Идеально для прогулки. Ты слышал о новой программе переработки?"},
          {s:"Б", l:"Да! Думаю, она поможет снизить загрязнение."}
        ],
        culture: "Rusia es uno de los mayores productores de energía del mundo, especialmente gas natural.",
        quiz: [
          {q:"¿Cómo se dice 'lluvioso'?", opts:["Солнечно","Дождливо","Облачно","Ветрено"], a:1},
          {q:"¿Qué significa 'изменение климата'?", opts:["Cambio de estación","Cambio climático","Clima cálido","Clima frío"], a:1},
          {q:"Traduce: 'La temperatura es de 25 grados'", opts:["25 градусов","Погода 25","Имеет 25 тепла","Темп 25"], a:0},
          {q:"¿Cómo se dice 'contaminación'?", opts:["Переработка","Загрязнение","Сохранение","Защита"], a:1},
          {q:"¿Cuál es la palabra para 'renovable'?", opts:["Повторно используемый","Перерабатываемый","Возобновляемый","Восстанавливаемый"], a:2}
        ]
      },
      {
        title: "Урок 5: Работа и офис",
        subtitle: "Trabajo y oficina",
        vocab: [
          {w:"Совещание", p:"/sɐvʲɪˈɕanʲɪjə/", t:"Reunión"}, {w:"Срок", p:"/srok/", t:"Fecha límite"},
          {w:"Проект", p:"/ˈproekt/", t:"Proyecto"}, {w:"Коллега", p:"/kɐˈlʲeɡə/", t:"Colega"},
          {w:"График", p:"/ˈɡrafʲɪk/", t:"Horario"}, {w:"Электронная почта", p:"/ɛlʲɪkˈtronːəjə ˈpotɕtə/", t:"Correo"},
          {w:"Отчёт", p:"/ɐˈtɕɵt/", t:"Informe"}, {w:"Зарплата", p:"/zɐrˈplatə/", t:"Salario"},
          {w:"Повышение", p:"/pəvɨˈʂenʲɪjə/", t:"Promoción"}, {w:"Удалённая работа", p:"/ʊdɐˈlʲɵnːəjə rɐˈbotə/", t:"Trabajo remoto"}
        ],
        phrases: [
          {o:"Давайте запланируем совещание на понедельник.", t:"Programemos una reunión para el lunes."},
          {o:"Срок — следующая пятница.", t:"La fecha límite es el próximo viernes."},
          {o:"Я работаю удалённо три дня в неделю.", t:"Trabajo remotamente tres días a la semana."}
        ],
        dialogue: [
          {s:"Начальник", l:"Как продвигается проект?"},
          {s:"Сотрудник", l:"Хорошо. Мы уложимся в срок."},
          {s:"Начальник", l:"Отлично. Можешь отправить отчёт по электронной почте?"},
          {s:"Сотрудник", l:"Конечно, отправлю сегодня днём."}
        ],
        culture: "En Rusia, las relaciones jerárquicas en el trabajo son más marcadas que en Occidente.",
        quiz: [
          {q:"¿Cómo se dice 'fecha límite'?", opts:["График","Срок","Совещание","Отчёт"], a:1},
          {q:"¿Qué significa 'коллега'?", opts:["Jefe","Cliente","Colega","Empleado"], a:2},
          {q:"Traduce: 'Trabajo remotamente'", opts:["Я работаю дома","Я работаю удалённо","Я работаю один","Я работаю онлайн"], a:1},
          {q:"¿Cómo se dice 'reunión'?", opts:["Конференция","Совещание","Мероприятие","Встреча"], a:1},
          {q:"¿Cuál es la palabra para 'salario'?", opts:["Деньги","Оплата","Зарплата","Жалование"], a:2}
        ]
      },
      {
        title: "Урок 6: Технологии и связь",
        subtitle: "Tecnología",
        vocab: [
          {w:"Программное обеспечение", p:"/prəˈɡramnəjə ɐbʲɪˈspʲetɕɪnʲɪjə/", t:"Software"}, {w:"Аппаратное обеспечение", p:"/ɐˈparətnəjə/", t:"Hardware"},
          {w:"Сеть", p:"/sʲetʲ/", t:"Red"}, {w:"База данных", p:"/ˈbazə ˈdannɨx/", t:"Base de datos"},
          {w:"Облако", p:"/ˈobləkə/", t:"Nube"}, {w:"Искусственный интеллект", p:"/ɪˈskustvʲɪnːɨj ɪnʲɪˈlʲekt/", t:"Inteligencia artificial"},
          {w:"Кибербезопасность", p:"/kʲɪbʲɪrbʲɪzɐˈpasnəstʲ/", t:"Ciberseguridad"}, {w:"Обновление", p:"/ɐbnɐˈvlʲenʲɪjə/", t:"Actualización"},
          {w:"Ошибка", p:"/ɐˈʂɨpkə/", t:"Error"}, {w:"Код", p:"/kot/", t:"Código"}
        ],
        phrases: [
          {o:"Я разрабатываю программное обеспечение для здравоохранения.", t:"Desarrollo software para salud."},
          {o:"Системе нужно обновление.", t:"El sistema necesita una actualización."},
          {o:"Мы используем облачное хранилище.", t:"Usamos almacenamiento en la nube."}
        ],
        dialogue: [
          {s:"Разработчик", l:"Я нашёл ошибку в модуле аутентификации."},
          {s:"Руководитель", l:"Можешь исправить до следующего обновления?"},
          {s:"Разработчик", l:"Да, залью код в репозиторий сегодня вечером."},
          {s:"Руководитель", l:"Отлично. Также улучшим протоколы кибербезопасности."}
        ],
        culture: "Rusia tiene una fuerte tradición en matemáticas y programación, con muchos especialistas de élite.",
        quiz: [
          {q:"¿Cómo se dice 'base de datos'?", opts:["Хранилище","База данных","Датацентр","Датасет"], a:1},
          {q:"¿Qué significa 'ошибка'?", opts:["Insecto","Error informático","Actualización","Función"], a:1},
          {q:"Traduce: 'Inteligencia artificial'", opts:["Автоматический интеллект","Искусственный интеллект","Продвинутый интеллект","Альтернативный интеллект"], a:1},
          {q:"¿Cómo se dice 'ciberseguridad'?", opts:["Сетевая безопасность","Веб-безопасность","Кибербезопасность","Цифровая безопасность"], a:2},
          {q:"¿Cuál es la palabra para 'nube' (tecnología)?", opts:["Небо","Облако","Сервер","Хост"], a:1}
        ]
      },
      {
        title: "Урок 7: Культура и традиции",
        subtitle: "Cultura rusa",
        vocab: [
          {w:"Праздник", p:"/ˈpraznʲɪk/", t:"Festivo"}, {w:"Празднование", p:"/prazˈdnəvənʲɪjə/", t:"Celebración"},
          {w:"Традиция", p:"/trɐˈdʲitsɨjə/", t:"Tradición"}, {w:"Обычай", p:"/ɐˈbɨtɕaj/", t:"Costumbre"},
          {w:"Фестиваль", p:"/fʲɪsʲtʲɪˈvalʲ/", t:"Festival"}, {w:"Подарок", p:"/pɐˈdarək/", t:"Regalo"},
          {w:"Вечеринка", p:"/vʲɪtɕɪˈrinkə/", t:"Fiesta"}, {w:"Свадьба", p:"/ˈsvadʲbə/", t:"Boda"},
          {w:"День рождения", p:"/dʲenʲ rɐˈʐdʲenʲɪjə/", t:"Cumpleaños"}, {w:"Годовщина", p:"/ɡədɐvˈɕːinə/", t:"Aniversario"}
        ],
        phrases: [
          {o:"С Рождеством!", t:"¡Feliz Navidad!"},
          {o:"С днём рождения!", t:"¡Feliz cumpleaños!"},
          {o:"Мы празднуем Масленицу в феврале.", t:"Celebramos Maslenitsa en febrero."}
        ],
        dialogue: [
          {s:"А", l:"Как ты празднуешь Новый год?"},
          {s:"Б", l:"Обычно ужинаем с семьёй и смотрим обратный отсчёт."},
          {s:"А", l:"Вы обмениваетесь подарками?"},
          {s:"Б", l:"Да, и в полночь пьём шампанское."}
        ],
        culture: "El Año Nuevo es la fiesta más importante en Rusia, más que la Navidad.",
        quiz: [
          {q:"¿Cómo se dice 'boda'?", opts:["Вечеринка","Свадьба","Празднование","Годовщина"], a:1},
          {q:"¿Qué significa 'традиция'?", opts:["Обычай","Традиция","Празднование","Фестиваль"], a:1},
          {q:"Traduce: 'Feliz cumpleaños'", opts:["С праздником","С днём рождения","С годовщиной","С вечеринкой"], a:1},
          {q:"¿Cómo se dice 'regalo'?", opts:["Подарок","Сувенир","Приз","Награда"], a:0},
          {q:"¿Cuál es la fiesta más importante de Rusia?", opts:["Рождество","Новый год","Пасха","Троица"], a:1}
        ]
      },
      {
        title: "Урок 8: Развлечения и досуг",
        subtitle: "Entretenimiento",
        vocab: [
          {w:"Фильм", p:"/fʲilʲm/", t:"Película"}, {w:"Книга", p:"/ˈknʲiɡə/", t:"Libro"},
          {w:"Концерт", p:"/kɐnˈtsɛrt/", t:"Concierto"}, {w:"Музей", p:"/mʊˈzʲej/", t:"Museo"},
          {w:"Театр", p:"/tʲɪˈatr/", t:"Teatro"}, {w:"Хобби", p:"/ˈxobʲːɪ/", t:"Pasatiempo"},
          {w:"Сериал", p:"/sʲɪˈrʲjal/", t:"Serie"}, {w:"Игра", p:"/ɪˈɡra/", t:"Juego"},
          {w:"Путешествовать", p:"/putʲɪˈʂestvəvətʲ/", t:"Viajar"}, {w:"Фотография", p:"/fətɐˈɡrafʲɪjə/", t:"Fotografía"}
        ],
        phrases: [
          {o:"Я люблю читать романтические романы.", t:"Me gusta leer novelas románticas."},
          {o:"Какой твой любимый фильм?", t:"¿Cuál es tu película favorita?"},
          {o:"Пойдём сегодня вечером в кино.", t:"Vamos al cine esta noche."}
        ],
        dialogue: [
          {s:"А", l:"Что ты делаешь в свободное время?"},
          {s:"Б", l:"Люблю смотреть сериалы и читать. Ещё увлекаюсь фотографией."},
          {s:"А", l:"Классно! Смотрел хорошие фильмы в последнее время?"},
          {s:"Б", l:"Да, на прошлых выходных посмотрел отличный приключенческий фильм."}
        ],
        culture: "El ballet ruso (Bolshoi, Mariinsky) es patrimonio cultural mundial.",
        quiz: [
          {q:"¿Cómo se dice 'película'?", opts:["Фильм","Видео","Шоу","Программа"], a:0},
          {q:"¿Qué significa 'хобби'?", opts:["Работа","Хобби","Спорт","Учёба"], a:1},
          {q:"Traduce: 'Me gusta leer'", opts:["Я люблю писать","Я люблю читать","Обожаю чтение","Обожаю книгу"], a:1},
          {q:"¿Cómo se dice 'museo'?", opts:["Галерея","Музей","Выставка","Дворец"], a:1},
          {q:"¿Cuál es la palabra para 'serie' (TV)?", opts:["Шоу","Программа","Сериал","Эпизод"], a:2}
        ]
      },
      {
        title: "Урок 9: Образование и обучение",
        subtitle: "Educación",
        vocab: [
          {w:"Университет", p:"/unʲɪvʲɪrʲsʲɪˈtʲet/", t:"Universidad"}, {w:"Диплом", p:"/dʲɪˈplom/", t:"Título"},
          {w:"Курс", p:"/kurs/", t:"Curso"}, {w:"Преподаватель", p:"/prʲɪpɐˈdavətʲɪlʲ/", t:"Profesor"},
          {w:"Экзамен", p:"/ɪɡˈzamʲɪn/", t:"Examen"}, {w:"Домашнее задание", p:"/dɐˈmaʂnʲɪjə zɐˈdanʲɪjə/", t:"Tarea"},
          {w:"Библиотека", p:"/bʲɪblʲɪɐˈtʲekə/", t:"Biblioteca"}, {w:"Стипендия", p:"/sʲtʲɪˈpʲendʲɪjə/", t:"Beca"},
          {w:"Исследование", p:"/ɪslʲɪˈdovənʲɪjə/", t:"Investigación"}, {w:"Диссертация", p:"/dʲɪsʲɪrˈtat͡sɨjə/", t:"Tesis"}
        ],
        phrases: [
          {o:"Я изучаю информатику.", t:"Estudio ciencias informáticas."},
          {o:"У неё докторская степень по медицине.", t:"Ella tiene un doctorado en medicina."},
          {o:"Экзамен на следующей неделе.", t:"El examen es la próxima semana."}
        ],
        dialogue: [
          {s:"Студент", l:"Профессор, у меня вопрос по диссертации."},
          {s:"Профессор", l:"Конечно. Какая тема?"},
          {s:"Студент", l:"Применение ИИ в здравоохранении."},
          {s:"Профессор", l:"Отличная тема. Давайте назначим встречу для обсуждения."}
        ],
        culture: "Rusia tiene universidades prestigiosas como MGU (Moscú) y SPbGU (San Petersburgo).",
        quiz: [
          {q:"¿Cómo se dice 'beca'?", opts:["Помощь","Стипендия","Приз","Бонус"], a:1},
          {q:"¿Qué significa 'диссертация'?", opts:["Тема","Tesis","Теория","Тест"], a:1},
          {q:"Traduce: 'Estoy estudiando'", opts:["Я изучаю","Я изучаю сейчас","Я учу","Я учусь сейчас"], a:1},
          {q:"¿Cómo se dice 'biblioteca'?", opts:["Книжный магазин","Библиотека","Архив","Студия"], a:1},
          {q:"¿Cuál es la palabra para 'investigación'?", opts:["Изучение","Исследование","Анализ","Поиск"], a:1}
        ]
      },
      {
        title: "Урок 10: Отношения и эмоции",
        subtitle: "Relaciones y emociones",
        vocab: [
          {w:"Любовь", p:"/lʲʊˈbofʲ/", t:"Amor"}, {w:"Дружба", p:"/ˈdruʐbə/", t:"Amistad"},
          {w:"Счастье", p:"/ˈɕasʲtʲjə/", t:"Felicidad"}, {w:"Грусть", p:"/ɡrusʲtʲ/", t:"Tristeza"},
          {w:"Доверие", p:"/dɐˈvʲerʲɪjə/", t:"Confianza"}, {w:"Уважение", p:"/ʊvɐˈʐenʲɪjə/", t:"Respeto"},
          {w:"Эмпатия", p:"/ɛmˈpatʲɪjə/", t:"Empatía"}, {w:"Отношения", p:"/ɐtnɐˈʂenʲɪjə/", t:"Relación"},
          {w:"Объятие", p:"/ɐˈpʲjatʲjə/", t:"Abrazo"}, {w:"Извиняться", p:"/ɪzˈvʲinʲɪtsə/", t:"Disculparse"}
        ],
        phrases: [
          {o:"Я люблю проводить время с семьёй.", t:"Amo pasar tiempo con mi familia."},
          {o:"Извини, что опоздал.", t:"Perdón por llegar tarde."},
          {o:"Я очень ценю твою помощь.", t:"Realmente aprecio tu ayuda."}
        ],
        dialogue: [
          {s:"А", l:"Ты сегодня счастлив. Что случилось?"},
          {s:"Б", l:"Провёл выходные с сыном. Было чудесно."},
          {s:"А", l:"Это здорово. Семья — это всё."},
          {s:"Б", l:"Согласен. Я им очень благодарен."}
        ],
        culture: "Los rusos valoran las amistades profundas y duraderas, forjadas en la confianza mutua.",
        quiz: [
          {q:"¿Cómo se dice 'amistad'?", opts:["Любовь","Дружба","Отношения","Доверие"], a:1},
          {q:"¿Qué significa 'эмпатия'?", opts:["Симпатия","Эмпатия","Антипатия","Апатия"], a:1},
          {q:"Traduce: 'Lo siento mucho'", opts:["Мне плохо","Мне очень жаль","Мне грустно","Я сожалею"], a:1},
          {q:"¿Cómo se dice 'abrazo'?", opts:["Поцелуй","Объятие","Рукопожатие","Ласка"], a:1},
          {q:"¿Cuál es la palabra para 'confianza'?", opts:["Вера","Убеждение","Доверие","Надежда"], a:2}
        ]
      }
    ]
  },
  italiano: {
    name: "Italiano", flag: "🇮🇹",
    basico: [
      {
        title: "Lezione 1: Saluti e presentazioni",
        subtitle: "Saludos y presentaciones",
        vocab: [
          {w:"Ciao", p:"/tʃao/", t:"Hola"}, {w:"Buongiorno", p:"/bwɔnˈdʒorno/", t:"Buenos días"},
          {w:"Buon pomeriggio", p:"/bwɔm poˈmeridʒo/", t:"Buenas tardes"}, {w:"Buonasera", p:"/bwɔnaˈsera/", t:"Buenas noches"},
          {w:"Arrivederci", p:"/arriveˈdertʃi/", t:"Adiós"}, {w:"Per favore", p:"/per faˈvore/", t:"Por favor"},
          {w:"Grazie", p:"/ˈɡrattsje/", t:"Gracias"}, {w:"Mi chiamo...", p:"/mi ˈkjamo/", t:"Me llamo..."},
          {w:"Piacere", p:"/pjaˈtʃere/", t:"Encantado"}, {w:"Come stai?", p:"/ˈkome staj/", t:"¿Cómo estás?"}
        ],
        phrases: [
          {o:"Ciao, mi chiamo Dani.", t:"Hola, me llamo Dani."},
          {o:"Vengo da Cuba.", t:"Vengo de Cuba."},
          {o:"Come ti chiami?", t:"¿Cómo te llamas?"},
          {o:"Sto bene, grazie.", t:"Estoy bien, gracias."}
        ],
        dialogue: [
          {s:"Ana", l:"Ciao! Mi chiamo Ana."},
          {s:"Luis", l:"Ciao Ana! Io sono Luis. Piacere."},
          {s:"Ana", l:"Piacere mio. Come stai?"},
          {s:"Luis", l:"Molto bene, grazie. E tu?"}
        ],
        culture: "En Italia, 'Ciao' es informal. Para contextos formales se usa 'Buongiorno' o 'Salve'.",
        quiz: [
          {q:"¿Cómo se dice 'Buenos días'?", opts:["Buonasera","Buongiorno","Buonanotte","Arrivederci"], a:1},
          {q:"¿Qué significa 'Piacere'?", opts:["Adiós","Buen viaje","Encantado","¿Cómo estás?"], a:2},
          {q:"Traduce: 'Me llamo...'", opts:["Io sono...","Mi chiamo...","Io ho...","Io faccio..."], a:1},
          {q:"¿Cuál es la forma correcta de agradecer?", opts:["Per favore","Scusa","Grazie","Ciao"], a:2},
          {q:"¿Cómo preguntas '¿Cómo estás?'?", opts:["Chi sei?","Come stai?","Dove sei?","Quando vieni?"], a:1}
        ]
      },
      {
        title: "Lezione 2: Numeri e alfabeto",
        subtitle: "Números del 1 al 20",
        vocab: [
          {w:"Uno", p:"/ˈuno/", t:"Uno"}, {w:"Due", p:"/ˈdue/", t:"Dos"},
          {w:"Tre", p:"/tre/", t:"Tres"}, {w:"Quattro", p:"/ˈkwattro/", t:"Cuatro"},
          {w:"Cinque", p:"/ˈtʃinkwe/", t:"Cinco"}, {w:"Dieci", p:"/ˈdjɛtʃi/", t:"Diez"},
          {w:"Quindici", p:"/ˈkwinditʃi/", t:"Quince"}, {w:"Venti", p:"/ˈventi/", t:"Veinte"},
          {w:"A", p:"/a/", t:"Letra A"}, {w:"Z", p:"/ˈdzɛta/", t:"Letra Z"}
        ],
        phrases: [
          {o:"Ho trentacinque anni.", t:"Tengo treinta y cinco años."},
          {o:"Il mio numero di telefono è...", t:"Mi número de teléfono es..."},
          {o:"Quanti fratelli hai?", t:"¿Cuántos hermanos tienes?"}
        ],
        dialogue: [
          {s:"Prof", l:"Qual è il tuo numero di telefono?"},
          {s:"Alunno", l:"Cinque cinque cinque, zero uno due tre."},
          {s:"Prof", l:"Quanti anni hai?"},
          {s:"Alunno", l:"Ho trentacinque anni."}
        ],
        culture: "En italiano, los números del 20 al 99 se contraen: 21 = ventuno, 25 = venticinque.",
        quiz: [
          {q:"¿Cómo se escribe 15?", opts:["Quattordici","Quindici","Sedici","Tredici"], a:1},
          {q:"¿Cuál es el número 'sette'?", opts:["6","7","8","9"], a:1},
          {q:"Traduce: 'Tengo 20 años'", opts:["Ho 20 anni","Sono 20 anni","Faccio 20 anni","Resto 20 anni"], a:0},
          {q:"¿Cómo se dice 'ocho'?", opts:["Sei","Otto","Nove","Dieci"], a:1},
          {q:"¿Cuánto es 'dodici'?", opts:["10","11","12","13"], a:2}
        ]
      },
      {
        title: "Lezione 3: La famiglia",
        subtitle: "La familia",
        vocab: [
          {w:"Padre", p:"/ˈpadre/", t:"Padre"}, {w:"Madre", p:"/ˈmadre/", t:"Madre"},
          {w:"Fratello", p:"/fraˈtɛllo/", t:"Hermano"}, {w:"Sorella", p:"/soˈrɛlla/", t:"Hermana"},
          {w:"Figlio", p:"/ˈfiʎʎo/", t:"Hijo"}, {w:"Figlia", p:"/ˈfiʎʎa/", t:"Hija"},
          {w:"Nonno", p:"/ˈnɔnno/", t:"Abuelo"}, {w:"Nonna", p:"/ˈnɔnna/", t:"Abuela"},
          {w:"Zio", p:"/ˈtsio/", t:"Tío"}, {w:"Zia", p:"/ˈtsia/", t:"Tía"}
        ],
        phrases: [
          {o:"Ho due fratelli e una sorella.", t:"Tengo dos hermanos y una hermana."},
          {o:"La mia famiglia è molto grande.", t:"Mi familia es muy grande."},
          {o:"Questa è mia moglie.", t:"Esta es mi esposa."}
        ],
        dialogue: [
          {s:"Maria", l:"Hai fratelli o sorelle?"},
          {s:"Pietro", l:"Sì, ho un fratello e due sorelle."},
          {s:"Maria", l:"Come si chiamano?"},
          {s:"Pietro", l:"Mio fratello si chiama Fernando e le mie sorelle Laura e Ana."}
        ],
        culture: "En Italia, la familia es el núcleo social más importante. Los domingos son sagrados para reuniones familiares.",
        quiz: [
          {q:"¿Cómo se dice 'abuela'?", opts:["Madre","Nonna","Zia","Sorella"], a:1},
          {q:"¿Qué significa 'figlia'?", opts:["Hijo","Hija","Madre","Tía"], a:1},
          {q:"Traduce: 'Tengo un hermano'", opts:["Ho una sorella","Ho un fratello","Ho uno zio","Ho un figlio"], a:1},
          {q:"¿Cuál es el plural de 'fratello'?", opts:["Fratelli","Fratellos","Fratelle","Fratell"], a:0},
          {q:"¿Cómo se dice 'esposo'?", opts:["Partner","Marito","Fidanzato","Padre"], a:1}
        ]
      },
      {
        title: "Lezione 4: Giorni, mesi e stagioni",
        subtitle: "Calendario",
        vocab: [
          {w:"Lunedì", p:"/luneˈdi/", t:"Lunes"}, {w:"Martedì", p:"/marteˈdi/", t:"Martes"},
          {w:"Mercoledì", p:"/merkoleˈdi/", t:"Miércoles"}, {w:"Gennaio", p:"/dʒenˈnajo/", t:"Enero"},
          {w:"Febbraio", p:"/febˈbrajo/", t:"Febrero"}, {w:"Marzo", p:"/ˈmartso/", t:"Marzo"},
          {w:"Primavera", p:"/primaˈvera/", t:"Primavera"}, {w:"Estate", p:"/esˈtate/", t:"Verano"},
          {w:"Autunno", p:"/aˈtunno/", t:"Otoño"}, {w:"Inverno", p:"/inˈvɛrno/", t:"Invierno"}
        ],
        phrases: [
          {o:"Il mio compleanno è a marzo.", t:"Mi cumpleaños es en marzo."},
          {o:"Oggi è lunedì.", t:"Hoy es lunes."},
          {o:"Adoro l'estate.", t:"Amo el verano."}
        ],
        dialogue: [
          {s:"A", l:"Che giorno è oggi?"},
          {s:"B", l:"Oggi è mercoledì."},
          {s:"A", l:"Quando è il tuo compleanno?"},
          {s:"B", l:"Il mio compleanno è il 19 gennaio."}
        ],
        culture: "En italiano, los días de la semana NO se escriben con mayúscula: 'lunedì', 'gennaio'.",
        quiz: [
          {q:"¿Cómo se dice 'miércoles'?", opts:["Martedì","Mercoledì","Giovedì","Lunedì"], a:1},
          {q:"¿Qué significa 'primavera'?", opts:["Verano","Otoño","Primavera","Invierno"], a:2},
          {q:"¿En qué mes está el verano en Italia?", opts:["Gennaio","Giugno","Settembre","Dicembre"], a:1},
          {q:"Traduce: 'Hoy es viernes'", opts:["Oggi è giovedì","Oggi è venerdì","Oggi è domenica","Oggi è sabato"], a:1},
          {q:"¿Cómo se dice 'invierno'?", opts:["Inverno","Estate","Primavera","Autunno"], a:0}
        ]
      },
      {
        title: "Lezione 5: Colori e forme",
        subtitle: "Colores y formas",
        vocab: [
          {w:"Rosso", p:"/ˈrosso/", t:"Rojo"}, {w:"Blu", p:"/blu/", t:"Azul"},
          {w:"Verde", p:"/ˈverde/", t:"Verde"}, {w:"Giallo", p:"/ˈdʒallo/", t:"Amarillo"},
          {w:"Nero", p:"/ˈnero/", t:"Negro"}, {w:"Bianco", p:"/ˈbjanko/", t:"Blanco"},
          {w:"Cerchio", p:"/ˈkɛrkjo/", t:"Círculo"}, {w:"Quadrato", p:"/kwaˈdrato/", t:"Cuadrado"},
          {w:"Triangolo", p:"/triˈanɡolo/", t:"Triángulo"}, {w:"Rettangolo", p:"/retˈtaŋɡolo/", t:"Rectángulo"}
        ],
        phrases: [
          {o:"Il cielo è blu.", t:"El cielo es azul."},
          {o:"La mia macchina è rossa.", t:"Mi carro es rojo."},
          {o:"Il tavolo è rettangolare.", t:"La mesa es rectangular."}
        ],
        dialogue: [
          {s:"A", l:"Di che colore è la tua casa?"},
          {s:"B", l:"È bianca con una porta rossa."},
          {s:"A", l:"Che forma ha la finestra?"},
          {s:"B", l:"È rettangolare."}
        ],
        culture: "En italiano, los colores concuerdan en género y número: 'macchine rosse'.",
        quiz: [
          {q:"¿Cómo se dice 'verde'?", opts:["Blu","Verde","Giallo","Rosso"], a:1},
          {q:"¿Qué significa 'cerchio'?", opts:["Cuadrado","Círculo","Triángulo","Rectángulo"], a:1},
          {q:"Traduce: 'El carro es negro'", opts:["La macchina è bianca","La macchina è nera","La macchina è blu","La macchina è rossa"], a:1},
          {q:"¿Cómo se dice 'amarillo'?", opts:["Giallo","Arancione","Oro","Marrone"], a:0},
          {q:"¿Cuál es la forma de una pelota?", opts:["Quadrato","Triangolo","Cerchio","Rettangolo"], a:2}
        ]
      },
      {
        title: "Lezione 6: Cibo e bevande",
        subtitle: "Comida y bebidas",
        vocab: [
          {w:"Pane", p:"/ˈpane/", t:"Pan"}, {w:"Acqua", p:"/ˈakkwa/", t:"Agua"},
          {w:"Carne", p:"/ˈkarne/", t:"Carne"}, {w:"Pesce", p:"/ˈpeʃʃe/", t:"Pescado"},
          {w:"Riso", p:"/ˈrizo/", t:"Arroz"}, {w:"Caffè", p:"/kafˈfɛ/", t:"Café"},
          {w:"Latte", p:"/ˈlatte/", t:"Leche"}, {w:"Frutta", p:"/ˈfrutta/", t:"Fruta"},
          {w:"Colazione", p:"/kolaˈtsjone/", t:"Desayuno"}, {w:"Cena", p:"/ˈtʃena/", t:"Cena"}
        ],
        phrases: [
          {o:"Ho fame.", t:"Tengo hambre."},
          {o:"Vorrei un caffè, per favore.", t:"Quisiera un café, por favor."},
          {o:"Il cibo è delizioso.", t:"La comida está deliciosa."}
        ],
        dialogue: [
          {s:"Cameriere", l:"Buonasera. Cosa desidera ordinare?"},
          {s:"Cliente", l:"Vorrei pesce con riso, per favore."},
          {s:"Cameriere", l:"E da bere?"},
          {s:"Cliente", l:"Un bicchiere d'acqua, per favore."}
        ],
        culture: "La cocina italiana es Patrimonio UNESCO. La pasta y la pizza son iconos mundiales.",
        quiz: [
          {q:"¿Cómo se dice 'agua'?", opts:["Latte","Acqua","Succo","Caffè"], a:1},
          {q:"¿Qué significa 'colazione'?", opts:["Almuerzo","Cena","Desayuno","Merienda"], a:2},
          {q:"Traduce: 'Tengo hambre'", opts:["Ho sete","Ho fame","Sono stanco","Sono sazio"], a:1},
          {q:"¿Cómo se dice 'pan'?", opts:["Pane","Riso","Carne","Pesce"], a:0},
          {q:"¿Cuál es la palabra para 'café'?", opts:["Tè","Caffè","Latte","Acqua"], a:1}
        ]
      },
      {
        title: "Lezione 7: La casa e le stanze",
        subtitle: "La casa",
        vocab: [
          {w:"Casa", p:"/ˈkaza/", t:"Casa"}, {w:"Stanza", p:"/ˈstantsa/", t:"Habitación"},
          {w:"Cucina", p:"/kuˈtʃina/", t:"Cocina"}, {w:"Camera da letto", p:"/ˈkamera da ˈletto/", t:"Dormitorio"},
          {w:"Bagno", p:"/ˈbaɲɲo/", t:"Baño"}, {w:"Salotto", p:"/saˈlɔtto/", t:"Sala"},
          {w:"Porta", p:"/ˈpɔrta/", t:"Puerta"}, {w:"Finestra", p:"/fiˈnɛstra/", t:"Ventana"},
          {w:"Tavolo", p:"/ˈtavolo/", t:"Mesa"}, {w:"Sedia", p:"/ˈsɛdja/", t:"Silla"}
        ],
        phrases: [
          {o:"La mia casa ha tre camere.", t:"Mi casa tiene tres dormitorios."},
          {o:"La cucina è grande.", t:"La cocina es grande."},
          {o:"Sono in salotto.", t:"Estoy en la sala."}
        ],
        dialogue: [
          {s:"A", l:"Quante stanze ha la tua casa?"},
          {s:"B", l:"Ha cinque stanze: due camere, cucina, bagno e salotto."},
          {s:"A", l:"C'è un giardino?"},
          {s:"B", l:"Sì, c'è un piccolo giardino dietro."}
        ],
        culture: "En Italia, 'bagno' incluye el inodoro. 'Toilette' también se usa, especialmente en el norte.",
        quiz: [
          {q:"¿Cómo se dice 'cocina'?", opts:["Camera","Cucina","Bagno","Salotto"], a:1},
          {q:"¿Qué significa 'finestra'?", opts:["Puerta","Ventana","Pared","Techo"], a:1},
          {q:"Traduce: 'Mi casa tiene dos dormitorios'", opts:["La mia casa ha due cucine","La mia casa ha due camere","La mia casa ha due bagni","La mia casa ha due salotti"], a:1},
          {q:"¿Cómo se dice 'mesa'?", opts:["Sedia","Tavolo","Letto","Divano"], a:1},
          {q:"¿Cuál es la palabra para 'silla'?", opts:["Tavolo","Sedia","Scrivania","Letto"], a:1}
        ]
      },
      {
        title: "Lezione 8: La città e le direzioni",
        subtitle: "La ciudad",
        vocab: [
          {w:"Strada", p:"/ˈstrada/", t:"Calle"}, {w:"Città", p:"/tʃitˈta/", t:"Ciudad"},
          {w:"Ospedale", p:"/ospeˈdale/", t:"Hospital"}, {w:"Scuola", p:"/ˈskwɔla/", t:"Escuela"},
          {w:"Banca", p:"/ˈbanka/", t:"Banco"}, {w:"Parco", p:"/ˈparko/", t:"Parque"},
          {w:"Sinistra", p:"/siˈnistra/", t:"Izquierda"}, {w:"Destra", p:"/ˈdestra/", t:"Derecha"},
          {w:"Dritto", p:"/ˈdritto/", t:"Recto"}, {w:"Accanto a", p:"/akˈkanto a/", t:"Al lado de"}
        ],
        phrases: [
          {o:"Dov'è l'ospedale?", t:"¿Dónde está el hospital?"},
          {o:"Giri a sinistra all'angolo.", t:"Gira a la izquierda en la esquina."},
          {o:"È accanto alla banca.", t:"Está al lado del banco."}
        ],
        dialogue: [
          {s:"Turista", l:"Mi scusi, dov'è il parco?"},
          {s:"Abitante", l:"Vada dritto per due isolati, poi giri a destra."},
          {s:"Turista", l:"Grazie mille!"},
          {s:"Abitante", l:"Prego."}
        ],
        culture: "En Italia, 'Mi scusi' es la fórmula de cortesía para interrumpir a un desconocido.",
        quiz: [
          {q:"¿Cómo se dice 'izquierda'?", opts:["Destra","Sinistra","Dritto","Dietro"], a:1},
          {q:"¿Qué significa 'ospedale'?", opts:["Escuela","Hospital","Banco","Parque"], a:1},
          {q:"Traduce: 'Gira a la derecha'", opts:["Vada dritto","Giri a sinistra","Giri a destra","Torni indietro"], a:2},
          {q:"¿Cómo se dice 'calle'?", opts:["Strada","Via","Viale","Autostrada"], a:0},
          {q:"¿Cuál es la palabra para 'ciudad'?", opts:["Paese","Città","Villaggio","Nazione"], a:1}
        ]
      },
      {
        title: "Lezione 9: Professioni e lavori",
        subtitle: "Profesiones",
        vocab: [
          {w:"Medico", p:"/ˈmɛdiko/", t:"Médico"}, {w:"Insegnante", p:"/insenˈɲante/", t:"Profesor"},
          {w:"Ingegnere", p:"/indʒeɲˈɲɛre/", t:"Ingeniero"}, {w:"Infermiere", p:"/inferˈmjɛre/", t:"Enfermero"},
          {w:"Studente", p:"/stuˈdɛnte/", t:"Estudiante"}, {w:"Poliziotto", p:"/politˈsjɔtto/", t:"Policía"},
          {w:"Autista", p:"/awˈtista/", t:"Conductor"}, {w:"Cuoco", p:"/ˈkwɔko/", t:"Cocinero"},
          {w:"Avvocato", p:"/avvoˈkato/", t:"Abogado"}, {w:"Programmatore", p:"/programmˈtore/", t:"Programador"}
        ],
        phrases: [
          {o:"Che lavoro fai?", t:"¿A qué te dedicas?"},
          {o:"Lavoro in un ospedale.", t:"Trabajo en un hospital."},
          {o:"Lei è ingegnere.", t:"Ella es ingeniera."}
        ],
        dialogue: [
          {s:"A", l:"Che lavoro fai?"},
          {s:"B", l:"Sono ingegnere informatico. Lavoro in un ospedale militare."},
          {s:"A", l:"Sembra interessante!"},
          {s:"B", l:"Sì, sviluppo software per la sanità."}
        ],
        culture: "En italiano, las profesiones tienen forma femenina: 'ingegnera', 'medica', 'avvocatessa'.",
        quiz: [
          {q:"¿Cómo se dice 'médico'?", opts:["Infermiere","Medico","Insegnante","Ingegnere"], a:1},
          {q:"¿Qué significa 'ingegnere'?", opts:["Arquitecto","Ingeniero","Médico","Abogado"], a:1},
          {q:"Traduce: 'Soy profesor'", opts:["Sono studente","Sono insegnante","Sono un insegnante","Io insegnante"], a:1},
          {q:"¿Cómo se dice 'programador'?", opts:["Designer","Programmatore","Sviluppatore","Ingegnere"], a:1},
          {q:"¿Cuál es la palabra para 'enfermero'?", opts:["Medico","Infermiere","Cuoco","Autista"], a:1}
        ]
      },
      {
        title: "Lezione 10: Conversazione quotidiana",
        subtitle: "Conversación cotidiana",
        vocab: [
          {w:"Oggi", p:"/ˈɔddʒi/", t:"Hoy"}, {w:"Domani", p:"/doˈmani/", t:"Mañana"},
          {w:"Ieri", p:"/ˈjɛri/", t:"Ayer"}, {w:"Sempre", p:"/ˈsɛmpre/", t:"Siempre"},
          {w:"A volte", p:"/a ˈvɔlte/", t:"A veces"}, {w:"Mai", p:"/maj/", t:"Nunca"},
          {w:"Forse", p:"/ˈfɔrse/", t:"Tal vez"}, {w:"Certo", p:"/ˈtʃɛrto/", t:"Por supuesto"},
          {w:"Penso", p:"/ˈpɛnso/", t:"Yo creo"}, {w:"Non lo so", p:"/nɔn lo ˈsɔ/", t:"No sé"}
        ],
        phrases: [
          {o:"Di solito mi sveglio alle 7.", t:"Usualmente me despierto a las 7."},
          {o:"A volte vado in palestra.", t:"A veces voy al gimnasio."},
          {o:"Non mi piace il freddo.", t:"No me gusta el clima frío."}
        ],
        dialogue: [
          {s:"A", l:"Cosa fai di solito la domenica?"},
          {s:"B", l:"Di solito passo il tempo con la famiglia. A volte andiamo al parco."},
          {s:"A", l:"Ti piace cucinare?"},
          {s:"B", l:"Sì, adoro! Certo, mio figlio a volte mi aiuta."}
        ],
        culture: "Los italianos valoran la 'bella figura' (verse bien) y las comidas largas con conversación.",
        quiz: [
          {q:"¿Cómo se dice 'mañana' (tiempo)?", opts:["Oggi","Domani","Ieri","Adesso"], a:1},
          {q:"¿Qué significa 'a volte'?", opts:["Siempre","Nunca","A veces","Casi nunca"], a:2},
          {q:"Traduce: 'No sé'", opts:["Non capisco","Non lo so","Non penso","Non mi piace"], a:1},
          {q:"¿Cómo se dice 'por supuesto'?", opts:["Forse","Certo","Probabilmente","Penso"], a:1},
          {q:"¿Cuál es el adverbio de 'siempre'?", opts:["Mai","A volte","Sempre","Di solito"], a:2}
        ]
      }
    ],
    intermedio: [
      {
        title: "Lezione 1: Viaggi e trasporti",
        subtitle: "Viajes y transporte",
        vocab: [
          {w:"Aeroporto", p:"/aeroˈpɔrto/", t:"Aeropuerto"}, {w:"Volo", p:"/ˈvɔlo/", t:"Vuelo"},
          {w:"Biglietto", p:"/biʎˈʎetto/", t:"Boleto"}, {w:"Bagaglio", p:"/baʎˈʎaʎʎo/", t:"Equipaje"},
          {w:"Treno", p:"/ˈtrɛno/", t:"Tren"}, {w:"Autobus", p:"/ˈawtobus/", t:"Autobús"},
          {w:"Metropolitana", p:"/metroˈpɔlitana/", t:"Metro"}, {w:"Prenotazione", p:"/prenotaˈtsjone/", t:"Reservación"},
          {w:"Partenza", p:"/parˈtɛntsa/", t:"Salida"}, {w:"Arrivo", p:"/arˈrivo/", t:"Llegada"}
        ],
        phrases: [
          {o:"Vorrei prenotare un volo per Madrid.", t:"Quisiera reservar un vuelo a Madrid."},
          {o:"A che ora parte il treno?", t:"¿A qué hora sale el tren?"},
          {o:"Dove posso ritirare il bagaglio?", t:"¿Dónde puedo recoger mi equipaje?"}
        ],
        dialogue: [
          {s:"Agente", l:"Buongiorno. Come posso aiutarla?"},
          {s:"Viaggiatore", l:"Devo cambiare il mio volo per domani."},
          {s:"Agente", l:"Certamente. C'è un volo alle 15:30. Va bene?"},
          {s:"Viaggiatore", l:"Perfetto, grazie."}
        ],
        culture: "Italia tiene un sistema ferroviario eficiente, con trenes de alta velocidad (Frecciarossa).",
        quiz: [
          {q:"¿Cómo se dice 'equipaje'?", opts:["Valigia","Bagaglio","Zaino","Borsa"], a:1},
          {q:"¿Qué significa 'partenza'?", opts:["Llegada","Salida","Escala","Retraso"], a:1},
          {q:"Traduce: 'Quisiera reservar un vuelo'", opts:["Voglio un volo","Vorrei prenotare un volo","Ho bisogno di un biglietto","Ho una prenotazione"], a:1},
          {q:"¿Cómo se dice 'metro'?", opts:["Metro","Metropolitana","Subway","Tube"], a:1},
          {q:"¿Cuál es la palabra para 'boleto'?", opts:["Pass","Biglietto","Carta","Buono"], a:1}
        ]
      },
      {
        title: "Lezione 2: Acquisti e denaro",
        subtitle: "Compras y dinero",
        vocab: [
          {w:"Denaro", p:"/ˈdɛnaro/", t:"Dinero"}, {w:"Contanti", p:"/konˈtanti/", t:"Efectivo"},
          {w:"Carta di credito", p:"/ˈkarta di ˈkrɛdito/", t:"Tarjeta de crédito"}, {w:"Prezzo", p:"/ˈprɛtso/", t:"Precio"},
          {w:"Sconto", p:"/ˈskonto/", t:"Descuento"}, {w:"Ricevuta", p:"/ritʃeˈvuta/", t:"Recibo"},
          {w:"Caro", p:"/ˈkaro/", t:"Caro"}, {w:"Economico", p:"/ekoˈnɔmiko/", t:"Barato"},
          {w:"Taglia", p:"/ˈtaʎʎa/", t:"Talla"}, {w:"Rimborso", p:"/rimˈbɔrso/", t:"Reembolso"}
        ],
        phrases: [
          {o:"Quanto costa questo?", t:"¿Cuánto cuesta esto?"},
          {o:"Accettate carte di credito?", t:"¿Aceptan tarjetas de crédito?"},
          {o:"Posso avere un rimborso?", t:"¿Puedo obtener un reembolso?"}
        ],
        dialogue: [
          {s:"Cliente", l:"Mi scusi, quanto costa questa camicia?"},
          {s:"Venditore", l:"Sono 25 euro. Oggi abbiamo uno sconto del 10%."},
          {s:"Cliente", l:"Perfetto. Posso pagare con carta?"},
          {s:"Venditore", l:"Certamente. Ecco la sua ricevuta."}
        ],
        culture: "Italia es famosa por la moda (Milán) y el diseño. Las rebajas ('saldi') son estacionales.",
        quiz: [
          {q:"¿Cómo se dice 'descuento'?", opts:["Offerta","Sconto","Promozione","Prezzo"], a:1},
          {q:"¿Qué significa 'ricevuta'?", opts:["Ricetta","Recibo","Rimborso","Prenotazione"], a:1},
          {q:"Traduce: '¿Cuánto cuesta?'", opts:["Cos'è questo?","Quanto costa questo?","Dov'è questo?","Quando è questo?"], a:1},
          {q:"¿Cómo se dice 'caro'?", opts:["Economico","Gratuito","Caro","Basso"], a:2},
          {q:"¿Cuál es la palabra para 'efectivo'?", opts:["Carta","Contanti","Assegno","Moneta"], a:1}
        ]
      },
      {
        title: "Lezione 3: Salute e corpo umano",
        subtitle: "Salud",
        vocab: [
          {w:"Mal di testa", p:"/mal di ˈtɛsta/", t:"Dolor de cabeza"}, {w:"Febbre", p:"/ˈfɛbbre/", t:"Fiebre"},
          {w:"Tosse", p:"/ˈtɔsse/", t:"Tos"}, {w:"Medicina", p:"/mediˈtʃina/", t:"Medicina"},
          {w:"Appuntamento", p:"/appuntaˈmento/", t:"Cita"}, {w:"Sintomo", p:"/ˈsintomo/", t:"Síntoma"},
          {w:"Ricetta", p:"/riˈtʃɛtta/", t:"Receta médica"}, {w:"Allergia", p:"/alerˈdʒia/", t:"Alergia"},
          {w:"Dolore", p:"/doˈlore/", t:"Dolor"}, {w:"Guarigione", p:"/ɡwariˈdʒone/", t:"Recuperación"}
        ],
        phrases: [
          {o:"Ho mal di testa e febbre.", t:"Tengo dolor de cabeza y fiebre."},
          {o:"Sono allergico alla penicillina.", t:"Soy alérgico a la penicilina."},
          {o:"Ho bisogno di vedere un medico.", t:"Necesito ver a un médico."}
        ],
        dialogue: [
          {s:"Medico", l:"Qual è il problema?"},
          {s:"Paziente", l:"Ho mal di testa e febbre da due giorni."},
          {s:"Medico", l:"È allergico a qualche farmaco?"},
          {s:"Paziente", l:"Sì, sono allergico alla penicillina."}
        ],
        culture: "Italia tiene un sistema de salud público (SSN) de alta calidad, con regiones que gestionan servicios.",
        quiz: [
          {q:"¿Cómo se dice 'fiebre'?", opts:["Raffreddore","Febbre","Influenza","Tosse"], a:1},
          {q:"¿Qué significa 'ricetta'?", opts:["Pressione","Receta médica","Presentazione","Prevenzione"], a:1},
          {q:"Traduce: 'Soy alérgico a...'", opts:["Ho dolore...","Sono allergico a...","Ho bisogno...","Sento..."], a:1},
          {q:"¿Cómo se dice 'dolor de cabeza'?", opts:["Mal di stomaco","Mal di testa","Mal di schiena","Mal di denti"], a:1},
          {q:"¿Cuál es la palabra para 'cita médica'?", opts:["Visita","Riunione","Appuntamento","Agenda"], a:2}
        ]
      },
      {
        title: "Lezione 4: Clima e ambiente",
        subtitle: "Clima y medio ambiente",
        vocab: [
          {w:"Tempo", p:"/ˈtɛmpo/", t:"Clima"}, {w:"Soleggiato", p:"/soledˈdʒato/", t:"Soleado"},
          {w:"Piovoso", p:"/pjoˈvozo/", t:"Lluvioso"}, {w:"Nuvoloso", p:"/nuvoˈlozo/", t:"Nublado"},
          {w:"Temperatura", p:"/temperaˈtura/", t:"Temperatura"}, {w:"Inquinamento", p:"/inkwiˈnamento/", t:"Contaminación"},
          {w:"Riciclaggio", p:"/ritʃiˈladdʒo/", t:"Reciclaje"}, {w:"Ambiente", p:"/amˈbjɛnte/", t:"Medio ambiente"},
          {w:"Cambiamento climatico", p:"/kambjaˈmento kliˈmatiko/", t:"Cambio climático"}, {w:"Rinnovabile", p:"/rinnoˈvabile/", t:"Renovable"}
        ],
        phrases: [
          {o:"Domani pioverà.", t:"Va a llover mañana."},
          {o:"La temperatura è di 30 gradi.", t:"La temperatura es de 30 grados."},
          {o:"Dobbiamo proteggere l'ambiente.", t:"Debemos proteger el medio ambiente."}
        ],
        dialogue: [
          {s:"A", l:"Com'è il tempo oggi?"},
          {s:"B", l:"È soleggiato ma un po' ventoso. La temperatura è intorno ai 28 gradi."},
          {s:"A", l:"Perfetto per una passeggiata. Hai sentito del nuovo programma di riciclaggio?"},
          {s:"B", l:"Sì! Penso che aiuterà a ridurre l'inquinamento."}
        ],
        culture: "Italia es líder en energías renovables, especialmente solar y geotérmica.",
        quiz: [
          {q:"¿Cómo se dice 'lluvioso'?", opts:["Soleggiato","Piovoso","Nuvoloso","Ventoso"], a:1},
          {q:"¿Qué significa 'cambiamento climatico'?", opts:["Cambio de estación","Cambio climático","Clima cálido","Clima frío"], a:1},
          {q:"Traduce: 'La temperatura es de 25 grados'", opts:["Sono 25 gradi","Il tempo è 25","Ha 25 di caldo","La temp è 25"], a:0},
          {q:"¿Cómo se dice 'contaminación'?", opts:["Riciclaggio","Inquinamento","Conservazione","Protezione"], a:1},
          {q:"¿Cuál es la palabra para 'renovable'?", opts:["Riutilizzabile","Riciclabile","Rinnovabile","Ripristinabile"], a:2}
        ]
      },
      {
        title: "Lezione 5: Lavoro e ufficio",
        subtitle: "Trabajo y oficina",
        vocab: [
          {w:"Riunione", p:"/riˈunjone/", t:"Reunión"}, {w:"Scadenza", p:"/ʃaˈdɛntsa/", t:"Fecha límite"},
          {w:"Progetto", p:"/proˈdʒɛtto/", t:"Proyecto"}, {w:"Collega", p:"/kolˈlɛɡa/", t:"Colega"},
          {w:"Orario", p:"/oˈrarjo/", t:"Horario"}, {w:"Email", p:"/iˈmɛjl/", t:"Correo"},
          {w:"Rapporto", p:"/rapˈpɔrto/", t:"Informe"}, {w:"Stipendio", p:"/stiˈpɛndjo/", t:"Salario"},
          {w:"Promozione", p:"/promotˈtsjone/", t:"Promoción"}, {w:"Lavoro da remoto", p:"/laˈvoro da reˈmɔto/", t:"Trabajo remoto"}
        ],
        phrases: [
          {o:"Pianifichiamo una riunione per lunedì.", t:"Programemos una reunión para el lunes."},
          {o:"La scadenza è venerdì prossimo.", t:"La fecha límite es el próximo viernes."},
          {o:"Lavoro da remoto tre giorni a settimana.", t:"Trabajo remotamente tres días a la semana."}
        ],
        dialogue: [
          {s:"Capo", l:"Come procede il progetto?"},
          {s:"Dipendente", l:"Procede bene. Rispetteremo la scadenza."},
          {s:"Capo", l:"Ottimo. Puoi mandarmi il rapporto via email?"},
          {s:"Dipendente", l:"Certamente, lo mando questo pomeriggio."}
        ],
        culture: "Italia tiene una fuerte cultura de pequeñas y medianas empresas familiares (PMI).",
        quiz: [
          {q:"¿Cómo se dice 'fecha límite'?", opts:["Orario","Scadenza","Riunione","Rapporto"], a:1},
          {q:"¿Qué significa 'collega'?", opts:["Capo","Cliente","Collega","Dipendente"], a:2},
          {q:"Traduce: 'Trabajo remotamente'", opts:["Lavoro a casa","Lavoro da remoto","Lavoro da solo","Lavoro online"], a:1},
          {q:"¿Cómo se dice 'reunión'?", opts:["Conferenza","Riunione","Evento","Incontro"], a:1},
          {q:"¿Cuál es la palabra para 'salario'?", opts:["Denaro","Pagamento","Stipendio","Paga"], a:2}
        ]
      },
      {
        title: "Lezione 6: Tecnologia e comunicazione",
        subtitle: "Tecnología",
        vocab: [
          {w:"Software", p:"/ˈsoftwɛr/", t:"Software"}, {w:"Hardware", p:"/ˈardwɛr/", t:"Hardware"},
          {w:"Rete", p:"/ˈrɛte/", t:"Red"}, {w:"Database", p:"/ˈdeitabeis/", t:"Base de datos"},
          {w:"Cloud", p:"/klaʊd/", t:"Nube"}, {w:"Intelligenza artificiale", p:"/intelːidʒɛntsa artifiˈtʃale/", t:"Inteligencia artificial"},
          {w:"Sicurezza informatica", p:"/sikˈkuretca informˈtika/", t:"Ciberseguridad"}, {w:"Aggiornamento", p:"/addʒornaˈmento/", t:"Actualización"},
          {w:"Bug", p:"/bʌɡ/", t:"Error"}, {w:"Codice", p:"/ˈkɔditʃe/", t:"Código"}
        ],
        phrases: [
          {o:"Sviluppo software per la sanità.", t:"Desarrollo software para salud."},
          {o:"Il sistema ha bisogno di un aggiornamento.", t:"El sistema necesita una actualización."},
          {o:"Usiamo lo storage in cloud.", t:"Usamos almacenamiento en la nube."}
        ],
        dialogue: [
          {s:"Sviluppatore", l:"Ho trovato un bug nel modulo di autenticazione."},
          {s:"Responsabile", l:"Puoi correggerlo prima del prossimo aggiornamento?"},
          {s:"Sviluppatore", l:"Sì, faccio il push del codice al repository stasera."},
          {s:"Responsabile", l:"Ottimo. Miglioriamo anche i protocolli di sicurezza informatica."}
        ],
        culture: "Italia tiene un ecosistema tech emergente, con hubs en Milán, Roma y Bolonia.",
        quiz: [
          {q:"¿Cómo se dice 'base de datos'?", opts:["Storage","Database","Datacenter","Dataset"], a:1},
          {q:"¿Qué significa 'bug'?", opts:["Insetto","Errore informatico","Aggiornamento","Funzione"], a:1},
          {q:"Traduce: 'Inteligencia artificial'", opts:["Intelligenza automatica","Intelligenza artificiale","Intelligenza avanzata","Intelligenza alternativa"], a:1},
          {q:"¿Cómo se dice 'ciberseguridad'?", opts:["Sicurezza di rete","Sicurezza web","Sicurezza informatica","Sicurezza digitale"], a:2},
          {q:"¿Cuál es la palabra para 'nube' (tecnología)?", opts:["Cielo","Cloud","Server","Host"], a:1}
        ]
      },
      {
        title: "Lezione 7: Cultura e tradizioni",
        subtitle: "Cultura italiana",
        vocab: [
          {w:"Festa", p:"/ˈfɛsta/", t:"Festivo"}, {w:"Celebrazione", p:"/tʃelebraˈtsjone/", t:"Celebración"},
          {w:"Tradizione", p:"/traditˈtsjone/", t:"Tradición"}, {w:"Usanza", p:"/uˈzantsa/", t:"Costumbre"},
          {w:"Festival", p:"/fɛstiˈval/", t:"Festival"}, {w:"Regalo", p:"/reˈɡalo/", t:"Regalo"},
          {w:"Festa", p:"/ˈfɛsta/", t:"Fiesta"}, {w:"Matrimonio", p:"/matriˈmɔnjo/", t:"Boda"},
          {w:"Compleanno", p:"/komˈplɛanːo/", t:"Cumpleaños"}, {w:"Anniversario", p:"/anniverˈsarjo/", t:"Aniversario"}
        ],
        phrases: [
          {o:"Buon Natale!", t:"¡Feliz Navidad!"},
          {o:"Buon compleanno!", t:"¡Feliz cumpleaños!"},
          {o:"Celebravamo la Festa della Repubblica il 2 giugno.", t:"Celebramos la Fiesta de la República el 2 de junio."}
        ],
        dialogue: [
          {s:"A", l:"Come festeggi Capodanno?"},
          {s:"B", l:"Di solito ceniamo in famiglia e guardiamo il countdown."},
          {s:"A", l:"Vi scambiate regali?"},
          {s:"B", l:"Sì, e a mezzanotte brindiamo con lo spumante."}
        ],
        culture: "Italia celebra el Carnaval de Venecia, el Palio de Siena y la Fiesta de la República (2 junio).",
        quiz: [
          {q:"¿Cómo se dice 'boda'?", opts:["Festa","Matrimonio","Celebrazione","Anniversario"], a:1},
          {q:"¿Qué significa 'tradizione'?", opts:["Usanza","Tradición","Celebrazione","Festival"], a:1},
          {q:"Traduce: 'Feliz cumpleaños'", opts:["Buone feste","Buon compleanno","Buon anniversario","Buona festa"], a:1},
          {q:"¿Cómo se dice 'regalo'?", opts:["Regalo","Ricordo","Premio","Ricompensa"], a:0},
          {q:"¿Cuál es la fiesta nacional italiana?", opts:["Natale","2 giugno","Pasqua","Ognissanti"], a:1}
        ]
      },
      {
        title: "Lezione 8: Divertimento e tempo libero",
        subtitle: "Entretenimiento",
        vocab: [
          {w:"Film", p:"/film/", t:"Película"}, {w:"Libro", p:"/ˈlibro/", t:"Libro"},
          {w:"Concerto", p:"/konˈtʃɛrto/", t:"Concierto"}, {w:"Museo", p:"/muˈzɛo/", t:"Museo"},
          {w:"Teatro", p:"/teˈatro/", t:"Teatro"}, {w:"Hobby", p:"/ˈhɔbbi/", t:"Pasatiempo"},
          {w:"Serie", p:"/ˈsɛrje/", t:"Serie"}, {w:"Gioco", p:"/ˈdʒɔko/", t:"Juego"},
          {w:"Viaggiare", p:"/vjadˈdʒare/", t:"Viajar"}, {w:"Fotografia", p:"/fotoɡraˈfia/", t:"Fotografía"}
        ],
        phrases: [
          {o:"Mi piace leggere romanzi romantici.", t:"Me gusta leer novelas románticas."},
          {o:"Qual è il tuo film preferito?", t:"¿Cuál es tu película favorita?"},
          {o:"Andiamo al cinema stasera.", t:"Vamos al cine esta noche."}
        ],
        dialogue: [
          {s:"A", l:"Cosa fai nel tempo libero?"},
          {s:"B", l:"Adoro guardare serie e leggere. Mi interesso anche di fotografia."},
          {s:"A", l:"Bello! Hai visto bei film ultimamente?"},
          {s:"B", l:"Sì, ho visto un bel film d'avventura il weekend scorso."}
        ],
        culture: "Italia es cuna del cine neorrealista y del Festival de Venecia, uno de los más antiguos del mundo.",
        quiz: [
          {q:"¿Cómo se dice 'película'?", opts:["Film","Video","Show","Programma"], a:0},
          {q:"¿Qué significa 'hobby'?", opts:["Lavoro","Passatempo","Sport","Studio"], a:1},
          {q:"Traduce: 'Me gusta leer'", opts:["Mi piace scrivere","Mi piace leggere","Adoro la lettura","Adoro il libro"], a:1},
          {q:"¿Cómo se dice 'museo'?", opts:["Galleria","Museo","Mostra","Palazzo"], a:1},
          {q:"¿Cuál es la palabra para 'serie' (TV)?", opts:["Show","Programma","Serie","Episodio"], a:2}
        ]
      },
      {
        title: "Lezione 9: Educazione e apprendimento",
        subtitle: "Educación",
        vocab: [
          {w:"Università", p:"/universiˈta/", t:"Universidad"}, {w:"Laurea", p:"/laˈurɛa/", t:"Título"},
          {w:"Corso", p:"/ˈkɔrso/", t:"Curso"}, {w:"Professore", p:"/profesˈsore/", t:"Profesor"},
          {w:"Esame", p:"/ˈɛzame/", t:"Examen"}, {w:"Compiti", p:"/komˈpiti/", t:"Tarea"},
          {w:"Biblioteca", p:"/biblioˈtɛka/", t:"Biblioteca"}, {w:"Borsa di studio", p:"/ˈbɔrsa di ˈstudjo/", t:"Beca"},
          {w:"Ricerca", p:"/riˈtʃɛrka/", t:"Investigación"}, {w:"Tesi", p:"/ˈtɛzi/", t:"Tesis"}
        ],
        phrases: [
          {o:"Studio informatica.", t:"Estudio ciencias informáticas."},
          {o:"Lei ha un dottorato in medicina.", t:"Ella tiene un doctorado en medicina."},
          {o:"L'esame è la settimana prossima.", t:"El examen es la próxima semana."}
        ],
        dialogue: [
          {s:"Studente", l:"Professore, ho una domanda sulla mia tesi."},
          {s:"Professore", l:"Certamente. Qual è l'argomento?"},
          {s:"Studente", l:"È sulle applicazioni dell'IA in sanità."},
          {s:"Professore", l:"Ottimo argomento. Fissiamo una riunione per discuterne."}
        ],
        culture: "Italia tiene universidades históricas como Bolonia (la más antigua del mundo, 1088).",
        quiz: [
          {q:"¿Cómo se dice 'beca'?", opts:["Aiuto","Borsa di studio","Premio","Bonus"], a:1},
          {q:"¿Qué significa 'tesi'?", opts:["Argomento","Tesis","Teoria","Test"], a:1},
          {q:"Traduce: 'Estoy estudiando'", opts:["Studio","Sto studiando","Imparo","Sto imparando"], a:1},
          {q:"¿Cómo se dice 'biblioteca'?", opts:["Libreria","Biblioteca","Archivio","Studio"], a:1},
          {q:"¿Cuál es la palabra para 'investigación'?", opts:["Studio","Ricerca","Analisi","Ricerca"], a:1}
        ]
      },
      {
        title: "Lezione 10: Relazioni ed emozioni",
        subtitle: "Relaciones y emociones",
        vocab: [
          {w:"Amore", p:"/aˈmore/", t:"Amor"}, {w:"Amicizia", p:"/amiˈtʃitsja/", t:"Amistad"},
          {w:"Felicità", p:"/felitʃiˈta/", t:"Felicidad"}, {w:"Tristezza", p:"/tritˈtedːsa/", t:"Tristeza"},
          {w:"Fiducia", p:"/fiˈdutʃa/", t:"Confianza"}, {w:"Rispetto", p:"/risˈpɛtto/", t:"Respeto"},
          {w:"Empatia", p:"/empaˈtia/", t:"Empatía"}, {w:"Relazione", p:"/relatˈtsjone/", t:"Relación"},
          {w:"Abbraccio", p:"/abˈbrattʃo/", t:"Abrazo"}, {w:"Scusarsi", p:"/skuˈzarsi/", t:"Disculparse"}
        ],
        phrases: [
          {o:"Adoro passare il tempo con la mia famiglia.", t:"Amo pasar tiempo con mi familia."},
          {o:"Scusa per il ritardo.", t:"Perdón por llegar tarde."},
          {o:"Apprezzo molto il tuo aiuto.", t:"Realmente aprecio tu ayuda."}
        ],
        dialogue: [
          {s:"A", l:"Sembri felice oggi. Cos'è successo?"},
          {s:"B", l:"Ho passato il weekend con mio figlio. È stato meraviglioso."},
          {s:"A", l:"Bello. La famiglia è tutto."},
          {s:"B", l:"Sono d'accordo. Sono molto grato per loro."}
        ],
        culture: "Los italianos son conocidos por su expresividad emocional y el valor de la familia.",
        quiz: [
          {q:"¿Cómo se dice 'amistad'?", opts:["Amore","Amicizia","Relazione","Fiducia"], a:1},
          {q:"¿Qué significa 'empatia'?", opts:["Simpatia","Empatía","Antipatia","Apatia"], a:1},
          {q:"Traduce: 'Lo siento mucho'", opts:["Mi sento male","Mi dispiace molto","Sono triste","Mi pento"], a:1},
          {q:"¿Cómo se dice 'abrazo'?", opts:["Bacio","Abbraccio","Stretta di mano","Carezza"], a:1},
          {q:"¿Cuál es la palabra para 'confianza'?", opts:["Fede","Credenza","Fiducia","Speranza"], a:2}
        ]
      }
    ]
  },
  angolano: {
    name: "Angoleño (Kimbundu)", flag: "🇦🇴",
    basico: [
      {
        title: "Lição 1: Kutamba na kumona",
        subtitle: "Saludos y presentaciones en Kimbundu",
        vocab: [
          {w:"Kutamba", p:"/kuˈtamba/", t:"Hola"}, {w:"Kutamba kua mbinga", p:"/kuˈtamba kua ˈmbiŋɡa/", t:"Buenos días"},
          {w:"Kutamba kua mbuta", p:"/kuˈtamba kua ˈmbuta/", t:"Buenas tardes"}, {w:"Kutamba kua usuku", p:"/kuˈtamba kua uˈsuku/", t:"Buenas noches"},
          {w:"Kwenda bulé", p:"/kwenda buˈle/", t:"Adiós"}, {w:"Ngi kuxika", p:"/ŋɡi kuˈʃika/", t:"Por favor"},
          {w:"Ngatuata", p:"/ŋɡaˈtwata/", t:"Gracias"}, {w:"Mona ami i...", p:"/mona aˈmi i/", t:"Me llamo..."},
          {w:"Kudi kuxika", p:"/ˈkudi kuˈʃika/", t:"Encantado"}, {w:"U u ji?", p:"/u u ˈdʒi/", t:"¿Cómo estás?"}
        ],
        phrases: [
          {o:"Kutamba, mona ami i Dani.", t:"Hola, me llamo Dani."},
          {o:"Mona ami i Kuba.", t:"Soy de Cuba."},
          {o:"U u ji, ngatuata.", t:"Estoy bien, gracias."}
        ],
        dialogue: [
          {s:"Ana", l:"Kutamba! Mona ami i Ana."},
          {s:"Luis", l:"Kutamba Ana! Mona ami i Luis. Kudi kuxika."},
          {s:"Ana", l:"Kudi kuxika na mone. U u ji?"},
          {s:"Luis", l:"Ngatuata, u bulé. Na u?"}
        ],
        culture: "El Kimbundu es una de las lenguas nacionales más habladas de Angola, especialmente en Luanda y Malanje.",
        quiz: [
          {q:"¿Cómo se dice 'Hola'?", opts:["Kwenda bulé","Kutamba","Ngatuata","Ngi kuxika"], a:1},
          {q:"¿Qué significa 'Ngatuata'?", opts:["Adiós","Por favor","Gracias","Hola"], a:2},
          {q:"Traduce: 'Me llamo...'", opts:["Mona ami i...","Mona ami ku...","Mona ami na...","Mona ami mu..."], a:0},
          {q:"¿Cómo preguntas '¿Cómo estás?'?", opts:["U u ji?","U u ku?","U u na?","U u mu?"], a:0},
          {q:"¿Cómo se dice 'Adiós'?", opts:["Kutamba","Kwenda bulé","Ngatuata","Ngi kuxika"], a:1}
        ]
      },
      {
        title: "Lição 2: Manombe na alfabeto",
        subtitle: "Números del 1 al 10",
        vocab: [
          {w:"Imwe", p:"/ˈimwe/", t:"Uno"}, {w:"Izali", p:"/iˈzali/", t:"Dos"},
          {w:"Itatu", p:"/iˈtatu/", t:"Tres"}, {w:"Ine", p:"/ˈine/", t:"Cuatro"},
          {w:"Itanu", p:"/iˈtanu/", t:"Cinco"}, {w:"Dikumi", p:"/diˈkumi/", t:"Diez"},
          {w:"Muthu", p:"/ˈmutu/", t:"Persona"}, {w:"Mune", p:"/ˈmune/", t:"Yo"},
          {w:"Ixi", p:"/ˈiʃi/", t:"Agua"}, {w:"Moyo", p:"/ˈmojo/", t:"Corazón"}
        ],
        phrases: [
          {o:"Mona ami i imwe.", t:"Mi nombre es uno."},
          {o:"Muthu u u bulé.", t:"La persona está bien."}
        ],
        dialogue: [
          {s:"Prof", l:"U u ji manombe?"},
          {s:"Mwane", l:"Imwe, izali, itatu, ine, itanu..."},
          {s:"Prof", l:"Bulé! U u ji?"},
          {s:"Mwane", l:"Ngatuata, u bulé."}
        ],
        culture: "Los números en Kimbundu tienen base decimal, similar a otras lenguas bantúes.",
        quiz: [
          {q:"¿Cómo se dice 'cinco'?", opts:["Itatu","Itanu","Ine","Izali"], a:1},
          {q:"¿Qué significa 'muthu'?", opts:["Casa","Persona","Agua","Corazón"], a:1},
          {q:"¿Cómo se dice 'tres'?", opts:["Imwe","Izali","Itatu","Ine"], a:2},
          {q:"¿Qué significa 'moyo'?", opts:["Mano","Corazón","Ojo","Pie"], a:1},
          {q:"¿Cómo se dice 'diez'?", opts:["Dikumi","Itanu","Ine","Itatu"], a:0}
        ]
      },
      {
        title: "Lição 3: Mukoko",
        subtitle: "La familia",
        vocab: [
          {w:"Tata", p:"/ˈtata/", t:"Padre"}, {w:"Mama", p:"/ˈmama/", t:"Madre"},
          {w:"Mukana", p:"/muˈkana/", t:"Hermano"}, {w:"Mukaji", p:"/muˈkadʒi/", t:"Hermana"},
          {w:"Mwana", p:"/ˈmwana/", t:"Hijo"}, {w:"Mwanji", p:"/ˈmwanʒi/", t:"Hija"},
          {w:"Kuku", p:"/ˈkuku/", t:"Abuelo/a"}, {w:"Mamukuku", p:"/mamuˈkuku/", t:"Abuela"},
          {w:"Mukulu", p:"/muˈkulu/", t:"Tío"}, {w:"Mamukulu", p:"/mamuˈkulu/", t:"Tía"}
        ],
        phrases: [
          {o:"Mukoko ami u na itanu.", t:"Mi familia tiene cinco."},
          {o:"Mukoko ami u bulé.", t:"Mi familia está bien."}
        ],
        dialogue: [
          {s:"Maria", l:"U na mukana na mukaji?"},
          {s:"Pedro", l:"Ii, ngi na mukana umwe na mukaji izali."},
          {s:"Maria", l:"U a ji mono?"},
          {s:"Pedro", l:"Mukana ami i Fernando, mukaji i Laura na Ana."}
        ],
        culture: "En la cultura Kimbundu, la familia extendida (mukoko) es fundamental en la vida social.",
        quiz: [
          {q:"¿Cómo se dice 'padre'?", opts:["Mama","Tata","Kuku","Mukana"], a:1},
          {q:"¿Qué significa 'mwana'?", opts:["Hijo","Hija","Padre","Madre"], a:0},
          {q:"¿Cómo se dice 'abuela'?", opts:["Kuku","Mamukuku","Mamukulu","Mama"], a:1},
          {q:"¿Cómo se dice 'hermano'?", opts:["Mukaji","Mukana","Mwana","Mukulu"], a:1},
          {q:"¿Qué significa 'mukoko'?", opts:["Casa","Familia","Amigo","Trabajo"], a:1}
        ]
      },
      {
        title: "Lição 4: Minguji, mukuêji na mbandu",
        subtitle: "Días, meses y estaciones",
        vocab: [
          {w:"Lumbu", p:"/ˈlumbu/", t:"Día"}, {w:"Kwenda", p:"/ˈkwenda/", t:"Ir"},
          {w:"Kubuka", p:"/kuˈbuka/", t:"Despertar"}, {w:"Lala", p:"/ˈlala/", t:"Dormir"},
          {w:"Kudia", p:"/kuˈdia/", t:"Comer"}, {w:"Kunua", p:"/kuˈnua/", t:"Beber"},
          {w:"Mema", p:"/ˈmema/", t:"Agua"}, {w:"Ixi", p:"/ˈiʃi/", t:"Agua (río)"},
          {w:"Muthu", p:"/ˈmutu/", t:"Persona"}, {w:"Kuxika", p:"/kuˈʃika/", t:"Llegar"}
        ],
        phrases: [
          {o:"Lumbu ili u bulé.", t:"El día está bien."},
          {o:"Muthu u kubuka.", t:"La persona despierta."}
        ],
        dialogue: [
          {s:"A", l:"U u ji lumbu?"},
          {s:"B", l:"Lumbu u bulé. U kubuka na kudia."},
          {s:"A", l:"Bulé."},
          {s:"B", l:"Ngatuata."}
        ],
        culture: "En la tradición Kimbundu, los ciclos del día están ligados a actividades agrícolas y comunitarias.",
        quiz: [
          {q:"¿Cómo se dice 'día'?", opts:["Kwenda","Lumbu","Kubuka","Lala"], a:1},
          {q:"¿Qué significa 'kubuka'?", opts:["Dormir","Despertar","Comer","Beber"], a:1},
          {q:"¿Cómo se dice 'comer'?", opts:["Kunua","Kudia","Kubuka","Lala"], a:1},
          {q:"¿Qué significa 'lala'?", opts:["Dormir","Despertar","Comer","Beber"], a:0},
          {q:"¿Cómo se dice 'agua'?", opts:["Ixi","Mema","Moyo","Muthu"], a:0}
        ]
      },
      {
        title: "Lição 5: Minkôndo na mifulo",
        subtitle: "Colores y formas",
        vocab: [
          {w:"Kixi", p:"/ˈkiʃi/", t:"Rojo"}, {w:"Zua", p:"/ˈzua/", t:"Azul"},
          {w:"Kima", p:"/ˈkima/", t:"Verde"}, {w:"Kindala", p:"/kinˈdala/", t:"Amarillo"},
          {w:"Kolo", p:"/ˈkolo/", t:"Negro"}, {w:"Zuba", p:"/ˈzuba/", t:"Blanco"},
          {w:"Kixi kixi", p:"/ˈkiʃi ˈkiʃi/", t:"Muy rojo"}, {w:"Mukoko", p:"/muˈkoko/", t:"Familia"},
          {w:"Muthu", p:"/ˈmutu/", t:"Persona"}, {w:"Moyo", p:"/ˈmojo/", t:"Corazón"}
        ],
        phrases: [
          {o:"Zua u bulé.", t:"El azul está bien."},
          {o:"Kima u na muthu.", t:"El verde tiene persona."}
        ],
        dialogue: [
          {s:"A", l:"U u ji minkôndo?"},
          {s:"B", l:"Kixi na zua u bulé."},
          {s:"A", l:"Bulé."},
          {s:"B", l:"Ngatuata."}
        ],
        culture: "Los colores en la cultura Kimbundu tienen significados simbólicos en ceremonias tradicionales.",
        quiz: [
          {q:"¿Cómo se dice 'rojo'?", opts:["Zua","Kixi","Kima","Kindala"], a:1},
          {q:"¿Qué significa 'zuba'?", opts:["Negro","Blanco","Verde","Amarillo"], a:1},
          {q:"¿Cómo se dice 'verde'?", opts:["Kixi","Zua","Kima","Kindala"], a:2},
          {q:"¿Qué significa 'kolo'?", opts:["Rojo","Azul","Verde","Negro"], a:3},
          {q:"¿Cómo se dice 'amarillo'?", opts:["Kixi","Zua","Kima","Kindala"], a:3}
        ]
      },
      {
        title: "Lição 6: Kudia na kunua",
        subtitle: "Comida y bebidas",
        vocab: [
          {w:"Kudia", p:"/kuˈdia/", t:"Comer"}, {w:"Kunua", p:"/kuˈnua/", t:"Beber"},
          {w:"Funge", p:"/ˈfundʒe/", t:"Funge (plato típico)"}, {w:"Muamba", p:"/muˈamba/", t:"Muamba (guiso)"},
          {w:"Kizu", p:"/ˈkizu/", t:"Pan"}, {w:"Mema", p:"/ˈmema/", t:"Agua"},
          {w:"Kafe", p:"/ˈkafe/", t:"Café"}, {w:"Lechi", p:"/ˈletʃi/", t:"Leche"},
          {w:"Kifuti", p:"/kiˈfuti/", t:"Fruta"}, {w:"Mufoko", p:"/muˈfoko/", t:"Desayuno"}
        ],
        phrases: [
          {o:"Mona ami u na nzala.", t:"Tengo hambre."},
          {o:"Ngi kuxika funge.", t:"Quiero funge, por favor."}
        ],
        dialogue: [
          {s:"Mufundi", l:"U u ji kudiu?"},
          {s:"Mwene", l:"Ngi kuxika funge na muamba."},
          {s:"Mufundi", l:"Na kunua?"},
          {s:"Mwene", l:"Mema, ngi kuxika."}
        ],
        culture: "El funge (harina de mandioca o maíz) y la muamba de gallina son platos emblemáticos angoleños.",
        quiz: [
          {q:"¿Cómo se dice 'comer'?", opts:["Kunua","Kudia","Kubuka","Lala"], a:1},
          {q:"¿Qué es 'funge'?", opts:["Pan","Plato típico angoleño","Fruta","Café"], a:1},
          {q:"¿Cómo se dice 'agua'?", opts:["Mema","Kafe","Lechi","Muamba"], a:0},
          {q:"¿Qué significa 'kifuti'?", opts:["Carne","Fruta","Pan","Agua"], a:1},
          {q:"¿Cómo se dice 'café'?", opts:["Mema","Lechi","Kafe","Kizu"], a:2}
        ]
      },
      {
        title: "Lição 7: Nganda na makwaba",
        subtitle: "La casa y habitaciones",
        vocab: [
          {w:"Nganda", p:"/ŋˈɡanda/", t:"Casa"}, {w:"Kwaba", p:"/ˈkwaba/", t:"Habitación"},
          {w:"Kixikila", p:"/kiʃiˈkila/", t:"Cocina"}, {w:"Kwaba kua lala", p:"/ˈkwaba kua ˈlala/", t:"Dormitorio"},
          {w:"Kwaba kua kusuka", p:"/ˈkwaba kua kuˈsuka/", t:"Baño"}, {w:"Sala", p:"/ˈsala/", t:"Sala"},
          {w:"Kixi", p:"/ˈkiʃi/", t:"Puerta"}, {w:"Janela", p:"/ʒaˈnela/", t:"Ventana"},
          {w:"Mesa", p:"/ˈmesa/", t:"Mesa"}, {w:"Kadeira", p:"/kaˈdejra/", t:"Silla"}
        ],
        phrases: [
          {o:"Nganda ami i na makwaba atatu.", t:"Mi casa tiene tres habitaciones."},
          {o:"Kixikila i bulé.", t:"La cocina está bien."}
        ],
        dialogue: [
          {s:"A", l:"U u ji makwaba?"},
          {s:"B", l:"Nganda ami i na makwaba asanu: kixikila, kwaba kua lala, kwaba kua kusuka, sala."},
          {s:"A", l:"I na xibalu?"},
          {s:"B", l:"Ii, i na xibalu xi kexi."}
        ],
        culture: "Las casas tradicionales Kimbundu son de materiales locales: madera, paja y barro.",
        quiz: [
          {q:"¿Cómo se dice 'casa'?", opts:["Kwaba","Nganda","Kixikila","Sala"], a:1},
          {q:"¿Qué significa 'kixikila'?", opts:["Dormitorio","Cocina","Baño","Sala"], a:1},
          {q:"¿Cómo se dice 'dormitorio'?", opts:["Kwaba","Kwaba kua lala","Kwaba kua kusuka","Kixikila"], a:1},
          {q:"¿Qué significa 'nganda'?", opts:["Familia","Casa","Trabajo","Amigo"], a:1},
          {q:"¿Cómo se dice 'puerta'?", opts:["Kixi","Janela","Mesa","Kadeira"], a:0}
        ]
      },
      {
        title: "Lição 8: Mbanza na mikuêndo",
        subtitle: "La ciudad y direcciones",
        vocab: [
          {w:"Mbanza", p:"/ˈmbanza/", t:"Ciudad"}, {w:"Nzila", p:"/ˈnzila/", t:"Calle"},
          {w:"Kixike", p:"/kiˈʃike/", t:"Hospital"}, {w:"Eskola", p:"/esˈkola/", t:"Escuela"},
          {w:"Banka", p:"/ˈbanka/", t:"Banco"}, {w:"Parke", p:"/ˈparke/", t:"Parque"},
          {w:"Kukoko", p:"/kuˈkoko/", t:"Izquierda"}, {w:"Kudya", p:"/kuˈdja/", t:"Derecha"},
          {w:"Kulonda", p:"/kuˈlonda/", t:"Recto"}, {w:"Kumosi", p:"/kuˈmosi/", t:"Al lado"}
        ],
        phrases: [
          {o:"Kixike u u ji?", t:"¿Dónde está el hospital?"},
          {o:"Kukoko ku kixi.", t:"Izquierda en la puerta."}
        ],
        dialogue: [
          {s:"Muzungu", l:"Ngi kuxika, parke u u ji?"},
          {s:"Mwene", l:"Kulonda minguji izali, kudya."},
          {s:"Muzungu", l:"Ngatuata mbinga."},
          {s:"Mwene", l:"Kudi kuxika."}
        ],
        culture: "Luanda, la capital de Angola, es una ciudad vibrante con mezcla de cultura portuguesa y africana.",
        quiz: [
          {q:"¿Cómo se dice 'ciudad'?", opts:["Nzila","Mbanza","Kixike","Parke"], a:1},
          {q:"¿Qué significa 'kixike'?", opts:["Escuela","Hospital","Banco","Parque"], a:1},
          {q:"¿Cómo se dice 'izquierda'?", opts:["Kudya","Kukoko","Kulonda","Kumosi"], a:1},
          {q:"¿Qué significa 'nzila'?", opts:["Casa","Calle","Ciudad","Parque"], a:1},
          {q:"¿Cómo se dice 'hospital'?", opts:["Eskola","Kixike","Banka","Parke"], a:1}
        ]
      },
      {
        title: "Lição 9: Misoso na milimo",
        subtitle: "Profesiones y trabajos",
        vocab: [
          {w:"Dokota", p:"/doˈkota/", t:"Médico"}, {w:"Profesôlu", p:"/pɾofeˈsolu/", t:"Profesor"},
          {w:"Ingenheiro", p:"/inʒeˈɲejɾu/", t:"Ingeniero"}, {w:"Enfermeiro", p:"/ẽfeɾˈmejɾu/", t:"Enfermero"},
          {w:"Mwane", p:"/ˈmwane/", t:"Estudiante"}, {w:"Polisia", p:"/poˈlisia/", t:"Policía"},
          {w:"Xofe", p:"/ˈʃofe/", t:"Conductor"}, {w:"Kozinheiro", p:"/koziˈɲejɾu/", t:"Cocinero"},
          {w:"Advogado", p:"/advoˈɡadu/", t:"Abogado"}, {w:"Programador", p:"/pɾoɡɾamaˈdoɾ/", t:"Programador"}
        ],
        phrases: [
          {o:"Mona ami i dokota.", t:"Soy médico."},
          {o:"Ngi limo na kixike.", t:"Trabajo en el hospital."}
        ],
        dialogue: [
          {s:"A", l:"U u ji misoso?"},
          {s:"B", l:"Mona ami i ingenheiro. Ngi limo na kixike kua militar."},
          {s:"A", l:"U u bulé."},
          {s:"B", l:"Ii, ngi kudia software kua saude."}
        ],
        culture: "Angola tiene una creciente necesidad de profesionales técnicos en salud y tecnología.",
        quiz: [
          {q:"¿Cómo se dice 'médico'?", opts:["Enfermeiro","Dokota","Profesôlu","Ingenheiro"], a:1},
          {q:"¿Qué significa 'ingenheiro'?", opts:["Arquitecto","Ingeniero","Médico","Abogado"], a:1},
          {q:"¿Cómo se dice 'enfermero'?", opts:["Dokota","Enfermeiro","Kozinheiro","Xofe"], a:1},
          {q:"¿Qué significa 'mwane'?", opts:["Profesor","Estudiante","Policía","Médico"], a:1},
          {q:"¿Cómo se dice 'programador'?", opts:["Advogado","Programador","Ingenheiro","Dokota"], a:1}
        ]
      },
      {
        title: "Lição 10: Kutambula kua lumbu",
        subtitle: "Conversación cotidiana",
        vocab: [
          {w:"Lumbu ili", p:"/ˈlumbu ˈili/", t:"Hoy"}, {w:"Mbinga", p:"/ˈmbiŋɡa/", t:"Mañana"},
          {w:"Makusu", p:"/maˈkusu/", t:"Ayer"}, {w:"Kufuma", p:"/kuˈfuma/", t:"Siempre"},
          {w:"Kamuxi", p:"/kaˈmuʃi/", t:"A veces"}, {w:"Kaku", p:"/ˈkaku/", t:"Nunca"},
          {w:"Kudi", p:"/ˈkudi/", t:"Tal vez"}, {w:"Kuxika", p:"/kuˈʃika/", t:"Claro"},
          {w:"Mona ami", p:"/ˈmona aˈmi/", t:"Yo creo"}, {w:"Kaku ngi ji", p:"/ˈkaku ŋɡi ˈdʒi/", t:"No sé"}
        ],
        phrases: [
          {o:"Kufuma ngi kubuka ku 7.", t:"Siempre me despierto a las 7."},
          {o:"Kamuxi ngi kwenda na gimnasio.", t:"A veces voy al gimnasio."}
        ],
        dialogue: [
          {s:"A", l:"U u ji kudia lumbu kua kwenda?"},
          {s:"B", l:"Kufuma ngi kudia na mukoko. Kamuxi ngi kwenda na parke."},
          {s:"A", l:"U u ji kuxika kudia?"},
          {s:"B", l:"Ii, ngi kuxika mbinga. Mwana ami u kuxika kudia na mone."}
        ],
        culture: "La conversación cotidiana en Kimbundu refleja valores comunitarios y familiares.",
        quiz: [
          {q:"¿Cómo se dice 'hoy'?", opts:["Mbinga","Lumbu ili","Makusu","Kufuma"], a:1},
          {q:"¿Qué significa 'kamuxi'?", opts:["Siempre","Nunca","A veces","Casi nunca"], a:2},
          {q:"¿Cómo se dice 'no sé'?", opts:["Kaku ngi ji","Kaku ngi kuxika","Kaku ngi kudia","Kaku ngi kwenda"], a:0},
          {q:"¿Qué significa 'kufuma'?", opts:["A veces","Nunca","Siempre","Tal vez"], a:2},
          {q:"¿Cómo se dice 'mañana'?", opts:["Lumbu ili","Mbinga","Makusu","Kufuma"], a:1}
        ]
      }
    ],
    intermedio: [
      {
        title: "Lição 1: Kwenda na kutambula",
        subtitle: "Viajes y transporte",
        vocab: [
          {w:"Aeropôlu", p:"/aeɾoˈpolu/", t:"Aeropuerto"}, {w:"Voo", p:"/vo/", t:"Vuelo"},
          {w:"Bilheti", p:"/bilˈheti/", t:"Boleto"}, {w:"Bagaji", p:"/baˈɡaʒi/", t:"Equipaje"},
          {w:"Comboio", p:"/komˈbojʊ/", t:"Tren"}, {w:"Autokarru", p:"/awtoˈkarʊ/", t:"Autobús"},
          {w:"Metrô", p:"/meˈtɾo/", t:"Metro"}, {w:"Reserva", p:"/ʁeˈzɛɾva/", t:"Reservación"},
          {w:"Kwenda", p:"/ˈkwenda/", t:"Salida"}, {w:"Kuxika", p:"/kuˈʃika/", t:"Llegada"}
        ],
        phrases: [
          {o:"Ngi kuxika voo kua Madri.", t:"Quisiera reservar un vuelo a Madrid."},
          {o:"Comboio u kwenda u u ji?", t:"¿A qué hora sale el tren?"}
        ],
        dialogue: [
          {s:"Agente", l:"Kutamba kua mbinga. Ngi kuxika kudia?"},
          {s:"Muzendu", l:"Ngi kuxika kudia voo kua mbinga."},
          {s:"Agente", l:"Kuxika, i na voo ku 15h30."},
          {s:"Muzendu", l:"Bulé, ngatuata."}
        ],
        culture: "Angola está modernizando su infraestructura de transporte, especialmente en Luanda.",
        quiz: [
          {q:"¿Cómo se dice 'equipaje'?", opts:["Mala","Bagaji","Moxila","Valise"], a:1},
          {q:"¿Qué significa 'kwenda'?", opts:["Llegada","Salida","Escala","Retraso"], a:1},
          {q:"¿Cómo se dice 'boleto'?", opts:["Pase","Bilheti","Karta","Vale"], a:1},
          {q:"¿Qué significa 'aeropôlu'?", opts:["Estación","Aeropuerto","Puerto","Parada"], a:1},
          {q:"¿Cómo se dice 'metro'?", opts:["Metro","Metrô","Subte","Subterráneo"], a:1}
        ]
      },
      {
        title: "Lição 2: Kuxika na kixi",
        subtitle: "Compras y dinero",
        vocab: [
          {w:"Kixi", p:"/ˈkiʃi/", t:"Dinero"}, {w:"Kixi kua mbuma", p:"/ˈkiʃi kua ˈmbuma/", t:"Efectivo"},
          {w:"Karta kua kreditu", p:"/ˈkarta kua keˈditu/", t:"Tarjeta de crédito"}, {w:"Prezu", p:"/ˈpɾezu/", t:"Precio"},
          {w:"Diskontu", p:"/disˈkontu/", t:"Descuento"}, {w:"Resibu", p:"/ʁeˈsibu/", t:"Recibo"},
          {w:"Karu", p:"/ˈkaɾu/", t:"Caro"}, {w:"Baratu", p:"/baˈatu/", t:"Barato"},
          {w:"Tamanu", p:"/taˈmanu/", t:"Talla"}, {w:"Devoluçao", p:"/devoluˈsaw/", t:"Devolución"}
        ],
        phrases: [
          {o:"Prezu u u ji?", t:"¿Cuál es el precio?"},
          {o:"U kuxika karta kua kreditu?", t:"¿Aceptas tarjeta de crédito?"}
        ],
        dialogue: [
          {s:"Mukuxika", l:"Ngi kuxika, prezu kua kamixa u u ji?"},
          {s:"Muvendishi", l:"I 25 kwanza. I na diskontu kua 10% lumbu ili."},
          {s:"Mukuxika", l:"Bulé. Ngi kuxika kuxika na karta?"},
          {s:"Muvendishi", l:"Kuxika. I i resibu ami."}
        ],
        culture: "La moneda de Angola es el kwanza (AOA). Los mercados locales son muy populares.",
        quiz: [
          {q:"¿Cómo se dice 'descuento'?", opts:["Oferta","Diskontu","Promoçao","Prezu"], a:1},
          {q:"¿Qué significa 'resibu'?", opts:["Receta","Recibo","Reembolso","Reserva"], a:1},
          {q:"¿Cómo se dice 'caro'?", opts:["Baratu","Gratis","Karu","Baixo"], a:2},
          {q:"¿Qué significa 'kixi'?", opts:["Casa","Dinero","Trabajo","Amigo"], a:1},
          {q:"¿Cómo se dice 'efectivo'?", opts:["Karta","Kixi kua mbuma","Xeke","Moeda"], a:1}
        ]
      },
      {
        title: "Lição 3: Saude na muthu",
        subtitle: "Salud y cuerpo",
        vocab: [
          {w:"Kibêlu kua mutué", p:"/kiˈbelu kua muˈtue/", t:"Dolor de cabeza"}, {w:"Kixi kua muthu", p:"/ˈkii kua ˈmutu/", t:"Fiebre"},
          {w:"Kususu", p:"/kuˈsusu/", t:"Tos"}, {w:"Remediu", p:"/eˈmedju/", t:"Medicina"},
          {w:"Konsulta", p:"/konsulta/", t:"Cita"}, {w:"Sintoma", p:"/sinˈtoma/", t:"Síntoma"},
          {w:"Reseita", p:"/eˈsejta/", t:"Receta médica"}, {w:"Alergia", p:"/aleɾˈʒia/", t:"Alergia"},
          {w:"Kibêlu", p:"/kiˈbelu/", t:"Dolor"}, {w:"Kurasa", p:"/kuˈasa/", t:"Recuperación"}
        ],
        phrases: [
          {o:"Ngi na kibêlu kua mutué na kixi kua muthu.", t:"Tengo dolor de cabeza y fiebre."},
          {o:"Ngi na alergia kua penicilina.", t:"Soy alérgico a la penicilina."}
        ],
        dialogue: [
          {s:"Dokota", l:"U u ji problema?"},
          {s:"Mwene", l:"Ngi na kibêlu kua mutué na kixi kua muthu kua minguji izali."},
          {s:"Dokota", l:"U na alergia kua remediu?"},
          {s:"Mwene", l:"Ii, ngi na alergia kua penicilina."}
        ],
        culture: "El sistema de salud angoleño combina medicina moderna con prácticas tradicionales.",
        quiz: [
          {q:"¿Cómo se dice 'fiebre'?", opts:["Gripe","Kixi kua muthu","Resfriado","Kususu"], a:1},
          {q:"¿Qué significa 'reseita'?", opts:["Presión","Receta médica","Presentación","Prevención"], a:1},
          {q:"¿Cómo se dice 'dolor de cabeza'?", opts:["Kibêlu kua mbumbu","Kibêlu kua mutué","Kibêlu kua koso","Kibêlu kua meno"], a:1},
          {q:"¿Qué significa 'dokota'?", opts:["Enfermero","Médico","Profesor","Ingeniero"], a:1},
          {q:"¿Cómo se dice 'medicina'?", opts:["Remediu","Kixi","Saude","Muthu"], a:0}
        ]
      },
      {
        title: "Lição 4: Klima na muthu kua mbanza",
        subtitle: "Clima y medio ambiente",
        vocab: [
          {w:"Klima", p:"/ˈklima/", t:"Clima"}, {w:"Kixi kua zua", p:"/ˈkiʃi kua ˈzua/", t:"Soleado"},
          {w:"Kixi kua mema", p:"/kiʃi kua ˈmema/", t:"Lluvioso"}, {w:"Kixi kua mabu", p:"/ˈkiʃi kua ˈmabu/", t:"Nublado"},
          {w:"Temperatura", p:"/tempeɾaˈtua/", t:"Temperatura"}, {w:"Poluçao", p:"/poluˈsaw/", t:"Contaminación"},
          {w:"Rexiklaji", p:"/reʃikˈlaʒi/", t:"Reciclaje"}, {w:"Muthu kua mbanza", p:"/ˈmutu kua ˈmbanza/", t:"Medio ambiente"},
          {w:"Kudimbuka kua klima", p:"/kudimˈbuka kua ˈklima/", t:"Cambio climático"}, {w:"Renovavel", p:"/ʁenoˈvavel/", t:"Renovable"}
        ],
        phrases: [
          {o:"Mbinga i kuxika mema.", t:"Va a llover mañana."},
          {o:"Temperatura i 30 graus.", t:"La temperatura es de 30 grados."}
        ],
        dialogue: [
          {s:"A", l:"Klima u u ji lumbu ili?"},
          {s:"B", l:"I kixi kua zua, kamuxi kua kuku. Temperatura i 28 graus."},
          {s:"A", l:"Bulé kua kwenda. U ji kua rexiklaji?"},
          {s:"B", l:"Ii, ngi ji i kuxika kudia poluçao."}
        ],
        culture: "Angola tiene ecosistemas diversos: desde el desierto del Namibe hasta la selva tropical.",
        quiz: [
          {q:"¿Cómo se dice 'lluvioso'?", opts:["Kixi kua zua","Kixi kua mema","Kixi kua mabu","Kixi kua kuku"], a:1},
          {q:"¿Qué significa 'kudimbuka kua clima'?", opts:["Cambio de estación","Cambio climático","Clima cálido","Clima frío"], a:1},
          {q:"¿Cómo se dice 'contaminación'?", opts:["Rexiklaji","Poluçao","Konservaçao","Proteçao"], a:1},
          {q:"¿Qué significa 'klima'?", opts:["Casa","Clima","Trabajo","Amigo"], a:1},
          {q:"¿Cómo se dice 'renovable'?", opts:["Reutilizavel","Rexiklavel","Renovavel","Restauravel"], a:2}
        ]
      },
      {
        title: "Lição 5: Milimo na eskritoriu",
        subtitle: "Trabajo y oficina",
        vocab: [
          {w:"Reuniao", p:"/euniˈaw/", t:"Reunión"}, {w:"Prazu", p:"/pɾazu/", t:"Fecha límite"},
          {w:"Projeto", p:"/pɾoʒetu/", t:"Proyecto"}, {w:"Kolega", p:"/koˈleɡa/", t:"Colega"},
          {w:"Orariu", p:"/oɾaˈɾju/", t:"Horario"}, {w:"E-mail", p:"/iˈmejlu/", t:"Correo"},
          {w:"Relatoriu", p:"/ʁelatoˈɾju/", t:"Informe"}, {w:"Salariu", p:"/saˈlaɾju/", t:"Salario"},
          {w:"Promoçao", p:"/pɾomoˈsaw/", t:"Promoción"}, {w:"Milimo kua kexi", p:"/miˈlimu kua ˈkeʃi/", t:"Trabajo remoto"}
        ],
        phrases: [
          {o:"Ngi kuxika reuniao kua segunda.", t:"Quiero reunión el lunes."},
          {o:"Prazu i sexta kua mbinga.", t:"La fecha límite es el viernes que viene."}
        ],
        dialogue: [
          {s:"Xefe", l:"Projeto u u ji?"},
          {s:"Mwene", l:"U bulé. Ngikuxika prazu."},
          {s:"Xefe", l:"Bulé. U kuxika relatoriu na e-mail?"},
          {s:"Mwene", l:"Kuxika, ngi kuxika lumbu ili kua mbuta."}
        ],
        culture: "Angola está desarrollando su sector empresarial, con foco en petróleo, diamantes y agricultura.",
        quiz: [
          {q:"¿Cómo se dice 'fecha límite'?", opts:["Orariu","Prazu","Reuniao","Relatoriu"], a:1},
          {q:"¿Qué significa 'colega'?", opts:["Jefe","Cliente","Colega","Empleado"], a:2},
          {q:"¿Cómo se dice 'reunión'?", opts:["Konferencia","Reuniao","Evento","Enkontro"], a:1},
          {q:"¿Qué significa 'milimo'?", opts:["Casa","Trabajo","Amigo","Familia"], a:1},
          {q:"¿Cómo se dice 'salario'?", opts:["Kixi","Pagamentu","Salariu","Ordenadu"], a:2}
        ]
      },
      {
        title: "Lição 6: Teknolojia na kutambula",
        subtitle: "Tecnología y comunicación",
        vocab: [
          {w:"Software", p:"/ˈsoftwe/", t:"Software"}, {w:"Hardware", p:"/ˈxaɾdweɾ/", t:"Hardware"},
          {w:"Redi", p:"/ˈɾedi/", t:"Red"}, {w:"Basa kua dadus", p:"/basa kua ˈdadus/", t:"Base de datos"},
          {w:"Nuvem", p:"/ˈnuvem/", t:"Nube"}, {w:"Inteligensia artificial", p:"/ĩteliˈʒẽsia aɾtifisjal/", t:"Inteligencia artificial"},
          {w:"Sibersegurança", p:"/sibeɾseɡuˈɾãsa/", t:"Ciberseguridad"}, {w:"Atualizaçao", p:"/atualizasaw/", t:"Actualización"},
          {w:"Bugu", p:"/ˈbuɡu/", t:"Error"}, {w:"Kodigu", p:"/koˈdiɡu/", t:"Código"}
        ],
        phrases: [
          {o:"Ngi kudia software kua saude.", t:"Desarrollo software para salud."},
          {o:"Sistema u kuxika atualizaçao.", t:"El sistema necesita actualización."}
        ],
        dialogue: [
          {s:"Dev", l:"Ngi ji bugu na modul kua autentikaçao."},
          {s:"Xefe", l:"U kuxika kudia kua atualizaçao kua mbinga?"},
          {s:"Dev", l:"Kuxika, ngi kuxika kodigu na repositoriu lumbu ili kua usuku."},
          {s:"Xefe", l:"Bulé. Ngikuxika kudia protokol kua sibersegurança."}
        ],
        culture: "Angola está invirtiendo en digitalización y conectividad, especialmente en telecomunicaciones.",
        quiz: [
          {q:"¿Cómo se dice 'base de datos'?", opts:["Armazenamentu","Basa kua dadus","Datacenter","Dataset"], a:1},
          {q:"¿Qué significa 'bugu'?", opts:["Insetu","Erro informático","Atualizaçao","Funçao"], a:1},
          {q:"¿Cómo se dice 'ciberseguridad'?", opts:["Segurança kua redi","Segurança kua web","Sibersegurança","Segurança dijitál"], a:2},
          {q:"¿Qué significa 'nuvem'?", opts:["Céu","Nube","Servidor","Host"], a:1},
          {q:"¿Cómo se dice 'código'?", opts:["Kodigu","Programa","Sistema","Redi"], a:0}
        ]
      },
      {
        title: "Lição 7: Kultura na tradisao",
        subtitle: "Cultura y tradiciones",
        vocab: [
          {w:"Feriadu", p:"/feɾiˈadu/", t:"Festivo"}, {w:"Komebracao", p:"/komebɾaˈsaw/", t:"Celebración"},
          {w:"Tradisao", p:"/tadiˈsaw/", t:"Tradición"}, {w:"Kustum", p:"/kusˈtum/", t:"Costumbre"},
          {w:"Festival", p:"/festiˈval/", t:"Festival"}, {w:"Pezentu", p:"/peˈzentu/", t:"Regalo"},
          {w:"Festa", p:"/ˈfesta/", t:"Fiesta"}, {w:"Kasamentu", p:"/kasaˈmentu/", t:"Boda"},
          {w:"Aniversariu", p:"/aniveɾˈsaɾju/", t:"Cumpleaños"}, {w:"Bodas", p:"/ˈbodas/", t:"Aniversario"}
        ],
        phrases: [
          {o:"Feliz Natal!", t:"¡Feliz Navidad!"},
          {o:"Feliz aniversariu!", t:"¡Feliz cumpleaños!"}
        ],
        dialogue: [
          {s:"A", l:"U u ji komebracao kua anu novu?"},
          {s:"B", l:"Kufuma ngi kudia na mukoko na ngi mona kontajen."},
          {s:"A", l:"U kuxika pezentu?"},
          {s:"B", l:"Ii, na meia-noiti ngi kuxika brindis kua xampanhe."}
        ],
        culture: "Angola celebra el Carnaval de Luanda, el Día de la Independencia (11 nov) y festivales tradicionales.",
        quiz: [
          {q:"¿Cómo se dice 'boda'?", opts:["Festa","Kasamentu","Komebracao","Bodas"], a:1},
          {q:"¿Qué significa 'tradisao'?", opts:["Kustum","Tradición","Komebracao","Festival"], a:1},
          {q:"¿Cómo se dice 'regalo'?", opts:["Pezentu","Lembrança","Premiu","Rekompensa"], a:0},
          {q:"¿Qué significa 'feriadu'?", opts:["Trabajo","Festivo","Vacaciones","Descanso"], a:1},
          {q:"¿Cómo se dice 'cumpleaños'?", opts:["Natal","Aniversariu","Páscoa","São João"], a:1}
        ]
      },
      {
        title: "Lição 8: Divertimentu na lazer",
        subtitle: "Entretenimiento",
        vocab: [
          {w:"Filme", p:"/ˈfilme/", t:"Película"}, {w:"Livru", p:"/livɾu/", t:"Libro"},
          {w:"Show", p:"/ʃow/", t:"Concierto"}, {w:"Museu", p:"/muˈzew/", t:"Museo"},
          {w:"Teatru", p:"/teˈatu/", t:"Teatro"}, {w:"Hobby", p:"/ˈxobi/", t:"Pasatiempo"},
          {w:"Seri", p:"/ˈseɾi/", t:"Serie"}, {w:"Jogu", p:"/ˈʒoɡu/", t:"Juego"},
          {w:"Kwenda", p:"/ˈkwenda/", t:"Viajar"}, {w:"Fotografia", p:"/fotoɡɾaˈfia/", t:"Fotografía"}
        ],
        phrases: [
          {o:"Ngi kuxika ler romans romanticu.", t:"Me gusta leer novelas románticas."},
          {o:"Filme kua preferensia u u ji?", t:"¿Cuál es tu película favorita?"}
        ],
        dialogue: [
          {s:"A", l:"U u ji kudia na tempu livru?"},
          {s:"B", l:"Ngi kuxika mona seri na ngi ler. Ngikuxika fotografia."},
          {s:"A", l:"Bulé! U ji filme bulu lumbu ili?"},
          {s:"B", l:"Ii, ngi mona filme kua aventura bulu fim di semana."}
        ],
        culture: "La música kizomba y semba son expresiones culturales únicas de Angola.",
        quiz: [
          {q:"¿Cómo se dice 'película'?", opts:["Filme","Video","Programa","Show"], a:0},
          {q:"¿Qué significa 'hobby'?", opts:["Trabajo","Pasatiempo","Deporte","Estudio"], a:1},
          {q:"¿Cómo se dice 'museo'?", opts:["Galeria","Museu","Exposiçao","Palacio"], a:1},
          {q:"¿Qué significa 'livru'?", opts:["Revista","Libro","Periódico","Carta"], a:1},
          {q:"¿Cómo se dice 'serie' (TV)?", opts:["Programa","Atraçao","Seri","Episodiu"], a:2}
        ]
      },
      {
        title: "Lição 9: Educaçao na aprendizaji",
        subtitle: "Educación",
        vocab: [
          {w:"Universidadi", p:"/univeɾsiˈdadi/", t:"Universidad"}, {w:"Diploma", p:"/diploma/", t:"Título"},
          {w:"Kursu", p:"/ˈkuɾsu/", t:"Curso"}, {w:"Profesôlu", p:"/pɾofeˈsolu/", t:"Profesor"},
          {w:"Prova", p:"/ˈpɾova/", t:"Examen"}, {w:"Tarefa", p:"/taˈɾefa/", t:"Tarea"},
          {w:"Biblioteka", p:"/biblioˈteka/", t:"Biblioteca"}, {w:"Bolsa kua estudu", p:"/ˈbolsa kua esˈtudu/", t:"Beca"},
          {w:"Peskiza", p:"/pesˈkiza/", t:"Investigación"}, {w:"Tesi", p:"/ˈtesi/", t:"Tesis"}
        ],
        phrases: [
          {o:"Ngi studa siensia kua komputaçao.", t:"Estudio ciencias informáticas."},
          {o:"U na doutoradu kua medizina.", t:"Tiene doctorado en medicina."}
        ],
        dialogue: [
          {s:"Mwane", l:"Profesôlu, ngi na duda kua tesi ami."},
          {s:"Profesôlu", l:"Kuxika. Tema u u ji?"},
          {s:"Mwane", l:"I kua aplicacao kua IA na saude."},
          {s:"Profesôlu", l:"Tema bulu. Ngikuxika reuniao kua kudia."}
        ],
        culture: "Angola tiene universidades como UAN (Agostinho Neto) y privadas como ISPTEC.",
        quiz: [
          {q:"¿Cómo se dice 'beca'?", opts:["Ajuda","Bolsa kua estudu","Premiu","Bonus"], a:1},
          {q:"¿Qué significa 'tesi'?", opts:["Tema","Tesis","Teoria","Teste"], a:1},
          {q:"¿Cómo se dice 'biblioteca'?", opts:["Livraria","Biblioteka","Arquivo","Estudio"], a:1},
          {q:"¿Qué significa 'peskiza'?", opts:["Estudo","Investigación","Analise","Buska"], a:1},
          {q:"¿Cómo se dice 'examen'?", opts:["Teste","Prova","Trabalho","Apresentaçao"], a:1}
        ]
      },
      {
        title: "Lição 10: Relasona na emasona",
        subtitle: "Relaciones y emociones",
        vocab: [
          {w:"Amor", p:"/aˈmoɾ/", t:"Amor"}, {w:"Amizadi", p:"/amizaˈdi/", t:"Amistad"},
          {w:"Felisidadi", p:"/felisidadi/", t:"Felicidad"}, {w:"Tristesa", p:"/tɾisˈteza/", t:"Tristeza"},
          {w:"Konfiansa", p:"/konfiãsa/", t:"Confianza"}, {w:"Rspeitu", p:"/ʁspeˈitu/", t:"Respeto"},
          {w:"Empatia", p:"/ẽpaˈtia/", t:"Empatía"}, {w:"Relasonamentu", p:"/ɾelasonaˈmentu/", t:"Relación"},
          {w:"Abraçu", p:"/aˈbasu/", t:"Abrazo"}, {w:"Pid diskulpa", p:"/pid disˈkulpa/", t:"Disculparse"}
        ],
        phrases: [
          {o:"Ngi kuxika kudia na tempu kua mukoko ami.", t:"Amo pasar tiempo con mi familia."},
          {o:"Diskulpa kua kuxika atrazu.", t:"Perdón por llegar tarde."}
        ],
        dialogue: [
          {s:"A", l:"U u ji felisi lumbu ili. U u ji?"},
          {s:"B", l:"Ngi kudia fim di semana kua mwana ami. I bulu."},
          {s:"A", l:"Bulé. Mukoko i tudu."},
          {s:"B", l:"Ngi ji. Ngikuxika mbinga kua mone."}
        ],
        culture: "La calidez y el sentido comunitario son centrales en las relaciones angoleñas.",
        quiz: [
          {q:"¿Cómo se dice 'amistad'?", opts:["Amor","Amizadi","Relasonamentu","Konfiansa"], a:1},
          {q:"¿Qué significa 'empatia'?", opts:["Simpatia","Empatía","Antipatia","Apatia"], a:1},
          {q:"¿Cómo se dice 'abrazo'?", opts:["Beijo","Abraçu","Apertu kua mau","Kariñu"], a:1},
          {q:"¿Qué significa 'amor'?", opts:["Amistad","Amor","Relación","Confianza"], a:1},
          {q:"¿Cómo se dice 'confianza'?", opts:["Fe","Krensa","Konfiansa","Esperansa"], a:2}
        ]
      }
    ]
  }
};