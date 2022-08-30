import { TODO_DATA } from "constants/index";
import TodoCard from "./Todocard";

const TodoList = (): React.ReactElement => {
  return (
    <div>
      {TODO_DATA.map((todo) => (
        <TodoCard key={todo.id} todoData={todo} />
      ))}
    </div>
  );
};

export default TodoList;
