import { Color } from "../types";

const keys = Object.keys(Color); // keys의 타입: string[] -> ⚠️ 각 Color가 string으로 변환됐습니다
console.log(keys);

console.log("--------------");

const values = Object.values(Color); // values의 타입: Color[]
console.log(values);

type ObjectType = {
  [key in Color]?: String;
};

const myObject: ObjectType = {};

values.forEach((key) => {
  myObject[key] = "hello";
});

console.log(myObject);

//==================

type TableData = { [x: string]: string };
// 또는 Record라는 유틸리티 타입을 쓸 수도 있습니다
// type TableData = Record<string, string>;

const enum TableKey {
  ID = "ID",
  firstName = "firstName",
  lastName = "lastName",
  Score = "score",
}

type StrictTableDate = { [key in TableKey]: string };
type LessStrictTableDate = { [key in TableKey]?: string };

const myTableData: LessStrictTableDate = {
  ID: "1",
  firstName: "jane",
  lastName: "doe",
  //   score: "100",
  // 실수로 더해진 키/밸류값
  //   age: "99",
};
// ✅ 에러 없이 잘 컴파일 됩니다

console.log(myTableData);
