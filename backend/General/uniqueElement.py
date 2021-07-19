arr=[1,2,3,4,2,4,5]

def isalreadyPresent(mylist,n):
    for i in mylist:
        if n==i:
            return True
    else:
        return False



def UniqueElement(mylist):
    result=[]
    for i in mylist:
        if isalreadyPresent(result,i)==False:
            result.append(i)
    return result


print(UniqueElement(arr))




