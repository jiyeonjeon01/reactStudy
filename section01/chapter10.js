// forEach(함수(value, index, 객체 배열)) : 향상된 for 문 (객체 : 객체배열)
const array = [1, 2, 3, 4];
const array2 = [];

// 아래 3개가 전부 같음 
// 일반 for 문
for(let i=0; i<array.length; i++) {
    console.log(array[i]);
}
// =
// forEach 문
array.forEach((v) => {
    console.log(v);
    // console.log(i); 
    // console.log(a); // a 넣으면 (4)[1, 2, 3, 4] 나옴
});
// = 
array.forEach((v) => console.log(v));


array.forEach((v) => array2.push(v*2));
console.log(array2);

// console.log(array2);
let array3 =[
    {name: "구길동", age: 10},
    {name: "홍길동", age: 20},
    {name: "말길동", age: 30},
]

array3.forEach((v) => {
    console.log(v.name);
});

//find
const findArray = array3.find((v) => {
    v.name === "홍길동";
});

// console.log(findArray);

// filter
const findArray2 = array3.filter((v) => {
    return v.name === "홍길동";
});
// console.log(findArray);

// Map (지도: 객체 새로 만들어지는 것)
const nameArray = array3.map((v) => {
    return v.age + 30;
});
console.log(nameArray);

// findIndex 해당된 객체를 찾아서 그 위치를 리턴한다
const findIdx = array3.findIndex((v) => {
    return v.name === "말길동";
});
console.log(findIdx);

// includes
// const array = [1, 2, 3, 4];
const flag = array3.includes(5);
console.log(flag);