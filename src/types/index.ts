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
