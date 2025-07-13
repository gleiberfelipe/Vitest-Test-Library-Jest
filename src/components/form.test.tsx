// tests/Form.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./form";
import { describe, test, expect } from "vitest";

describe("Componente Form com API", () => {
  test("Deve carregar 5 tarefas da API ao montar o componente", async () => {
    render(<Form />);

    // Espera as tarefas aparecerem
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(5);
    });

    // Verifica se os textos visíveis estão no documento
    expect(screen.getByText("delectus aut autem")).toBeInTheDocument();
    expect(
      screen.getByText(
        "laboriosam mollitia et enim quasi adipisci quia provident illum"
      )
    ).toBeInTheDocument();
  });

  test("Deve permitir adicionar novo item à lista", async () => {
    const user = userEvent.setup();
    render(<Form />);

    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(5);
    });

    const input = screen.getByRole("textbox", { name: /item/i });
    const submitButton = screen.getByRole("button", { name: /enviar/i });

    await user.type(input, "Nova tarefa");
    await user.click(submitButton);

    expect(screen.getByText("Nova tarefa")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(6);
  });

  test("Não deve adicionar item vazio à lista", async () => {
    const user = userEvent.setup();
    render(<Form />);

    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(5);
    });

    const input = screen.getByRole("textbox", { name: /item/i });
    const submitButton = screen.getByRole("button", { name: /enviar/i });

    await user.type(input, "   ");
    await user.click(submitButton);

    expect(screen.getAllByRole("listitem")).toHaveLength(5); // nada novo
  });

  test("Deve remover uma tarefa da lista", async () => {
    const user = userEvent.setup();
    render(<Form />);

    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(5);
    });

    const firstRemoveButton = screen.getAllByRole("button", {
      name: /remover/i,
    })[0];
    await user.click(firstRemoveButton);

    expect(screen.queryByText("delectus aut autem")).not.toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });
});
