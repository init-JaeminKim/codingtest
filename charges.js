const charges = 1260;
const coins = [500, 100, 50, 10];

function solution(charges, coins) {
  coins = coins.sort((a, b) => b - a);

  let result = 0;

  coins.map((coin) => {
    result += Math.floor(charges / coin);
    charges = charges % coin;
  });

  console.log(result)
}

solution(charges, coins);
