from datetime import date,timedelta


def perdelta(n):
    count=0
    curr =date.today()
    delta=timedelta(days=1)
    while count<n :
        count+=1
        curr += delta
        yield curr 

result=perdelta(5)
for i in result:
    print(i)

# for i in range(1,100,2):
#     print(i)

# obj={"b":10,"b":20,"c":30}
# for key,value in obj.items():
#     if value>15:
#         print(value)