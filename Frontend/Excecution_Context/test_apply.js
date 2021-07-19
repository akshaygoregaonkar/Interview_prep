var obj={
    firstname:"Akshay",
    lastname:"goregaonkar"
}


function test(){
    console.log(this)
}

test.apply(obj)