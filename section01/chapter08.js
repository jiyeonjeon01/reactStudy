// 1. 단락평가
let a = false;
let b = true;

let funca = () => {
    console.log("funca");
    return false;
};

let funcb = () => {
    console.log("funcb");
    return true;
};

// console.log(a && b);

// 실제 사용하는 방법
// 함수 선언, 표현식, 화살표 함수 
// 1. 어려운 방식
function printName(person) {
    const name = person && person.name;
    console.log(name || "person값이 없습니다.");
}
// 2. 내수준 방식 
function printName2(person) {
    if(typeof person === 'object') {
        console.log(person.name);
    }else {
        console.log("객체아님");
    }
}
// console.log(typeof {});

printName2();
// printName({name:"jjy"});