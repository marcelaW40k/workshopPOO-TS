import { Direccion } from "./direccion";
import { EstadoCivil } from "./estadoCivil";
import { Vehiculo } from "./vehiculo";

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion;
    vehiculo: Vehiculo[];
    estadoCivil: EstadoCivil

    constructor(nombre: string, edad: number, direccion: Direccion, vehiculo:Vehiculo[], estadoCivil: EstadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.vehiculo = vehiculo;
        this.estadoCivil = estadoCivil;
    }

    saludar(): string {
        const detalleVehiculo = this.vehiculo.map((vehiculo) => `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.anio}`).join(", ");
        return `Tú nombre es ${this.nombre} y tienes ${this.edad} años,  vives en la ciudad de: ${this.direccion.ciudad}; caracteristicas de tú vehiculo: ${detalleVehiculo} y estado civil ${this.estadoCivil}`
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad:number): void {
        this.edad = edad;
    }

}

