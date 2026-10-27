// 타이머 함수


// setTimeout(cb, ms[, ...args]) : number
// 설정한 일정 시간 후에 콜백함수를 실행
// 콜백 함수에 파라미터가 필요한 경우에만 ...args를 추가
// return 값은 timeoutId , 정수값 (해당 타이머의 고유한 식별값)를 반환

console.log("a");
const timeoutID = setTimeout(()=>{
    console.log("b");

}, 1000);
console.log("c");

// 해당 ID의 setTimeout을 취소시킨다.
clearTimeout(timeoutID);

// setInterval(cb, ms[, ...args]) : number
// 설정한 일정 시간마다 콜백함수를 실행하는 함수
// return 값은 intervalId 정수값 (해당 인터벌의 고유한 식별값)
const intervalId = setInterval(()=>{
    console.log("인터벌");
    // clearInterval(intervalId);
}, 1000);
// => 1초 뒤에 콜백함수를 호출해라


// 5초동안 인터벌 실행하고 스탑하는 함수 예제 만들기
setTimeout(()=>{
    clearInterval(intervalId);
}, 6000);

