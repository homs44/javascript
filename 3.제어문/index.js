/**
 * 제어문
 */


/**
 *     if else 문
 * 
 *     if ( 조건식 ){
 *         조건식이 참일 때 실행
 *     }else{
 *         조건식이 거짓일 때 실행
 *     }
 */

/*
    level 이 gold 이면 상품가격은 원래 가격에 0.8을 곱한다.
    level 이 silver 이면 상품가격은 원래 가격에 0.9을 곱한다.
    level gold와 silver가 아니면 그냥 원래가격.
*/

var level = 'sss'; // undefined
var price = 100;
var newPrice; // undefined

if (level == 'gold') {
    console.log('gold');
    newPrice = price * 0.8;

} else if (level == 'silver') {
    console.log('silver');
    newPrice = price * 0.9;

} else if (level == 'bronze') {
    console.log('bronze');
    newPrice = price * 0.9;

} else {
    console.log('others');
    newPrice = price;

}
console.log("새 가격", newPrice);





/**
 *      switch 문
 *      switch(변수){
 * 
 *          case 값1:
 *              변수가 값1일 때 실행
 * 
 *              break;
 *          case 값2:
 *              변수가 값2일 때 실행
 * 
 *              break;         
 *          default:
 *              변수가 값1과 값2가 아닐 때 실행
 * 
 *      }    
 */
var level = 'gold';
var price = 100;
var newPrice;

switch (level) {
    case 'gold':
        console.log('gold')
        newPrice = price * 0.9;
        break;
    case 'silver':
        console.log('silver');
        newPrice = price * 0.95;
        break;
    case 'bronze':
        console.log('bronze');
        newPrice = price * 0.98;
        break;
    default:
        console.log('default');
        newPrice = price;
}

console.log("가격 ", newPrice);





// 변수 level  = 65

// level 이 50 이하면 화면에다가 "50 이하" 출력
// level 이 50 초과 60이하이면 화면에다가 "50 초과 60이하" 출력
// level 이 60 초과 70이하이면 화면에다가 "60 초과 70이하" 출력
// level 이 70 초과면 화면에다가 "70초과" 출력

// 화면에 출력하는 함수 =>  console.log("내용")


var level = 65;

if(level<=50){
    console.log('50 이하')
}else if(level <= 60){
    console.log('50초과 60이하')
}else if(level <= 70){
    console.log('60초과 70이하')
}else{
    console.log('70 초과')
}



/*
    내일 Git(terminal) // Github // Gitkraken(GUI 툴)
*/