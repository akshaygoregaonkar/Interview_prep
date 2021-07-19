
# def test():
#     yield 1
#     yield 2
#     yield 3
#     yield 4


# values=test()
# print(values)
# print(values.__next__())
# print(values.__next__())


def square():
    n=1
    while n<=10:
        sq=n*n
        n+=1
        yield sq

values=square()
for i in values:
    print(i)



# li=[1,3,5,7,8]
# itr=iter(li)
# print(itr.__next__())