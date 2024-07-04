function Customer(name, age, point) {
    this.name = name;
    this.age = age;
    this.point = point;
}

customer1 = new Customer('짱구', 5, 5480);
customer2 = new Customer('철수', 6, 8770);
customer3 = new Customer('맹구', 5, 110);
customer4 = new Customer('유리', 7, 5500);
customer5 = new Customer('훈이', 6, 0);

const customers = new Object();

customers.customer1 = customer1;
customers.customer2 = customer2;
customers.customer3 = customer3;
customers.customer4 = customer4;
customers.customer5 = customer5;

for(let i in customers) {
    console.log(`${customers[i].name}님의 잔여 포인트는 ${customers[i].point}점 입니다.`);
}