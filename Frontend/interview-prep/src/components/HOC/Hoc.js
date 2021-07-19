import React, { useState, useEffect } from 'react'
const Hoc =(Wrappedcomponent) => {

    return class extends React.Component{
        constructor(props){
            super(props)
            this.state={userList:[]}
        }
        componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>this.setState({userList:data}))

        }
        render(){
            return <Wrappedcomponent {...this.props} userList={this.state.userList}/>
        }
    }
  }

export default Hoc


