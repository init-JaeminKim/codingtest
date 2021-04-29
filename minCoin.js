const coins = [2, 3, 5];
const cost = 6;

const d = new Array(100).fill(101);

const minCoin = (coins, cost) => {
  d[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < cost + 1; j++) {
      if (d[j - coins[i]] != 101) {
        d[j] = d[j - coins[i]] + 1;
      }
    }
  }

  console.log(d[cost]);
};

minCoin(coins, cost);
