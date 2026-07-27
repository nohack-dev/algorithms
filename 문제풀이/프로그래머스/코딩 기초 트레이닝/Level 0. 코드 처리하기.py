def solution(code: str) -> str:
    answer = []
    mode = 0

    # javascript의 배열 메서드와 비슷한 형태
    for idx, char in enumerate(code):
        if char == "1":
            mode = not mode
        elif idx % 2 == mode:
            answer.append(char)

    return "".join(answer) or "EMPTY"


print(solution("abc1abc1abc"))
