import React from 'react'

// parent, child A, child B

// => state ==> { name: 'Your Name' }

// child A ==> label => Name: 'Your Name' // John D

// child B ==> text box and button ==> 'Your Name' ==> 'John D' => click button 
export default class Parent extends React.Component{
    constructor(Props){
        super(Props)
        this.state={name:"Akshay"}
    }
    render(){
        return(
        <div>

        </div>)
    }
}