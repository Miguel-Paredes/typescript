interface MyGenericInterface<T,U>{
    MyGenericType: T | U
}
const example : MyGenericInterface<string,number>={
    MyGenericType: "Hola"
}
interface MyGenericInterface2<T,U>{
    MyGenericType: T | U
}
const example2 : MyGenericInterface2<string,number | boolean>={
    MyGenericType: true
}

function getValue<T>(value : T){
    console.log(value);
}
getValue<number>(28)
const getValue2 = <T>(value : T) => {
    console.log(value);
}

type MyGenericType<T,U> = {
    MyGenericType: T | U
}

class GenericClass <T>{
    protected value !:T
    constructor(value:{new (): T}){
        this.value = new value
    }
}

class Miguel{
    public name : string = 'Miguel';
    public age : number = 20;
}
class Angel{
    public nameAngel : string = 'Angel'
    public ageAngel : number = 20
}

class Greet extends GenericClass<Miguel>{
    constructor(){
        super(Miguel)
    }
    public greet():void{
        console.log(`Hola ${this.value.name}`);
        
    }
}

new Greet().greet()