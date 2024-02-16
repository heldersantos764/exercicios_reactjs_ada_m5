// Crie um componente CounterWithRef que utilize useRef para manter uma referência ao valor
// atual do contador. Adicione botões para incrementar e decrementar o contador. Exiba o valor do
// contador

import { FC, useRef, useState } from "react"


const CounterWithRef: FC = () => {
    const [count, setCount] = useState<number>(0)
    const currentCount = useRef<number>(count);

    const decreaseCount = () => {
        currentCount.current = count - 1;
        setCount(currentCount.current)
    }

    const increaseCount = () => {
        currentCount.current = count + 1;
        setCount(currentCount.current)
    }

    return (
        <div>
            <button className="btn btn-primary me-2" onClick={decreaseCount}>-</button>
            {currentCount.current}
            <button className="btn btn-primary ms-2" onClick={increaseCount}>+</button>
        </div>
    )

}

export default CounterWithRef;