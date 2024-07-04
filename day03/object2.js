// js 객체의 필드는 프로피티라고 한다.
// let snack = new Object();
// snack.name = '새우깡';
// snack.price = 1500;

// console.log(snack);

let bread = new Object();

const zg = new Object();
zg.name = '짱구';
zg.age = 5;
zg.point = 150; 

const cs = new Object();
cs.name = '철수';
cs.age = 6;
cs.point = 360; 

const mg = new Object();
mg.name = '맹구';
mg.age = 5;
mg.point = 10; 

const yr = new Object();
yr.name = '유리';
yr.age = 7;
yr.point = 770; 

const h2 = new Object();
h2.name = '훈이';
h2.age = 6;
h2.point = 0; 

bread.customer1 = zg;
bread.customer2 = cs;
bread.customer3 = mg;
bread.customer4 = yr;
bread.customer5 = h2;

console.log(bread);

for(let i in bread) {
    console.log(`${bread[i].name}님의 포인트는 ${bread[i].point}점 입니다.`);
}