let nome = "blink";
let quantidade_xp = 10001;
let elo = undefined;

if (quantidade_xp <= 1000) {
  elo = "Ferro";
} else if (quantidade_xp <= 2000) {
  elo = "Bronze";
} else if (quantidade_xp <= 6000) {
  elo = "Prata";
} else if (quantidade_xp <= 7000) {
  elo = "Ouro";
} else if (quantidade_xp <= 8000) {
  elo = "Platina";
} else if (quantidade_xp <= 9000) {
  elo = "Ascendente";
} else if (quantidade_xp <= 10000) {
  elo = "Imortal";
} else {
  elo = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${elo}`);
