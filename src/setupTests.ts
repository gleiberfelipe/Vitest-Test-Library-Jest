import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import "cross-fetch/polyfill";

afterEach(() => {
  cleanup();
});

import { server } from "./mocks/server";

// Inicia o MSW antes de todos os testes
beforeAll(() => server.listen());

// Reseta os handlers após cada teste (importante para testes isolados)
afterEach(() => server.resetHandlers());

// Encerra o MSW após todos os testes
afterAll(() => server.close());
