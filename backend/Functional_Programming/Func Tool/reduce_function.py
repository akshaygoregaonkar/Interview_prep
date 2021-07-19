from functools import reduce

my_list =[i for i in range(4,20)]
sumOfList=reduce(lambda x,y:x+y,my_list)
print(sumOfList)