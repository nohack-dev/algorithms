def solution(num: int, n: int) -> int:
    # not을 활용한 방식
    # 파이썬에서는 bool이 int를 상속하고 있다.
    # return int(not num % n)

    return 1 if num % n == 0 else 0
