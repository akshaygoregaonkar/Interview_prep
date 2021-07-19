class Student:
    def __init__(self,name,rollno):
        self.name=name
        self.rollno=rollno
        # self.lap=self.Laptop() # we can create object of inner class inside outer class constructor


    def show(self):
        print(self.name,self.rollno)
        # self.lap.show()
    
    class Laptop:
        def __init__(self):
            self.processor="i5"
            self.ram='8GB'
        def show(self):
            print(self.processor,self.ram)

    
s1=Student('Akshay',1)
s2=Student('sahil',2)
s1.show()
lap=Student.Laptop() #object of inner class 
lap.show()