// Crie um componente chamado DynamicList que mantenha uma lista dinâmica de itens. Utilize o
// hook useState para gerenciar o estado da lista. Adicione a capacidade de adicionar novos itens à
// lista através de um formulário. Cada item deve conter um texto e um botão para removê-lo da
// lista.

import React, { FC, useState } from "react";
import Swal from "sweetalert2";

const DynamicList: FC = () => {
  const [item, setItem] = useState<string>("");
  const [list, setList] = useState<{ id: number; value: string }[]>([]);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setItem(value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    const value = e.currentTarget.value.trim();

    if (key === "Enter" && value !== "") {
      setList((prevState) => [
        ...prevState,
        { id: prevState.length + 1, value },
      ]);
      setItem("");
    }
  };

  const handleRemoveItem = (id: number) => {
    const index = list.findIndex(item => item.id === id);
    if (index !== -1) {
      Swal.fire({
        title: "Atenção",
        text: `Deseja realmente excluir o item de nome ${list[index].value}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, Excluir",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          setList((prevState) => prevState.filter((item) => item.id !== id));
          Swal.fire({
            title: "Atenção",
            text: "Item excluído com sucesso.",
            icon: "success"
          });
        }
      });
    }
  };

  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          onChange={handleOnChange}
          onKeyUp={handleKeyUp}
          value={item}
          className="form-control"
          placeholder="Digite algo e pressione enter"
        />
      </div>

      {list.length > 0 ? (
        <ul className="list-group">
          {list.map((item) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              {item.value}
              <button
                className="ms-3 btn btn-danger"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h5 className="text-danger">Nenhum item adicionado à lista</h5>
      )}
    </>
  );
};

export default DynamicList;
