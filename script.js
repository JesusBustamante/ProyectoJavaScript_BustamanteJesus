const academico = [
    
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

console.log("-----------------------------------------------------------")
console.log("                        CAMPUSLANDS                                   ")
console.log("-----------------------------------------------------------")
console.log("")
console.log("Elige tu cargo para iniciar sesión");
console.log("1. CAMPER");
console.log("2. TRAINER");
console.log("3. COORDINADOR");

let sign = prompt("Elige una opción");

if (sign.toLowerCase() == "1") {

    let usuario = prompt("Ingrese su nombre de usuario");
           
    let password = prompt("Ingrese su contraseña (ID)");


    for (let i of academico) {
        for (let x of i.estudiantes) {
            if (x.nombres === usuario) {
                if ("identificacion" in x && x.identificacion === password) {

                    console.log($,{x,nombres}, $,{x,apellidos});

                }
            }
        }
    };
    console.log(academico)
};

if (sign.toLowerCase() == "2") {

};

if (sign.toLowerCase() == "3") {
    
};