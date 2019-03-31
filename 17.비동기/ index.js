
/**
 * 자바스크립트는 IO작업을 제외하고 동기적으로 수행된다. 
 */
function test1(){
    for(var i =0; i<100; i++){
        if(i%10===0){
            console.log("test1 -> "+i);
        }
    }
}
function test2(){
    for(var i =0; i<100; i++){
        if(i%10===0){
            console.log("test2 -> "+i);
        }
    }
}
function test3(){
    for(var i =0; i<100; i++){
        if(i%10===0){
            console.log("test3 -> "+i);
        }
    }
}

test1();
test2();
test3();


/**
 * setTimeout은 IO 작업이기 때문에 
 * 비동기적으로 처리된다.
 */
setTimeout(function(){
    console.log('작업 1')
}, 3000)

setTimeout(function(){
    console.log('작업 2')
}, 2000)

setTimeout(function(){
    console.log('작업 3')
}, 1000)

/**
 * 작업 1,2,3을 순차적으로 실행하기
 */

setTimeout(function(){
    console.log('작업 1')
    
    setTimeout(function(){
        console.log('작업 2')
        
        setTimeout(function(){
            console.log('작업 3')
        }, 1000)
    }, 2000)
}, 3000)

/**
 * 위와 같이 비동기작업을 콜백으로 수행할 경우 콜백이 중첩되어 코드가 읽기 어려워진다.
 * 즉, 코드 가독성이 떨어진다.
 * 그래서 Promise 또는 Async & await과 같은 방법을 사용해서 비동기로직을 처리한다.
 */