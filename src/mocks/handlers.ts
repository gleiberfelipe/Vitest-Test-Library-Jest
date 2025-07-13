import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    const data = [
      { id: 1, title: "Tarefa mockada 1" },
      { id: 2, title: "Tarefa mockada 2" },
      { id: 3, title: "Tarefa mockada 3" },
      { id: 4, title: "Tarefa mockada 4" },
      { id: 5, title: "Tarefa mockada 5" },
    ];

    return res(ctx.status(200), ctx.json(data));
  }),
];
