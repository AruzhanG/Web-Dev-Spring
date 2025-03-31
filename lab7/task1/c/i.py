n = int(input())

i = 0
sum = 0
while i <= n:
    i = i + 1
    if n % i == 0:
        sum += 1

print(sum)
        