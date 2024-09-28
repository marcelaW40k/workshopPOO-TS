
import { Persona } from "./Persona"
import { Empleado } from "./Empleado";
import { Coche, Moto } from "./vehiculo";
import { objEmpleados } from "./objEmpleados";
import { EstadoCivil } from "./estadoCivil";
import { Empresa } from "./empresa";
import { Proyecto } from "./Proyecto";


const coche1 = new Coche("Ford", "Mustang", 2024)
const coche2 = new Coche("Toyota", "Corolla", 2023)
const moto1 = new Moto("Honda","CB500F", 2022)
const moto2 = new Moto("Kawasaki", "Ninja 650", 2019)

const persona: Persona[] = [
  new Persona("Marcela Patiño", 20, {calle: "numero 1", ciudad: "Bogotá", pais: "Colombia"}, [coche1, moto1], EstadoCivil.DIVORSIADO),
  new Persona("Juan Perez", 21, {calle: "numer0 2", ciudad: "Cali", pais: "Colombia"},[moto2], EstadoCivil.SOLTERO), 
  new Persona("Carlos Santos", 22, {calle: "numero 3", ciudad: "Medellin", pais: "Colombia"}, [moto1, moto2], EstadoCivil.CASADO),
  new Persona("Ana Sanchez",  23, {calle: "numero 4", ciudad: "Cartagena", pais: "Colombia"}, [moto1], EstadoCivil.DIVORSIADO),
  new Persona("Pablo Lopez", 24, {calle: "numero 5", ciudad: "Neiva", pais: "Colombia"}, [coche1, coche2], EstadoCivil.DIVORSIADO),
  new Persona("Olga Patiño", 25, {calle: "numero 6", ciudad: "Barranquilla", pais: "Colombia"}, [coche2], EstadoCivil.SOLTERO),
  new Persona("Luis Cania", 26, {calle: "numero 7", ciudad: "Tolima", pais: "Colombia"}, [coche1, moto1, moto2], EstadoCivil.CASADO),
  new Persona("Camila Patiño", 27, {calle: "numero 8", ciudad: "Bogotá", pais: "Colombia"}, [moto1, coche1, coche2], EstadoCivil.DIVORSIADO),
  new Persona("Marua Rivera", 28, {calle: "numero 9", ciudad: "Cundinamarca", pais: "Colombia"}, [moto1, moto2, coche2], EstadoCivil.CASADO),
  new Persona("Sandra Caicedo", 29, {calle: "numero 10", ciudad: "Bogotá", pais: "Colombia"}, [coche1, coche2, moto1, moto2], EstadoCivil.SOLTERO)
]

persona.forEach((e) => console.log(e.saludar()))
//persona.forEach((p) => console.log("Las personas estan ubicadas en las siguientes ciudades:", p.direccion.ciudad));
console.log("--------------------------------------------");
const empleados: Empleado[] = [
    new Empleado("Juan", 25,{calle: "numero 1", ciudad: "Guajira", pais: "Colombia"}, 1000, [coche1, coche2, moto1, moto2], EstadoCivil.DIVORSIADO),
    new Empleado("María", 30, {calle: "numer0 2", ciudad: "Cali", pais: "Colombia"},  2000, [coche2, moto2], EstadoCivil.SOLTERO),
    new Empleado("Carlos", 20, {calle: "numero 3", ciudad: "Medellin", pais: "Colombia"}, 3000, [coche1, moto1, moto2], EstadoCivil.CASADO),
    new Empleado("Ana", 35, {calle: "numero 4", ciudad: "Cartagena", pais: "Colombia"}, 4000, [moto1, moto2, coche2], EstadoCivil.DIVORSIADO),
    new Empleado("Pedro", 40,{calle: "numero 5", ciudad: "Neiva", pais: "Colombia"}, 5000, [coche2], EstadoCivil.DIVORSIADO),
    new Empleado("Luis", 45,  {calle: "numero 6", ciudad: "Caqueta", pais: "Colombia"}, 6000,  [coche1, coche2], EstadoCivil.SOLTERO),
    new Empleado("Olga", 50, {calle: "numero 8", ciudad: "Bogotá", pais: "Colombia"}, 7000, [moto1], EstadoCivil.SOLTERO),
    new Empleado("Laura", 55, {calle: "numero 9", ciudad: "Cundinamarca", pais: "Colombia"}, 8000, [moto1, moto2], EstadoCivil.SOLTERO),
    new Empleado("Pablo", 60, {calle: "numero 10", ciudad: "Bogotá", pais: "Colombia"}, 9000, [moto2], EstadoCivil.DIVORSIADO), 
    new Empleado("Jose", 65,  {calle: "numero 10", ciudad: "Casanare", pais: "Colombia"}, 10000, [coche1, moto1], EstadoCivil.CASADO),
]
empleados.forEach((e) => console.log(e.saludar()))
//empleado.forEach((e) => console.log("Los empleados estan ubicados en las siguintes ciudades: ", e.direccion.ciudad));

const proyectos: Proyecto[] = [
  new Proyecto("Proyecto: los sueños ", "Descripcion un nuevo sueño", 2, [empleados[0], empleados[1]]),
    new Proyecto("Proyecto: los sueños 2", "Descripcion un nuevo sueño 2", 1, [empleados[2]]),
    new Proyecto("Proyecto: los sueños 3", "Descripcion un nuevo sueño 3", 3, [empleados[0], empleados[1], empleados[2]]),
    new Proyecto("Proyecto: los sueños 4", "Descripcion un nuevo sueño 4", 4, [empleados[0], empleados[1], empleados[2], empleados[0]]),
    new Proyecto("Proyecto: los sueños 5", "Descripcion un nuevo sueño 5", 5, [empleados[0], empleados[1], empleados[2], empleados[0], empleados[1]]),
]

const leerObjEmpleados = () => {
const empleados = JSON.stringify(objEmpleados)
const arrayObjEmpleados =  JSON.parse(empleados)
//console.log(arrayObjEmpleados)
}
const jsonEmpleadosString = () => {
  const empleados = JSON.stringify(objEmpleados)
//console.log(empleados)
}
leerObjEmpleados();
jsonEmpleadosString();

//instanciar clase empresa
const gestionEmpresa = new Empresa()
//agregar
empleados.forEach((empleado) => console.log(gestionEmpresa.agregarEmpleados(empleado)))
//eliminar
gestionEmpresa.eliminarEmpleado("Ana")
//calcular total salario
gestionEmpresa.calcularSalarios()

//Imprimir la descripcion del proyecto
proyectos.forEach((proyecto) => proyecto.detalleProyecto())




