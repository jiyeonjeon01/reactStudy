// async  new Promise() 사용하지 않고 비동기 처리하는 함수
async function getData(){
    return {
        name:"jjy",
        id:"jiyeon"
    }
}
// console.log(getData());

// async 일반 함수에 들어있는 new Promise();
async function getData2(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name:"jjy",
                id:"jiyeon"
            })
        }, 2000);
    });
    return promise;
}

console.log(getData2());

// 3. awit: async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할 
async function getData3(){
    getData()
    .then()
    .catch();
}