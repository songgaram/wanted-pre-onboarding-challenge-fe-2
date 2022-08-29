import styled from "styled-components";

const AddTodo = () => {
  return (
    <>
      <Title>Todo</Title>
      <Input /> <Button>입력</Button>
    </>
  );
};

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 400px;
  height: 48px;
  padding: 0 20px;
  letter-spacing: 0.5px;
  border-radius: 10px;
  border: 1px solid;
  outline: none;
  font-size: 14px;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 48px;
  font-size: 12px;
  background: none;
  border: 1px solid;
`;

export default AddTodo;
