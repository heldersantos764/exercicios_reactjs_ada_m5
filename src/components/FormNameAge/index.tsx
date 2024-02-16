// Crie um componente chamado Form com um formulário simples contendo campos para nome e
// idade. Utilize o hook useState para gerenciar os estados name e age. Exiba os valores desses
// estados no componente e permita que o usuário os atualize através do formulário.

import React, { useState, FC } from "react";

const FormNameAge: FC = () => {
  const [data, setData] = useState<{ username: string; age: number }>({
    username: "",
    age: 0,
  });

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <>
      <div className="mb-3">
        <label htmlFor="">Nome</label>
        <input
          onInput={handleInput}
          value={data.username}
          type="text"
          name="username"
          className="form-control"
          placeholder="Digite seu nome"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Idade</label>
        <input
          onInput={handleInput}
          value={data.age}
          type="number"
          name="age"
          className="form-control"
          placeholder="Digite sua idade"
        />
      </div>
      <div className="mt-3">
        <h3>Nome: {data.username}</h3>
        <h3>Idade: {data.age === 0 ? '' : data.age}</h3>
      </div>
    </>
  );
};

export default FormNameAge;
