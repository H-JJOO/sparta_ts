// Readonly<Type> : 한 타입의 집합을 읽기권한만 가능하게 변환해주는 타입

interface BankAccount {
  accountNumber: string;
  balance: bigint;
}

const myAccount: Readonly<BankAccount> = {
  accountNumber: "1234",
  balance: BigInt(Number.MAX_SAFE_INTEGER),
};

// 컴파일되지 않습니다
//myAccount.accountNumber = "123"; // ❌ Cannot assign to 'accountNumber' because it is a read-only property.
//myAccount.balance = BigInt(Number.MIN_VALUE); // ❌ Cannot assign to 'balance' because it is a read-only property.

console.log(myAccount);
