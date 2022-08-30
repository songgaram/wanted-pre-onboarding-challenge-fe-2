export type todoType = {
  id: number;
  content: string;
  complete: boolean;
  category: string;
  tags: string[];
};

const TODO_DATA: Array<todoType> = [
  {
    id: 1,
    content: "할일 내용",
    complete: false,
    category: "기타",
    tags: ["오늘 할일"],
  },
  {
    id: 2,
    content: "도서관 가기",
    complete: false,
    category: "공부",
    tags: ["오늘 할일"],
  },
  {
    id: 3,
    content: "카페 가기",
    complete: false,
    category: "공부",
    tags: ["오늘 할일"],
  },
];

export { TODO_DATA };
