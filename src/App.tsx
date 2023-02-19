import axios from "axios";
import { useState } from "react";
import { List } from "./List";

export default function App() {
  const [lists, setLists] = useState<any>([]);
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setLists(res.data);
    });
  };
  return (
    <div>
      <button onClick={onClickFetchData}>データ取得</button>
      {lists.map((list) => (
        <List title={list.title} userId={list.userid} />
      ))}
    </div>
  );
}
