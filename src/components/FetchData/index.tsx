// Crie um componente funcional chamado FetchData. Utilize o hook useEffect para realizar uma
// chamada de API usando fetch para obter dados fictícios de uma URL (pode ser um endpoint de
// teste como JSONPlaceholder - https://jsonplaceholder.typicode.com). Exiba os dados obtidos no
// componente.

import { useEffect, useState } from "react";
import { UserType } from "./Types";
import Table from "./Table";

const FetchData = () => {
  const [data, setData] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(`error: ${error}`);
        setData([]);
      }
    };

    fetchData();
  }, []);

  return <>{loading ? <h4 className="text-danger">Carregando...</h4> : <Table users={data} />}</>;
};

export default FetchData;
