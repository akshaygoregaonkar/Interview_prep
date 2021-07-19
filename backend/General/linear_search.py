my_list=[1,2,4,5,6,7,8,1,2]
def linear_search(arr,num):
    for i in range(len(arr)):
        if num==arr[i]:
            return f'fount at and index {i}'
        else:
            return "not found"

print('hee')

if __name__ =='__main__':
    print(linear_search(my_list,8))
