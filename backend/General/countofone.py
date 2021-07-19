# li =[0,1,0,1,0,1] 
# totalsum=sum(li)
# count=len(li)-totalsum
# print(count)


# li = [1,2, None,3]
# print(len(li))


my_list=[1,2,7,1,1,7,7,1]

zero=list(filter(lambda a:a==1,my_list))
seven=list(filter(lambda a:a==7,my_list))
countOfseven=len(my_list)-len(zero)
countOfOne=len(my_list)-len(seven)
print(countOfOne)
print(countOfseven)