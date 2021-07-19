# from datetime import datetime,date,timedelta

# def printdate(n):
#     start_date=date.today()
#     delta=timedelta(days=1)
#     count=0
#     while n >count:
#         start_date+=delta
#         count+=1
#         yield start_date

    
# result=printdate(5)
# for i in result:
#     print(i)
    
# my_list=[1,2,4,5,6,7,10]
# def binary_serach(arr,x):
#     fist=0
#     last=len(arr)-1
#     while fist<=last:
#         mid=(fist+last)//2
#         if arr[mid]==x:
#             return "found"
#         else:
#             if arr[mid]<x:
#                 first=mid+1
#             else:
#                 last=mid-1
#     return "not found"
    


# print(binary_serach(my_list,1))




# #prime no
# def prime(num):
#     flag=True
#     for i in range(2,num-1):
#         if num%i==0:
#             flag=False
#             break
#     return flag
            
# result=prime(10)
# if result== True:
#     print("prime")
# else:
#     print('NOT')
    

#selection sort
mylist=[1,7,4,6,7,2,10]

# def selection_sort(arr):
#     for i in range(0,len(arr)):
#         minpos=i
#         for j in range(i,len(arr)):
#             if arr[j]<arr[minpos]:
#                 minpos=j
#         temp=arr[i]
#         arr[i]=arr[minpos]
#         arr[minpos]=temp
#     return arr

# print(selection_sort(mylist))

# def bubblesort(arr):
#     for i in range(len(arr)-1,0,-1):
#         for j in range(i):
#             if arr[j]>arr[j+1]:
#                 temp=arr[j]
#                 arr[j]=arr[j+1]
#                 arr[j+1]=temp

#     return arr
 
# print(bubblesort(mylist))


# from datetime import datetime,timedelta

# def printdates(n):
#     current=datetime.now()
#     delta=timedelta(days=1)
#     count=0
#     while n>count:
#         current+=delta
#         count+=1
#         yield current

# result=printdates(5)
# for i in result:
#     print(i)

my_list=[1,2,3,4,5,6,7]
# def binary_search(arr,x):
#     first=0
#     last=len(arr)
#     while first<last:
#         mid=(first+last)//2
#         if arr[mid]==x:
#             return 'FOUND'
#         if arr[mid]<x:
#             first=mid+1
#         else:
#             last=mid-1
#     return "NOT Found"

# print(binary_search(my_list,10))

# def linear_search(arr,x):
#     for i in range(len(arr)):
#         if x==arr[i]:
#             return "FOUND"

#     return "NOT FOUND"
        
# print(linear_search(my_list,10))
    
    

# my=[1,2,3,4,5]
# result=filter(lambda x:x>2,my)
# print(result)

# test=(i for i in range(10))
# print(type(test))
# test1=[i for i in range(10)]
# print(type(test1))