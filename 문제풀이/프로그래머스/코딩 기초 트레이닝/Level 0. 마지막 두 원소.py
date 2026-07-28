def solution(num_list: list[int]):
    last = num_list[-1]
    prev = num_list[-2]

    return [*num_list, last - prev if last > prev else last * 2]


print(solution([2, 1, 6]))
