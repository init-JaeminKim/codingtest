let dp = new Array(7).fill(0);

function Make1() {
  for (let i = 2; i < 7; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 == 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    if (i % 3 == 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    if (i % 5 == 0) {
      dp[i] = Math.min(dp[i], dp[i / 5] + 1);
    }
  }

  console.log(dp[6]);

  console.log(dp)
}

Make1();
