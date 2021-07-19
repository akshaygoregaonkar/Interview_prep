from functools import partial

def add (a,b,c):
    print(a+b+c)


add_num=partial(add,1,4)
add_num(7)