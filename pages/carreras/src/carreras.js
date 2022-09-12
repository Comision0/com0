let materias = [];
let botones = [];
let contenidos = [];
let  menu_lateral = false;

function incluir_materia(id_materia, nombre){
    let nombre_boton = id_materia + "_bt";
    let nombre_contenido =  id_materia + "_contenido";
    let nombre_parrafo = id_materia + "_parrafo";
    let nombre_lista = id_materia + "_lista";

    const div_materia = document.createElement('div');
    div_materia.className = "materia";
    div_materia.id = id_materia
    div_materia.innerHTML = `   
        <button class= materia_bt id = ${nombre_boton}>
            ${nombre}
        </button>
        <div class = materia_contenido id= ${nombre_contenido}>
            <p id = ${nombre_parrafo}>
            </p>
            <ul id = ${nombre_lista}>
            </ul>
        </div>`;
    document.getElementById("contenido_main").appendChild(div_materia);
    materias.push(id_materia);
    botones.push(nombre_boton);
    contenidos.push(nombre_contenido);
}

function actualizar_parrafo(id_materia, parrafo){
    let nombre_parrafo = id_materia + "_parrafo";
    document.getElementById(nombre_parrafo).innerHTML = `
        ${parrafo}
    `;
}

function actualizar_lista(id_materia, link, texto_link){
    let nombre_lista = id_materia + "_lista";

    const nuevo_link = document.createElement('li');
    nuevo_link.innerHTML = `   
    <a href= ${link} target="_blank" rel="noopener noreferrer" > ${texto_link} </a>`;
    document.getElementById(nombre_lista).appendChild(nuevo_link);
}


function show_text(id_materia, link_img){
    let nombre_contenido =  id_materia + "_contenido";
    let nombre_boton = id_materia + "_bt";

    var contenido = document.getElementById(nombre_contenido)
    
    if (window.getComputedStyle(contenido).display === "none") {
      /*  for (i in contenidos) {
            (contenidos[i] !== nombre_contenido){
                document.getElementById(contenidos[i]).style.display = "none";
            }
        }*/
        for (i in botones) {
            if(botones[i] !== nombre_boton){
                document.getElementById(botones[i]).style.borderBottomWidth = "1px"
                document.getElementById(botones[i]).style.borderBottomLeftRadius = "3px";
                document.getElementById(botones[i]).style.borderBottomRightRadius = "3px";
            }
        }
        contenido.style.display = "inline-block"
        document.getElementById(nombre_boton).style.borderBottomWidth = "0px"
        document.getElementById(nombre_boton).style.borderBottomLeftRadius = "0px";
        document.getElementById(nombre_boton).style.borderBottomRightRadius = "0px";
        //document.getElementById("imagen_barra_lateral").src= link_img;
    }else{
        contenido.style.display = "none"
        document.getElementById(nombre_boton).style.borderBottomWidth = "1px"
        document.getElementById(nombre_boton).style.borderBottomLeftRadius = "3px";
        document.getElementById(nombre_boton).style.borderBottomRightRadius = "3px";
        //document.getElementById("imagen_barra_lateral").src="./pages/carreras/images/fcefyn-logo.png";
    }
    
}

function mostrar_menu_lateral(){
    if(menu_lateral){
        document.getElementById("menu_div_smartphone").style.display="none";
        menu_lateral = false;
        document.getElementById("boton_menu_smartphone").innerHTML = `   
        <svg class="icono-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg> `;
        document.getElementById("contenido").style.height = "100%";
        document.getElementById("contenido").style.overflow = "hidden";
    }else{
        document.getElementById("menu_div_smartphone").style.display="flex";
        menu_lateral = true;
        document.getElementById("boton_menu_smartphone").innerHTML = `   
        <svg class="icono-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>`;
    document.getElementById("contenido").style.height = "100vh";
        document.getElementById("contenido").style.overflow = "hidden";
    }
}

