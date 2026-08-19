import { Persona } from "./persona";

export class Profesor extends Persona {
  constructor(nombre: string, legajo: number = 0) {
    super(nombre, legajo);
  }
}