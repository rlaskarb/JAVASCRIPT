/*
객체를 만드는 방법
1. 객체 리터럴{}; -->< 많이 씀 >
2. object 생성자 함수
3. 생성자 함수 --> < 많이씀 >
4. object.create 메소드
5. Class
*/
// 여기서는 object 생성자 함수를 확인해 보자.

//빈 객체 생성
const student = new Object();
console.log(student);


//비어있는 객체에 property 추가
student.name = '김남규';
student.age = 36;

console.log(student);



