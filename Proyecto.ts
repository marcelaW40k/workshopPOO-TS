import { Empleado } from "./Empleado"

export class Proyecto {
    nombre: string
    descripcion: string
    cantidadIntegrantes: number
    integrantes: Empleado[]

    constructor(nombre: string, descripcion: string, cantidadIntegrantes: number, integrantes: Empleado[]){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidadIntegrantes = cantidadIntegrantes;
        this.integrantes = integrantes;
    }
    
    detalleProyecto(): void {
        console.log(`Nombre del proyecto: ${this.nombre} \nDescripción: ${this.descripcion} \nCantidad de integrantes: ${this.cantidadIntegrantes} \nIntegrantes: ${this.integrantes.map((empleado) => empleado.nombre).join(", ")}`);
    }
}

