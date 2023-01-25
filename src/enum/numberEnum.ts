// 숫자형 열거

enum Color {
  Red = 200,
  Green,
  Blue = 400,
  Purple,
}

console.log("---------------");

const myColor: Color = Color.Red;
console.log(myColor); // 0

const yourColor: Color.Blue = Color.Blue;
console.log(yourColor); // 2

console.log(Color["Green"]);

console.log(Color[0]);
console.log(Color[1]);
console.log(Color[2]);

console.log(Color);
