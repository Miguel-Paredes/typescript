// Array
const names : string[] = []
const names2 : Array<String> = []
names.push('Miguel')

// Objects
const myObjects : Object = {
    name : 'Miguel'
}


// Record<string, any> string es la key y any es el valor
// Record<string, number>
// string permite colocar cualquier nombre
// number solo permite ingresar numeros
const myObjects2 : Record<string, any> = {}
myObjects2.name = 'Miguel'
myObjects2.age = 20

// Tuplas
const tuplas : Record<string, string | number> = {}
tuplas.name = 'Miguel'
tuplas.age = 20

// Promise
const promise = async() :Promise<string> =>{
    return await new Promise((res,_rej)=>{
        setTimeout(()=>{
            res('Hola mundo')
        },2000)
    })
}
const hola = promise().then((r)=>{console.log(r);
})


// Compuestos
const myNewObjetc : {
    name : string,
    age : number
} = {
    age : 20,
    name : 'Miguel'
}