x = int(input())

r = 0

while x > 0:
    digit = x % 10
    r = r * 10 + digit
    x //= 10

print(r)
