// 맞나?? ===============================================
// // 콜백함수: 자바콜백함수 (service, deGet, doPost)
// 1. 함수 선언식
function checkMood(mood, type) {
    if(mood === "good") {
       if(type === 1) {
        sing();
       } else {
        dance();
       }
    }else {
        if(type === 1) {
            cry();
        } else {
            angry();
        }
    }
}


// 콜백처리
function checkMood2(mood, goodCallback, badCallback) {
    if(mood === "good") {
        goodCallback();
    }else {
        badCallback();
    }
}

// checkMood("good", 1);

// checkMood2("bad", () => {
//     console.log("ACTION :: dance3");
// }, () => {
//     console.log("ACTION :: angry3");
// });

// 콜백처리2
function repeat(idx, callback) {
    for(let i=1; i<idx; i++) {
        callback(i);
        // console.log(i**4+"");
    }
}
repeat(5, (i) => {
    console.log(i**7);
});

function calculate(i) {
    console.log(i**4);
}

// function sing() {
//     console.log("ACTIOM :: sing");
// }function cry() {
//     console.log("ACTIOM :: sing");
// }
// function angry() {
//     console.log("ACTIOM :: angey");
// }
// function dance() {
//     console.log("ACTIOM :: dance");
// }


// checkMood("good");





