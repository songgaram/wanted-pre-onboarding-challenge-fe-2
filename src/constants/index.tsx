interface todoData {
  id: number;
  content: string;
  complete: boolean;
  category: string;
  tags: string[];
}

const TODO_DATA: todoData = {
  id: 1,
  content: "할일 내용",
  complete: false,
  category: "기타",
  tags: ["오늘 할일"],
};

export { TODO_DATA };
