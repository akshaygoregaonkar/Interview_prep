# from datetime import date, timedelta,datetime

# def printdate(n):
#     start=datetime.now()
#     # start=date.today()
#     delta=timedelta(days=1)
#     count=0
#     while count<n:
#         start+=delta
#         count+=1
#         yield start
        

# result=printdate(5)
# for i in result:
#     print(i)





# def squareofNumbers(n):
#     num=1
#     while num<=n:
#         sq=num*num
    
#         num+=1
#         yield sq
    
# result=squareofNumbers(10)
# for i in result:
#     print(i)






def testDecorator(func):
    def warrper():
        test=func()
        return f"<h1>{test}</h2>"
    return warrper



def say_hello():
    return "hiiiii"

print(testDecorator(say_hello)())
