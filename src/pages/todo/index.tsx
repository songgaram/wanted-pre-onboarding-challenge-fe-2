import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { booleanState } from "./Test";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const Todo = () => {
  const [boolean, setBoolean] = useRecoilState<boolean>(booleanState);

  const clickHandler = () => {
    setBoolean(true);
  };

  useEffect(() => {
    console.log(boolean);
  }, [boolean]);

  return (
    <div>
      <AddTodo />
      <TodoList />
      <button onClick={clickHandler}>버튼</button>
      <div
        style={{ backgroundColor: "yellow", width: "200px", height: "100px" }}
      >
        {boolean}
      </div>
    </div>
  );
};
export default Todo;
