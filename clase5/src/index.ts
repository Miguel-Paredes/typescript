// npm install --save @types/uuid
// npm install uuid
import {v4 as uuid} from 'uuid'

abstract class User {
    protected id: string = uuid()
    protected name !: string;
    protected rol !: 'teacher' | 'student';

    abstract getDataUser():void 
}

class Teacher extends User{
    private course!: string
    constructor(name: string, course: string){
        super();
        this.rol = 'teacher'
        this.name = name
        this.course = course
    }

    // Solo maneja como lectura y no se puede cambiar
    private readonly isDirector : boolean = true

    public getDataUser(): void {
        console.log({
            ...this
        });
        
    }
}
class Student extends User{
    constructor(name : string){
        super();
        this.rol = 'student'
        this.name = name;
    }

    private courses: Array<string> = []

    public addCourse (courses : string){
        this.courses.push(courses)
    }

    public getDataUser(): void {
        console.log({
            ...this
        });
    }
}

const newTeacher = new Teacher('Cristian','Robacunas')
// newTeacher.getDataUser()

const NewStudent = new Student('De 14')
NewStudent.getDataUser()
NewStudent.addCourse('Robada de cuna')
NewStudent.getDataUser()