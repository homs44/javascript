// 내장 객체

/**
 * 자바스크립트에서 기본으로 제공하는 객체들이 있다.
 * console, Math, Date등이 그런 객체들이고
 * 내장 객체라고 부른다.
 */

// Math
var result = Math.min(4, 5, 7);
var result1 = Math.abs(-3);
console.log(result1);

// Date
var result = new Date();
var result = Date.now();

console.log(result);


var user = {
    email:'abc@google.com',
    name:'홍길동',
    password:'secret',
    passwordChangedAt:new Date(),
    createdAt:new Date(),
    lastLoginedAt:new Date(),
}

console.log(user);
