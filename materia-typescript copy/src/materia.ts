import { Alumno } from "./Alumno";
import { Profesor } from "./profesor";

export class Materia {
  constructor(
    public nombre: string,
    public anio: number,
    public carrera: string,
    public alumnos: Alumno[],
    public titular: Profesor,
    public adjunto: Profesor
  ) {}
}
