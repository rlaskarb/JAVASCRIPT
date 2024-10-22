/* 
java case
-int x = 10; 
if(조건문)
-안된다. 

java script case
-int x = 10;
if(조건문)
-된다.
*/
/*
자바스크립트 엔진은 불리언 타입이 아닌 값을 
Truthy 값 (참으로 평가 되는 값) 과
Falsy 값 (거짓으로 평가 되는 값) 으로 구분으로 해준다.

Falsy 값은 이미 정해져 있다 이거만 외우자
★ false , undefined , null , 0 , NaN
이 친구들은 Falsy 값이며
이 친구들을 제외한 모든 값은 Truthy 값이다.
*/

if(true)console.log('ㄱ?');
if(false)console.log('ㄱ?');
if(undefined)console.log ('ㄱ?');
if(4)console.log('ㄱ?');
if('')console.log('ㄱ?');
