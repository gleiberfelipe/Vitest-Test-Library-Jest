import { render, screen } from "@testing-library/react";
import Form from "./form";

describe("Componente Form", () => {
  test("Deve renderizar corretamente", () => {
    render(<Form />);
    screen.getByText(/adicionar itens/i);
  });
});
