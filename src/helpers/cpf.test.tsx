import { describe, expect, test } from "vitest";
import { validateCPF } from "./cpf";

describe("CPF", () => {
  test("Deve validar um CPF válido", () => {
    const validCpf = "99201221061";
    expect(validateCPF(validCpf)).toBeTruthy();
  });

  test("Deve validar um CPF inválido", () => {
    // arrange
    // act
    // assert
    const invalidCpf = "123";
    expect(validateCPF(invalidCpf)).toBeFalsy();
  });
});
