mystring="i love my india"

count=0
for i in mystring:
    if i in ['a','e','i','o','u']:
        count+=1

print(count)


result=[ i for i in mystring if i in ['a','e','i','o','u']] 
print(result)