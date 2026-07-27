def solution(a: int, d: int, included: list[bool]) -> int:
    return sum(a + (d * i) for i, flag in enumerate(included) if flag)
