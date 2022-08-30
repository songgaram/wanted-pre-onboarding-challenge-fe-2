import styled from "styled-components";
import type { todoType } from "constants/index";

type todoProps = {
  todoData: todoType;
};

const TodoCard = ({ todoData }: todoProps) => {
  const { content, category } = todoData;

  return (
    <CardContainer>
      [{category}] {content}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin-top: 10px;
  width: 400px;
  text-align: center;
`;

export default TodoCard;
