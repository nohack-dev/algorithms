def solution(n: int, control: str) -> int:
    base = {"w": 1, "s": -1, "d": 10, "a": -10}

    return n + sum(base[c] for c in control)


solution(0, "wsdawsdassw")
