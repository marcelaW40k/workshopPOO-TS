export class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): string {
        return `Tú nombre es ${this.nombre} y tienes ${this.edad} años`
    }
}

