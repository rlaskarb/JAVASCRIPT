/*
논리 연산자
 || (or) , &&(and) , ! (not)

 단축 평가
 표현식을 평가하는 도중 결과가 확인이 된 경우 나머지 과정을 생략한다. 
 ex) A && B -> A가 false 면 B는 실행 안함
*/

/*
OR 연산의 경우 'apple' 문자열이 Truthy 값이기 때문에
뒤에 banana 는 보지도 않고 결정한다.
그렇기 때문에 논리 연산자의 결과를 결정한 apple 이라는 피연산자를 반환한다.
*/ 

console.log('apple' || 'banana');
console.log(false || 'banana');
console.log('apple'|| false );

/*
AND 의 경우 좌항 과 우항 모두 확인을 해야 하기 때문에
논리 연산의 결과를 결정 하는 banana 가 반환이 된다.
*/ 
console.log('apple' && 'banana');
console.log( false && 'banana');
console.log('apple' && false);

// 단축평가를 사용하게 되면 if문은 대체할 수 있다.
var num = 1;

if (num % 2 == 0){
    console.log("짝수 입니다.")
}else{
    console.log("홀수 입니다.");
}
console.log('===========================');
num % 2 == 0 && console.log("짝수 입니다."); // 출력구문 없음.
num % 2 == 0 || console.log("홀수 입니다.");

// 객체를 가리키기를 기대하는 변수가 null 또는 undefined 가 아닌 지 확인하고
//property 를 참조할 때 단축평가를 유용하게 사용할 수 있다.
var obj = null;

// var val = obj.value;

//obj 가 falsy (undefined or null) 값이면 좌항만 실행
//obj 가 falsy 이기 때문에 val --> null 데이터 타입 반환(값)
//만약 obj 가 truthy 값으면 식을 결정 짓는 obj.value 반환.
var val = obj && obj.value;

console.log(val);