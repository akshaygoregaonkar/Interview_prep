class Test:
    def __init__(self):
        self.name='Akshay'
        self._username='akshay@gmail.com'# single underscore means protected 

        self.__password="pass123" # private member double userscore
    def show_info(self):
        print(f' name is {self._username} and password {self.__password}')
    def __password_info(self):
        print(self.__password)

obj=Test()
obj.show_info()

print(obj._username)
        
class TestChild(Test):
    pass

objChild=TestChild()
objChild.show_info()
# we can acces protected member of class inside the class and subclass of that class and method and objeect of that class
#to prevent access of attribute and method outside the class we have make private by double unserscore

# to access private member outside the classs we use name mangleing

print(obj._Test__password) #name mangeled => objet_name._className__privateMember
obj._Test__password_info()
# objChild._TestChild__password_info() 
