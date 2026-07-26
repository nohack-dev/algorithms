def solution(my_string: str, overwrite_string: str, s: int) -> str:
    return my_string[:s] + overwrite_string + my_string[s + len(overwrite_string) :]


print(solution("He11oWor1d", "lloWorl", 2))
print(solution("Program29b8UYP", "merS123", 7))
