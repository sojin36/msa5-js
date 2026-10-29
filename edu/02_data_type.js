// 원시형 (primitive)
let num1 = 1;
let num2 = num1;
num2 = 99;

console.log(num1, num2);

// 참조형 (Refernece Type)
let obj1 = { id: 1, name: '둘리', etc: { addr: '대구', test: { key1: 'value' } } };
// let obj2 = obj1; // 참조형은 obj1의 주소값을 가져옴 (포인터처럼)
// obj2.name = '소진';

// console.log(obj1.name, obj2.name);

// 얕은 복사 (Shallow Copy)
// 객체의 최상위 계층만 값을 복사하고, 그 이하 계층은 참조형 데이터일 경우 주소만 복사하는 방식
let obj3 = { ...obj1 }; // destructuring 문법 응용
obj3.name = '소진';
obj3.etc.addr = '서울';
console.log(obj1.name, obj3.name, obj1.etc.addr, obj3.etc.addr);

// 깊은 복사 (Deep Copy)
// 객체의 모든 계층의 값을 복사 (복사가 깊을수록 속도는 어쩔 수 없이 느려짐)
obj1 = { id: 1, name: '재헌', etc: { addr: '대구' } };
let obj4 = JSON.parse(JSON.stringify(obj1));
obj4.name = '재헌잉'
obj4.etc.addr = '부산';
console.log(obj1.name, obj4.name, obj1.etc.addr, obj4.etc.addr);

