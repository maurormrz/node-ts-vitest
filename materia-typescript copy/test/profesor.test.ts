import { describe, expect, test } from "vitest";
import { Profesor } from "../src/profesor";

describe("Profesor", () => {
	test("guarda el nombre y el legajo", () => {
		const profesor = new Profesor("María", 456);

		expect(profesor.nombre).toBe("María");
		expect(profesor.legajo).toBe(456);
	});
});
