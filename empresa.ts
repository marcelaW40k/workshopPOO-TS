import { Empleado } from "./Empleado";

export class Empresa {
    
    empleados: Empleado[] = []

    //Agregar empleados 
    agregarEmpleados( empleados: Empleado){
        this.empleados.push(empleados)
    }

    //eliminar empleado por nombre
    eliminarEmpleado(nombre: string){
        this.empleados = this.empleados.filter((empleado) => empleado.nombre !== nombre)
        console.log(this.empleados)
    }

    //calcular total de todos los salarios de los empleados
    calcularSalarios(): void {
        const salarioTotal = this.empleados.reduce((acum, empleado) => acum + empleado.salario, 0)
        console.log("El salario total de todos los empleados en la empresa es: ", salarioTotal)
    }
}