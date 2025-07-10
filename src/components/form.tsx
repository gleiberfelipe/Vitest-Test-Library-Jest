import React, { useState } from "react";
import Button from "./button";
const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

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

  return (
    <div>
      <h2>Adicionar Itens</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Digite algo..."
          />
          <Button type="submit">Enviar</Button>
        </div>
      </form>

      <div>
        <h3>Lista de Itens:</h3>
        {items.length === 0 ? (
          <p>Nenhum item adicionado ainda.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Form;
