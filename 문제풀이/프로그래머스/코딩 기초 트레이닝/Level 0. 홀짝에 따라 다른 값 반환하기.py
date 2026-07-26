def solution(n: int) -> int:
    if n % 2:
        return sum(i for i in range(1, n + 1, 2))
    else:
        return sum(i * i for i in range(2, n + 1, 2))


print(solution(7))
print(solution(10))
