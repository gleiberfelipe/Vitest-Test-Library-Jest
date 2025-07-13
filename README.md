# Projeto de Testes com Vitest, React Testing Library e Jest

Este repositório demonstra o uso de testes unitários e de integração em aplicações React usando as ferramentas modernas **Vitest** e **React Testing Library**, além de exemplos com **Jest**. O objetivo é mostrar domínio em testes para frontend, focando em qualidade, organização e boas práticas.

Este projeto foi desenvolvido como parte da preparação para oportunidades na área de desenvolvimento frontend, incluindo a vaga de Desenvolvedor(a) Frontend no Banco Inter.

---

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vitest](https://vitest.dev/) – framework de testes moderno e rápido, similar ao Jest.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) – para testes focados no comportamento do usuário.
- [Jest](https://jestjs.io/) – ferramenta de testes JavaScript (exemplos e comparativos).
- [MSW (Mock Service Worker)](https://mswjs.io/) – para mockar requisições HTTP durante os testes.
- [TypeScript](https://www.typescriptlang.org/) (opcional, caso use no projeto).

---

## Como rodar o projeto e os testes

### Instalar dependências

```bash
npm install
# ou
yarn install
Rodar testes com Vitest
bash
Copiar
Editar
npm run test
# ou para rodar em modo watch (recompilação automática)
npm run test:watch
# ou abrir interface gráfica dos testes
npm run test:ui
Os scripts acima devem estar configurados no seu package.json da seguinte forma:

json
Copiar
Editar
"scripts": {
  "test": "vitest",
  "test:watch": "vitest --watch",
  "test:ui": "vitest --ui"
}
'''
Estrutura de testes


Os testes estão localizados na pasta tests ou próximos aos componentes.

Usamos o React Testing Library para renderizar componentes e interagir com eles da mesma forma que um usuário real faria (clicar, digitar, etc).

Vitest funciona como executor dos testes e provê asserções e mocks.

MSW é usado para simular respostas de API e evitar chamadas reais durante os testes, garantindo que sejam confiáveis e independentes.

Exemplo básico de teste
'''
tsx
Copiar
Editar
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./form";
import { describe, test, expect } from "vitest";

describe("Componente Form com API", () => {
  test("Deve carregar 5 tarefas da API ao montar o componente", async () => {
    render(<Form />);
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(5);
    });
    expect(screen.getByText("Tarefa mockada 1")).toBeInTheDocument();
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
});

'''
Considerações
Os testes focam em simular o comportamento do usuário final para garantir que o componente funcione conforme esperado.

Com o uso do MSW, evitamos chamadas reais a APIs durante testes, aumentando velocidade e confiabilidade.

Vitest é uma alternativa leve e rápida ao Jest, com suporte nativo para ESM, TypeScript e integração com Testing Library.

