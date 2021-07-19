import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userList:[]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(json=>this.setState({userList:json}))
  }

  render() {
    return (<div>
        {
        this.state.userList.map((item,ind)=><div key={item.id} style={{height:"30px", width:"200px", display:"inline-block", backgroundColor:"burlywood" , margin:"10px", textAlign:"center"}}><Link to={`/${item.id}`}>{item.name}</Link></div>)
        }
    </div>)
  }
}


