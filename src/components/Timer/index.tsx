// Crie um componente chamado Timer que exiba um cronômetro simples. Utilize o hook useEffect
// para atualizar o tempo a cada segundo. Adicione a capacidade de iniciar, pausar e reiniciar o
// cronômetro.

import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number | undefined;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const formatTime = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60);
    const secondsTimer = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secondsTimer.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsActive(!isActive);
  };

  const handleRestart = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <>
      <div className="border border-dark px-5 py-2 fs-3 rounded fw-bold">
        {formatTime()}
      </div>
      
      <div className="d-flex pt-3 gap-2">

        <button className="btn btn-primary" onClick={() => handleStart()}>
          {isActive ? "Pausar" : "Iniciar"}
        </button>

        <button className="btn btn-primary" onClick={() => handleRestart()}>
          Reiniciar
        </button>

      </div>
    </>
  );
};

export default Timer;
