# def solution(a: int, b: int, flag: bool) -> int:
#     return a + b if flag else a - b


# 람다를 이용한 방식
solution = lambda a, b, flag: [a - b, a + b][flag]
