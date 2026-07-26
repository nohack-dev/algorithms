def solution(str1: str, str2: str) -> str:
    answer = ""

    # 인덱스를 이용한 방식
    # for i in range(len(str1)):
    #     answer += str1[i]
    #     answer += str2[i]

    # zip을 이용한 방식
    answer = ("").join(a + b for a, b in zip(str1, str2))

    return answer


print(solution("aaaaa", "bbbbb"))
