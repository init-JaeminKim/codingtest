const numbers = [6, 10, 2];

function solution(numbers) {
  var answer = "";
  let arr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i+1; j < numbers.length; j++) {
      answer = answer + numbers[i] + numbers[j];
    }

    arr.push(answer);
    answer=''
  }

  console.log(arr);
}

solution(numbers);
