// npm install reflect-metadata
// Descomentar en tsconfig experimentalDecorators y "emitDecoratorMetadata": true,

function setAge(age : number){
    return function <T extends {new (...args:any[]) : {}}>(constructor : T){
        return class extends constructor{
            age !: number
            constructor (...arhs : any[]){
                super()
                this.age = age
            }
        }
    }
}

@setAge(20)

class Person {
    age !: number
}

const getuser = new Person()
console.log(getuser.age);

function ValidateAge(age : number){
    return function (target : any, propName : string){
        let assignedAge = target[propName];
        Object.defineProperty(target,propName,{
            set : (newAge : number) => {
                if(newAge < age){
                    throw new Error("Debe ser mayor de 18")
                    
                }

                assignedAge = newAge;
            },
            get : () => assignedAge
        });
    };
}


class Person2 {
    @ValidateAge(18)
    age : number = 20
}

const newPerson = new Person2();
console.log(newPerson.age);
newPerson.age = 17;
console.log(newPerson.age);

