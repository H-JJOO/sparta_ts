// Exclude<UnionType, ExcludedMembers> : 유니언 타입에 속해있는 속성들을 생략할 때 사용, Omit 은 객체 타입

type MyType = "dog" | "cat" | "alpaca";
type ExcludedType = Exclude<MyType, "cat" | "alpaca">;
type LessMyType = Exclude<MyType, "alpaca">;

const onlyDogAllowed: ExcludedType = "dog"; // ✅
//const noAlpaca: ExcludedType = "alpaca"; // ❌
const catOrDogAllowed: LessMyType = "cat";

//----------------------------------------------------

type OnChange = (isDone: boolean) => boolean;
type GroupOfTypes = string | undefined | OnChange;
type FunctionType = Exclude<GroupOfTypes, string | undefined>; // Onchange 만 남음

const onChangeHandler: FunctionType = (isDone) => isDone; // ✅
console.log(onChangeHandler(true));

//const today: FunctionType = "greate day"; // ❌
// Onchange 타입을 반영해서 오른쪽이 함수여야 함
