import random

n = int(input())
count = 0

numbers = [random.randint(-100, 100) for _ in range(n)]

print(numbers)

if(numbers == 0):
    count += 1

print(count)