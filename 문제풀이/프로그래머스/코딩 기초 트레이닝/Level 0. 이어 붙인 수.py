def solution(num_list: list[int]):
    odd = "".join(str(n) for n in num_list if n % 2)
    even = "".join(str(n) for n in num_list if n % 2 == 0)

    return int(odd) + int(even)


solution([3, 4, 5, 2, 1])
