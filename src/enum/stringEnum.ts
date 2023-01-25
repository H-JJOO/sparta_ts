// 문자형 열거

import { Color } from "../types";

const myColor: Color.RED = Color.RED;
console.log(myColor); // "Red"

const yourColor: Color = Color.BLUE;
console.log(yourColor); // "Blue"

const faveColor = Color.RED; // 타입이 추론(infer) 됩니다
console.log(faveColor); // "Red"

const chorock: Color = Color.GREEN;
console.log(chorock); // "Green" 문제 없이 잘 됩니다

//const colorOfSky: Color.BLUE = Color.GREEN; // Type 'Color.Green' is not assignable to type 'Color.Blue'.

// as : 타입캐스팅, 되도록이면 쓰지 않는다, 아래의 예시를 보면 "Potato" 가 타입캐스팅으로 정상적으로 컴파일 되는데, "Potato" 는 Color 가 아니므로 이런 경우에는 작동이 되어서는 안된다.
const imposterColor: Color = "Potato" as Color;
console.log(imposterColor); // "Potato"
