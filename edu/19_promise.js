// setTimeout(()=>{
//     console.log("A");
// }, 1500);

// setTimeout(()=>{
//     console.log("B");
// }, 1000);

// setTimeout(()=>{
//     console.log("C");
// }, 500);

// // a,b,c로 출력하고 싶었지만
// // c,b,a로 출력되는 이유? (비동기 처리의 특징)


// setTimeout(()=>{
//     console.log("A");

//     setTimeout(()=>{
//         console.log("B");

//         setTimeout(()=>{
//             console.log("C");
//         }, 500);
//     }, 1000);
// }, 1500);

// a,b,c순서대로 나오지만 단점 : 시간이 오래걸림 -> 가독성을 올려보자해서
// 나온게 promise

// 위 콜백 지옥을 회피하기 위해 프로미스 기반으로 변경!!
const timer = (str) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(str);

            if(str === 'A' // 참이 되는 빈도수가 높은 걸 적는 게 좋음 왜?
                           // 처리 한 번만 하고 끝나니까
                || str === 'B'
                || str === 'C'
            ){
                resolve({code: "허용", word: str});
            } else{
                reject(new Error("허용되지 않은 문자 입력됨"));
            }
        }, 2000);
    });
}

timer('A')
.then((result)=>{
    // resolve일 때 실행되는 코드 
    console.log(result.code, result.word);
    return timer('B') // 동기 처리를 하기 위한 방법
})
.then((result)=>{
    console.log(result.code, result.word);
    return timer('C');
})
.then((result)=>{
    console.log(result.code, result.word);
})
.catch((error)=>{
    // reject일 때 실행되는 코드
    console.log(error.message);
})
.finally(()=>{
    // resolve, reject 어느쪽이든 무조건 실행되는 코드
    console.log("파이널리");
});

console.log("외부");