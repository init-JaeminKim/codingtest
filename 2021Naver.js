let scores = [
  [100, 98, 90, 99, 85],
  [99, 23, 99, 70, 86],
  [90, 12, 77, 21, 29],
  [90, 52, 20, 49, 76],
  [90, 32, 98, 11, 71],
];

const del = [];
let sum = 0;
let answer = "";

for (let i = 0; i < scores.length; i++) {
  del.push(scores[i][i]);
}

let max = del.indexOf(Math.max(...del));
let min = del.indexOf(Math.min(...del));

scores[max].splice(max, 1);
scores[min].splice(min, 1);

scores = scores.map((score) =>
  Math.floor(score.reduce((a, b) => a + b) / score.length)
);

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 90) {
    answer = answer + "A";
  } else if (scores[i] < 90 && 80 <= scores[i]) {
    answer = answer + "B";
  } else if (scores[i] < 80 && 70 <= scores[i]) {
    answer = answer + "C";
  } else if (scores[i] < 70 && 60 <= scores[i]) {
    answer = answer + "D";
  } else if (scores[i] < 60) {
    answer = answer + "F";
  }
}
console.log(answer);
