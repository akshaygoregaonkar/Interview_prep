class CircularLinkedList:
    def __init__(self,value):
        self.value=value
        self.next=None

c=CircularLinkedList(1)
c.next=CircularLinkedList(2)
c.next.next=CircularLinkedList(3)
c.next.next.next=CircularLinkedList(4)
head=c
while c!=None:
    print(c.value)
    c=c.next


        