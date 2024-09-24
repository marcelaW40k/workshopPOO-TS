import { Persona } from "./Persona";

export class Empleado extends Persona {
    salario: number;

    constructor(nombre: string, edad: number, salario:number) {
        super(nombre, edad);
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
const empleado = new Empleado("Marcela Patiño", 20,3000 );
//console.log(empleado.trabajar());
console.log(empleado.saludar());
