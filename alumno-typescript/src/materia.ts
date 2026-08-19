import { Alumno } from "./alumno";
import { Profesor } from "./profesor";

export class Materia {
  constructor(
    public alumnos: Alumno[],
    public titular: Profesor,
    public adjunto: Profesor
  ) {}
}