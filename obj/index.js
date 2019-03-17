
var user = {
    name: 'jack',
    age: 20,
    address: 'secret'
}

var user1 = new Object();
user1.name = 'jack';
user1.age = 20;
user1.address = 'secret';


// name이 jack이고 age가 20인 변수 user1
// name이 joi이고 age가 20인 변수 user2

var user1 = {
    name:'jack',
    age:20,
    say:function(){
        console.log('hi');
    }
}

var user2 = {
    name:'joi',
    age:20,
    say:function(){
        console.log('hi');
    }
}

user1.say();

//함수
/*
    y = ax+b
    f(x) = 3x + 10
*/

// function add(num1, num2){

//     return num1 + num2;
// }

// var add = function(num1, num2){
//     return num1 + num2;
// }

// var result = add(1, 2);
// console.log(result);
