// Pick<Type, Keys> : 한 타입의 특정 프로퍼티들만 뽑아쓸수 있도록 도와주는 타입! Omit 의 반대!

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

console.log(studentName);
