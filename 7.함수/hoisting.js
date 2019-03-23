//  호이스팅
// 자바스크립트는 실행할 때 모든 선언(var, function, let, const, class)을 호이스팅(맨 앞으로 가져옴) 한다.;
console.log(a)

var a = 30;


function func(){

    console.log(b);

    var b = 70;
}

func();

