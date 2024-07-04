// function add(num1, num2 = 4) {
//     return num1 + num2;
// }

// 매개변수를 다 넣어주면 넣어준 것으로 덮어쓰여진다.
// var result = add(3, 10);
// console.log(result);

// 매개변수를 모두 전달하지 않으려면 초기값을 뒤에서부터 설정해준다.
// var result = add(4);
// console.log(result);

// 아이디, 비밀번호, 이름 전달받고 이름은 기본값을 "사용자"로
// function introduce(id, pw, name = '사용자') {
//     console.log(id, pw, name);
// }

// introduce('no1Zeus', '1111');
// introduce('poseidon', '5555', '포세이돈');

// 몇개의 매개변수를 받을지 모를 때 가변 매개변수 사용 가능하다.
function add(...numbers) {
    // 배열 형태로 출력
    console.log(numbers);
    // i = index
    for(let i in numbers) {
        console.log(numbers[i]);
    }

}

add(1, 2, 3, 4, 5, 6);
// add(1, 2, 3, 4);



// 이름과 나이를 가변인자로 전달받아 출력하기
function info(...args) {
    console.log(`이름 : ${args[0]}\n나이 : ${args[1]}세`);
}

info('하데스', 24);

function info1 (person) {
    console.log(`이름: ${person.name}\n나이: ${person.age}세`);
}

let personInfo = {name: '오르페우스', age: 27};

info1(personInfo);



