/*
(function(){

    function nombrar(nombre){
        return (nombre);
    }

    function saludar(nombre){
        console.log(nombre, " aqui un saludo");
    }
     function paleta(nombre){
   
        console.log(nombre, "es una paleta");
       
    }
    nombrar(saludar('papaleta'));
nombrar(paleta('hermosa'));
paleta(nombrar('Mi niña rebeca'));
})();

// crea un grupo de mensajes  de consola minimizado por defecto

console.groupCollapsed("bucleFor");
for(var i=0; i<100; i++){
console.info("Iteración numero %i", i)
}
console.groupEnd();
*/

//MUESTRA LOS DATOS DENTRO DE UNA TABLA
/*
var lenguajes = [
{ nombre: "JavaScript", extension: ".js" },
{ nombre: "TypeScript", extension: ".ts" },
{ nombre: "CoffeeScript", extension: ".coffee" }
];

console.table(lenguajes);
console.table(lenguajes, "extension");

*/
/*
.time()
Inicia un contador en ms.
• .timeEnd()
Para el contador y devuelve el resultado.
 
console.time("Medición de miArray");
var miArray = new Array(1000000);
for (var i = miArray.length - 1; i >= 0; i--) {
miArray[i] = new Object();
};
console.timeEnd("Medición de miArray");

*/
/*

var empezoComo3 = 3;
era3();
empezoComo3 = 35;
era3();
empezoComo3 = empezoComo3 + 30;
era3();
empezoComo3 += 4;
era3();
empezoComo3++;
era3();

function era3 () {
console.log("empezoComo3 debería ser 3, ahora su valor es " + empezoComo3),
alert("abre we"),confirm("a no?")
}
*/
/*
//USO DE MULTIPLES FUNCIONES
function parabrisas(){
    console.log(' soy otra función');
}
var respuesta = confirm("presiona un botón!");
if (respuesta === true) {
console.log("Has aceptado!"),alert('vuelve a aceptar we'),confirm('a no  we'),parabrisas();
} else {
console.log("Has cancelado");
}
 */

/*
var administrador = 'Yo mismo';
var esAdministrador = (administrador !== 'Yo mismo');
console.log(esAdministrador); // true


var esMiembro = false;
console.info("El pago son" + (esMiembro ? "20.00€" : "50.00€"));


var i = 0;
do {
i++;
console.log(i);
} while (i > 10)

*/

