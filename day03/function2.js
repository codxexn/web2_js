// 한국국가대표 축구선수 정보
// 3명의 선수 등록

function Player(name, number, point, position) {
    this.name = name;
    this.number = number;
    this.point = point;
    this.position = position;
}

let KoreaSoccerTeam = new Object();

const player1 = new Player('손흥민', 7, 3, 'MF');
const player2 = new Player('이강인', 18, 2, 'MF');
const player3 = new Player('설영우', 22, 1, 'DF');

console.log(player1);

KoreaSoccerTeam.player1 = player1;
KoreaSoccerTeam.player2 = player2;
KoreaSoccerTeam.player3 = player3;

for(let i in KoreaSoccerTeam) {
    console.log(`한국 대표팀 ${KoreaSoccerTeam[i].name}은(는) ${KoreaSoccerTeam[i].point}를 득점했다.`);
    console.log(`${KoreaSoccerTeam[i].name}의 등번호는 '${KoreaSoccerTeam[i].number}'이다.`);
    console.log(`${KoreaSoccerTeam[i].name}의 포지션은 '${KoreaSoccerTeam[i].position}'이다.\n\n`);
}
