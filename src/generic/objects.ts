import { MyInterface } from "../types";

const stringObject: MyInterface<string> = { value: "hello, world!" };
const numberObject: MyInterface<number> = { value: 1234 };
const stringArrayObject: MyInterface<Array<string>> = {
  // MyInterface<string[]> 기능적으로는 동일
  value: ["hello", "world!"],
};

const stringObjectG: MyInterface<string> = { value: "hello, world!" };
const myRandomObjectG: MyInterface<number> = { value: 1234 };
const stringArrayObjectG: MyInterface<string[]> = {
  value: ["hello", "world"],
};

// 재활용,무슨타입을 명시했는지 보기 쉬움
