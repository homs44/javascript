
// Call by Value
// 자바스크립트에서 프리미티브 값(number, string, boolean..)들은 전달될 때 값이 그대로 복제된다.
// 따라서 전달된 값이 변경 되더라도 원본은 변하지 않는다.
function swap (num1, num2){
    var temp = num1;
    num1 = num2;
    num2 = temp;
}

var a = 3;
var b = 7;

swap(a,b);

console.log(a)
console.log(b)


// Call by Reference
// 자바스크립트에서 객체는 전달될 때 복사되어 전달되는것이 아니라 참조 값이 전달된다.
// 따라서 객체를 수정하게 되면 원본 객체도 수정이 된다.
function changePassword(user, newPassword){
    user.password  = newPassword
}

var user = {
    password:'secret'
}

console.log('before ', user)

changePassword(user,'new secret');

console.log('after ', user)
