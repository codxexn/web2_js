const user = {
    name: '제우스',
    age: 20,
    address: '서울시 올림푸스구',
    introduce: () => {
        console.log('안녕하세요.');
    }
}

// console.log(user);
// console.log(typeof user);
// user.introduce();
// console.log(user["address"]);

// .으로 직접 접근할 수도 있고, key값의 규칙성이 필요하다면 [""] 문법을 사용하여 접근한다.
const programming = {
    pro1 : 'java',
    pro2 : 'dbms',
    pro3 : 'html, css',
    pro4 : 'javascript',
}

console.log(programming.pro4);
console.log(programming["pro4"]);

programming.pro1 = 'java1';
console.log(programming.pro1);
programming.pro5 = 'git';
console.log(programming);
