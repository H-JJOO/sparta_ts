// enums
import { Status } from "../types";

// types
import type { User, Order } from "../types";

// 타입 변수, 캡처를해서 넘겨주고, 반환 타입 T
function getData<T>(data: T): T {
  return data;
}

// 에러 없이 콘솔로그 되는 유효한 호출
console.log(getData<string>("string data"));
console.log(getData<number>(1234));
console.log(getData<User>({ email: "email@email.com", name: "katie" }));
console.log(getData<string[]>(["string", "data"]));
console.log(getData<string[]>([])); // 빈 배열도 유효한 인자입니다!

// ❌ Type 'string' is not assignable to type 'Status'.
// keys => values 로 변환
// 왜? 제네릭 함수를 사용해서 인자로 보낸 enum의 타입을 존중해준다.
// !타입을 존중해주는 Object.values()
const orders: Order[] = Object.values(Status).map((status, index) => {
  return {
    buyer: `buyer #${index}`,
    orderStatus: status,
  };
});
