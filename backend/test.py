"""
cars=["audi","audi","audi","bmw","jaguar","jaguar"]
final_car_count={"audi":3,"bmw":1,"jaguar":2}
"""

cars=["audi","audi","audi","bmw","jaguar","jaguar"]
# print(cars.count("audi"))

# print(len(cars))
# print(cars.index('audi'))
# print(cars.pop())
# print(cars)

final_car_count={}
for car in cars:
    if car not in final_car_count:
        final_car_count.update({car:1})
    else:
        final_car_count.update({car:final_car_count[car]+1})

print(final_car_count)
for key,value in final_car_count.items():
    print(key)
    print(value)

"""
def my_decorator(function):
    def wrapper():
        func=function()
        return f'<h1>{func}</h1>'
    return wrapper

@my_decorator
def test():
    return "my String"

print(test())
"""






# ternary operator 
a,b=10,20
c=10 if a>b else 20 
print(c)