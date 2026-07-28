function solution(num_list) {
  let odd = '';
  let even = '';
  for (const n of num_list) {
    if (n % 2) odd += n;
    else even += n;
  }

  return +odd + +even;
}
