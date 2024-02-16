import { FC, useRef, useState } from "react";

const MeasureElement: FC = () => {
  const [width, setWidth] = useState<number | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleMeasure = () => {
    const measure = divRef.current!.offsetWidth;
    setWidth(measure);
  };

  return (
    <>
      <div
        ref={divRef}
        className="bg-light border border-dark d-flex align-items-center justify-content-center fw-bold"
        style={{ width: "400px", height: "200px" }}
      >
        Div que será medida
      </div>
      <div className="px-5 py-2 bg-success text-center fs-4 mb-3 mt-3 text-light">
        {width
          ? `A largura da DIV é ${width} px`
          : "Click em calcular para medir a DIV"}
      </div>
      <button className="btn btn-primary mb-4" onClick={() => handleMeasure()}>
        Calcular
      </button>
    </>
  );
};

export default MeasureElement;
