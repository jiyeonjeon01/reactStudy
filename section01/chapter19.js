// 1.promise pending 상태 
const promise = new Promise(() => {
    // 2초동안 작업처리한 것임
    setTimeout(() => {
        console.log('Promise pending...');
    }, 2000); 
});

// 2초 후에 부르는 게 아니라 바로 리턴되는 promist 콜한것이다
console.log(promise);

// 2. promise fulfilled 상태
const promise2 = new Promise((resolve, reject) => {
    // 2초동안 작업처리한것임 
    setTimeout(() => {
        console.log('Hello1');
        resolve('Hello2');
    }, 2000); 
});

setTimeout(() => {
    console.log(promise2);
}, 3000);

// 3. promise rejected 상태
const promise3 = new Promise((resolve, reject) => {
    // 2초동안 작업처리한것임 
    setTimeout(() => {
        console.log('Hello3');
        reject("실패하는 이유를 점검해보슈 ...");
    }, 2000); 
});

setTimeout(() => {
    console.log(promise3);
}, 3000);

// 4. promise 실제 적용
const promise4 = new Promise((resolve, reject) => {
    // 2초 동안 작업처리할 것임
    // executor 처리문
    // 숫자값을 주면 타입을 점검해서 number 타입이면 resolve, 아니면 reject
    setTimeout(() => {
        const num = "십";
        if(typeof num === 'number') {
            resolve(num + 10);
        } else {
            reject(`${num} 은 숫자가 아닙니다.`);
        }
    }, 2000);
})

setTimeout(() => {
    console.log(promise4);
}, 3000);

// // 성공했을 때 실행하는 함수로 결과를 화면에 출력
// promise5.then((value) => {
//     console.log(value);
// });

// // 실패했을 때 실행하는 함수로 에러를 화면에 출력
// promise5.catch((value) => {
//     console.log(value);
// });

// 6. promise 실제적용 성공했을때와 실패했을때를 처리한다. => 편리하게 처리
// promise5.then((value) => {
//     console.log(value);
// }).catch((value) => {
//     console.log(value);
// });

// 7. 함수를 통해서 promise 실행하기 
function add(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // const num = null;
            if(typeof num === 'number'){
                resolve(num + 10);
            } else {
                reject(`${num} 은 숫자가 아닙니다`);
            }
        }, 2000);
    });
    return promise;
}
const promise6 = add(null);

promise6.then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value);
});

// 8. 함수를 ??????????맞나나
// function add(num) {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // const num = null;
//             if(typeof num === 'number'){
//                 resolve(num + 10);
//             } else {
//                 reject(`${num} 은 숫자가 아닙니다`);
//             }
//         }, 2000);
//     });
//     return promise;
// }

// 콜백지옥
// const promise7 = add(10);
// promise7.then((value) => {
//     console.log("promise7" + value);
//     const promise8 = add(20);
//     promise8.then((result) => {
//         console.log("promise8" + result);
//     }).catch((result) => {
//         console.log("promise8" + result);
//     });
// }).catch((result) => {
//     console.log("promise7" + value);
// });

// 콜백지옥 해결
// promise chain
const promise7 = add(null);
promise7.then((value) => {
    console.log("promise7" + value);
    return add(20);
}).then((result) => {
    console.log("promise8" + result);
    return add(20);
}).catch((value) => {
    console.log("promise7" + value);
    return add(20);
});
////////////////////////여이까지 이상함

// 음식을 주문하는 사람 promise chain 진행해보자 
function orderFood(food, callback) {
    console.log(food + "음식주문");
    setTimeout(() => {
        callback(food);
    }, 3000);
}

function orderFood2(food) {
    const promise = new Promise((resolve, reject) => {
        console.log(food + "음식주문");
        setTimeout(() =>{
            let flag = true;
            if(flag) {
                resolve(food + "음식주문");
            } else {
                reject("음식 주문 실패");
            }
        }, 3000);
    });
    return promise;
}

const promise9 = orderFood2("떡볶이");
orderFood2(false, "떡볶이").then((value) => {
    console.log(value);
}).catch((value)=>{
    console.log(value);
});

// 단계 음식을 차게 주문하는 상광
