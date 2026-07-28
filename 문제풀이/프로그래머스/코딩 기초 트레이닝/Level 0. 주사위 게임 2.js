function solution(a, b, c) {
  if (a === b && b === c && c === a) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
  } else if (a !== b && b !== c && c !== a) {
    return a + b + c;
  } else if ((a === b && a !== c) || (b === c && b !== a) || (c === a && c !== b)) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  }
}
