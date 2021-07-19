class A:
    def feature1(self):
        print('feature1')

    def feature2(self):
         print('feature2')
        


class B(A):
    def feature3(self):
        print('feature3')

    def feature4(self):
         print('feature4')


class C(B):
    def feature5(self):
        print('feature5')

    def feature6(self):
         print('feature6')


aObj=A()
bObj=B()
cObj=C()
