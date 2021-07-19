from abc import ABC,abstractmethod

class Test(ABC):
    def __init__(self,name):
        self.name=name
        print('hie')
    def description(self):
        print("hiw im in description")
    @abstractmethod 
    def test_abstarct(self,price):
        pass
    


class testChild(Test):
    
    
    def test_abstarct(self, price):
        return f' price of {self.name} is {price}'
    
obj=testChild('mango')
obj.description()
print(obj.test_abstarct(100))