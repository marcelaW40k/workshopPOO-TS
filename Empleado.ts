import { Direccion } from "./direccion";
import { EstadoCivil } from "./estadoCivil";
import { Idepartamento } from "./IDepartamento";
import { Persona } from "./Persona";
import { Vehiculo } from "./vehiculo";

export class Empleado extends Persona {
    salario: number;
    departamento: Idepartamento;

    constructor(nombre: string, edad: number, direccion: Direccion, salario: number, departamento: Idepartamento,  vehiculo:Vehiculo[], estadoCivil: EstadoCivil) {
        super(nombre, edad, direccion, vehiculo, estadoCivil);
        this.salario = salario;
        this.departamento= departamento;
    }

    trabajar(): string {
        const horasTrabajadas = 8;
        return `La cantidad de horas trabajadas en el día son: ${horasTrabajadas} horas`
    }

    override saludar(): string {
        const detalleVehiculo = this.vehiculo.map((vehiculo) => `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.anio}`).join(", ")
        return `Hola ${this.nombre} tu edad es ${this.getEdad()} y el salario es de: ${this.salario}, vives en la ciudad de: ${this.direccion.ciudad}; caracteristicas de tú vehiculo: ${detalleVehiculo} y estado civil ${this.estadoCivil}`
    }

}