function incluir_funcion_botones(){
    document.getElementById("ing_ind_bt").addEventListener("click", function(){
        show_text("ing_ind", "./pages/carreras/images/Ingenieria_industrial.jpg");
    });

    document.getElementById("ing_comp_bt").onclick = function() {
        show_text("ing_comp","./pages/carreras/images/Ingenieria_en_computacion.jpg");
    }

    document.getElementById("prof_biol_bt").onclick = function() {
        show_text("prof_biol","./pages/carreras/images/ProfesoradoCienciasBiologicas.png");
    }

    document.getElementById("cien_biol_bt").onclick = function() {
        show_text("cien_biol","./pages/carreras/images/CienciasBiologicas.png");
    }

    document.getElementById("cien_geo_bt").onclick = function() {
        show_text("cien_geo","./pages/carreras/images/CienciasGeologicas.png");
    }

    document.getElementById("ing_agr_bt").onclick = function() {
        show_text("ing_agr","./pages/carreras/images/Ingenieria_en_agrimensura.png");
    }

    document.getElementById("ing_aer_bt").onclick = function() {
        show_text("ing_aer","./pages/carreras/images/Ingenieriaaeronautica.png");
    }
    
    document.getElementById("ing_bio_bt").onclick = function() {
        show_text("ing_bio","./pages/carreras/images/Ingenieria_biomedica.jpg");
    }

    document.getElementById("cons_bt").onclick = function() {
        show_text("cons","./pages/carreras/images/Constructor.png");
    }

    document.getElementById("ing_amb_bt").onclick = function() {
        show_text("ing_amb","./pages/carreras/images/IngenieriaAmbiental.jpg");
    }

    document.getElementById("ing_civ_bt").onclick = function() {
        show_text("ing_civ","./pages/carreras/images/IngenieriaCivil.png");
    }

    document.getElementById("ing_ele_bt").onclick = function() {
        show_text("ing_ele","./pages/carreras/images/IngenieriaElectronica.jpg");
    }

    document.getElementById("ing_mec_bt").onclick = function() {
        show_text("ing_mec","./pages/carreras/images/IngenieriaMecanica.png");
    }

    document.getElementById("ing_emec_bt").onclick = function() {
        show_text("ing_emec","./pages/carreras/images/IngenieriaElectromecanica.png");
    }

    document.getElementById("ing_quim_bt").onclick = function() {
        show_text("ing_quim","./pages/carreras/images/IngenieriaQuimica.png");
    }

    document.getElementById("tec_mec_bt").onclick = function() {
        show_text("tec_mec","./pages/carreras/images/TecnicoMecanicoElectricista.png");
    }

    document.getElementById("boton_menu_smartphone").onclick = function() {
        mostrar_menu_lateral();
    }

    window.onresize = function(){
        var anchoVentana = window.innerWidth;
        if(anchoVentana >= 886){
            document.getElementById("menu_div_smartphone").style.display="none";
            menu_lateral = false;
            document.getElementById("boton_menu_smartphone").innerHTML = `   
            <svg class="icono-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>`;
        }
    };
}



function change_html(enlace){
    window.location.href = enlace;
}

