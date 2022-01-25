import type { User } from "../types/user";
import type { FC } from "react";

//export const ListItem = (props: User) => {
export const ListItem: FC<User> = (props) => {
  //  const { id, name, age, personalColor = "grey" } = props;
  const { id, name, age, personalColor, hobbies } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age}){hobbies?.join(" / ")}
    </p>
  );
};

// personalColor が未設定の場合、デフォルトを適用する
ListItem.defaultProps = {
  personalColor: "grey"
};
