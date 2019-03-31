// 오류를 뱉어내는 코드

function mackeError(){
    throw new Error('Error 고의로 발생');
}

/**
 * 에러가 발생될 것으로 예상되는 곳을 Try문으로 감싸고
 * catch 문을 사용해 에러가 났을 때 어떤식으로 처리할지 작성한다.
 */
try {
    console.log('try문 안 코드')
    mackeError();
} catch (e) {
    console.log('오류 발생')
} finally {
    console.log('무조껀 실행')
}
