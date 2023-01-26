유틸리티 타입 (Utility Types)

TypeScript에서 제공해주는 유틸리티 타입이 여러가지 있다.
그 중에서 우리가 유용하게 쓸 수 있는 타입이 여러가지가 있는데, 
앞으로 외부 라이브러리에서 불러오는 타입이나 import해올 수 없는 타입들을 조작하여 우리가 원하는 타입으로 변환시키는데에 유용하다.

## `Partial<Type>`

Partial(파셜)은 특정 타입에 속해있는 집합을 모두 선택적으로 만드는 타입으로 변환 해줍니다.

```tsx
interface Toppings {
  tomatoes: boolean;
  onion: boolean;
  lettuce: boolean;
  ketchup: boolean;
}
```

햄버거 주문 API를 만든다고 가정을 해보면, 토핑은 유저가 선택적으로 주문할 수 있게 인터페이스를 만들 때 Partial이 유용합니다.

```tsx
const toppingsIWant: Toppings = {
	onion: true,
	// 모든 토핑이 있어도 되고 없어도 됩니다
	// undefined로 명시해줘도 됩니다
	ketchup: undefined,
};
```

## `Required<Type>`

Required는 Partial의 반대라고 보시면 되겠습니다. 특정 타입에 속해있는 집합을 모두 필수로 변환하는 타입입니다.

이러한 빨대가 주어져도 되고 안주어져도 되는 버블티 주문 집합이 있다면, 빨대가 필수적으로 `true`나 `false`로 명시되게 변환을 해줍니다.

```tsx
interface BubbleTeaOrder {
  tea: boolean;
  straw?: boolean;
}

const myBubbleTeaOrder: Required<BubbleTeaOrder> = {
  tea: true,
  straw: true,
};
```

아주 간단한 예를 들어봤지만, 결론적으로 타입을 하나 정해놓고 그 타입을 직접 바꾸지 않고도 특정 타입의 프로퍼티들의 필수 조건들을 조작할 수 있어서 Partial과 Required는 자주 쓰이는 유틸리티 타입입니다. 이렇게 타입 하나를 두고 조작을 하게 되면 여러 비슷한 타입을 새로 생성하지 않아도 됩니다.

## `Readonly<Type>`

Readonly는 유틸리티 타입 이름 그대로 한 타입의 집합을 읽기권한만 가능하게 변환해주는 타입입니다.

```tsx
interface BankAccount {
  accountNumber: string;
  balance: bigint;
}

const myAccount: Readonly<BankAccount> = {
  accountNumber: "1234",
  balance: BigInt(Number.MAX_SAFE_INTEGER),
};

// 컴파일되지 않습니다
myAccount.accountNumber = "123"; // ❌ Cannot assign to 'accountNumber' because it is a read-only property.
myAccount.balance = BigInt(Number.MIN_VALUE); // ❌ Cannot assign to 'balance' because it is a read-only property.
```

<aside>
<img src="/icons/alert_orange.svg" alt="/icons/alert_orange.svg" width="40px" /> `balance`의 타입을 `bigint`로 써 본 이유는 `JavaScript`의 기본 자료형의 수는 한계점이 존재해서 `Number.MAX_SAFE_INTEGER`보다 큰 수는 정확하지 않을 때가 있습니다. `BigInt`가 이 한계점을 해결해줍니다.

</aside>

## `Record<Keys, Type>`

Record는 객체 타입을 설립하는데 쓰이는 유틸리티 타입입니다.

```tsx
type Country = "Korea" | "USA" | "Canada" | "UK"; // enum으로 구현해도 됩니다
type CountryCode = 82 | 1 | 44; // enum으로 구현해도 됩니다

type CountryToCountryCode = Record<Country, CountryCode>;

const countries = {
  Korea: 82,
  USA: 1,
  Canada: 1,
  UK: 44,
};
```

이렇게 써볼 수 있겠습니다. 참고로 `Record<Key, Type>`은 객체를 사용한 타입 선언 방법과 같습니다.

```tsx
type AnotherCountryToCountryCode = { [countryName in Country]: CountryCode };
```

## `Omit<Type, Keys>`

