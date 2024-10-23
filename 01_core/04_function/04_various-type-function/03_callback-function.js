/*
콜백함수
-함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 '콜백 함수' 라고 한다.
그리고 이렇게 매개변수를 통해 함수를 전달받는 본체를 '고차 함수' 라고 한다.
'콜백 함수' 는 '고차 함수'에 전달이 되어 '헬퍼 함수' 역할을 하게 된다.
*/
//값을 증가시키는 함수
function increase(value){
    return value +1;
}

//값을 감소시키는 함수
function decrease(value){
    return value -1 ;
}

//콜백 함수를 전달받는 고차함수
function apply(func,value){
    return func(value);
}

// apply 에서 func -> 애가 increase 으로 인식 , value 이게 5로 인식 
console.log(apply(increase,5));

console.log(apply(decrease,5));

console.log(apply(function(value){return value * 2;},5));


/* 우리가 이런 식으로 변하지 않는 공통 로직
    ex) 더하는 함수, 빼는 함수 들을 미리 함수로 정의해 두고
        필요시에 호출하는 방식
   
   콜백 함수는 자바스크립트의 특징인 함수형 프로그래밍의 패러다임 뿐만 아니라
   비기동 처리(이벤트,타이머,ajax 등등)에 활용이 가장 많이 되는 패턴이다. */

//sort 메소드는 콜백 함수를 전달 받는다.
console.log([3,2,1,5,4].sort(function(left,right){return right-left}));