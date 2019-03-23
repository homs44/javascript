
/*
 *  자바스크립트는 동적언어로 실행시에 변수의 타입이 결정된다.
 * 
 *  java (컴파일 언어)
 *  int x = 10;
 *  String name = "ingyu";
 *
 *  javascript (동적 언어)
 *  var x = 10;
 *  var name = "ingyu";
 */


/**
 *  주석은 코드를 작성하는 사람이 메모를 적는 것
 */

// 한줄 주석

/*
주석1
주석2
주석3
*/

/**
 * 변수
 * 정수, 문자열, 불리언과 같은 값을 저장하여 사용할 수 있다
 */
var x;

x = -10; // x 타입은 number
x = "ingyu"; // String
x = undefined; // undefined
x = true; // boolean (참)
x = false; // boolean (거짓)
x = null; // null

x = {
    name: 'ingyu',
    age: 20
} // object


// 1. age란 변수에다가 10을 할당하세요  
// 2. age 변수의 값을 20으로 변경해보세요
var age = 10;
age = 20;
age = 30;
console.log(age);