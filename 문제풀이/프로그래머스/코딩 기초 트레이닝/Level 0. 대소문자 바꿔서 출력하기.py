str = input()

# swapcase 사용한 예시
# print(str.swapcase())

# 대소문자 판별 메서드 사용한 예시
for c in str:
    if c.isupper():
        print(c.lower(), end="")
    else:
        print(c.upper(), end="")

print()
