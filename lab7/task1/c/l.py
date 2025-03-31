import random

n = int(input())

numbers = [random.randint(-100, 100) for _ in range(n)]

print(numbers)
print(sum(numbers))
