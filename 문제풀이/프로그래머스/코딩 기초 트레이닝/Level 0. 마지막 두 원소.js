function solution(num_list) {
  const left = num_list[num_list.length - 2];
  const right = num_list[num_list.length - 1];
  const res = [...num_list];

  if (left < right) res.push(right - left);
  else res.push(right * 2);

  return res;
}
