n = int(input())
arr = list(map(int,input().split()))
print(arr)

sum = 0 

for i in range(n):
    if(arr[i] < 0):
        sum += 1
    
print(sum)
