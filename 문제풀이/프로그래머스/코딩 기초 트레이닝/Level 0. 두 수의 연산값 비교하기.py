def solution(a: int, b: int) -> int:
    return max(int(f"{a}{b}"), 2 * a * b)


print(solution(2, 91))
print(solution(91, 2))
