"""
dict={'1':1,'2':2,'3':3}
"""

test_dict ={ str(i):i+1 for i in range(1,4)}
print(test_dict)



cars=["audi","audi","audi","bmw","jaguar","jaguar"]
result_car={}

for car in cars:
    if car not in result_car:
        result_car.update({car:1})
    else:
        result_car.update({car: result_car[car]+1})
print(result_car)