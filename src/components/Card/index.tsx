import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
}

const Card: FC<Props> = (props) => {
  return (
    <div className="card my-2 d-flex flex-column align-items-center" style={{width: '100%', backgroundColor: '#efefef'}}>
      <div className="card-body d-flex flex-column align-items-center">
        <h3 className="card-title">{props.title}</h3>
        {props?.children}
      </div>
    </div>
  );
};

export default Card;
