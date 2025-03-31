import math
n = int(input())
i = 1
while i <= n:
    if math.isqrt(i) ** 2 == i:
        print(i)
    i += 1


