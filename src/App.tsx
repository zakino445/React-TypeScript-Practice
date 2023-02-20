import axios from "axios";
import { useState } from "react";
import { List } from "./List";

type ListType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [lists, setLists] = useState<Array<ListType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<ListType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setLists(res.data);
    });
  };
  return (
    <div>
      <button onClick={onClickFetchData}>データ取得</button>
      {lists.map((list) => (
        <List title={list.title} userId={list.userId} />
      ))}
    </div>
  );
}
