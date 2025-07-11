

# 🧪 Projeto de Testes Automatizados com Vitest, Testing Library e Jest
![Coverage](https://img.shields.io/badge/coverage-85%25-brightgreen)

Este projeto tem como objetivo demonstrar o domínio de testes unitários e de integração em aplicações frontend utilizando ferramentas modernas como **Vitest**, **React Testing Library** e **Jest**.

Criado como parte da minha preparação para oportunidades como a vaga de Desenvolvedor(a) Frontend no Banco Inter, este repositório evidencia o cuidado com qualidade, organização e testes orientados à experiência do usuário.

---

## 🚀 Tecnologias Utilizadas

- ✅ **React 18**
- ✅ **Vitest** — Test runner leve e rápido, moderno e compatível com Vite
- ✅ **React Testing Library** — Foco em comportamento real do usuário
- ✅ **Jest DOM** — Matchers para assertividade avançada
- ✅ **Mock Service Worker (MSW)** — (em fase de implementação)
- ✅ **Cobertura de testes** com relatório `--coverage`

---

## 🧪 O que está testado aqui

| Tipo de teste              | Descrição                                                 |
|----------------------------|-----------------------------------------------------------|
| ✅ Comportamento de botão   | Verifica renderização, clique e mudança de estado        |
| ✅ Inputs e formulários     | Simula preenchimento e leitura de valores                |
| ✅ Testes de renderização   | Garante que os componentes apareçam conforme esperado    |
| 🔄 MSW (em progresso)       | Mock de API para testar sem dependência externa          |
| 🔄 Testes E2E com Cypress   | Planejado para simulação de fluxo completo (opcional)    |

---



## 📁 Estrutura de pastas

```
├── src/
│   ├── components/
│   └── App.tsx
├── tests/
│   └── Example.test.tsx
├── vitest.config.ts
├── vitest.setup.ts


---

## ✅ Rodando os testes

```bash
# Instalar dependências
npm install

# Rodar testes
npm run test

# Gerar relatório de cobertura
npm run coverage
📊 Cobertura
A cobertura atual será atualizada conforme mais casos forem adicionados.

Statements: 78%

Branches: 72%

Functions: 85%

Lines: 77%

📌 Aprendizados
Compreensão sólida de testes com Vitest + Testing Library

Uso de matchers com jest-dom

Estrutura de testes organizados por contexto

Leitura da árvore DOM para simular uso real

Aplicação prática de conhecimento que se alinha com o dia a dia de grandes squads frontend

💼 Fit com o Banco Inter
Este projeto demonstra diretamente os critérios técnicos da vaga de Frontend no Banco Inter, como:

Uso de ferramentas modernas de testes

Escrita de código testável e bem estruturado

Foco em qualidade de entrega e não apenas "funcionar"

Familiaridade com MSW, cobertura e testes orientados a comportamento real

🧠 Próximos passos
 Integrar Mock Service Worker com APIs simuladas

 Adicionar testes de erro e borda

 Criar testes com Cypress (E2E simples)

