function Student(name,age){
    // 1. this
    console.log(this);
    this.name = name ;
    this.age = age ;
    this.getInfo = function(){
        return `${this.name}는 ${this.age}세 입니다.`;
    }
}

const student = new Student ('김남규',36);
console.log(student);