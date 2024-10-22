/*
매개변수와 전달인자.
*/ 


function hello(name){
// 마찬가지로 매개변수는 해당 함수 목체({}) 내에서만 사용 가능
    console.log(name);
//모든 전달인자들은 암묵적으로 arguments 객체의 프로퍼티로 보관
    console.log(arguments);

    return `${name} 님 헬로우`
}

//함수 호출
var result = hello('김남규');
console.log(result);

//매개변수와 전달인자 갯수 불일치
//인자의 갯수를 부족하게 하면 undefined 가 된다.
result= hello();
console.log(result);

//인자의 갯수가 더 많은 경우에는 초과 된 인자는 무시된다.
//하지만,암묵적으로 arguments 객체에 보관은 해둔다.
result = hello('김남규','남규');
console.log(result);


function hi(name = '기본값'){
    // if(arguments.length !==1 || typeof name !== 'string'||name.length===0){
    //     console.log('인수는 1개 이어야 하며,문자열 값이고, 빈문자열은 허용하지 않습니다.')
    // }
    return `${name} 님 안녕`;
}

// arguments 객체를 이용해서 적절한 인자가 전달 되었는지 확인하기.
//result = hi('남규2','남규3');
// result =hi(1);
// result = hi("");

result = hi();
console.log(result);