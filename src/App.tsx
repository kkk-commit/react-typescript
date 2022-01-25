import type { User } from "./types/user";
import { useEffect, useState } from "react";
import axios from "axios";
import { ListItem } from "./components/ListItem";

export const App = () => {
  // 取得したユーザー情報
  const [users, setUsers] = useState<User[]>([]);

  // 画面表示時にユーザー情報取得
  useEffect(() => {
    axios.get<User[]>("https://example.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};
