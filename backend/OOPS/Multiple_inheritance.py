class A:
    def __init__(self):
        self.name="A"
        print("in it A")
        print(self.name)
    def feature1(self):
        print("feature A-1")



class B:
    def __init__(self):
        print("in it B")

    def feature1(self):
        print("feature B-1")
    def feature2(self):
        print("feature 2")


class C(A,B):
     def __init__(self):
        # super().__init__()
        B.__init__(self)
        print("in it C")
        self.name="Akshay"
     def feat(self):
        B.feature1()
        print("feature in C")

aObj=A()
# b=Obj=B()
cObj=C()
# cObj.feature1()
# cObj.feat()
