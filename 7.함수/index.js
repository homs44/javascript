
/**
 * 함수
 * 
 * 반복되는 코드를 줄이기 위해 사용
 * 
 */

// 함수 선언과 사용

//함수를 선언.
function add(a,b){
    return a+b;
}

// 함수 add를 호출하고 10, 3을 넘김.
// 리턴값을 result 변수에 할당.
var result = add(10,3); 


// 함수 예시
var user = {
    name: 'jack',
    level: 'gold'
}

function calNewPrice(price, user){
    var newPrice = 0;

    switch(user.level){
        case 'gold':
            // user.level gold  새 가격은 기존가격의 0.9
            newPrice = price * 0.9;
            break;
        case 'silver':
            // user.level silver  새 가격은 기존가격의 0.95
            newPrice = price * 0.95;
            break;
        case 'bronze':
            // user.level bronze  새 가격은 기존가격의 0.98
            newPrice = price * 0.98;
            break;
        default:
            // user.level 나머지  새 가격은 기존가격
            newPrice = price;
    }

    return newPrice;
}

var newPrice = calNewPrice(3000, user);
console.log(newPrice);



// 인수(argument)와 인자(parameter)

//함수가 호출 되면 인수의 값들은 인자에게 전달된다.
function func(parameter1, parameter2){

}
//함수를 호출할 때 인수를 전달
var argument1 =10, argument2 = 20;
func(argument1, argument2); 


/**
 * 일급객체
 * 
 * 함수를 변수에 저장할 수 있다.
 * 익명으로 사용 가능하다.
 * 리턴값으로 사용할 수 있다.
 */

 var add = (a,b)=>{
     return a+b;
 }

 
/**
 * 재귀함수
 * 
 * 함수가 자기 자신을 다시 호출하는 함수
 * 
 */

function factorial(num){
    if(num==0){
        return 1;
    }

    return num*factorial(num-1);
}


/**
 * 생성자 함수
 */

 var user1 = {
     name:'jack'
 }

 var user2 = new Object(); //Object 생성자 함수를 사용해서 호출
 user2.name = 'jack';


function Person(name){
    this.name = name;
}

var user1 = new Person('jack');
var user2 = new Person('joy');




//  call by reference
//  call by value



//함수 즉시 실행
// 자바스크립트는 파일이 분리되어있다 하더라도 글로벌 스코프에 있는 함수나 변수는 어디에서든 접근이 가능하다
// 그렇기 때문에 변수명 또는 함수명이 충돌할 수 있기 때문에 이를 방지하기 위해 다음과 같은 방식을 사용하기도 한다.
(function(){
    console.log('즉시 실행');
})();


//내부함수
// 내부함수에서 외부함수의 변수에 접근할 수 있다. (클로저)
function outer(){
    var a = 30;
    function inner(){
        // 내부 함수
        console.log(a);
    }
    inner();
}

outer();

