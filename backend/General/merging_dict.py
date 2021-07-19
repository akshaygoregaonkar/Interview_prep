# dict1 = {  'Ritika': 5, 'Sam': 7, 'John' : 10 }

# dict2 = {'Aadi': 8,'Sam': 20,'Mark' : 11 }
# dict3={**dict1,**dict2}
# print(dict3)
# print(id(dict1))
# print(id(dict3))



mylist=[1,2,4,[5,6],0]
new=[*mylist,5,3]
print(id(mylist))
print(id(new))
print(new)
print(id(mylist[3]))
print(id(new[3]))
