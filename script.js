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
                            if (pregunta !== "jaja") {
                                break
                            }

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
    }
}