/*
//uso bueno de for
for (var i = 0; i < 10; i++) {
// Salta el 5 y sigue...
if (i === 5) {
continue;
}
console.log("El valor de i es "+i);
}




var control = 1;
while (control >= 10) {
console.log(control);
control++;
};
console.log(control)


for (var i = 0, x = 1, z = 2, tope = 10; i <= tope; x *= z, i++ ) {
console.log("i vale "+i+", x vale "+x+", z vale "+z);
}
*/
/*
var numero1 = 1.7976931348623157e+308;
var numero2 = 1.7976931348623157e+309;
var numero3 = 310;
function verificarValorMaximo(num){
if (num <= Number.MAX_VALUE) {
console.log("El número no es infinito");
console.log(num);
} else {
console.log("El número es infinito");
console.log(num);
}
}
verificarValorMaximo(numero1);
verificarValorMaximo(numero2);
verificarValorMaximo(numero3);

*/
/*
var numero = 2;
if(isNaN(numero)){
    console.log('yey');
}else{
    console.log('no yey');
}
*/
/*
// pone las "," y separa los valores

var numero = 3500000000000;
// En Local
console.log(numero.toLocaleString());
console.log(typeof(numero))

*/
/*
.random()
Devuelve un número pseudo-aleatorio entre 0 y 1.
– Número aleatorio entre 0 (incluido) y 1 (excluido).
*/
/*
//Número aleatorio entre min (incluido) y max (excluido).

//Math.random() * (max - min) + min;
console.log(Math.random() * (11 - 0) + 0);

//Número entero aleatorio entre min (incluido) y max (excluido).

console.log(Math.floor(Math.random() * (11 - 0)) + 0);

var diaDespues = new Date(3600*24*1000);
console.log(diaDespues);

var año = 2017, mes = 9, dia = 23;
var newYear = new Date(Date.UTC(año,mes, dia));
console.log(newYear);

*/
/*
var ahora = new Date();
console.log(ahora);
console.log("Con UTC: ");
console.log("==== FECHA ====");
console.log("El año: " + ahora.getUTCFullYear());
//
console.log("El mes: " + ahora.getUTCMonth());
//
console.log("El día de la semana: " + ahora.getUTCDay()); //
console.log("El día del mes: " + ahora.getUTCDate());
//
console.log("==== HORA ====");
console.log("Horas: " + ahora.getUTCHours());
console.log("Minutos: " + ahora.getUTCMinutes());
console.log("Segundos: " + ahora.getUTCSeconds());
console.log("milisegundos: " + ahora.getUTCMilliseconds());


var ahora = new Date();
console.log("La fecha es " + ahora);
console.log("==== FECHA ====");
console.log("El año: " + ahora.getFullYear());
// 4 dígitos
console.log("El mes: " + ahora.getMonth());
// 0 - 11
console.log("El día de la semana: " + ahora.getDay()); // 0 - 6 (D - S)
console.log("El día del mes: " + ahora.getDate());
// 1-31
console.log("==== HORA ====");
console.log("Horas: " + ahora.getHours());
console.log("Minutos: " + ahora.getMinutes());
console.log("Segundos: " + ahora.getSeconds());
console.log("Milisegundos desde 1/1/1970: "+ ahora.getTime());
console.log("milisegundos: " + ahora.getMilliseconds());
console.log("==== OTROS ====");
console.log("Diferencia horaria respecto a UTC: " + ahora.getTimezoneOffset());

var newYear = new Date();
newYear.setDate(56);
// Al día 56 de Enero
console.info("La fecha es " + newYear);
newYear.setUTCHours(36); // Pasamos a la hora 36 del día
console.info("La fecha es " + newYear);
newYear.setMonth(-6);
// Retrocedemos 6 meses
console.info("La fecha es " + newYear);
*/

//FECHAS Y HORAS
/*
var ahora = new Date();
console.log(ahora.toString());
// Fecha y Hora
console.log(ahora.toDateString()); // Solo Fecha
console.log(ahora.toTimeString()); // Solo HorA



var ahora = new Date();
console.log(ahora.toISOString());
console.log(ahora.toUTCString());

*/

/*
//recorrida de tiempo, cuanto tiempo paso después de algo
var inicio = new Date();
// Código a testear
var fin = new Date();
var transcurso = fin.getTime() - inicio.getTime();
console.info("Pasaron "+transcurso+"ms");
*/

/*
//CADENAS CANTIDAD DE CARACTERES
var cadena = "JavaScript, ¡Inspírate!";
console.log("JavaScript, ¡Inspírate! tiene " + cadena.length + " caracteres\.");
console.log("Una cadena vacía tiene " + ''.length + " caracteres.");

*/

/*
//CONVIERTE UNA CADENA DE TEXTO POR UN SEPARADOR EN UN ARREGLO
var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
var meses = cadenaMeses.split(",");
console.log("Los meses son un Array?", Array.isArray(meses))
*/
/*
// .substr() Devuelve los caracteres de una cadena, comenzando en la localización especificada, y en el número de caracteres especificado.
var cadena = "JavaScript, ¡Inspírate!";
console.log("cadena.substr(12, 12):", cadena.substr(12, 12));
console.log("cadena.substr(0,10):", cadena.substr(0, 10));

//.substring() Devuelve un subconjunto.
var cadena = "JavaScript, ¡Inspírate!";
console.log("(0,5): "+ cadena.substring(0,10));


*/
/*
//ARREGLOS
var arreglo = [1, "plátano", "piscina", "manzana", true];
console.log("arreglo[1]:", arreglo[1]);


var arreglo = [1, "plátano", "piscina", "manzana", true];
arreglo[0] = "fresa";
arreglo[4] = "pera";
arreglo[2] = "limón";
console.log(arreglo)

*/



