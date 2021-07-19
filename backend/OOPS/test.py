class Test:
    class_name='Test'
    def __init__(self,name):
        self.name=name

    def Show(self):
        print(self.name)
    def last_name(self,lastname):
        print(self.name,lastname)
    
    @staticmethod
    def static_method(a):
        print("im Static",a)
    @classmethod
    def class_method(cls):
        print(cls.class_name)
    

obj=Test('Akshay')
obj.Show()
obj.last_name('Goregaonkar')
Test.class_method()
Test.static_method(10)

        