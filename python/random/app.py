import random

# num = random.randint(0,5)
# print(num)

sort = [4,7,6,9,0,4]

# sort.sort(reverse=True) == returns None. Effects the sort arr direclty
#print(sort)

def sortArr(arr):
    sorted = []
    for elem in arr:
        least = elem
        for second in arr:
            if(second < elem):
                least = second
        sorted.append(least)
    print(sorted)


sortArr(sort)
