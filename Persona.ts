import { Direccion } from "./direccion";
import { Vehiculo } from "./vehiculo";

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion
    vehiculo: Vehiculo[]

    constructor(nombre: string, edad: number, direccion: Direccion, vehiculo:Vehiculo[]) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.vehiculo = vehiculo;
    }

    saludar(): string {
        const detalleVehiculo = this.vehiculo.map((vehiculo) => `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.anio}`).join(", ");
        return `Tú nombre es ${this.nombre} y tienes ${this.edad} años,  vives en la ciudad de: ${this.direccion.ciudad}; caracteristicas de tú vehiculo: ${detalleVehiculo}`
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad:number): void {
        this.edad = edad;
    }

}

