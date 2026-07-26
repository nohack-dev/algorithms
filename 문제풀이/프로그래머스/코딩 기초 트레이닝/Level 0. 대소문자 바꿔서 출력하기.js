const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];

  let res = '';

  for (const s of str) {
    if ('a' <= s && s <= 'z') res += s.toUpperCase();
    else res += s.toLowerCase();
  }

  console.log(res);
});
