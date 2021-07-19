my_list=[i for i in range(10)]
new_list=map(lambda x:x*2,my_list)
print(type(new_list))
print(list(new_list))