x = int(input())
d = int(input())

count = 0

while x > 0:
    print(f"Проверяем цифру {x % 10}")  # Отладочный вывод
    if x % 10 == d:
        count += 1
    x //= 10  # Убираем последнюю цифру

print("Результат:", count)
