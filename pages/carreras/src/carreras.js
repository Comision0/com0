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
        El Ingeniero Industrial cubre las actividades de producci??n de bienes y servicios, relacionando principios de la tecnolog??a y la organizaci??n, para hacer m??s eficiente los sistemas productivos. 
        <br>El Ingeniero Industrial es un profesional estrechamente relacionado con la creaci??n del producto. 
        <br>Posee competencia para dise??ar, proyectar y planificar operaciones, procesos e instalaciones para la obtenci??n de bienes industrializados y la ejecuci??n de servicios. Dirigir su operaci??n y mantenimiento y certificar su aptitud.
        <br>Links ??tiles:`)
    actualizar_lista("ing_ind", "https://www.fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-industrial/ingenieria-industrial/", "Pagina ingenier??a industrial");
    actualizar_lista("ing_ind", "https://www.fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-industrial/", "Pagina de la escuela de ingenier??a industrial");

    incluir_materia("ing_comp", "Ingenieria en Computaci??n");
    actualizar_parrafo("ing_comp", `
        Quienes estudian esta carrera se dedican al dise??o de sistemas de hardware digital, incluyendo los sistemas de comunicaciones, equipos y dispositivos que componen los sistemas de computaci??n.
        <br>Por otra parte, se dedican tambi??n al dise??o e implementaci??n de software, enfoc??ndose en aplicaciones para dispositivos digitales y sus interfaces con usuarios y otros dispositivos.
        <br>Links utiles:`);
    actualizar_lista("ing_comp", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-computacion/ingenieria-en-computacion/", "Pagina ingenier??a en computaci??n");
    actualizar_lista("ing_comp", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-computacion/", "Pagina de la escuela de ingenier??a en computaci??n");

    
    incluir_materia("prof_biol", "Profesorado en ciencias biologicas");
    actualizar_parrafo("prof_biol", `
        El Profesorado permite al egresado desarrollarse como docente del nivel secundario y superior del sistema educativo en el ??rea de las Ciencias Biol??gicas. 
        <br>Como titulaci??n supletoria, se habilita a la ense??anza en otras Ciencias Naturales, como Qu??mica, Educaci??n Ambiental, Educaci??n para la Salud. 
        <br>Tambi??n puede desarrollarse en el ??rea de la Did??ctica de las Ciencias Naturales.
        <br>Links ??tiles:`);
    actualizar_lista("prof_biol", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/biologia/prof-cs-biologicas/", "Pagina profesorado en ciencias biologicas");
    actualizar_lista("prof_biol", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/biologia/", "Pagina de la escuela de biologia");
    

    incluir_materia("cien_biol", "Ciencias biologicas");
    actualizar_parrafo("cien_biol", `
    El bi??logo es un profesional capacitado para ejecutar acciones destinadas a: evaluaci??n, manejo, control, protecci??n de los ecosistemas urbanos, rurales y recursos naturales. 
    <br>Administrar ??reas naturales protegidas. 
    <br>Realizar estudios e implementaciones de control de organismo plaga, vectores o reservorios de enfermedades. 
    <br>Ejecutar todo tipo de acci??n destinada a la cr??a, producci??n, desarrollo y mejoramiento gen??tico de especies de la flora y fauna. 
    <br>Ense??ar la especialidad en todos los ciclos del sistema educativo nacional. 
    <br>Realizar investigaciones b??sicas y aplicadas sobre los organismos y su ambiente.
    <br>Links ??tiles:`);
    actualizar_lista("cien_biol", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/biologia/cs-biologicas/", "Pagina de ciencias biologicas");
    actualizar_lista("cien_biol", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/biologia/", "Pagina de la escuela de biologia");



    incluir_materia("cien_geo", "Ciencias geologicas");
    actualizar_parrafo("cien_geo", `
    El Ge??logo es un profesional capaz de: Identificar y caracterizar minerales; reconocer la composici??n y ambientes de formaci??n de minerales y rocas, y conocer sus aplicaciones y usos. 
    <br>Conocer las t??cnicas b??sicas de estudio de f??siles e investigar los yacimientos paleontol??gicos para su uso y conservaci??n
    <br>Medici??n del tiempo geol??gico, reconocer grados metam??rficos, series magm??ticas, y facies sedimentarias y los procesos de formaci??n
    <br>Identificar suelos y su origen, planificar y aplicar estrategias de conservaci??n de los suelos
    <br>Reconocer ambientes y procesos geomorfol??gicos, realizar mapas geomorfol??gicos, reconocer estructuras geol??gicas y su origen
    <br>Integrar conceptos y procesos geol??gicos y comprender su evoluci??n en el tiempo, comprender la evoluci??n de continentes, mares y atm??sfera
    <br>Aplicar los conocimientos geol??gicos a la demanda social de recursos naturales, seleccionar y utilizar los m??todos de exploraci??n, evaluaci??n, extracci??n y de gesti??n de los recursos no renovables y el agua
    <br>Reconocer la g??nesis de los yacimientos minerales, prevenir y mitigar los riesgos geol??gicos, desastres naturales y antr??picos
    <br>Recoger y analizar datos utilizando las t??cnicas adecuadas de campo y laboratorio, entre otras cosas.
    <br>Links utiles:`);
    actualizar_lista("cien_geo", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-geologia/ciencias-geologicas/", "Pagina de ciencias geologicas");
    actualizar_lista("cien_geo", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-geologia/", "Pagina de la escuela de geologia");

    incluir_materia("ing_agr", "Ingenier??a en agrimensura");
    actualizar_parrafo("ing_agr", `
    La Agrimensura es un distintivo campo del saber que trabaja sobre la relaci??n del hombre con la tierra. 
    <br>Antes de nacer cada pueblo, o crecer cada ciudad, alguien tiene que delimitar la tierra. 
    <br>Comprende la medici??n y la valuaci??n de la propiedad territorial, ya sea p??blica o privada, urbana o rural, tanto en la superficie como en la profundidad.
    <br>Links utiles:`);
    actualizar_lista("ing_agr", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-agrimensura/ingenieria-en-agrimensura/", "Pagina de ingenieria en agrimensura");
    

    incluir_materia("ing_aer", "Ingenier??a aeron??utica");
    actualizar_parrafo("ing_aer", `
    Los ingenieros aeron??uticos estudian, proyectan, calculan y dirigen la construcci??n de aeronaves (aviones, helic??pteros, cohetes, toda m??quina de vuelo y veh??culos espaciales), verificando en laboratorios de investigaci??n aerodin??mica y de ensayo de estructuras con modelos a escala, para lograr un dise??o seguro. 
    <br>Se enfocan, desde la concepci??n del proyecto, al mantenimiento y la reparaci??n de naves de vuelo. 
    <br>Estudian y proyectan aeropuertos para la operaci??n segura de aeronaves, y la circulaci??n de bienes y personas en sus instalaciones.
    <br>Links utiles:`);
    actualizar_lista("ing_aer", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-aeronautica/ingenieria-aeronautica/", "Pagina de ingenieria aeronautica");
    actualizar_lista("ing_aer", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-aeronautica/", "Pagina de la escuela de ingenieria aeronautica");



    incluir_materia("ing_bio", "Ingenier??a biom??dica");
    actualizar_parrafo("ing_bio", `
    Egresando de nuestra carrera estar??s capacitada/o para: Dise??ar y utilizar instrumental de alta complejidad tecnol??gica en el campo de la biolog??a en general y de la medicina en particular, as?? como asesorar sobre la necesidad de su utilizaci??n. 
    <br>Aplicar la metodolog??a de investigaci??n cient??fica a la realizaci??n de estudios en el ??mbito de su competencia. 
    <br>Intervenir en la creaci??n de condiciones de asepsia y seguridad mediante la aplicaci??n de equipos de medici??n y radiaci??n. 
    <br>Obtener datos necesarios para el diagn??stico de sistemas biol??gicos mediante procedimientos electr??nicos, mec??nicos, ac??sticos y ??pticos. 
    <br>Desarrollar, construir y evaluar dispositivos de ayuda a discapacidades. 
    <br>Estudiar sistemas biol??gicos a los fines de desarrollar aplicaciones tecnol??gicas.
    <br>Links utiles:`);
    actualizar_lista("ing_bio", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-biomedica/ingenieria-biomedica/", "Pagina de ingenieria biomedica");
    actualizar_lista("ing_bio", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-biomedica/", "Pagina de la escuela de ingenieria biomedica");


    incluir_materia("cons", "Constructor");
    actualizar_parrafo("cons", `
    El profesional Constructor es capaz de satisfacer ??ntegramente las demandas actuales de la construcci??n, ya que posee competencias y capacidades para resolver todos los aspectos de una obra de arquitectura. 
    <br>El egresado puede dise??ar viviendas y edificios, brindar soluciones de los sistemas constructivos tradicionales, dise??ar y calcular estructuras portantes, otorgar soluci??n a las instalaciones especiales de una obra, asesorar para la contrataci??n en mano de obra y la compra de materiales necesarios para la realizaci??n de la misma, conducir, organizar, dirigir y administrar una obra.
    <br>Asesorar en el mantenimiento de edificios, elaborar informes t??cnicos relativos a las edificaciones y sus instalaciones, realizar peritajes, ejercer como docentes.
    <br>Links utiles:`);
    actualizar_lista("cons", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/constructor/", "Pagina de constructor");
    actualizar_lista("cons", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/", "Pagina de la escuela de ingenieria civil");


    incluir_materia("ing_amb", "Ingenier??a ambiental");
    actualizar_parrafo("ing_amb", `
    El Ingeniero Ambiental proyecta, dirige y supervisa la construcci??n y mantenimiento de obras destinadas a evitar la contaminaci??n ambiental producida por efluentes originados por las industrias y sus servicios derivados. 
    <br>Desarrolla obras de aprovechamiento de los recursos naturales, obras de regulaci??n, captaci??n, y abastecimiento de agua. Investiga y desarrolla procesos tecnol??gicos para la recuperaci??n y reciclaje de residuos urbanos, industriales, mineros y agropecuarios para su integraci??n al medio ambiente. 
    <br>Realiza estudios y asesora acerca de la poluci??n y contaminaci??n del agua, del suelo y del aire, y explotaci??n, manejo y recuperaci??n de recursos naturales. 
    <br>Reconoce, interpreta y diagnostica impactos ambientales.
    <br>Links utiles:`);
    actualizar_lista("ing_amb", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/ingenieria-ambiental/", "Pagina de ingenier??a ambiental");
    actualizar_lista("ing_amb", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/", "Pagina de la escuela de ingenieria civil");


    incluir_materia("ing_civ", "Ingenier??a civil");
    actualizar_parrafo("ing_civ", `
    El Ingeniero Civil se encarga del dise??o, construcci??n y mantenimiento de las infraestructuras emplazadas en el entorno, incluyendo carreteras, ferrocarriles, puentes, canales, presas, puertos, aeropuertos, diques y otras construcciones relacionadas. <br> Concibe, proyecta, construye y mantiene las obras del bien p??blico (edificios, v??as de comunicaci??n, puentes, centrales hidroel??ctricas, acueductos, desag??es, plantas potabilizadoras y de tratamiento de l??quidos, etc.) <br>Links utiles:
    `);
    actualizar_lista("ing_civ", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/ingenieria-civil/", "Pagina de ingenier??a civil");
    actualizar_lista("ing_civ", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-civil/", "Pagina de la escuela de ingenieria civil");


    incluir_materia("ing_ele", "Ingenier??a electr??nica");
    actualizar_parrafo("ing_ele", `
    Los ingenieros electr??nicos, aparte del desarrollo de circuitos y sistemas electr??nicos, nos dedicamos a brindar soluciones para un sinn??mero de aplicaciones en la industria ya que casi todos los procesos de fabricaci??n se encuentran automatizados y controlados por sistemas electr??nicos. <br>Asimismo pasa en muchos ??mbitos, como las comunicaciones, la salud, etc, donde la electr??nica est?? altamente presente. <br>Links utiles:                            </p>
    `);
    actualizar_lista("ing_ele", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-electronica/ingenieria-electronica/", "Pagina de ingenier??a electronica");
    actualizar_lista("ing_ele", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-electronica/", "Pagina de la escuela de ingenieria electronica");


    incluir_materia("ing_mec", "Ingenieria mec??nica");
    actualizar_parrafo("ing_mec", `
    Si estudias Ingenier??a Mec??nica,  pod??s dise??ar, calcular y proyectar m??quinas, instalaciones y sistemas mec??nicos t??rmicos y de fluidos mec??nicos, o partes con estas caracter??sticas incluidos los sistemas destinados a la generaci??n transformaci??n, regulaci??n, conducci??n y aplicaci??n de la energ??a mec??nica; proyectar motores, m??quinas y otros productos que son necesarios para la industria mec??nica, como as?? tambi??n realizar el control de la fabricaci??n, del funcionamiento y reparaci??n de m??quinas. <br>Entre las m??quinas y herramientas que el ingeniero mec??nico dise??a, calcula, construye, mantiene o repara, se encuentran las m??quinas agr??colas, equipos en la industria de manufactura, las gr??as, las herramientas de mano, etc. <br>Tambi??n tienen a su cargo la construcci??n de motores de combusti??n interna tales como motores de gasolina o gas, o motores di??sel. <br>Links utiles:                            
    `);
    actualizar_lista("ing_mec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/ingenieria-mecanica/", "Pagina de ingenier??a mecanica");
    actualizar_lista("ing_mec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/", "Pagina de la escuela de ingenieria mecanica electricista");


    incluir_materia("ing_emec", "Ingenieria electromec??nica");
    actualizar_parrafo("ing_emec", `
    Si estudi??s Ingenier??a Electromec??nica podes realizar tareas de ingenier??a en plantas de generaci??n y transformaci??n de la energ??a, estaciones transformadoras, sistemas de transmisi??n y distribuci??n de l??neas de alta, media y baja tensi??n, instalaciones el??ctricas de edificios, locales comerciales y f??bricas, sistemas de control y automatizaci??n; construcci??n de m??quinas el??ctricas, elementos y equipos el??ctricos en general. <br> Tambi??n vas a poder dise??ar, calcular y proyectar m??quinas, instalaciones y sistemas mec??nicos t??rmicos y de fluidos mec??nicos, mantenimiento y reparaciones de maquinarias en general: estudio y dise??o de sistemas de interconexi??n entre motores, estudio de generadores y transformadores, construcci??n y adaptaci??n de motores, dise??o de motores de combusti??n t??rmica, reforma y adaptaci??n de los mismos y sistemas de aire acondicionado. <br>Links utiles:
    `);
    actualizar_lista("ing_emec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/ingenieria-electromecanica/", "Pagina de ingenier??a electromecanica");
    actualizar_lista("ing_emec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/", "Pagina de la escuela de ingenieria mecanica electricista");


    incluir_materia("ing_quim", "Ingenieria qu??mica");
    actualizar_parrafo("ing_quim", `
    El ingeniero qu??mico act??a en un campo de acci??n muy amplio, por ejemplo, trabajar en diversas industrias qu??micas, tener la propia planta elaboradora de alg??n producto, investigar y producir nuevos materiales, conducir empresas en nuestro pa??s y en el exterior, entre otras actividades. <br>Links utiles:
    `);
    actualizar_lista("ing_quim", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-quimica/ingenieria-quimica/", "Pagina de ingenier??a quimica");
    actualizar_lista("ing_quim", "http://www.esc.quimica.efn.uncor.edu/", "Pagina de la escuela de ingenieria quimica");


    incluir_materia("tec_mec", "T??cnico mec??nico electricista");
    actualizar_parrafo("tec_mec", `
    La carrera se cursa en la Facultad de Ciencias Exactas, F??sicas y Naturales de la UNC, comprende 21 asignaturas cuyos contenidos curriculares se distribuyen en 3 del ciclo de nivelaci??n, 6 anuales en el primer a??o, 6 anuales en el segundo a??o y 6 anuales en el tercer a??o. <br>Link utiles:
    `)
    actualizar_lista("tec_mec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/tecnico-mecanico-electricista/", "Pagina de tecnico mecanico electricista");
    actualizar_lista("tec_mec", "https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/escuela-de-ingenieria-mecanica-electricista/", "Pagina de la escuela de tecnico mecanico electricista");

    incluir_funcion_botones();
}