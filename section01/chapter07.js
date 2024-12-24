// 1. 배열 생성, 배열 리터럴 
let arrayA = new Array();
let arrayB = [];

// 2. 배열 들어올 수 있는 멤버
let arrayC = [
    // 원시타입 5가지
    1, 
    1.0, 
    true,
    "hello",
    undefined,
    null,
    // 객체타입 1가지(3종류: 객체, 배열, 함수)
    {},
    [],
    () => {}
];

console.log(arrayC[6]);