/*
var arreglo = [1,2,3]
// Estos son true
console.log(Array.isArray([3]));
console.log(Array.isArray(arreglo));
// Estos son false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);

var amigos = ['Luis', 'Carlos', 'Marco', 'Eduardo'];
console.log(amigos.toString());

var array = ['dato1', 2, 'masDatos'];
var datosJuntos = array.join();
// 'dato1,2,masDatos'
var datosJuntos2 = array.join('');
// 'dato12masDatos'
var datosJuntos3 = array.join('+'); // 'dato1 + 2 + masDatos'

console.log(datosJuntos3)

var numero = 1337.89;
var fecha = new Date();
var miArray = [numero, fecha, 'más datos'];
var arrayConvertida = miArray.toLocaleString();
console.log(arrayConvertida);
console.log(typeof(arrayConvertida));

var arreglo = ['a', 2, true];
var arreglo2 = [1, 2, 4];
var nuevaArray = arreglo.concat(arreglo2);
console.log(nuevaArray);

var shao = "david eduardo";
var shao2 = "david garcia";

var array = [7, 1, shao2, shao];
console.log(array.lastIndexOf("david garcia")); // 2
array.lastIndexOf(2); // -1

var arreglo = [1, "plátano", "manzana"];
console.log("Antes:", arreglo.length);
arreglo.push("nuevo");
console.log("Después:", arreglo.length);
console.log("arreglo[3]:", arreglo[3]);


var miArray = [1, 2];
miArray.unshift(true, "otros datos...");
console.log("Longitud actual:", miArray.length);
console.log(miArray);

*/
/*
//borra posiciones queridas splice se queda con aquellas que borro
var frutas = ['plátano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
var citricos = frutas.splice(1, 2);
console.info("citricos:", citricos);
console.info("frutas.length:", frutas.length);
console.log("frutas: ", frutas)

*/
/*

var arreglo = ["plátano", "fresa", "lima", "manzana"];
var resultado = arreglo.map(function (elemento, elemento2, elemento3){elemento2 = " aqui gano yo";
    return elemento + " modificado!" + elemento2;
});
console.log(resultado);

var arreglo1 = ["plátano", "fresa", "lima", "manzana"];
var arreglo2 = ["entrante", "primero", "segundo", "postre"];
var juntandoArreglos = [arreglo1, arreglo2];
console.log(juntandoArreglos[0][0]); // plátano
console.log(juntandoArreglos[1][3]); // postre

console.table(juntandoArreglos);

*/
/*
//ONJETOS
var miObjeto = {
metodo: function() {
console.log(miObjeto.propiedad1)
},
propiedad1: "Datos"
};
// Recuperando el valor de propiedad1
console.log("miObjeto.propiedad1:", miObjeto.propiedad1);
// Ejecutando el método
miObjeto.metodo()


//objeto 2

var miObjeto = {
propiedad1: "Datos",
borrame: "Quiero ser borrado"
};
console.log(miObjeto.borrame);
delete miObjeto.borrame;
console.log(miObjeto.borrame);
*/
/*

var miObjeto = {propiedad: "Propiedad original..."}
Object.defineProperties(miObjeto, {
"propiedad1": {
value: true,
writable: true
},
"propiedad2": {
value: "Cadena de texto",
writable: false
}
});
console.info(miObjeto);
miObjeto.propiedad = "Propiedad original Modificada";
console.info(miObjeto.propiedad);
miObjeto.propiedad2 = "Cadena de texto... ¿modificada?";
console.info(miObjeto.propiedad2);

*/
/*
//Devuelve los detalles de las propiedades y métodos del objeto. En caso de no existir retornará undefined.
var miObjeto = {
metodo: function() {
console.log(miObjeto.propiedad1)
},
propiedad1: "Datos"
};
console.info(Object.getOwnPropertyDescriptor(miObjeto, 'propiedad1'));
// {value: "Datos", writable: true, enumerable: true, configurable: true}
console.info(Object.getOwnPropertyDescriptor(miObjeto, 'metodo'));
*/

