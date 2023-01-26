//Partial<Type> : 특정 타입에 속해있는 집합을 모두 선택적으로 만드는 타입으로 변환

interface Toppings {
  tomatoes: boolean;
  onion: boolean;
  lettuce: boolean;
  ketchup: boolean;
}

// 모든 타입을 반드시 명시
const toppingsIWant: Toppings = {
  tomatoes: true,
  onion: true,
  lettuce: true,
  ketchup: true,
};

// 모든 타입을 선택적 명시
const partialToppingsIWant: Partial<Toppings> = {
  tomatoes: true,
  onion: undefined,
};

console.log("wt", partialToppingsIWant);
