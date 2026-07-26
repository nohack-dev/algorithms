def solution(number: int, n: int, m: int) -> int:
    # 논리 연산을 이용한 방식
    return int(number % n == 0 and number % m == 0)

    # return 1 if number % n == 0 and number % m == 0 else 0
