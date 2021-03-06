
/**
 * 스코프
 * 자바스크립트의 변수 및 함수는 스코프 즉 유효 범위를 가진다.
 * 스코프는 전역 스코프와 지역 스코프로 나뉜다.
 */

// 지역 스코프에서 전역 스코프 안의 값을 참조 할 수 있다.
// 즉 선언된 함수 외부에 선언된 변수 및 함수에 대해 참조가 가능하다.

// 전역 스코프에서 지역 스코프 안의 값을 참조할 수 없다.

var a = 7 // 전역 변수

function test() {
    // 지역 변수
    var b = 3; 
    console.log(a);
    console.log(b);
}

test();

console.log(b);