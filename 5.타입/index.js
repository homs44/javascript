/**
 * 타입 변환
 * 
 * 명시적 타입변환, 암묵적 타입변환
 */

// 

var num1 = '1';
var num2 = 1;

// /*
//     == 값이 같으면 된다.
//     === 값과 타입이 모두 같아야한다.

//     != 값이 다르면 된다.
//     !== 값과 타입이 모두 달라야한다.
// */

console.log('num1 type : ', typeof (num1));
console.log('num2 type : ', typeof (num2));

if (num1 == num2) {
    console.log('==')
}

if (num1 === num2) {
    console.log('===');
}



/**
 * 명시적 타입 변환 Type casting
 */

// 문자열로 변환
var num = 10;
var s_num = String(num);

console.log(typeof (num));
console.log(typeof (s_num));

var test = true;
var s_test = String(test);

console.log(s_test);
console.log(typeof (s_test));

var num = 10;
var s_num = num.toString();
console.log(typeof (s_num));

// 숫자로 변환
var s_num = '100';
var num1 = Number(s_num);
var num2 = parseInt(s_num);
var num3 = parseFloat(s_num);

console.log(typeof (s_num));
console.log(typeof (num1));
console.log(typeof (num2));
console.log(typeof (num3));


// 불리언으로 변환
var test = Boolean('aa');
console.log(typeof (test)); // boolean 





/**
 *  암묵적 타입 변환 Type coersion
 */

// 문자열로 변환
var num = 10;
var s_num = 10 + ''; // '10'
console.log(typeof (s_num));


// 숫자로 변환
var s_num = '10';
var num = s_num * 1;
console.log(num);
console.log(typeof (num));

// 불리언으로 변환
/**
 *   다음 값들은 조건식에서 false이다.
 *  
 *   false
 *   undefined
 *   null
 *   0, -0
 *   NaN
 *   '' <- 빈 문자열
 */

var str = 'str';
if (str) {
    console.log(str)
}




// 대표적으로 타입 캐스팅을 하는 이유

var num1 = '10';
var num2 = 100;

var result = Number(num1) + Number(num2);
result = (num1 * 1) + (num2 * 1);
console.log(result);
// 110



