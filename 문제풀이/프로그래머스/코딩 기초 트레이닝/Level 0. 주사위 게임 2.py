def solution(a: int, b: int, c: int) -> int:
    answer = a + b + c

    if len({a, b, c}) <= 2:
        answer *= a**2 + b**2 + c**2
    if len({a, b, c}) <= 1:
        answer *= a**3 + b**3 + c**3

    return answer


print(solution(2, 6, 1))
print(solution(5, 3, 3))
print(solution(4, 4, 4))
