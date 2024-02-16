// Crie um componente funcional chamado FocusInput. Utilize o hook useRef para criar uma
// referência ao input. Adicione um botão que, ao ser clicado, coloca o foco no input.


import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClickFocus = () => {
    inputRef && inputRef.current!.focus();
  };

  return (
    <div className="d-flex flex-column align-itens-center gap-3">
      <input ref={inputRef} type="text" className="form-control" />
      <button className="btn btn-primary" onClick={() => handleClickFocus()}>Focar no input</button>
    </div>
  );
};

export default FocusInput;
