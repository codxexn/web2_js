// 프로토타입 (생성자)
// new 뒤에 나오는 생성자를 자바스크립트에서는 '프로토타입' 이라고 부른다.
// 프로토타입은 함수로 선언하여 사용한다.
// 단, 반드시 대문자로 시작해야 한다.

function User(id, pw, name, age, subject) {
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
    this.subject = subject;
}

user1 = new User('no1zeus', '1111', '제우스', 20, 'java');
user2 = new User('poseidon', '5555', '포세이돈', 23, 'javascript');
console.log(user1, user2);