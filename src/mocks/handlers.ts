import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://dummyjson.com/products", () => {
    const data = [
      { id: 1, title: "Produto mockado 1" },
      { id: 2, title: "Produto mockado 2" },
    ];
    return HttpResponse.json(data);
  }),
];
