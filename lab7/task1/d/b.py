n = int(input())
arr = list(map(int,input().split()))
print(arr)

for i in range(n):
    if(arr[i] % 2 == 0):
        print(arr[i], end = " ")