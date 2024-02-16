import { FC } from "react";

interface Props {
    title: string
}

const TitleSection: FC<Props> = ({title}) => {
    return <div style={{width: '100%'}} className="rounded-top-5 bg-primary text-light fs-2 fw-bold py-3 text-center">{title}</div>
}

export default TitleSection;