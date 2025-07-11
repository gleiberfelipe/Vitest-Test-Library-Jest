// tests/Form.test.tsx
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import { describe, test, expect } from "vitest";

describe("Componente Form", () => {
  test("Deve exibir todos os elementos do formulário ao renderizar", () => {
    render(<Form />);

    screen.getByText(/adicionar itens/i);
    screen.getByRole("textbox", { name: /item/i });
    screen.getByRole("button", { name: /enviar/i });
    screen.getByText(/lista de itens/i);
    screen.getByText(/nenhum item adicionado ainda/i);
  });

  test("Deve permitir que o usuário adicione um novo item à lista", async () => {
    const user = userEvent.setup();
    render(<Form />);

    const input = screen.getByRole("textbox", { name: /item/i });
    const submitButton = screen.getByRole("button", { name: /enviar/i });

    await user.type(input, "Novo item");
    await user.click(submitButton);

    expect(screen.getByText("Novo item")).toBeInTheDocument();
    expect(
      screen.queryByText(/nenhum item adicionado ainda/i)
    ).not.toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  test("Não deve adicionar item vazio à lista", async () => {
    const user = userEvent.setup();
    render(<Form />);

    const input = screen.getByRole("textbox", { name: /item/i });
    const submitButton = screen.getByRole("button", { name: /enviar/i });

    await user.type(input, "   ");
    await user.click(submitButton);

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    expect(
      screen.getByText(/nenhum item adicionado ainda/i)
    ).toBeInTheDocument();
  });

  test("Deve permitir remover um item da lista", async () => {
    const user = userEvent.setup();
    render(<Form />);

    const input = screen.getByRole("textbox", { name: /item/i });
    const submitButton = screen.getByRole("button", { name: /enviar/i });

    // Adiciona dois itens
    await user.type(input, "Item 1");
    await user.click(submitButton);
    await user.type(input, "Item 2");
    await user.click(submitButton);

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();

    // Clica no botão de remover do primeiro item
    const removeButtons = screen.getAllByRole("button", { name: /remover/i });
    await user.click(removeButtons[0]);

    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
});
