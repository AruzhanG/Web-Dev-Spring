"""
def find_min(a, b, c,d):
    if(a < b and a < c and a < d ):
        return a
    elif (b < a and b< c and b < d):
        return b
    elif (c < a and  c < b and c < d):
        return c
    else:
        return d
    
a, b, c, d = map(int, input().split())

result = find_min(a, b, c, d)
print(result)"""

def find_min(*args):
    return min(args)

numbers = list(map(int,input().split()))
if len(numbers) != 4:
    print("Error")
else:
    print(find_min(*numbers))