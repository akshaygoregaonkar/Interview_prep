class Linkedlist:
    def __init__(self,value):
        self.value=value
        self.next=None

    
a=Linkedlist(2)
a.next=Linkedlist(4)
a.next.next=Linkedlist(6)


head=a
while a!=None:
    print(a.value)
    a=a.next


