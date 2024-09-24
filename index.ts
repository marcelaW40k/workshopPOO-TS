import { Persona } from "./Persona"

const persona: Persona[] = [
  new Persona("Marcela Patiño", 20),
  new Persona("Juan Perez", 21),
  new Persona("Carlos Santos", 22),
  new Persona("Ana Sanchez", 23),
  new Persona("Pablo Lopez", 24),
  new Persona("Olga Patiño", 25),
  new Persona("Luis Cania", 26),
  new Persona("Camila Patiño", 27),
  new Persona("Marua Rivera", 28),
  new Persona("Sandra Caicedo", 29)
]

persona.forEach((e) => console.log(e.saludar()))
console.log(" ");


