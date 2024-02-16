// Modifique o componente Counter para incluir um novo estado step, iniciado em 1. Agora, ao clicar
// nos botões de incremento e decremento, o valor de count deve ser alterado de acordo com o
// valor de step

import { FC, useState } from "react";

interface Props {
    step: number
}

const CounterStep: FC<Props> = (props) => {

    const [count, setCount] = useState<number>(0)

    const increaseCount = () => {
        setCount(prevCount => prevCount + props!.step);
    };

    const decreaseCount = () => {
        setCount(prevCount => prevCount - props!.step);
    };

    return (
        <div className="my-2">
            <button className="btn btn-primary me-2" onClick={decreaseCount}>-</button>
            {count}
            <button className="btn btn-primary ms-2" onClick={increaseCount}>+</button>
        </div>
    )
}

export default CounterStep;
