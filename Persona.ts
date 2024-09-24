import { Direccion } from "./direccion";

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion

    constructor(nombre: string, edad: number, direccion: Direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    saludar(): string {
        return `Tú nombre es ${this.nombre} y tienes ${this.edad} años`
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad:number): void {
        this.edad = edad;
    }

}