Omit은 특정 타입에 구성되어있는 프로퍼티를 생략시킬 때 쓰는 타입입니다.

```tsx
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
  email: "hello@world.hello", // ❌ Object literal may only specify known properties, and 'email' does not exist in type 'LessUserInfo'.
};
```

## `Exclude<UnionType, ExcludedMembers>`

Exclude라는 타입은 유니언 타입에 속해있는 속성들을 생략할 때 쓰입니다.

```tsx
type MyType = "dog" | "cat" | "alpaca";
type ExcludedType = Exclude<MyType, "cat" | "alpaca">;

const onlyDogAllowed: ExcludedType = "dog"; // ✅
const noAlpaca: ExcludedType = "alpaca"; // ❌

----------------------------------------------------

type OnChange = (isDone: boolean) => void;
type GroupOfTypes = string | undefined | OnChange;
type FunctionType = Exclude<GroupOfTypes, string | undefined>;

const onChangeHandler: FunctionType = (isDone) => console.log(isDone); // ✅
const today: ExcludedFunctionType = "great day"; // ❌
```

`MyType`은 문자열 그대로의 “string literal”이 모인 유니언 타입입니다. 이 중 `“cat”`과 `“alpaca”`를 제외했으니 `ExcludedType`은 오직 `“dog”`라는 문자열만 허용하는 타입으로 변환됩니다.

GroupOfTypes는 우리가 잘 아는 타입 세가지를 집합시킨 유니언 타입입니다. 하지만 `FunctionType`에서 함수가 아닌 `string`과 `undefined`를 제외합니다. 그래서 `onChangeHandler`라는 상수는 문제없이 컴파일이 되지만 `today`는 문자열을 할당하려고 하니 에러가 생깁니다.

## `Pick<Type, Keys>`

Pick타입은 한 타입의 특정 프로퍼티들만 뽑아쓸수 있도록 도와주는 타입입니다.

```tsx
interface User {
  firstName: string;
  lastName: string;
}

interface Student {
  user: User;
  isGraduated: boolean;
  school: string;
}

type StudentName = Pick<Student, "user" | "isGraduated">;
const studentName: StudentName = {
  user: {
    firstName: "winnie",
    lastName: "pooh",
  },
  isGraduated: true,
};
```

그냥 `User` 타입 써도 되지 않나요? 라고 생각하실 수 있습니다. 예제가 아닌 앞으로 여러 패키지 및 모듈을 쓰면서 여러 타입을 `import`해오셔서 쓸 일이 있을겁니다. 그때 `User`라는 타입은 해당 패키지에서 `export`하지 않고 `Student`라는 타입만 `export`한다고 가정했을 때 `user: User` 를 뽑아 쓸 수 있겠습니다.

## `Extract<Type, Union>`

Extract는 Exclude의 반대입니다. 타입에서 필요한 유니언만 뽑아오는건데 Exclude에서 썼던 예제를 다시 보겠습니다.

```tsx
type MyType = "dog" | "cat" | "alpaca";
type ExtractedType = Extract<MyType, "alpaca" | "cat">;

const onlyAlpacaOrCatAllowed: ExtractedType = "cat"; // 또는 "alpaca"만 할당 가능
```

원하는 유니언 타입만 뽑아서 새로운 타입을 선언할 수 있습니다.

## `NonNullable<Type>`

`NonNullable`타입은 특정의 타입에서 `null` 또는 `undefined`타입을 생략해주는 타입입니다.

```tsx
type QueryParam = string | string[] | undefined | null;
type NonNullableQueryParam = NonNullable<QueryParam>;

const queryParam: NonNullableQueryParam = "orders"; // 문자열은 허용되는 타입입니다
const forbiddenQueryParam: NonNullableQueryParam = undefined; // 허용되지 않습니다
```

이 타입도 마찬가지로, 그냥 `undefined`나 `null`없이 `QueryParam`을 선언하면 안되는지 생각하실수도 있습니다. 하지만 우리가 앞으로 사용하게 될 외부 라이브러리의 타입은 원하시는대로 호락호락하지 않아서 이런 유틸리티 타입이 필요합니다.