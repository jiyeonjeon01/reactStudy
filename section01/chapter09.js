// 객체 순회 방법
const person = {
    name: "jjy",
    age: 24,
    tall: 164
};
 
console.log(person.name);
console.log(person["name"]);

// 객체에서 멤버 변수의 이름을 배열로 가져오기 
const personKey = Object.keys(person);
console.log(personKey);

// 반복문을 객체값에 모든 원소값을 출력한다.
for(let i=0; i<personKey.length; i++) {
    let key = personKey[i];
    console.log(person[key]);
}