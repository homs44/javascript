
/**
 *  프로토타입
 *  자바스크립트 객체는 결국 함수에 의해 만들어진다.
 *  var user = {};
 *  var user = new Object(); 
 * 
 *  function Person(){};
 *  var user = new Person();
 * 
 *  일반적으로 함수를 선언하게 되면
 *  함수와 함수의 프로토타입객체가 생성된다.
 * 
 *  예를들어  function Person() { }; 다음과 같이 함수를 선언하게 되면
 * 
 *  function Person(){} 와 함께  Person prototype object도 생성된다.
 * 
 *  function Person(){} 에는 prototype이라는 프로퍼티가 있고 이 프로퍼티는 Person prototype object를 가르킨다.
 * 
 *  Person prototype object에는 constructor와 __proto__(Prototype Link) 프로퍼티가 있고
 *  constructor는 function Person(){} 을 가르킨다
 *  그리고 __proto__는 부모의 Prototype object를 가르킨다. 
 *  
 *  위의 경우 Person prototype object는 최상위 객체인 Object prototype object를 가르키고
 *  Object prototype object는 최상위 객체이므로 __proto__값이 null 이 된다. 
 * 
 * 
 *  
 * 
 */


var user1 = {
    name:'jack',
    age:20,
}

var user2 = {
    name: 'joi',
    age:20,
}


function User(){ };
User.prototype.name = 'jack';
User.prototype.age = 20;

var user3 = new User();
var user4 = new User();

console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)

console.log(user1.name)
console.log(user2.name)
console.log(user3.name)
console.log(user4.name)