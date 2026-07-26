const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  str = input[0];
  n = Number(input[1]);

  // 문자열 메서드 중 repeat를 사용해도 된다.
  // console.log(str.repeat(n));
  let res = '';

  while (n--) {
    res += str;
  }

  console.log(res);
});
