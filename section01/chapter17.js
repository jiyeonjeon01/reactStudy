// add23 실행 부분만 add22로 대체
// 비동기 처리 작업 진행
function task() {
    setTimeout(() => {
        console.log("hello");
    }, 3000);
}
function task2(callback) {
    setTimeout(callback, 3000);
}

// task();
// 함수선언, 표현식(익명함수), 화살표 
function callback(){
    console.log("hello2");
};

task2(() => {console.log("hello"); });
// task2(callback);

//비동기 처리 작업 진행 
function add(a, b) {
    setTimeout(() => {
        const sum = a + b;
        console.log(sum);
    }, 3000);
}

// add(10, 20);

function add2(a, b, callback2) {
    setTimeout(callback2, 3000);
}

function add22(a, b, callback2) {
    setTimeout(() => {
        callback2(a, b);
    }, 3000);
}

function add23(a, b, callback2) {
    setTimeout((a, b) => {
        const sum = a + b;
        callback2(sum);
    }, 3000)
}

function add3(a, b, callback2) {
    setTimeout(()=> {
        const sum = a + b;
        callback2(sum);
    }, 3000)
}

// add22(10, 20, (a, b) => {
//     const sum = a + b;
//     console.log(sum);
// });

add23(10, 20, (sum) => {
    console.log(sum);
}); //  ? 

// add3(100, 200, (sum)=>{
//     console.log(sum);
// });

