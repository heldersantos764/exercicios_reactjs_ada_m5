// Crie um componente funcional simples chamado Counter. Utilize o hook useState para gerenciar
// um estado count iniciado em 0. Exiba o valor de count no componente e adicione dois botões, um
// para incrementar e outro para decrementar o valor de count em 1.

import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decreaseCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <button className="btn btn-primary me-2" onClick={decreaseCount}>-</button>
            {count}
            <button className="btn btn-primary ms-2" onClick={increaseCount}>+</button>
        </div>
    )
}

export default Counter;
