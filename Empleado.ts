import { Direccion } from "./direccion";
import { Persona } from "./Persona";

export class Empleado extends Persona {
    salario: number;

    constructor(nombre: string, edad: number, direccion: Direccion, salario:number) {
        super(nombre, edad, direccion);
        this.salario = salario;
    }

    trabajar(): string {
        const horasTrabajadas = 8;
        return `La cantidad de horas trabajadas en el día son: ${horasTrabajadas} horas`
    }

    override saludar(): string {
        return `Hola ${this.nombre} tu edad es ${this.getEdad()} y el salario es de: ${this.salario}`
    }

}

