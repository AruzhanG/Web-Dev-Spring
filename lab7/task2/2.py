words = {}
n = int(input())

for _ in range(n):
    word = input().strip()
    words[word] = words.get(word,0) + 1


unique = len(words)
print(unique)

print(" ".join(map(str,words.values)))