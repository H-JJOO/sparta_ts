// NonNullable<Type> : 특정 타입에서 null 또는 undefined 를 생략해주는 타입!
// 생략보다는 null 과 undefined 를 쓸수 없게하는 거 같은데?

type QueryParam = string | string[] | undefined | null;
type NonNullableQueryParam = NonNullable<QueryParam>;

const queryParam: NonNullableQueryParam = "orders"; // 문자열은 허용되는 타입입니다
// const forbiddenQueryParam: NonNullableQueryParam = undefined; // 허용되지 않습니다
