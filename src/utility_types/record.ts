// Record<Keys, Type> : 객체 타입을 설립하는데 쓰임

type Type = string[];
type TypeII = Array<string>;

type ObjectTypeRecord = Record<string, string>;
type ObjectTypeObject = { [x: string]: string };

type Country = "Korea" | "USA" | "Canada" | "UK"; // enum으로 구현해도 됩니다
type CountryCode = 82 | 1 | 44; // enum으로 구현해도 됩니다

// syntaxt 객체 문법
type CountryToCountryCode = Record<Country, CountryCode>;

const countries: CountryToCountryCode = {
  Korea: 82,
  USA: 1,
  Canada: 1,
  UK: 44,
};
