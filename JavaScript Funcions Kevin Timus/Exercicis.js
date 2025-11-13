//Ex1
nomcog = "Kevin Timus"
function nom_cog (nom) {
    console.log(nomcog)
}
nom_cog(nomcog);

//Ex2
valor1 = "Kevin Timus"
function valor (nom) {
    console.log(typeof nom);
}
valor(valor1);

//Ex3
data1 = "10/11/2025"
function data (nom) {
    console.log(nom);
}
data(data1);

//Ex4
//function fora (nom) {
//    let valor2 = 2;
//}
//console.log(valor2)

//Ex5
string2 = "Kevin Timus"
function nom (nom) {
    const coincidencias = nom.match(/[aeiou]/gi);
    return coincidencias;
    }
resultat = nom(string2);
console.log(resultat)

//Ex6
var valor2 = 2;
var valor3 = 4;
var valor4 = 0;
function suma (num1,num2,num3) {
    const suma = num1 + num2 + num3;
    return suma;
}
resultat = suma(valor2,valor3,valor4);
console.log(resultat)

//Ex7
function funciones () {
    data(data1);
    const resultatsuma = suma(valor2,valor3,valor4);
    return resultatsuma;
}

const resultat1 = funciones(resultat);
console.log(resultat1);

//Ex8
var num1 = 3;
var num2 = 28
function enters (num1,num2) {
    var suma = num1 + num2;
    if (num1 === 30 || num2 === 30)
        return true;
     if (suma > 30)
        return true;

    return false;
}
resultat = enters(num1,num2);
console.log(resultat)

//Ex9
const enters1 = (num1, num2) => {
    var suma = num1 + num2;
    if (num1 === 30 || num2 === 30)
        return true;
    if (suma > 30)
        return true;
    return false;
};

resultat2 = enters1(num1, num2);
console.log(resultat2);

//Ex10
var string3 = "hola";
var num3 = 28
const certFals = (num1, num2) => {
    if (num1 === num2)
        return true;
    return false;
}

resultat2 = certFals(string3, num3);
console.log(resultat2);

//Ex11
var num4 = 4;
const valor5 = (num1) => {
    var total = 4*4;
    return total;
}

resultat2 = valor5(num4);
console.log(resultat2);

//Ex12
var string = "HOla";
const minus = (hola) => {
    var minusc = hola.toLowerCase();
    return minusc;
}

resultat2 = minus(string);
console.log(resultat2);

//Ex13
var valor6 = "Dime";
var valor7 = null
const nulls = (num1, num2) => {
    if (num2 !== null)
        return num2;
    if (num1 !== null)
        return num1;
}

resultat2 = nulls(valor6, valor7);
console.log(resultat2);

//Ex14
var frase = "Hola com estàs";
var paraula = "com";
const posicio = (frase, paraula) => {
    let numero = frase.indexOf(paraula);
    let distancia = frase.length - numero
    return distancia;
}

const dividir3 = (frase, paraula) => {
    let num = posicio(frase, paraula);
    let inici = frase.length - num + paraula.length;
    let resultat5 = frase.substring(inici);
    return resultat5.trim();
}


resultat3 = dividir3(frase, paraula);
console.log(resultat3);

//Ex15
const x = (x) => x + x + x;
console.log(x(5))
console.log(x("Hola"))
