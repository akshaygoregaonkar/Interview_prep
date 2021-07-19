import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'

function EditUser(Props) {
    const{updateUser,userdetails}=Props
    const[temp,setTemp]=useState({})
     const { id} = Props.match.params
    
    console.log(Props)

    useEffect(()=>{
        const User=userdetails.find(item=>item.id==Number(id))
        setTemp(User)

    },[])

    const handleSumbit=()=>{
        updateUser(temp)
        Props.history.push('/userdetail')
    }

    return (
        <div>
            <h1>Edit user</h1>
            <div>
               <label> name:</label>
            <input onChange={(e)=>setTemp({...temp,name:e.target.value})} value={temp.name?temp.name: ""}/>
            </div>
            <div>
            <label> email:</label>
            <input onChange={(e)=>setTemp({...temp,email:e.target.value})} value={temp.email}/>
            </div>
           
         
            <button onClick={handleSumbit}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => ({
    state: state,
    userdetails: state.userdetails
  })
  const mapDispatchToProps = dispatch => ({
    updateUser: val => dispatch({ type: "UPDATE", payload: val })
  })
  export default connect(mapStateToProps, mapDispatchToProps)(EditUser)

