// let sayHello = function () {
//     console.log("안녕하세요!");
// }

// sayHello 함수 자체를 출력, 내용 표시 되지 않고 함수 객체 자체가 출력된다.
// console.log(sayHello);
// console.log(typeof sayHello);

// 변수에 함수를 담았을 땐 변수를 함수처럼 호출하면 된다. 
// sayHello();

// ES6, 익명함수일 경우 function 키워드도 생략이 가능하다.
// data = 10;
// console.log(data);

// data = () => {
//     console.log("함수 실행!");
// };

// data();

// 비동기 작업처리나 함수형 프로그래밍에서 많이 사용하는 방식
// add의 프로퍼티 2개를 합친 값이 함수( ) 의 프로퍼티가 된다.
function add(number1, number2, 함수) {
    함수(number1 + number2);
}
// 두 숫자의 합이 result가 된다. (아래에 함수 자리에 print 함수를 써주었기 때문이다.)
print = (result) => console.log(result);

// 그래서 1 + 2 의 값이 result에 들어가서 출력이 되는 함수가 print인데 그 print가 add를 호출함과 동시에 호출이 된다.
add(10, 20, print);
add(10, 20, (result) => console.log(result));

