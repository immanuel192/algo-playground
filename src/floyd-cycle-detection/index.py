def floyd(inp):
    t = inp[0]
    h = inp[0]
    while True:
        t = inp[t]
        h = inp[inp[h]]
        if (t == h):
            break
    p1 = inp[0]
    p2 = t
    while (p1 != p2):
        p1 = inp[p1]
        p2 = inp[p2]
    return p1


print(floyd([1, 3, 4, 2, 2]))
