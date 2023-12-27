"use strict";
// Definir el tipo de variable
let vari;
let vari1 = "Miguel Paredes";
console.log(vari1);
let vari2 = 20;
console.log(vari2);
let vari3 = true;
console.log(vari3);
let vari4 = null;
console.log(vari4);
let vari5;
console.log(vari5);
// Variable sin definir, no importa que valor se le de
let myStringVar;
myStringVar = "hola";
myStringVar = 1;
// Variable definica como string, solo recibe strings
let myStringVar1 = "Miguel";
myStringVar1 = "Paredes";
myStringVar1 = "Paredes";
// Por defecto las funciones son void
function myName(name) {
    return `Hola ${name}`;
}
const myName2 = (name) => {
    return `Hola ${name}`;
};
let myName3;
myName3 = (name) => {
    console.log(`Hola ${name}`);
};
const isName = myName(myStringVar1);
const isName2 = myName2(myStringVar1);
console.log(isName);
console.log(isName2);
myName3(myStringVar1);
