export enum Color {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
}

export enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// interface 키워드로 타입 선언하기
export interface ThingsInLife {
  colorOfPen: Color;
  keyboardArrow: Direction;
}

// // type 키워드로 타입 선언하기
// export type ThingsInLifeType = {
//   colorOfPen: Color;
//   keyboardArrow: Direction;
// };

export interface MyInterface<GenericValue> {
  value: GenericValue;
}

export interface MyInterface<GenericValue = string> {
  value: GenericValue;
}

export type User = {
  email: string;
  name: string;
};

export enum Status {
  Initiated = "Initiated",
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered",
}

export interface Order {
  buyer: string;
  orderStatus: Status;
}

// 클래스에 속성해 있어야 할 주요 함수들을 인터페으스로 정의
export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}