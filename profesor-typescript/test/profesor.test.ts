import { describe, expect, test } from "vitest";
import { Alumno } from "../src/profesor";

describe("Alumno", () => {
	test("guarda el nombre y el legajo", () => {
		const alumno = new Alumno("Juan", 123);

		expect(alumno.nombre).toBe("Juan");
		expect(alumno.legajo).toBe(123);
	});
});
