# def decorator(fun):
#     def wrapper():
#         funcall=fun()
#         return f'<h1>{funcall}</h1>'
#     return wrapper

# # @decorator
# def say_hello():
#     return "my string"

# # print(say_hello())

# print(decorator(say_hello)())



def decorator_with_agrument(testfunc):
    def wrapper(a,b):
        test=testfunc(a,b)
        return f"<h1>{test}<h1/>"
    return wrapper

@decorator_with_agrument
def cities(a,b):
    return f"{a} {b}"

print(cities("mum","pune"))

# print(decorator_with_agrument(cities)("mum","pune"))


