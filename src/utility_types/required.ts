// Required<Type> : Partial 의 반대! 특정 타입에 속해있는 집합을 모두 필수로 변환하는 타입!

// 선택적으로
interface BubbleTeaOrder {
  tea: boolean;
  straw?: boolean;
}

// 필수!
const myBubbleTeaOrder: Required<BubbleTeaOrder> = {
  tea: true,
  straw: true,
};

// 선택적!
const myBubbleTeaOrder2 = {
  tea: true,
};

// 라이브러리를 가져와서 쓰는 경우가 많은데, 해당 라이브러리에서 export 해주는 타입만 사용가능한데, 사용하고자 하는 용도에 맞게 쓰기위해서는 유틸리티 타입을 이용해야한다. (지정된 타입 조작)
