

let bool = true;
while (bool === true) {

    let pregunta = "si";
    while (pregunta === "si") {

        console.log("------------------------------------------------");
        console.log("                 CAMPUSLAND                     ");
        console.log("------------------------------------------------\n");

        let opcion = prompt(`       Elige tu cargo para iniciar sesión 
                                
                        1. Camper
                        2. Trainer
                        3. Coordinador
        ------------------------------------------------\n`);
            
        if (opcion === "1") {

            console.clear();

            let academico = [

                {
                    "salon": "Sputnik",
                    "estudiantes": [
                        {
                            "identificacion": 4024674357,
                            "nombres": "Cristina",
                            "apellidos": "Aguilera Moron",
                            "direccion": "Calle 9 #10-210",
                            "acudiente": "Ramon Aguilera Torrado",
                            "nfijo": "601 5787492",
                            "celular": "313 575 78 25",
                            "estado": "Cursando",
                            "trainer": "Pedro",
                            "ruta": "Java",
                            "inicio": "19-02-2024",
                            "finalizacion": "14-04-2025",
                            "EstadoPlataforma": "inactivo"
                        }
                    ]
                },
                {
                    "salon": "Apolo",
                    "estudiantes": [
                        {
                            "identificacion": 6536787532,
                            "nombres": "Diego Leon",
                            "apellidos": "Santana Conedo",
                            "direccion": "Calle 11 #24-253",
                            "acudiente": "Carlos Santana Guerrero",
                            "nfijo": "601 5423546",
                            "celular": "302 575 45 66",
                            "estado": "Cursando",
                            "trainer": "Stiven",
                            "ruta": "NodeJS",
                            "inicio": "19-02-2024",
                            "finalizacion": "14-04-2024",
                            "EstadoPlataforma": "inactivo"
                        }
                    ]
                },
                {
                    "salon": "Artemis",
                    "estudiantes": [
                        {
                            "identificacion": 56571854534,
                            "nombres": "Moly Alejandra",
                            "apellidos": "Castillo Arellano",
                            "direccion": "Urbanizacion La Esmeralda",
                            "acudiente": "Cristina Arellano Casas",
                            "nfijo": "601 8255272",
                            "celular": "313 527 35 52",
                            "estado": "Cursando",
                            "trainer": "Andres",
                            "ruta": "NetCore",
                            "inicio": "19-02-2024",
                            "finalizacion": "14-04-2025",
                            "EstadoPlataforma": "inactivo"
                        }
                    ]
                }
            
            ]

            let usuario = prompt("Ingrese su nombre de usuario\n");
            console.log("");
            let password = parseInt(prompt("Ingrese su contraseña (ID)\n"));
            console.log("");

            let found = false
            for (let i of academico) {
                for (let x of i.estudiantes) {
                    if (x.nombres === usuario) {
                        if ("identificacion" in x && x.identificacion === password) {

                            console.clear();

                            console.log("------------------------------------------------");
                            console.log(`  DATOS: ${x.nombres} ${x.apellidos}`);
                            console.log("------------------------------------------------\n");
                            console.log("");

                            console.log("Dirección: ", x.direccion);
                            console.log("Acudiente: ", x.acudiente);
                            console.log("Teléfono fijo: ", x.nfijo);
                            console.log("Celular: ", x.celular);
                            console.log("Estado: ", x.estado);
                            console.log("Trainer: ", x.trainer);
                            console.log("Ruta: ", x.ruta);
                            console.log("Fecha de inicio: ", x.inicio);
                            console.log("Fecha de finalización: ", x.finalizacion);

                            pregunta = prompt("\nPresione cualquier tecla para cerrar sesión\n");
                            if (pregunta !== "si") {
                                bool = false
                                break
                            };

                            break
                        }

                    }
                }
            }
        }

        if (opcion === "2") {
            console.clear();

            let trainers = [
                {
                    "trainer": [
                        {   
                            "nombre": "Pedro",
                            "apellidot": "Gomez",
                            "id": 12345,
                            "contrasena": "pedro123"
                        
                        },
                        {   
                            "nombre": "Andres",
                            "apellidot": "Jurado",
                            "id": 67890,
                            "contrasena": "andres456"
                            
                        },
                        {   
                            "nombre" : "Stiven",
                            "apellidot": "Carvajal",
                            "id": 45378,
                            "contrasena": "stiven111"
                        },
                        {   
                            "nombre" : "Jose",
                            "apellidot": "Ramirez",
                            "id": 65437,
                            "contrasena": "jose1"
                        },
                        {   
                            "nombre" : "Lucas",
                            "apellidot": "Garcia",
                            "id": 56785,
                            "contrasena": "lucas23"
                        },
                        {   
                            "nombre" : "Michael",
                            "apellidot": "Caphecci",
                            "id": 73283,
                            "contrasena": "michael67"
                        },
                        {   
                            "nombre" : "Jorge",
                            "apellidot": "Gonzalez",
                            "id": 25450,
                            "contrasena": "jorge47"
                        },
                        {   
                            "nombre" : "Juan",
                            "apellidot": "Perez",
                            "id": 45654,
                            "contrasena": "juan99"
                        },
                        {   
                            "nombre" : "Dilam",
                            "apellidot": "Gutierrez",
                            "id": 45453,
                            "contrasena": "dilam123"
                        },
                        {   
                            "nombre" : "Gustavo",
                            "apellidot": "Mendoza",
                            "id": 34529,
                            "contrasena": "gustavo"
                        }
            
                        
                    ]
                }
                
            ]

            let usuariot = parseInt(prompt("Ingrese su usuario (ID)\n"));
            console.log("");
            let passwordt = prompt("Ingrese su contraseña\n");
            console.log("");

            for (let i of trainers) {
                for (let x of i.trainer) {
                    if (x.id === usuariot) {
                        if ("contrasena" in x && x.contrasena === passwordt) {
                            console.clear()
                            console.log(`Ingreso válido Trainer ${x.nombre}`);
                        
                            let bool = true
                            while (bool === true) {
                                let opc = parseInt(prompt(`                        TRAINER 
                                        
                                1. Información personal
                                2. Cerrar sesión
                                ------------------------------------------------\n`));

                                if (opc === 1) {

                                    console.clear();

                                    let rutica = [
                                        {
                                            "nombre": "Pedro",
                                            "ruta": "Java"
                                        },
                                        {
                                            "nombre": "Stiven",
                                            "ruta": "NodeJS"
                                        },
                                        {
                                            "nombre": "Andres",
                                            "ruta": "NetCore"
                                        },
                                        {
                                            "nombre": "Michael",
                                            "ruta": "PHP"
                                        }
                                    ]

                                    console.log("------------------------------------------------");
                                    console.log("                     DATOS                      ");
                                    console.log("------------------------------------------------\n");  
                                    console.log("");
                                
                                    for (let i of trainers) {
                                        for (let a of i.trainer) {
                                            if (a.nombre === x.nombre) {
                                                console.log(`Nombre: ${x.nombre} ${x.apellidot}`);
                                                console.log(`Identificación: ${x.id}`);
                                                console.log(`Contraseña: ${x.contrasena}`);

                                                for (let b of rutica) {
                                                    if (b.nombre === x.nombre) {
                                                        x.ruta = b.ruta
                                                        console.log(`Ruta asignada: ${x.ruta}`);
                                                        console.log("");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                            
                                    nose = prompt("Presione enter para continuar");
                                    console.clear();
                                    
                                }

                                if (opc === 2) {
                                    console.clear();

                                    console.log("------------------------------------------------");
                                    console.log("                Cerrar Sesión                      ");
                                    console.log("------------------------------------------------\n");
                                    console.log("");

                                    sino = parseInt(prompt("Desea cerrar sesión? \n1.Si\n2.No\n"));

                                    if (sino === 1) {
                                        console.clear();
                                        console.log("Cerrando Sesión...");
                                        setTimeout(() => {}, 3000);
                                        break;
                                    }


                                }
                            }

                        }
                    }
                }
            }
            
        }

        if (opcion === "3") {
            console.clear()

            let coor = [
                {
                    "coordinador": [
                        {   
                            "nombre": "Jesus",
                            "id": 31972561,
                            "contrasena": "jesus2006"
                           
                        }
                    ]
                }
            ]

            console.log("------------------------------------------------");
            console.log("               BIENVENIDO COORDINADOR                     ");
            console.log("------------------------------------------------\n");


            let usuario = prompt("Número de Identificación: ");
            console.log("");
            let Contraseña = prompt("Contraseña: ")
            console.log("");
            console.clear();

            for (let i of coor) {
                for (let x of i.coordinador) {
                    if (x.id == usuario) {
                        if ("contrasena" in x && x.contrasena == Contraseña) {
                            console.log("Ingreso exitoso Coordinador", x.nombre);
                            console.log("");

                            let respuestaUsuario = prompt("Elije una opción\n\n1. Inscribir campers\n2. Registrar notas\n3. Crear nuevas rutas\n4. Módulo de matrículas\n5. Módulo de reportes\n6. Cerrar sesión\n\n")
                                

                            if (respuestaUsuario == 1) {

                                let inscritos = [
                                    {
                                        "inscritos": [
                                            {
                                                "identificacion": 1093296678,
                                                "nombres": "Mario",
                                                "apellidos": "Lopez Carrascal",
                                                "direccion": "Calle 53 #7-43",
                                                "acudiente": "Leslie Carrascal Sanchez",
                                                "nfijo": "601 3256738",
                                                "celular": "323 645 98 00",
                                                "estado": "Inscrito"
                                            },
                                            {
                                                "identificacion": 1654278539,
                                                "nombres": "Damian",
                                                "apellidos": "Smith Caro",
                                                "direccion": "Calle 23 #5-21",
                                                "acudiente": "Joshua Smith Villamizar",
                                                "nfijo": "601 2231456",
                                                "celular": "323 432 55 00",
                                                "estado": "Inscrito"
                                            },
                                            {
                                                "identificacion": 325672890,
                                                "nombres": "Zharik",
                                                "apellidos": "Perez Meza",
                                                "direccion": "Avenida Florez #98-03",
                                                "acudiente": "Nicol Meza Arteaga",
                                                "nfijo": "601 99633276",
                                                "celular": "323 987 98 43",
                                                "estado": "Inscrito"
                                            }
                                        ]
                                    }
                                ]

                                console.log("--------------------------------------------------------");
                                console.log("             Inscripción de estudiantes                 ");
                                console.log("--------------------------------------------------------\n\n");

                                let identificacion = parseInt(prompt("Identificación\n"));    
                                console.log("");
                                let nombres = prompt("Nombres\n");
                                console.log("");
                                let apellidos = prompt("Apellidos\n");
                                console.log("");
                                let direccion = prompt("Dirección\n");
                                console.log("");
                                let acudiente = prompt("Nombres y apellidos de acudiente\n");
                                console.log("");
                                let nfijo = prompt("Número fijo\n");
                                console.log("");
                                let celular = prompt("Número celular\n");
                                console.log("");
                                let estado = prompt("Estado (inscrito)\n");

                                let inscritosnew = {
                                    "identificacion": identificacion,
                                    "nombres": nombres,
                                    "apellidos": apellidos,
                                    "direccion": direccion,
                                    "acudiente": acudiente,
                                    "nfijo": nfijo,
                                    "celular": celular,
                                    "estado": estado
                                };

                                inscritos[0].inscritos.push(inscritosnew);
                                  
                            }

                            if (respuestaUsuario == 2) {
                                console.clear();

                                console.log("------------------------------------------------");
                                console.log("                INGRESAR NOTAS                  ");
                                console.log("------------------------------------------------\n");

                                console.log("------------------------------------------------");
                                console.log("             1. Prueba inicial\n             2. Módulo      ");
                                console.log("------------------------------------------------\n");
                                console.log("");
                                let nota = parseInt(prompt(""));  
                                console.log("");

                                if (nota == 1) {

                                    let inscritos = [
                                        {
                                            "inscritos": [
                                                {
                                                    "identificacion": 1093296678,
                                                    "nombres": "Mario",
                                                    "apellidos": "Lopez Carrascal",
                                                    "direccion": "Calle 53 #7-43",
                                                    "acudiente": "Leslie Carrascal Sanchez",
                                                    "nfijo": "601 3256738",
                                                    "celular": "323 645 98 00",
                                                    "estado": "Inscrito"
                                                },
                                                {
                                                    "identificacion": 1654278539,
                                                    "nombres": "Damian",
                                                    "apellidos": "Smith Caro",
                                                    "direccion": "Calle 23 #5-21",
                                                    "acudiente": "Joshua Smith Villamizar",
                                                    "nfijo": "601 2231456",
                                                    "celular": "323 432 55 00",
                                                    "estado": "Inscrito"
                                                },
                                                {
                                                    "identificacion": 325672890,
                                                    "nombres": "Zharik",
                                                    "apellidos": "Perez Meza",
                                                    "direccion": "Avenida Florez #98-03",
                                                    "acudiente": "Nicol Meza Arteaga",
                                                    "nfijo": "601 99633276",
                                                    "celular": "323 987 98 43",
                                                    "estado": "Inscrito"
                                                }
                                            ]
                                        }
                                    ]

                                    let contador = 1;
                                    for (let i of inscritos) {
                                        for (let x of i.inscritos) {
                                            console.log(contador, `${x.nombres} ${x.apellidos}\n`);
                                            contador++;
                                        }
                                    }

                                    let estudiante = prompt("Ingrese el nombre del estudiante que desea revisar\n");
                                    console.log("");
                                    let apellido = prompt("Ingrese el apellido del estudiante que desea revisar\n");
                                    for (let i of inscritos) {
                                        for (let x of i.inscritos) {
                                            if (x.nombres == estudiante) {
                                                if ("apellidos" in x && x.apellidos == apellido) {
                                                    console.clear();
                                                    console.log("------------------------------------------------");
                                                    console.log(`  DATOS: ${x.nombres} ${x.apellidos}`);
                                                    console.log("------------------------------------------------\n");
                                                    console.log("");

                                                    console.log(`  Identificación: ${x.identificacion}`);
                                                    console.log(`  Dirección: ${x.direccion}`);
                                                    console.log(`  Acudiente: ${x.acudiente}`);
                                                    console.log(`  Número Fijo: ${x.nfijo}`);
                                                    console.log(`  Celular: ${x.celular}`);
                                                    console.log(`  Estado: ${x.estado}`);
                                                    console.log("");

                                                    let bool = true;
                                                    while (bool) {

                                                        let aprobado = [
                                                            {
                                                                "identificacion": 4024674357,
                                                                "nombres": "Cristina",
                                                                "apellidos": "Aguilera Moron",
                                                                "direccion": "Calle 9 #10-210",
                                                                "acudiente": "Ramon Aguilera Torrado",
                                                                "nfijo": "601 5787492",
                                                                "celular": "313 575 78 25",
                                                                "estado": "Aprobado",
                                                                "EstadoPlataforma": "inactivo"
                                                            },
                                                            {
                                                                "identificacion": 6536787532,
                                                                "nombres": "Diego Leon",
                                                                "apellidos": "Santana Conedo",
                                                                "direccion": "Calle 11 #24-253",
                                                                "acudiente": "Carlos Santana Guerrero",
                                                                "nfijo": "601 5423546",
                                                                "celular": "302 575 45 66",
                                                                "estado": "Aprobado",
                                                                "EstadoPlataforma": "inactivo"
                                                            },
                                                            {
                                                                "identificacion": 56571854534,
                                                                "nombres": "Moly Alejandra",
                                                                "apellidos": "Castillo Arellano",
                                                                "direccion": "Urbanizacion La Esmeralda",
                                                                "acudiente": "Cristina Arellano Casas",
                                                                "nfijo": "601 8255272",
                                                                "celular": "313 527 35 52",
                                                                "estado": "Aprobado",
                                                                "EstadoPlataforma": "inactivo"
                                                            }
                                                        ]

                                                        console.log("Ingrese las notas de la prueba inicial \n");
                                                        let PorcentajeMayor = parseInt(prompt("Nota práctica 70% :\n"));
                                                            
                                                        let PorcentajeMenor = parseInt(prompt("Nota teórica 30% :\n"));

                                                        if (100 >= PorcentajeMayor && PorcentajeMenor >= 1) {
                                                            var resultado = ((PorcentajeMayor * 0.7) + (PorcentajeMenor * 0.30));

                                                            if (resultado >= 60) {

                                                                let academico = [

                                                                    {
                                                                        "salon": "Sputnik",
                                                                        "estudiantes": [
                                                                            {
                                                                                "identificacion": 4024674357,
                                                                                "nombres": "Cristina",
                                                                                "apellidos": "Aguilera Moron",
                                                                                "direccion": "Calle 9 #10-210",
                                                                                "acudiente": "Ramon Aguilera Torrado",
                                                                                "nfijo": "601 5787492",
                                                                                "celular": "313 575 78 25",
                                                                                "estado": "Cursando",
                                                                                "trainer": "Pedro",
                                                                                "ruta": "Java",
                                                                                "inicio": "19-02-2024",
                                                                                "finalizacion": "14-04-2025",
                                                                                "EstadoPlataforma": "inactivo"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "salon": "Apolo",
                                                                        "estudiantes": [
                                                                            {
                                                                                "identificacion": 6536787532,
                                                                                "nombres": "Diego Leon",
                                                                                "apellidos": "Santana Conedo",
                                                                                "direccion": "Calle 11 #24-253",
                                                                                "acudiente": "Carlos Santana Guerrero",
                                                                                "nfijo": "601 5423546",
                                                                                "celular": "302 575 45 66",
                                                                                "estado": "Cursando",
                                                                                "trainer": "Stiven",
                                                                                "ruta": "NodeJS",
                                                                                "inicio": "19-02-2024",
                                                                                "finalizacion": "14-04-2024",
                                                                                "EstadoPlataforma": "inactivo"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "salon": "Artemis",
                                                                        "estudiantes": [
                                                                            {
                                                                                "identificacion": 56571854534,
                                                                                "nombres": "Moly Alejandra",
                                                                                "apellidos": "Castillo Arellano",
                                                                                "direccion": "Urbanizacion La Esmeralda",
                                                                                "acudiente": "Cristina Arellano Casas",
                                                                                "nfijo": "601 8255272",
                                                                                "celular": "313 527 35 52",
                                                                                "estado": "Cursando",
                                                                                "trainer": "Andres",
                                                                                "ruta": "NetCore",
                                                                                "inicio": "19-02-2024",
                                                                                "finalizacion": "14-04-2025",
                                                                                "EstadoPlataforma": "inactivo"
                                                                            }
                                                                        ]
                                                                    }
                                                                
                                                                ]

                                                                console.log("");
                                                                x.estado = "Si aprobó";
                                                                aprobado.push(x);
                                                                console.log("");
                                                                console.log(x.nombres, x.apellidos);
                                                                console.log("Si aprobó");
                                                                console.log("");

                                                                var salon = parseInt(prompt("Elija el área de entrenamiento del alumno\n\n1.Sputnik\n2.Apolo\n3.Artemis\n\n"));

                                                                for (let a of academico) {
                                                                    let Cambiocursando = JSON.parse(JSON.stringify(x));
                                                                    Cambiocursando.estado = "Cursando";

                                                                    if (salon == 1 && a.salon == "Sputnik") {
                                                                        academico[0].estudiantes.push(Cambiocursando);
                                                                    }

                                                                    if (salon == 2 && a.salon == "Apolo") {
                                                                        academico[1].estudiantes.push(Cambiocursando);
                                                                    }

                                                                    if (salon == 3 && a.salon == "Artemis") {
                                                                        academico[2].estudiantes.push(Cambiocursando);
                                                                    }
                                                                };
                                                            
                                                            } else {

                                                                let desaprobado = [
                                                                    {
                                                                        "identificacion": 5354764778,
                                                                        "nombres": "Abraham David",
                                                                        "apellidos": "Porchella Arismendi",
                                                                        "direccion": "Calle 42 #7-454",
                                                                        "acudiente": "Cristian Porchella Torres",
                                                                        "nfijo": "601 5645576",
                                                                        "celular": "313 567 45 79",
                                                                        "estado": [
                                                                            59.0,
                                                                            "Desaprobado"
                                                                        ]
                                                                    }
                                                                ]

                                                                console.log("");
                                                                x.estado = "No aprobó";
                                                                desaprobado.push(x);
                                                                console.log("");
                                                                console.log(x.nombres, x.apellidos);
                                                                console.log("No aprobó");
                                                                bool = false;
                                                            }
                                                        } else {
                                                            console.log("La nota supera el límite ");
                                                            console.log("Ingrese las notas nuevamente");
                                                        }

                                                        for (let item of inscritos) {
                                                            if (resultado >= 60) {
                                                                item.estado = "Si aprobó";
                                                            } else {
                                                                item.estado = "No aprobó";
                                                            }
                                                        }

                                                    }
                                                }
                                            }
                                        }
                                    }
                                    
                                    
                                } else if (nota == 2) {
                                    console.clear();

                                    let academico = [

                                        {
                                            "salon": "Sputnik",
                                            "estudiantes": [
                                                {
                                                    "identificacion": 4024674357,
                                                    "nombres": "Cristina",
                                                    "apellidos": "Aguilera Moron",
                                                    "direccion": "Calle 9 #10-210",
                                                    "acudiente": "Ramon Aguilera Torrado",
                                                    "nfijo": "601 5787492",
                                                    "celular": "313 575 78 25",
                                                    "estado": "Cursando",
                                                    "trainer": "Pedro",
                                                    "ruta": "Java",
                                                    "inicio": "19-02-2024",
                                                    "finalizacion": "14-04-2025",
                                                    "EstadoPlataforma": "inactivo"
                                                }
                                            ]
                                        },
                                        {
                                            "salon": "Apolo",
                                            "estudiantes": [
                                                {
                                                    "identificacion": 6536787532,
                                                    "nombres": "Diego Leon",
                                                    "apellidos": "Santana Conedo",
                                                    "direccion": "Calle 11 #24-253",
                                                    "acudiente": "Carlos Santana Guerrero",
                                                    "nfijo": "601 5423546",
                                                    "celular": "302 575 45 66",
                                                    "estado": "Cursando",
                                                    "trainer": "Stiven",
                                                    "ruta": "NodeJS",
                                                    "inicio": "19-02-2024",
                                                    "finalizacion": "14-04-2024",
                                                    "EstadoPlataforma": "inactivo"
                                                }
                                            ]
                                        },
                                        {
                                            "salon": "Artemis",
                                            "estudiantes": [
                                                {
                                                    "identificacion": 56571854534,
                                                    "nombres": "Moly Alejandra",
                                                    "apellidos": "Castillo Arellano",
                                                    "direccion": "Urbanizacion La Esmeralda",
                                                    "acudiente": "Cristina Arellano Casas",
                                                    "nfijo": "601 8255272",
                                                    "celular": "313 527 35 52",
                                                    "estado": "Cursando",
                                                    "trainer": "Andres",
                                                    "ruta": "NetCore",
                                                    "inicio": "19-02-2024",
                                                    "finalizacion": "14-04-2025",
                                                    "EstadoPlataforma": "inactivo"
                                                }
                                            ]
                                        }
                                    ]

                                    let seleccion = prompt("¿En qué salón se encuentra el estudiante\n1.Sputnik\n2.Apolo\n3.Artemis\n\n")
                                    let contador = 1;
                                    for (let i of academico) {
                                        if (i.salon == seleccion) {
                                            var estudiantes = i.estudiantes
                                            break;
                                        }
                                    }

                                    for (let x of estudiantes) {
                                        console.log(contador, `${x.nombres} ${x.apellidos}\n`);
                                        contador++;
                                    }

                                    let estudiante = prompt("Ingrese el nombre del estudiante\n\n");
                                    console.log("");
                                    let apellido = prompt("Ingrese el apellido del estudiante\n\n");
                                    console.log("");

                                    for (let i of estudiantes) {
                                        if (i.nombres == estudiante) {
                                            if ("apellidos" in i && i.apellidos == apellido) {
                                                console.clear();
                                                console.log("------------------------------------------------");
                                                console.log(`  DATOS: ${i.nombres} ${i.apellidos}`);
                                                console.log("------------------------------------------------\n");
                                                console.log("");

                                                console.log(`  Identificación: ${i.identificacion}`);
                                                console.log(`  Dirección: ${i.direccion}`);
                                                console.log(`  Acudiente: ${i.acudiente}`);
                                                console.log(`  Número Fijo: ${i.nfijo}`);
                                                console.log(`  Celular: ${i.celular}`);
                                                console.log(`  Estado: ${i.estado}`);
                                                console.log(`  Trainer: ${i.trainer}`);
                                                console.log(`  Ruta:  ${i.ruta}`);
                                                console.log("");

                                                i.modulos = {};

                                                let notas = 0;

                                                for (let modulo = 1; modulo <= 5; modulo++) {
                                                    console.clear();
                                                    console.log("Ingrese las notas correspondientes del estudiante para el módulo", modulo);

                                                    let PorcentajeMayor = parseInt(prompt("Nota práctica 60% :\n"));
                                                        
                                                    let PorcentajeMenor = parseInt(prompt("Nota teórica 30% :\n"));
                                                        
                                                    let diez = parseInt(prompt("Nota de Trabajos 10% :\n"));

                                                    if (100 >= PorcentajeMayor && PorcentajeMenor >= 1) {
                                                        let resultado = ((PorcentajeMayor * 0.6) + (PorcentajeMenor * 0.30) + (diez * 0.1));
                                                        notas += resultado;

                                                        if (resultado >= 60) {
                                                            console.log("");
                                                            i.modulos[`Modulo ${modulo}`] = (`[${resultado}] [{"Modulo aprobado"}]`);
                                                            console.log("Modulo Aprobado\n");
                                                        } else {
                                                            console.log("");
                                                            i.modulos[`Modulo ${modulo}`] = (`[${resultado}] [{"Modulo desaprobado"}]`);
                                                            console.log("Modulo Desaprobado\n");
                                                        }
                                                    } else {
                                                        console.log("La nota supera el límite ");
                                                        console.log("Ingrese las notas nuevamente");
                                                    }   
                                                }

                                                let notamodulo = [
                                                    {
                                                        "identificacion": 4024674357,
                                                        "nombres": "Cristina",
                                                        "apellidos": "Aguilera Moron",
                                                        "direccion": "Calle 9 #10-210",
                                                        "acudiente": "Ramon Aguilera Torrado",
                                                        "nfijo": "601 5787492",
                                                        "celular": "313 575 78 25",
                                                        "estado": "Cursando",
                                                        "trainer": "Pedro",
                                                        "ruta": "Java",
                                                        "inicio": "19-02-2024",
                                                        "finalizacion": "14-04-2025",
                                                        "modulos": {
                                                            "Modulo 1": "[90.0] [Modulo aprobado]",
                                                            "Modulo 2": "[90.0] [Modulo aprobado]",
                                                            "Modulo 3": "[90.0] [Modulo aprobado]",
                                                            "Modulo 4": "[90.0] [Modulo aprobado]",
                                                            "Modulo 5": "[90.0] [Modulo aprobado]"
                                                        },
                                                        "promedio": 90.0
                                                    },
                                                    {
                                                        "identificacion": 6536787532,
                                                        "nombres": "Diego Leon",
                                                        "apellidos": "Santana Conedo",
                                                        "direccion": "Calle 11 #24-253",
                                                        "acudiente": "Carlos Santana Guerrero",
                                                        "nfijo": "601 5423546",
                                                        "celular": "302 575 45 66",
                                                        "estado": "Cursando",
                                                        "trainer": "Stiven",
                                                        "ruta": "NodeJS",
                                                        "inicio": "19-02-2024",
                                                        "finalizacion": "14-04-2024",
                                                        "modulos": {
                                                            "Modulo 1": "[24.0] [Modulo desaprobado]",
                                                            "Modulo 2": "[90.0] [Modulo aprobado]",
                                                            "Modulo 3": "[10.0] [Modulo desaprobado]",
                                                            "Modulo 4": "[10.0] [Modulo desaprobado]",
                                                            "Modulo 5": "[10.0] [Modulo desaprobado]"
                                                        },
                                                        "promedio": 28.8
                                                    }
                                                ]

                                                var notaP = [
                                                    {
                                                        "Riesgo": "Riesgo Alto",
                                                        "Notas": [
                                                            {
                                                                "Nombre": "Diego Leon",
                                                                "Apellido": "Santana Conedo",
                                                                "Promedio": 28.8
                                                            }
                                                        ]
                                                    }
                                                ]

                                                notamodulo.push(i);
                                                let promedio = notas / 5;
                                                i.promedio = promedio;

                                                if (promedio < 60) {
                                                    let moduloP = {
                                                        "Nombre": i.nombres,
                                                        "Apellido": i.apellidos,
                                                        "Promedio": i.promedio
                                                    };

                                                    let riesgo = {
                                                        "Riesgo": "Riesgo Alto",
                                                        "Notas": [moduloP]
                                                    };

                                                    notaP.push(riesgo);

                                                }
                                            }
                                        }
                                    }
                                }
                            } 
                        }
                    }
                }
            }
        }
    }
}
