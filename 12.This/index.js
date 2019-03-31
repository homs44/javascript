
/**
 * 자바스크립트에서 함수를 다양하게 부를 수 있다.
 * 함수
 * 생성자 함수
 * 메소드
 */

// 일반적인 함수이다.
function test() {

}

// 생성자 함수 
// 일반적인 목적이 아닌 객체를 생성하기 위한용도로 정의한 함수
// 일반 함수와 구분하기 위해 함수명의 앞글자를 대문자로 표기한다. (표준)
function User(name) {
    this.name = name;
}

// 메소드
// 객체 안에 정의된 함수이다.
var car = {
    drive: function () {
        console.log('drive');
    }
}

function Car() {
    // 이것 또한 메소드이다. 생성자 함수에서 this는 객체를 가르키고
    // 아래의 코드는 결국 객체안에 drive 속성에 익명함수를 할당하는 것이기 때문이다.
    this.drive = function () {
        console.log('drive')
    }
}




/**
 * 자바스크립트에서 This는 누가 호출하느냐에 따라 달라진다.
 * 객체안에 있는 메소드가 호출될 경우 
 */


function Person() {
    console.log(this);
}

// 생성자 함수로 정의하였지만 일반적인 함수처럼 사용했을 때
// this는 전역객체를 가르킨다.
// 브라우저에서 this는 window객체가되고 노드에서 this는 global객체가 된다.
// Person(); 

// new 키워드와 함께 생성자함수로 호출되면 this는 객체를 가르킨다.
var person = new Person();


// 객체안에있는 메소드를 호출할 경우 this는 객체를 가르킨다.
var bird = {
    fly: function(){
        console.log(this);
    }
}
bird.fly();

// 마찬가지 생성자 함수로 생성한 객체안에있는 메소드를 호출할 경우 this는 객체를 가르킨다.
function Animal(){
    this.run = function(){
        console.log(this);
    }
}

var tiger = new Animal();
tiger.run();


// 수업시간에 하지 않은 내용
// 자바스크립트에서 함수도 객체이다.
// 함수에는 bind, call, apply 함수가 존재한다. 이를 사용할 경우 this가 가르키는 객체를 바꿀 수 있다.
function test(){
    console.log(this);
}

test.bind(tiger)();
test.call(tiger);
test.apply(tiger);
