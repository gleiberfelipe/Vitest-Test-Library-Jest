import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./button";

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        const taskTitles = response.data.map((task: any) => task.title);
        setItems(taskTitles);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete = (indexToDelete: number) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Adicionar Itens
      </h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex items-center gap-2">
          <label htmlFor="item" className="sr-only">
            Item
          </label>
          <input
            id="item"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Digite algo..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button type="submit">Enviar</Button>
        </div>
      </form>

      <div>
        <h3 className="text-xl font-medium text-gray-700 mb-2">
          Lista de Itens:
        </h3>
        {items.length === 0 ? (
          <p className="text-gray-500 italic">Nenhum item adicionado ainda.</p>
        ) : (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
              >
                <span>{item}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Form;
