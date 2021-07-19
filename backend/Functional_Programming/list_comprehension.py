# a= [i for i in range(5)]
# print(a)
# b=[i for i in range(10) if i%2]
# print(b)

stringg="abccdfigkabcyuguusgugdicdldl"
"""
vovewls=[]
for i in stringg:
    if i in ['a','e','i','o','u']:
        vovewls.append(i)
"""

vovewls=[i for i in stringg if i in['a','e','i','o','u']]
print(vovewls)

"""
create matrix
[
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],

]
"""

matrix=[[1,2,3,4] for i in range(3)]
print(matrix)
"""
#odd numbers in matrix
odd_matrix=[]
for i in matrix:
    for j in i:
        if j%2==1:
            odd_matrix.append(j)

print("odd matrix",odd_matrix)

"""
odd_matrix=[j for i in matrix for j in i if j%2==0]
print("odd matrix",odd_matrix)

result_sum_matrix=sum([ j for i in matrix for j in i if j%2==0])
print(result_sum_matrix)
