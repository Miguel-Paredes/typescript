"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Array
const names = [];
const names2 = [];
names.push('Miguel');
// Objects
const myObjects = {
    name: 'Miguel'
};
// Record<string, any> string es la key y any es el valor
// Record<string, number>
// string permite colocar cualquier nombre
// number solo permite ingresar numeros
const myObjects2 = {};
myObjects2.name = 'Miguel';
myObjects2.age = 20;
// Tuplas
const tuplas = {};
tuplas.name = 'Miguel';
tuplas.age = 20;
// Promise
const promise = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((res, _rej) => {
        setTimeout(() => {
            res('Hola mundo');
        }, 2000);
    });
});
const hola = promise().then((r) => {
    console.log(r);
});
// Compuestos
const myNewObjetc = {
    age: 20,
    name: 'Miguel'
};
