// Omit<Type, Keys> : 특정 타입에 구성되어있는 프로퍼티를 생략시킬 때 쓰는 타입!

interface UserInfo {
  userName: string;
  favoriteColor: string;
  email: string;
  password: string;
}

type LessUserInfo = Omit<UserInfo, "password" | "email">;

const newUser: LessUserInfo = {
  userName: "pony",
  favoriteColor: "rainbow",
  // 생략시킨 email이 속해있어서 컴파일되지 않습니다
  //email: "hello@world.hello", // ❌ Object literal may only specify known properties, and 'email' does not exist in type 'LessUserInfo'.
};

// UserInfo 는 조작되지않고 새로운 타입을 만든다.
