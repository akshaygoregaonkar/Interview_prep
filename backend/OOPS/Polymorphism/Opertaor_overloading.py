
m1=5
m2=10
print(m1+m2) 
#=>behind the sence 
print(int.__add__(m1,m2))




class Student:
    def __init__(self,marks1,marks2):
        self.marks1=marks1
        self.marks2=marks2
    
    def __add__(self,other):
        marks1=self.marks1+other.marks1
        marks2=self.marks2+other.marks2
        s3=Student(marks1,marks2)
        return s3
    def __gt__(self,other):
        r1=self.marks1+self.marks2
        r2=self.marks1+self.marks2
        if r1>r2:
            return True
        else:
            return False
    def __str__(self):
        return f'{self.marks1} {self.marks2}'


s1=Student(10,20)
s2=Student(20,30)
s3=s1+s2
print(s3.marks1)

if s1>s2:
    print('s1 win')
else: 
    print('s2 win')


#if 
a=10
print(a) #it will print 10  it will call a.__str__() method behind the sence

#but if we print
#print(s1) #=> it will print memory add of s1
print(s1) 

