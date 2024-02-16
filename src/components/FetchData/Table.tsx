import { FC } from "react";
import { UserType } from "./Types";

interface Props {
  users: UserType[];
}

const Table: FC<Props> = ({users}) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Site</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <a href={`https://${item.website}`}>{item.website}</a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