/*
//Devuelve los detalles de las propiedades y métodos del objeto. En caso de no existir retornará undefined.
var miObjeto = {
metodo: function() {
console.log(miObjeto.propiedad1)
},
propiedad1: "Datos"
};
console.info(Object.getOwnPropertyDescriptor(miObjeto, 'propiedad1'));
// {value: "Datos", writable: true, enumerable: true, configurable: true}
console.info(Object.getOwnPropertyDescriptor(miObjeto, 'metodo'));
*/

/*
//Devuelve un array con todos los nombres de las propiedades y métodos del objeto.
var miObjeto = {
metodo: function() {
console.log(miObjeto.propiedad1)
},
propiedad1: "Datos"
};
console.log(Object.getOwnPropertyNames(miObjeto));

*/

/*
//Determina si un objeto es extensible, es decir que se puedan agregar nuevas propie-dades al mismo.
var miObjeto = {
metodo: function() {
console.log(miObjeto.propiedad1)
},
propiedad1: "Datos"
};
console.log("¿Se puede extender?", Object.isExtensible(miObjeto));
var sellado = Object.seal(miObjeto);
console.log("¿Se puede extender?", Object.isExtensible(sellado));
var congelado = Object.freeze(miObjeto);
console.log("¿Se puede extender?", Object.isExtensible(congelado));
Object.preventExtensions(miObjeto);
console.log("¿Se puede extender?", Object.isExtensible(miObjeto));

*/
/*
//Devuelve true o false, si la propiedad especificada es enumerable, y con ello sabemos
//si será incluida en la iteración de un bucle For... In.
var miObjeto = {
metodo: function() {
console.log(miObjeto.propiedad1)
},
propiedad1: "Datos"
};
console.log("¿Es enumerable \"propiedad1\"?", miObjeto.propertyIsEnumerable('propiedad1'));
console.log("¿Es enumerable \"metodo\"?", miObjeto.propertyIsEnumerable('propiedad2'));

*/
/*
//EJEMPLO DE FOR CON IF DENTRO
var c = 0;
var t = 0;
for (var i = 0; i < 10; i++){

    c++;
    if (i%2==0){
        t++;
    }
}
console.log(c);
console.log(t);
console.log(0%2);
console.log(1%2);
console.log(2%2);
console.log(3%2);
console.log(4%2);
console.log(5%2);
console.log(6%2);
console.log(7%2);
console.log(8%2);
console.log(9%2);

*/

/*
//Retorna como string (configuración regional) todas las propiedades.
var fecha = new Date();
var miObjeto = {
metodo: function() {
console.log(miObjeto.propiedad1)
},
propiedad1: "Datos",
fecha: fecha
};
miObjeto.toLocaleString();
console.log("La fecha es ", miObjeto.metodo);
*/
/*
// Itera sobre todas las propiedades de un objeto, en un orden arbitrario.
var objeto1 = {
propiedad1: "hola",
propiedad2: 2,
propiedad3: false,
propiedad4: [true,2,5, "..."],
propiedad5: {
dato: "más datos..."
},
metodo: function(){
console.log("hola");
}
}
function mostrar_propiedades(objeto, nombreObjeto) {
var resultado = "";
for (var i in objeto) {
resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
}
console.log(resultado);
}

mostrar_propiedades(objeto1, "objeto1");


var miObjeto = {
nombre: "objeto",
"año": 2015,
"estado del sistema": "correcto"
};
console.log(miObjeto["año"]);
miObjeto["estado del sistema"] = "fuera de servicio";
console.log(miObjeto["estado del sistema"]);


*/

