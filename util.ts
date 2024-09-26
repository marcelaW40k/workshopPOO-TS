import { Direccion } from "./direccion";
import { Persona } from "./Persona";

const jsonPersonaStr = {
    nombre: "Marcela",
    edad: 3,
    direccion:{
        calle: "Calle 123",
        ciudad: "Bogatá",
        pais: "Colombia"
    }
}

// Solucion #1
const jsonApersona = (json: any): void => {
    const persona1 = new Persona(json.nombre, json.edad, json.direccion);
    console.log(persona1.saludar())
}
const imprimirFuncion = (json: any): void  => {
    jsonApersona(json)
}
imprimirFuncion(jsonPersonaStr)

// Solucion #2
// const jsonApersona = (json:{nombre: string, edad: number, direccion: Direccion}): void => {
//     const persona1 = new Persona(json.nombre, json.edad, json.direccion);
//     console.log(persona1.saludar())
// }

// const imprimirFuncion = (json: any): void  => {
//     jsonApersona(json)
// }
// imprimirFuncion(jsonPersonaStr)