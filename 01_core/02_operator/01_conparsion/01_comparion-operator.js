/*
기본적인 연산자 내용은 java 동일
다른거 위주로 확인
*/

/*
 동등/일치 비교 연산
 -동등 비교 (==,!=) : 암묵적 타입 변환을 통해 타입을 일치 시킨 후 값 비교
 -일치비교(===,!==) : 타입과  값이 모두 일치해야 한다.
*/

// 숫자 1, 문자 '1' , true 비교하기

console.log(`1 =='1' : ${1=='1'}`);
console.log(`1 == true : ${1== true}`);
console.log(`1 ==='1' : ${1==='1'}`);
console.log(`1 === true : ${1=== true}`);
console.log('====================================')
//비교 연산자를 통해 문자열 끼리도 비교가 가능하다 -> 유니코드 사용

console.log(`'apple'<'banana':${'apple'<'banana'}`);


// 단축평가를 사용하게 되면 if문을 대체할 수 있다.
console.log('==========================')
var num = 1;

if(num % 2 == 0){
    console.log("짝수입니다.")}
else{
    console.log("홀수입니다.");}

console.log('========================')
num % 2 == 0 && console.log("짝수입니다.");
num % 2 == 0 || console.log("홀수입니다."); 

// 객체를 가리키기를 기대하는 변수가 null 또는 undefined 가 아닌 지 확인하고
// 프로퍼티를 참조할 떄 단축 평가를 유용하게 사용할 수 있다.
console.log('==========================')
var obj = null;

// var val = obj.value;

//obj 가 falsy(undefined or null) 값이면 좌항만 실행
//obj 가 falsy 이기 때문에 val -> null 데이터 타입 반환(값)
//만약 obj 가 truthy 값이면 식을 결정 짓는 obj.value 반환
var val = obj && obj.value;

console.log(val);

