
// 콜백함수
// 자바스크립트는 IO 작업을 비동기로 수행한다. 

function callback(){
    console.log('5초 뒤에 호출 됨');
}

console.log('setTimeout 호출 이전 ');
setTimeout(callback, 5000);
console.log('setTimeout 호출 이후 ');