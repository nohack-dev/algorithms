def solution(a: int, b: int) -> int:
    return max(int(f"{a}{b}"), int(f"{b}{a}"))


print(solution(9, 91))
print(solution(89, 8))
