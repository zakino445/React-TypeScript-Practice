import axios from "axios";
import { useState } from "react";
import { List } from "./List";
import { ListType } from "./types/list";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "ザキ",
  hobbies: ["映画", "ゲーム"],
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
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {lists.map((list) => (
        <List key={list.id} title={list.title} userId={list.userId} completed={list.completed} />
      ))}
    </div>
  );
}
