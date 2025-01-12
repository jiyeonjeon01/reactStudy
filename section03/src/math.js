// common js 모듈 시스템 math 모듈(계산하는 모듈: 라이브러리: 함수), 클래스
function add(a, b) {
    return a + b;
}

let add1 = function(a, b) {
    return a + b;
}

let add2 = (a, b) => a + b;

function sub(a, b) {
    return a - b;
}

// 모듈을 외부로 보낸다
// module.exports = {
//     add,
//     sub,
// };

//ESM 모듈 방식으로 전환한다.
export {add, sub};

// function multiply(a, b) {
//     return a * b;
// }

// export {add, sub, multiply};

export default function multiply(a, b) {
    return a * b;
}