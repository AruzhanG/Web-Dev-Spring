def prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n ** 0.5) + 1, 2):  # Check odd numbers up to sqrt(n)
        if n % i == 0:
            return False
    return True

n = int(input("Enter a number: "))
if prime(n):
    print("prime")
else:
    print("composite")
