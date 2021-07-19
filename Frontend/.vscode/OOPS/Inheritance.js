class Snake{
    constructor(){

    }
    getColor(){
        return ' '
    }
    getLength(){
        return 0
    }
}

class Cobra extends Snake{
    constructor(sc,sl){
        super()
        this.snakeColor=sc
        this.snakeLength=sl
    }
    getColor(){
        return this.snakeColor
    }
    getLength(){
        return this.snakeLength
    }
    
}

c1=new Cobra("black",100)