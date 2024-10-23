/*
★ arrow function
ES6 버전에서 도입이 된 화살표 함수는 function 키워드 대신에
=> 를 사용해서 조금 더 간랸하게 함수를 정의하는 것을 의미한다.
*/

var message = function(){
    return "Hello World!!";
}
console.log(message());


// function() 구문 => 으로 대체함
message = () => {
    return 'Arrow Function!!';
}
console.log(message());


// 명령문(실행 할 코드 )이 하나만 있는 경우 중괄호 생략 가능
// function(){return } --> () => 으로 대체함.
message = () => 'Arrow Function us Simple';

console.log(message());



//매개변수가 있을 시 화살표 함수 사용
message = (arg1,arg2) => "Arrow " + arg1 + arg2;

console.log(message(' function',' argument!'));

//매개변수가 하나이며 소괄호 생략 가능
message = arg1 => 'arrow arg1 ' + arg1;
console.log(message('very simple'));

message = function(arg1){
    return 'arrow arg1' + arg1;
}