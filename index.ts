import { Persona } from "./Persona"
import { Empleado } from "./Empleado";

const persona: Persona[] = [
  new Persona("Marcela Patiño", 20, {calle: "numero 1", ciudad: "Bogotá", pais: "Colombia"}),
  new Persona("Juan Perez", 21, {calle: "numer0 2", ciudad: "Cali", pais: "Colombia"}), 
  new Persona("Carlos Santos", 22, {calle: "numero 3", ciudad: "Medellin", pais: "Colombia"}),
  new Persona("Ana Sanchez",  23, {calle: "numero 4", ciudad: "Cartagena", pais: "Colombia"}),
  new Persona("Pablo Lopez", 24, {calle: "numero 5", ciudad: "Neiva", pais: "Colombia"}),
  new Persona("Olga Patiño", 25, {calle: "numero 6", ciudad: "Barranquilla", pais: "Colombia"}),
  new Persona("Luis Cania", 26, {calle: "numero 7", ciudad: "Tolima", pais: "Colombia"}),
  new Persona("Camila Patiño", 27, {calle: "numero 8", ciudad: "Bogotá", pais: "Colombia"}),
  new Persona("Marua Rivera", 28, {calle: "numero 9", ciudad: "Cundinamarca", pais: "Colombia"}),
  new Persona("Sandra Caicedo", 29, {calle: "numero 10", ciudad: "Bogotá", pais: "Colombia"})
]

//persona.forEach((e) => console.log(e.saludar()))
persona.forEach((p) => console.log("Las personas estan ubicadas en las siguientes ciudades:", p.direccion.ciudad));
console.log(" ");
const empleado: Empleado[] = [
    new Empleado("Juan", 25,{calle: "numero 1", ciudad: "Guajira", pais: "Colombia"}, 1000),
    new Empleado("María", 30, {calle: "numer0 2", ciudad: "Cali", pais: "Colombia"},  2000),
    new Empleado("Carlos", 20, {calle: "numero 3", ciudad: "Medellin", pais: "Colombia"}, 3000),
    new Empleado("Ana", 35, {calle: "numero 4", ciudad: "Cartagena", pais: "Colombia"}, 4000),
    new Empleado("Pedro", 40,{calle: "numero 5", ciudad: "Neiva", pais: "Colombia"}, 5000),
    new Empleado("Luis", 45,  {calle: "numero 6", ciudad: "Caqueta", pais: "Colombia"}, 6000),
    new Empleado("Olga", 50, {calle: "numero 8", ciudad: "Bogotá", pais: "Colombia"}, 7000),
    new Empleado("Laura", 55, {calle: "numero 9", ciudad: "Cundinamarca", pais: "Colombia"}, 8000),
    new Empleado("Pablo", 60, {calle: "numero 10", ciudad: "Bogotá", pais: "Colombia"}, 9000), 
    new Empleado("Jose", 65,  {calle: "numero 10", ciudad: "Casanare", pais: "Colombia"}, 10000),
]

//empleado.forEach((e) => console.log(e.saludar()))
empleado.forEach((e) => console.log("Los empleados estan ubicados en las siguintes ciudades: ", e.direccion.ciudad));



