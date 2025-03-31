def election(x,y,z):
    return (x + y + z) >= 2

x,y,z = map(int, input().split())
print(int(election(x,y,z)))