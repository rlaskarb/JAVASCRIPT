/*
 null 병합 연산자
 -좌항의 피연산자가 null 또는 undefined 인 경우
 -우항의 피연산자를 반환하고
 -그렇지 않으면 좌항의 피연산자를 반환한다.
 -변수의 기본값을 설정할 때 유용하다. */

var test = null ?? '기본값'; // ??= ||
var test1 = '안녕' ?? '기본값';
console.log(test);
console.log(test1);

/*
 null 병합 연산자 이전에는 논리연산자 ||를 사용한
 단축 평가로 변수에 기본값을 설정하였다.
*/