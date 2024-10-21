/*symbol 타입 변경 불가능한 원시 타입의 값이며
  다른 값과 중복이 되지 않는 유일한 값을 의미한다.
  -> Map 의 key 
  이 Symbol 이 타입을 활용해서 나중에 값에 대한 key를 생성하게 된다.*/ 

  //심볼 값 생성하기
  //Sybol 함수(메소드)를 사용해서 생성한다
  var key = Symbol('key');
  //값의 데이터 타입을 확인할떄 사용하는 typeof
  console.log(typeof key);
/*
 객체 타입
 자바 스크립트의 데이터 타입은 크게 두 분류로 나눌수 있다.
 java 에서 원시타입과 참조타입으로 나우었다면
 자바 스트립트는 원시타입과 객체타입으로 나눌 수 있다.
 number,string,boolean,undefined,null,symbol
 이 6가지 제외하고 모두 객체 타입이다.*/   