function carga_inicial(){

    incluir_materia("ing_ind", "Ingenieria Industrial");
    actualizar_parrafo("ing_ind", `
        El Ingeniero Industrial cubre las actividades de producción de bienes y servicios, relacionando principios de la tecnología y la organización, para hacer más eficiente los sistemas productivos. 
        <br>El Ingeniero Industrial es un profesional estrechamente relacionado con la creación del producto. 
        <br>Posee competencia para diseñar, proyectar y planificar operaciones, procesos e instalaciones para la obtención de bienes industrializados y la ejecución de servicios. Dirigir su operación y mantenimiento y certificar su aptitud.
        <br>Links útiles:`)
    actualizar_lista("ing_ind", "https://www.fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-industrial/ingenieria-industrial/", "Pagina ingeniería industrial");
    actualizar_lista("ing_ind", "https://www.fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-industrial/", "Pagina de la escuela de ingeniería industrial");

    incluir_materia("ing_comp", "Ingenieria en Computación");
    actualizar_parrafo("ing_comp", `
        Quienes estudian esta carrera se dedican al diseño de sistemas de hardware digital, incluyendo los sistemas de comunicaciones, equipos y dispositivos que componen los sistemas de computación.
        <br>Por otra parte, se dedican también al diseño e implementación de software, enfocándose en aplicaciones para dispositivos digitales y sus interfaces con usuarios y otros dispositivos.
        <br>Links utiles:`);
    actualizar_lista("ing_comp", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-computacion/ingenieria-en-computacion/", "Pagina ingeniería en computación");
    actualizar_lista("ing_comp", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-computacion/", "Pagina de la escuela de ingeniería en computación");

    
    incluir_materia("prof_biol", "Profesorado en ciencias biologicas");
    actualizar_parrafo("prof_biol", `
        El Profesorado permite al egresado desarrollarse como docente del nivel secundario y superior del sistema educativo en el área de las Ciencias Biológicas. 
        <br>Como titulación supletoria, se habilita a la enseñanza en otras Ciencias Naturales, como Química, Educación Ambiental, Educación para la Salud. 
        <br>También puede desarrollarse en el área de la Didáctica de las Ciencias Naturales.
        <br>Links útiles:`);
    actualizar_lista("prof_biol", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/biologia/prof-cs-biologicas/", "Pagina profesorado en ciencias biologicas");
    actualizar_lista("prof_biol", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/biologia/", "Pagina de la escuela de biologia");
    

    incluir_materia("cien_biol", "Ciencias biologicas");
    actualizar_parrafo("cien_biol", `
    El biólogo es un profesional capacitado para ejecutar acciones destinadas a: evaluación, manejo, control, protección de los ecosistemas urbanos, rurales y recursos naturales. 
    <br>Administrar áreas naturales protegidas. 
    <br>Realizar estudios e implementaciones de control de organismo plaga, vectores o reservorios de enfermedades. 
    <br>Ejecutar todo tipo de acción destinada a la cría, producción, desarrollo y mejoramiento genético de especies de la flora y fauna. 
    <br>Enseñar la especialidad en todos los ciclos del sistema educativo nacional. 
    <br>Realizar investigaciones básicas y aplicadas sobre los organismos y su ambiente.
    <br>Links útiles:`);
    actualizar_lista("cien_biol", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/biologia/cs-biologicas/", "Pagina de ciencias biologicas");
    actualizar_lista("cien_biol", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/biologia/", "Pagina de la escuela de biologia");



    incluir_materia("cien_geo", "Ciencias geologicas");
    actualizar_parrafo("cien_geo", `
    El Geólogo es un profesional capaz de: Identificar y caracterizar minerales; reconocer la composición y ambientes de formación de minerales y rocas, y conocer sus aplicaciones y usos. 
    <br>Conocer las técnicas básicas de estudio de fósiles e investigar los yacimientos paleontológicos para su uso y conservación
    <br>Medición del tiempo geológico, reconocer grados metamórficos, series magmáticas, y facies sedimentarias y los procesos de formación
    <br>Identificar suelos y su origen, planificar y aplicar estrategias de conservación de los suelos
    <br>Reconocer ambientes y procesos geomorfológicos, realizar mapas geomorfológicos, reconocer estructuras geológicas y su origen
    <br>Integrar conceptos y procesos geológicos y comprender su evolución en el tiempo, comprender la evolución de continentes, mares y atmósfera
    <br>Aplicar los conocimientos geológicos a la demanda social de recursos naturales, seleccionar y utilizar los métodos de exploración, evaluación, extracción y de gestión de los recursos no renovables y el agua
    <br>Reconocer la génesis de los yacimientos minerales, prevenir y mitigar los riesgos geológicos, desastres naturales y antrópicos
    <br>Recoger y analizar datos utilizando las técnicas adecuadas de campo y laboratorio, entre otras cosas.
    <br>Links utiles:`);
    actualizar_lista("cien_geo", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-geologia/ciencias-geologicas/", "Pagina de ciencias geologicas");
    actualizar_lista("cien_geo", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-geologia/", "Pagina de la escuela de geologia");

    incluir_materia("ing_agr", "Ingeniería en agrimensura");
    actualizar_parrafo("ing_agr", `
    La Agrimensura es un distintivo campo del saber que trabaja sobre la relación del hombre con la tierra. 
    <br>Antes de nacer cada pueblo, o crecer cada ciudad, alguien tiene que delimitar la tierra. 
    <br>Comprende la medición y la valuación de la propiedad territorial, ya sea pública o privada, urbana o rural, tanto en la superficie como en la profundidad.
    <br>Links utiles:`);
    actualizar_lista("ing_agr", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-agrimensura/ingenieria-en-agrimensura/", "Pagina de ingenieria en agrimensura");
    

    incluir_materia("ing_aer", "Ingeniería aeronáutica");
    actualizar_parrafo("ing_aer", `
    Los ingenieros aeronáuticos estudian, proyectan, calculan y dirigen la construcción de aeronaves (aviones, helicópteros, cohetes, toda máquina de vuelo y vehículos espaciales), verificando en laboratorios de investigación aerodinámica y de ensayo de estructuras con modelos a escala, para lograr un diseño seguro. 
    <br>Se enfocan, desde la concepción del proyecto, al mantenimiento y la reparación de naves de vuelo. 
    <br>Estudian y proyectan aeropuertos para la operación segura de aeronaves, y la circulación de bienes y personas en sus instalaciones.
    <br>Links utiles:`);
    actualizar_lista("ing_aer", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-aeronautica/ingenieria-aeronautica/", "Pagina de ingenieria aeronautica");
    actualizar_lista("ing_aer", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-aeronautica/", "Pagina de la escuela de ingenieria aeronautica");



    incluir_materia("ing_bio", "Ingeniería biomédica");
    actualizar_parrafo("ing_bio", `
    Egresando de nuestra carrera estarás capacitada/o para: Diseñar y utilizar instrumental de alta complejidad tecnológica en el campo de la biología en general y de la medicina en particular, así como asesorar sobre la necesidad de su utilización. 
    <br>Aplicar la metodología de investigación científica a la realización de estudios en el ámbito de su competencia. 
    <br>Intervenir en la creación de condiciones de asepsia y seguridad mediante la aplicación de equipos de medición y radiación. 
    <br>Obtener datos necesarios para el diagnóstico de sistemas biológicos mediante procedimientos electrónicos, mecánicos, acústicos y ópticos. 
    <br>Desarrollar, construir y evaluar dispositivos de ayuda a discapacidades. 
    <br>Estudiar sistemas biológicos a los fines de desarrollar aplicaciones tecnológicas.
    <br>Links utiles:`);
    actualizar_lista("ing_bio", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-biomedica/ingenieria-biomedica/", "Pagina de ingenieria biomedica");
    actualizar_lista("ing_bio", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-biomedica/", "Pagina de la escuela de ingenieria biomedica");


    incluir_materia("cons", "Constructor");
    actualizar_parrafo("cons", `
    El profesional Constructor es capaz de satisfacer íntegramente las demandas actuales de la construcción, ya que posee competencias y capacidades para resolver todos los aspectos de una obra de arquitectura. 
    <br>El egresado puede diseñar viviendas y edificios, brindar soluciones de los sistemas constructivos tradicionales, diseñar y calcular estructuras portantes, otorgar solución a las instalaciones especiales de una obra, asesorar para la contratación en mano de obra y la compra de materiales necesarios para la realización de la misma, conducir, organizar, dirigir y administrar una obra.
    <br>Asesorar en el mantenimiento de edificios, elaborar informes técnicos relativos a las edificaciones y sus instalaciones, realizar peritajes, ejercer como docentes.
    <br>Links utiles:`);
    actualizar_lista("cons", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/constructor/", "Pagina de constructor");
    actualizar_lista("cons", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/", "Pagina de la escuela de ingenieria civil");


    incluir_materia("ing_amb", "Ingeniería ambiental");
    actualizar_parrafo("ing_amb", `
    El Ingeniero Ambiental proyecta, dirige y supervisa la construcción y mantenimiento de obras destinadas a evitar la contaminación ambiental producida por efluentes originados por las industrias y sus servicios derivados. 
    <br>Desarrolla obras de aprovechamiento de los recursos naturales, obras de regulación, captación, y abastecimiento de agua. Investiga y desarrolla procesos tecnológicos para la recuperación y reciclaje de residuos urbanos, industriales, mineros y agropecuarios para su integración al medio ambiente. 
    <br>Realiza estudios y asesora acerca de la polución y contaminación del agua, del suelo y del aire, y explotación, manejo y recuperación de recursos naturales. 
    <br>Reconoce, interpreta y diagnostica impactos ambientales.
    <br>Links utiles:`);
    actualizar_lista("ing_amb", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/ingenieria-ambiental/", "Pagina de ingeniería ambiental");
    actualizar_lista("ing_amb", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/", "Pagina de la escuela de ingenieria civil");


    incluir_materia("ing_civ", "Ingeniería civil");
    actualizar_parrafo("ing_civ", `
    El Ingeniero Civil se encarga del diseño, construcción y mantenimiento de las infraestructuras emplazadas en el entorno, incluyendo carreteras, ferrocarriles, puentes, canales, presas, puertos, aeropuertos, diques y otras construcciones relacionadas. <br> Concibe, proyecta, construye y mantiene las obras del bien público (edificios, vías de comunicación, puentes, centrales hidroeléctricas, acueductos, desagües, plantas potabilizadoras y de tratamiento de líquidos, etc.) <br>Links utiles:
    `);
    actualizar_lista("ing_civ", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/ingenieria-civil/", "Pagina de ingeniería civil");
    actualizar_lista("ing_civ", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/", "Pagina de la escuela de ingenieria civil");


    incluir_materia("ing_ele", "Ingeniería electrónica");
    actualizar_parrafo("ing_ele", `
    Los ingenieros electrónicos, aparte del desarrollo de circuitos y sistemas electrónicos, nos dedicamos a brindar soluciones para un sinnúmero de aplicaciones en la industria ya que casi todos los procesos de fabricación se encuentran automatizados y controlados por sistemas electrónicos. <br>Asimismo pasa en muchos ámbitos, como las comunicaciones, la salud, etc, donde la electrónica está altamente presente. <br>Links utiles:                            </p>
    `);
    actualizar_lista("ing_ele", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-electronica/ingenieria-electronica/", "Pagina de ingeniería electronica");
    actualizar_lista("ing_ele", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-electronica/", "Pagina de la escuela de ingenieria electronica");


    incluir_materia("ing_mec", "Ingenieria mecánica");
    actualizar_parrafo("ing_mec", `
    Si estudias Ingeniería Mecánica,  podés diseñar, calcular y proyectar máquinas, instalaciones y sistemas mecánicos térmicos y de fluidos mecánicos, o partes con estas características incluidos los sistemas destinados a la generación transformación, regulación, conducción y aplicación de la energía mecánica; proyectar motores, máquinas y otros productos que son necesarios para la industria mecánica, como así también realizar el control de la fabricación, del funcionamiento y reparación de máquinas. <br>Entre las máquinas y herramientas que el ingeniero mecánico diseña, calcula, construye, mantiene o repara, se encuentran las máquinas agrícolas, equipos en la industria de manufactura, las grúas, las herramientas de mano, etc. <br>También tienen a su cargo la construcción de motores de combustión interna tales como motores de gasolina o gas, o motores diésel. <br>Links utiles:                            
    `);
    actualizar_lista("ing_mec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/ingenieria-mecanica/", "Pagina de ingeniería mecanica");
    actualizar_lista("ing_mec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/", "Pagina de la escuela de ingenieria mecanica electricista");


    incluir_materia("ing_emec", "Ingenieria electromecánica");
    actualizar_parrafo("ing_emec", `
    Si estudiás Ingeniería Electromecánica podes realizar tareas de ingeniería en plantas de generación y transformación de la energía, estaciones transformadoras, sistemas de transmisión y distribución de líneas de alta, media y baja tensión, instalaciones eléctricas de edificios, locales comerciales y fábricas, sistemas de control y automatización; construcción de máquinas eléctricas, elementos y equipos eléctricos en general. <br> También vas a poder diseñar, calcular y proyectar máquinas, instalaciones y sistemas mecánicos térmicos y de fluidos mecánicos, mantenimiento y reparaciones de maquinarias en general: estudio y diseño de sistemas de interconexión entre motores, estudio de generadores y transformadores, construcción y adaptación de motores, diseño de motores de combustión térmica, reforma y adaptación de los mismos y sistemas de aire acondicionado. <br>Links utiles:
    `);
    actualizar_lista("ing_emec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/ingenieria-electromecanica/", "Pagina de ingeniería electromecanica");
    actualizar_lista("ing_emec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/", "Pagina de la escuela de ingenieria mecanica electricista");


    incluir_materia("ing_quim", "Ingenieria química");
    actualizar_parrafo("ing_quim", `
    El ingeniero químico actúa en un campo de acción muy amplio, por ejemplo, trabajar en diversas industrias químicas, tener la propia planta elaboradora de algún producto, investigar y producir nuevos materiales, conducir empresas en nuestro país y en el exterior, entre otras actividades. <br>Links utiles:
    `);
    actualizar_lista("ing_quim", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-quimica/ingenieria-quimica/", "Pagina de ingeniería quimica");
    actualizar_lista("ing_quim", "http://www.esc.quimica.efn.uncor.edu/", "Pagina de la escuela de ingenieria quimica");


    incluir_materia("tec_mec", "Técnico mecánico electricista");
    actualizar_parrafo("tec_mec", `
    La carrera se cursa en la Facultad de Ciencias Exactas, Físicas y Naturales de la UNC, comprende 21 asignaturas cuyos contenidos curriculares se distribuyen en 3 del ciclo de nivelación, 6 anuales en el primer año, 6 anuales en el segundo año y 6 anuales en el tercer año. <br>Link utiles:
    `)
    actualizar_lista("tec_mec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/tecnico-mecanico-electricista/", "Pagina de tecnico mecanico electricista");
    actualizar_lista("tec_mec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/", "Pagina de la escuela de tecnico mecanico electricista");

    incluir_funcion_botones();
}