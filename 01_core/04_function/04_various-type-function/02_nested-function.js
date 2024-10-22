/*
함수 내부에 함수를 정의 하는 것을
중첩함수 혹은 내부 함수라고 한다.
*/ 

/*
일반적으로 중점 함수의 자신을 포함하는 외부 함수를
도와주는 헬퍼 함수의 역활을 하게 된다.
*/ 

function outer(){

    var outerVal = '외부함수가 가지고 있는 변수'

    function inner (){

        var innerVal = '내부함수가 가지고 있는 변수'

        console.log(innerVal,outerVal);

    }
    // 내부 함수의 변수는 외부 함수 스코프에서 사용할수 없다.
    // console.log(innerVal);

    inner();

}

// inner();
outer();