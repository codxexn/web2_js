// 지역변수
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// 전역변수
// let i = 0;
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// ㅜㅐㅇㄷ.ㅓㄴ 에서는 전역변수들을 모두 global 객체에서 관리한다.
// 브라우저에서는  window 객체에서 전역변수를 관리한다.
// 따라서 어디에서 사용될 지 모를 때는 globalThis 객체에 값을 담아

globalThis.x = 10;

function f() {
    let x = 20;
    globalThis.x = 30;
    console.log(x);
}

console.log(globalThis.x);  // 전역변수의 값
f(); // 함수 호출의 값
console.log(globalThis.x); // 함수 호출한 이후의 값