/*
function sumar (p1, p2){
console.log("dato:", p1);
console.log("dato:", p2);
}
// Pasando Argumentos
sumar(2);
*/
/*

//refactorizando
contactos = [];
function crearContacto (datos){
contactos.push({
"nombre": console.log(datos.nombre),
"@": "@" + console.log(datos.twitter)
})
}
// Puedo pasar los atributos en el orden que quiera
crearContacto({twitter: "inventado", nombre: "Pepe", fotoUrl: "http...",fotoU2: "http...",foto3: "http..."});

*/
/*
function pruebaArgumentos () {
console.log(arguments);
console.info(arguments[0]);
console.info(arguments[1]);
}
pruebaArgumentos (1, "vale", true);


function conversorArgumentos(arguments) {
var argumentos = Array.prototype.slice.call(arguments);
console.log(argumentos.sort());
}

*/
/*
//CALLBACKAS
function primerPaso(callback) {
console.log("Este es el primer paso");
callback();
};
function segundoPaso() {
console.log("Este es el segundo paso");
};
primerPaso(segundoPaso);

*/
/*

var quieroCallback = function(p1, callback){
// Consideramos el callback como algo opcional.
    if (callback){
// Validamos si es una función o no.
        if (typeof callback === 'function'){
            
           // De ser una función lo ejecutamos y
          //  y pasamos como argumento "p1"
            
        callback(p1 + " ES UNA FUNCION");
 } else {
           
           // Si no se trata de una función...
          //  simplemente mostramos ambos datos.
          
            console.log(p1, callback);
        }
    }
}

quieroCallback('a', 'b');

quieroCallback('a', function(val){
    console.log(val);
         });

*/

/*
//ASINCRONIA
function traigoDatos (callback){
// Asincrona
setTimeout (function(){
console.log ("Esto son mis datos");
callback();
},2000)
}
function pintoDatos(){
// No asincrona
console.log("ya tengo los datos");
}
traigoDatos(pintoDatos);



var listaDivs = document.querySelectorAll('div');
// Conversión
var listaDivsArray = Array.prototype.slice.call(listaDivs);

console.log(listaDivsArray);
*/

/*


 //FUNCION ASINCRONA NORMAL
function asyncSqrt(value, callback) {
   console.log('START execution with value =', value);
    setTimeout(function() {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}
 
for (var n = 0; n < 10; n++) {
    asyncSqrt(n, function(value, result) {
        console.log('END execution with value =', value, 'and result =', result);
    });
}
console.log('COMPLETED ?');

*/
/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <script>
 /*
function asyncSqrt(value, callback) {
   console.log('START execution with value =', value);
    setTimeout(function() {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}
 
for (var n = 0; n < 10; n++) {
    asyncSqrt(n, function(value, result) {
        console.log('END execution with value =', value, 'and result =', result);
    });
}
console.log('COMPLETED ?');
/*
    </script>
  
</body>
</html>

//WORKERS

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
        <button onclick="iniciarWebWorker()">iniciarWebWorker</button>
         <button onclick="pararWebWorker()">pararWebWorker</button>
    
    <p>Contador de hilo: <output id="resultado"></output></p>
    <script>
    var ww;
    function iniciarWebWorker(){

        if(typeof(ww)== "undefined")
        {
            ww = new Worker("js/main.js");
        }
                ww.onmessage = function(event){
                    document.getElementById("resultado").innerHTML = event.data;
                };             
    }

    function pararWebWorker(){
        ww.terminate();
    }

    </script>

    // CON ESTE EN EL MAIN
    var i = 0;

function contador(){
    i= i + 1;
        postMessage(i);
            setTimeout("contador()", 700);
    
}   
contador();
//FIN
  
</body>
</html>

*/

