import { Empleado } from "./Empleado";
import { Idepartamento } from "./IDepartamento"

export class Departamento {
    departamento: Idepartamento
    empleados : Empleado[] = []

    constructor(departamento: Idepartamento) {
        this.departamento= departamento;

    }

    //agregar empleados 
    agregarEmpleados(empleado:Empleado){
        this.empleados.push(empleado)
    }

    //eliminar empleados por nombre de departamento
    eliminarEmpleado(nombre: string) {
        const cantidadEmpleado =  this.empleados.length;
        this.empleados = this.empleados.filter((empleado) => empleado.departamento.nombre !== nombre);
        if (cantidadEmpleado !== this.empleados.length) {
            console.log("Se eliminaron los empleados del departamento ", nombre)
            console.log("Total empleados ", this.empleados)
        } else {
            console.log("No se encontrarón empleados en el departamento de: ", nombre)
        }
    }
    //Listar empleados
    listarEmpleados(): Empleado[]{
        return this.empleados
    }

     agregarEmpleadosAdepartamento(empleados:Empleado[]){
        this.empleados= empleados.filter((empleado => empleado.departamento.nombre === this.departamento.nombre))
      }

     imprimirEmpleadoPorDepart():void{
          console.log(`Empleados en ${this.departamento.nombre}: `)
          this.empleados.forEach(empleado => {
            console.log(`- Nombre: ${empleado.nombre}, edad: ${empleado.getEdad()}, Salario: ${empleado.salario}`)
          })
      }
}