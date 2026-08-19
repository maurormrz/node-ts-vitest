import { Persona } from "./persona";

export class Alumno extends Persona {
	constructor(
		nombre: string,
		public edad: number,
		legajo: number = 0
	) {
		super(nombre, legajo);
	}

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  obtenerEstado(): string {
    return this.esMayorDeEdad() ? "Mayor de edad" : "Menor de edad";
  }
}