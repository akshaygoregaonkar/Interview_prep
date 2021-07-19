my_arr=[1,6,8,104,4,6,8,74]


def largestNo(arr):
    largest=arr[0]
    for i in range(len(arr)):
        if largest<=arr[i]:
            largest=arr[i]
    return largest



print(largestNo(my_arr))
        
