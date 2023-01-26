// Extract<Type, Union> : 타입에서 필요한 유니언만 뽑아쓴다! Exclude 는 생략! (약간 반대라고 생각하면?)

type MyPet = "dog" | "cat" | "alpaca";
type ExtractedType = Extract<MyPet, "alpaca" | "cat">;

const onlyAlpacaOrCatAllowed: ExtractedType = "cat"; // 또는 "alpaca"만 할당 가능

console.log(onlyAlpacaOrCatAllowed);
