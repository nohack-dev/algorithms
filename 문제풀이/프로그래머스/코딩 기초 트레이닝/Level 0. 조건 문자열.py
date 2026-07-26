def solution(ineq: str, eq: str, n: int, m: int) -> int:
    # 딕셔너리를 이용한 방식
    # return int(
    #     {
    #         "<=": n <= m,
    #         ">=": n >= m,
    #         ">!": n > m,
    #         "<!": n < m,
    #     }[ineq + eq]
    # )

    answer = 0

    if n < m and ineq == "<":
        answer = 1
    elif n > m and ineq == ">":
        answer = 1
    elif n == m and eq == "=":
        answer = 1

    return answer


print(solution("<", "=", 20, 50))
print(solution(">", "!", 41, 78))
