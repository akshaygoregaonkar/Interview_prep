import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'



class UserDetails extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   id: null
    // };
  }
  // componentDidMount() {
  //   const { id } = this.props.match.params
  //   this.setState({ id: id })
  // }

  render() {
    // console.log(this.props.data)
    return (
      <div>
        <h1>User details</h1>
        {this.props.userdetails.map((item, index) => <div key={index}>
           <Link to={`/userdetail/edit/${item.id}`}>{item.name}</Link>
        </div>)}

      </div>
    );
  }
}
const mapStateToProps=state=>({state:state,
  userdetails:state.userdetails})
export default connect(mapStateToProps)(UserDetails)
