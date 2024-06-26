/* 
    <실습>
    나이는 상수로 설정, 삼항 연산자
    나이가 19살 이상이면 "입장 가능" 출력
    미만이면 "입장 불가" 출력

    나이가 짝수면 "짝수" 출력
    나이가 홀수면 "홀수" 출력

    &&, || 연산자 사용
    나이가 10살이면 "당첨" 출력
    아니면 "다음 기회"에 출력

    콘솔 결과: 본인 이름님은 [입장여부] 입니다.
    [나이], [짝/홀], [당첨결과]
*/

const age = 20;
const name = "오예스";
let possible;
let isOdd;
let win;


possible = age > 19 ? "입장 가능" : "입장 불가";

isOdd = age % 2 == 0 ? "짝수" : "홀수";

win = age == 10 && "당첨" || "다음 기회";

// console.log(`${name}님은 ${possible}입니다. \n [${age}살], [${isOdd}], [${win}]`);


// 비교가 불가능한 undefined: undefined의 값은 다른 값과 비교해서는 안된다.
// console.log(undefined > 10);
// console.log(undefined == null);
// console.log(undefined === null);
console.log("apple" < "pineapple"); // ture
console.log("apple" > "pineapple"); // false