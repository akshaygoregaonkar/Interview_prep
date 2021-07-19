import json
x='{ "name":"akshay","age":20,"city":"goregaon"}'
y=json.loads(x)
print(y)
z=json.dumps(y)
print(type(z))
