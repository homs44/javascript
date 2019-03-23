
/**
 * 산술 연산자
 */

var result;
result = 10 + 3; // 더하기
console.log('더하기 : ', result);

result = 10 - 3; //빼기
console.log('빼기 : ', result);

result = 10 * 3; //곱하기
console.log('곱하기 : ', result);

result = 10 / 3; //나누기
console.log('나누기 : ', result);

result = 10 % 3; //나머지
console.log('나머지 : ', result);


// 변수 r(반지름) 에다가 10을 할당하고
// 변수 s(넓이) 에 원 넓이를 계산해서 넣으세요    원넓이 = 반지름*반지름*3.14

var r = 10;
console.log("반지름 ", r);
var s = r * r * 3.14;
console.log("원넓이 ", s);




/**
 *  비교 연산자
 */

var x = 10;
var y = 3;

var result;

result = x > y; //ture
console.log("x가 y보다 크다 : ", result);

result = x >= y;
console.log("x가 y랑 같거나 크다 : ", result);

result = x < y;
console.log("x가 y보다 작다 : ", result);

result = x <= y;
console.log("x가 y보다 같거나 작다 : ", result);

result = x == y;
console.log("x는 y랑 같다 : ", result);

result = x != y;
console.log("x는 y랑 다르다 : ", result);




/**
 *  논리 연산자
 * 
 *  A && B  =  A 와 B 모두 참이어야 참이된다.
 *  A || B  =  A 또는 B 둘중 하나만 참이면 참이된다.
 */


var a = 10 > 5; // true
var b = 5 > 10; // false

var result;
result = a && b; // and
console.log("a 와 b 모두 참 : ", result);

result = a || b; // or
console.log("a 또는 b가 참 : ", result);



/**
 *  문자열 연결 연산자
 * 
 *  어떤 타입의 값 또는 변수라도 문자열과 더하기 연산을 하게 되면 새 문자열이 만들어진다.
 */

var result = "Hi, " + "ingyu"; // "Hi, ingyu"
result = 1 + "2"; // "12"




/**
 *  타입 연산자
 * 
 * 변수 또는 값의 타입을 리턴한다.
 */
var num = 3;
var str = "abc";

console.log("x의 타입 ", typeof (x)) // number
console.log("result의 타입 ", typeof (str)) // string


