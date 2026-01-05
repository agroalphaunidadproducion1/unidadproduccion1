// database.js
const ingredientsDatabase = [
    // GRUPO 1A - CARBAMATOS (Inhibidores de la acetilcolinesterasa)
    {
        name: "Alanycarb",
        moaCode: "1",
        moaGroup: "Inhibidores de la acetilcolinesterasa (AChE)",
        moaDescription: "Inhibidores de la acetilcolinesterasa",
        chemicalGroup: "Carbamatos",
        family: "Carbamatos",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Áfidos, trips, minadores de hojas en cítricos, hortalizas, frutales"
    },
    {
        name: "Aldicarb",
        moaCode: "1",
        moaGroup: "Inhibidores de la acetilcolinesterasa (AChE)",
        moaDescription: "Inhibidores de la acetilcolinesterasa",
        chemicalGroup: "Carbamatos",
        family: "Carbamatos",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Nematodos, áfidos, trips en papa, cítricos, soja, algodón"
    },
    {
        name: "Bendiocarb",
        moaCode: "1",
        moaGroup: "Inhibidores de la acetilcolinesterasa (AChE)",
        moaDescription: "Inhibidores de la acetilcolinesterasa",
        chemicalGroup: "Carbamatos",
        family: "Carbamatos",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Cucarachas, moscas, mosquitos, plagas de salud pública"
    },
    {
        name: "Benfuracarb",
        moaCode: "1",
        moaGroup: "Inhibidores de la acetilcolinesterasa (AChE)",
        moaDescription: "Inhibidores de la acetilcolinesterasa",
        chemicalGroup: "Carbamatos",
        family: "Carbamatos",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Gusanos del suelo, plagas de raíces en maíz, arroz, hortalizas"
    },
    
    // GRUPO 1B - ORGANOFOSFORADOS
    {
        name: "Acefato",
        moaCode: "1B",
        moaGroup: "Inhibidores de la acetilcolinesterasa (AChE)",
        moaDescription: "Inhibidores de la acetilcolinesterasa",
        chemicalGroup: "Organofosforados",
        family: "Organofosforados",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Áfidos, minadores, moscas blancas en hortalizas, frutales, ornamentales"
    },
    {
        name: "Azamethiphos",
        moaCode: "1B",
        moaGroup: "Inhibidores de la acetilcolinesterasa (AChE)",
        moaDescription: "Inhibidores de la acetilcolinesterasa",
        chemicalGroup: "Organofosforados",
        family: "Organofosforados",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Moscas, cucarachas en salud pública y ganadería"
    },
    
    // GRUPO 2A - ORGANOCLORADOS CICLODIENOS
    {
        name: "Clordano",
        moaCode: "2A",
        moaGroup: "Bloqueadores de canales de cloruro controlados por GABA",
        moaDescription: "Bloqueadores de canales de cloruro activados por GABA",
        chemicalGroup: "Organoclorados",
        family: "Ciclodienos",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Termitas, plagas del suelo en cultivos agrícolas"
    },
    
    // GRUPO 2B - FENILPIRAZOLES (FIPROLAS)
    {
        name: "Ethiprole",
        moaCode: "2B",
        moaGroup: "Bloqueadores de canales de cloruro controlados por GABA",
        moaDescription: "Bloqueadores de canales de cloruro activados por GABA",
        chemicalGroup: "Fenilpirazoles",
        family: "Fiprolas",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Larvas de lepidópteros, coleópteros en arroz, maíz"
    },
    {
        name: "Fipronil",
        moaCode: "2B",
        moaGroup: "Bloqueadores de canales de cloruro controlados por GABA",
        moaDescription: "Bloqueadores de canales de cloruro activados por GABA",
        chemicalGroup: "Fenilpirazoles",
        family: "Fiprolas",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Termitas, cucarachas, plagas de mascotas, protección de cultivos"
    },
    
    // GRUPO 3 - MODULADORES DE CANALES DE SODIO
    {
        name: "Bifenthrina",
        moaCode: "3",
        moaGroup: "MODULADORES DE CANALES DE SODIO",
        moaDescription: "Moduladores de canales de sodio",
        chemicalGroup: "Piretroides",
        family: "Piretroides",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Termitas, hormigas, plagas urbanas y agrícolas"
    },
    {
        name: "Cipermetrina",
        moaCode: "3",
        moaGroup: "MODULADORES DE CANALES DE SODIO",
        moaDescription: "Moduladores de canales de sodio",
        chemicalGroup: "Piretroides",
        family: "Piretroides",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Uso agrícola y doméstico, amplio espectro"
    },
    
    // GRUPO 4 - MODULADORES COMPETITIVOS DEL RECEPTOR NICOTÍNICO
    {
        name: "Acetamíprida",
        moaCode: "4",
        moaGroup: "MODULADORES COMPETITIVOS DEL RECEPTOR NICOTÍNICO DE ACETILCOLINA (NACHR)",
        moaDescription: "Moduladores competitivos del receptor nicotínico de acetilcolina",
        chemicalGroup: "Neonicotinoides",
        family: "Neonicotinoides",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Áfidos, moscas blancas, trips, minadores de hojas, chinches"
    },
    {
        name: "Imidacloprid",
        moaCode: "4",
        moaGroup: "MODULADORES COMPETITIVOS DEL RECEPTOR NICOTÍNICO DE ACETILCOLINA (NACHR)",
        moaDescription: "Moduladores competitivos del receptor nicotínico de acetilcolina",
        chemicalGroup: "Neonicotinoides",
        family: "Neonicotinoides",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Áfidos, moscas blancas, trips, escarabajos, termitas, pulgas"
    },
    
    // GRUPO 5 - MODULADORES ALOSTÉRICOS DEL RECEPTOR NICOTÍNICO
    {
        name: "Spinetoram",
        moaCode: "5",
        moaGroup: "MODULADORES ALOSTÉRICOS DEL RECEPTOR NICOTÍNICO DE ACETILCOLINA (NACHR) - SITIO I",
        moaDescription: "Moduladores alostéricos del receptor nicotínico de acetilcolina - Sitio I",
        chemicalGroup: "Spinosyns",
        family: "Spinosyns",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Orugas en frutales, hortalizas; trips, minadores de hojas"
    },
    
    // GRUPO 6 - MODULADORES ALOSTÉRICOS DE CANALES DE CLORURO
    {
        name: "Abamectin",
        moaCode: "6",
        moaGroup: "MODULADORES ALOSTÉRICOS DE CANALES DE CLORURO DEPENDIENTES DE GLUTAMATO (GLUCL)",
        moaDescription: "Moduladores alostéricos de canales de cloruro dependientes de glutamato",
        chemicalGroup: "Avermectinas",
        family: "Avermectinas",
        physiologicalFunction: "Sistema Nervioso",
        commonUses: "Ácaros, minadores de hojas, trips, nematodos, orugas"
    },
    
    // GRUPO 7 - MODULADORES DE RECEPTORES HORMONALES JUVENILES
    {
        name: "Metopreno",
        moaCode: "7",
        moaGroup: "MODULADORES DE RECEPTORES HORMONALES JUVENILES",
        moaDescription: "Moduladores de receptores de hormonas juveniles",
        chemicalGroup: "Análogos hormonales juveniles",
        family: "Análogos de hormona juvenil",
        physiologicalFunction: "Crecimiento y Desarrollo",
        commonUses: "Mosquitos, moscas, pulgas, cucarachas (inhibidor de crecimiento)"
    },
    
    // GRUPO 8 - INHIBIDORES DIVERSOS NO ESPECÍFICOS
    {
        name: "Ácido bórico",
        moaCode: "8",
        moaGroup: "INHIBIDORES DIVERSOS NO ESPECÍFICOS (MULTISITIO)",
        moaDescription: "Inhibidores diversos no específicos (multisitio)",
        chemicalGroup: "Boratos",
        family: "Boratos inorgánicos",
        physiologicalFunction: "Modo Desconocido",
        commonUses: "Cucarachas, hormigas, termitas, pulgas"
    }
    
    // Puedes continuar añadiendo todos los ingredientes aquí...
];