// Enum 과 tree-shaking

/*
Tree-shaking(트리쉐이킹)은 사용하지 않는 코드를 제거하는 기능을 말한다.

우리가 이번 학습에서 봐 왔던 enum은 TS 자체의 기능이기때문에 tree-shaking이 되지 않는다.
 */

// index.ts
import { Color } from "./types";

const { RED, GREEN, BLUE: IMBLUE } = Color;

const green = GREEN;
const veggies = GREEN;
const epper = RED;
const sky = IMBLUE;

console.log(sky);

// DRY (Don't Repeat Yourself) => 반복하지 않는다! 개발원칙!

// 트리쉐이킹이 전혀 되지 않은채로 JS 코드로 트랜스파일이 되는 걸 방지하기 위해서, tsconfig.json 파일에서 "include": ["src/index.ts"] 를 추가해주고, enum 과 변수 앞에 const 를 붙혀준다.
