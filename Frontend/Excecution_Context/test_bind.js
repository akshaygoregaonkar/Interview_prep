var obj={
    first_name:"Akshay",
    last_name:"Goregaonkar"
}
 
function test(){
    console.log(this)
}

test()

test.bind(obj) // in case of bind it does not invoked functiom immediatly
//test.bind(obj) is return replica of that fuction
var test=test.bind(obj)
test() //value of this is become obj

function test_para(a,b){
    console.log(this,a,b)
 }

test_para('abc','edf')
test_para=test_para.bind(obj)
test_para("abc","Ed")