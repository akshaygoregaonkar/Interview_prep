def PrimeNo(num):
    flag=False
    if num>1:
        for i in range(2,num):
            if num%i==0:
                flag=True
                break
            
    if flag:
        print("not a prime no")
    else:
        print('prime')
    
       
 
       


PrimeNo(407)

PrimeNo(11)