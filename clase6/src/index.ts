type Perro = {
    nombrePerro : string
    edadPerro : number
    ladra : boolean
}

type Gato = {
    nombreGato : string
    edadGato : number
    trepa : boolean
}

// <T> es un generico
type SeleccionAnimal <T extends 'perro' | 'gato'> = T extends 'perro' ? Perro : Gato;


function seleccionAnimal<T extends 'perro' | 'gato'>(animal : SeleccionAnimal<T>){
    console.log(animal);
}

seleccionAnimal<'perro'>({
    edadPerro : 10,
    nombrePerro : 'Estrella',
    ladra : true
})