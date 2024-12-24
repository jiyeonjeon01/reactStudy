//1. 숫자 양수 무한대값 , 음수 무한대
let infinityValue = Infinity;
let mInfinityValue = -Infinity;
// 나는 숫자가 아니야.
let notANumber = NaN;
// 이런것 때문에 스트레스 받지마라
// 연산식 결과가 나올 수 있도록 형변환한다
let nan = 1 * "10";

// 덧셈으로 문자열 만들기
let name = "전" * "지연";

// 템플릿 리터널 기능을 잘 사용하자
let name2 = "전지연";
let myLocation = "강남";
let introductText= "저는 " + myLocation + "에서 352호 학생입니다";
let introduceText2 = `저는 ${myLocation} 에서 352호 ${name2}학생입니다.`;

// 형변환 number, parseInt
let str2 = "10";
// console.log(Number(str2));
// console.log(Number(str2) + 10);
// console.log(parseInt(str2) + 10);

// 산술연산자에서 주의할점
let num1 = 1.0;
let num2 = 2.0;
// console.log(num1 / num2);

// 비교연산자 (==), (!=) : 비추 / (===), (!==) : 강추 [타입과 값을 같이 비교한다.]
let compA = "1";
// console.log(1 === "1");

// typeof 연산자 (신경쓰지 말 것) null
let num3 = null;
// console.log(num3);

// typeof 연산자 (신경쓰지 말 것) object
let num4 = null;
// console.log(typeof num4);

// 병합연산자(??) : null, undefined 그 해당된 값을 적용을 안시켜준다.
// let num5 = null;
// num5 = num5 ?? 10; // 변수가 undefined, null 타입이면 다른값을 준다.

if(num5 === undefined || num5 === null) {
    num5 = 10;
}

console.log(num5);