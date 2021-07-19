# def facto(n):
#     if(n==1):
#         return 1
#     else:
#         return n*facto(n-1)
    

# print(facto(10))






def fibo(n):
    n1=0
    n2=1
    count=0
    while n> count:
        count+=1
        yield n1
        next=n1+n2
        n1=n2
        n2=next

result=fibo(10)
for i in result:
    print(i)
