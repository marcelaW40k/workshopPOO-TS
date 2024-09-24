import { Persona } from "./Persona"
import { Empleado } from "./Empleado";

const persona: Persona[] = [
  new Persona("Marcela Patiño", 20),
  new Persona("Juan Perez", 21), 
  new Persona("Carlos Santos", 22),
  new Persona("Ana Sanchez",  23),
  new Persona("Pablo Lopez", 24),
  new Persona("Olga Patiño", 25),
  new Persona("Luis Cania", 26),
  new Persona("Camila Patiño", 27),
  new Persona("Marua Rivera", 28),
  new Persona("Sandra Caicedo", 29)
]

persona.forEach((e) => console.log(e.saludar()))
console.log(" ");
const empleado: Empleado[] = [
    new Empleado("Juan", 25, 1000),
    new Empleado("María", 30, 2000),
    new Empleado("Carlos", 20, 3000),
    new Empleado("Ana", 35, 4000),
    new Empleado("Pedro", 40, 5000),
    new Empleado("Luis", 45, 6000),
    new Empleado("Olga", 50, 7000),
    new Empleado("Laura", 55, 8000),
    new Empleado("Pablo", 60, 9000),
    new Empleado("Jose", 65, 10000),
]

empleado.forEach((e) => console.log(e.saludar()))



