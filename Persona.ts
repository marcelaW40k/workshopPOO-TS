export class Persona {
    nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
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

