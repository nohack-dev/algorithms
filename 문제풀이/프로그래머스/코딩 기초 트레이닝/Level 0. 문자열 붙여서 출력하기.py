str1, str2 = input().split(" ")

# 입력값을 분할해서 붙이는 방식
print("".join([str1, str2]))

# 입력값을 출력할 때 붙이는 방식
print(str1, str2, sep="")
print(f"{str1}{str2}")
