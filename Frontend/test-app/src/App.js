import React, { Component, useContext, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserDetails from './componets/UserDetails'
import Hoc from './componets/Hoc'
import { DataContext } from './componets/ContextApi';
import { connect } from 'react-redux'
import EditUser from './componets/EditUser';
import Home from './componets/Home';


function App(Props) {
  const { addValToStore, state, userdetails } = Props
  const context = useContext(DataContext)
  useEffect(() => {

    if (context.state.length != 0) {
      addValToStore(context.state)
    }


  }, [context.state])
  console.log(state, "store value")
  console.log(userdetails, "userdetail")


  return (
    <div className="App">

      {/* <h1>User Detail</h1>
        {userdetails.map((item,index)=><div key={index}>
          {item.name}
        </div>)} */}

      <BrowserRouter>
        <Switch>


          <Route exact path='/userdetail/edit/:id' component={EditUser} />
          <Route exact path='/userdetail' render={(routeProps) => <UserDetails {...routeProps} />} />
          <Route exact path='/' component={Home} />



        </Switch>

      </BrowserRouter>

    </div>

  );
}
const mapStateToProps = state => ({
  state: state,
  userdetails: state.userdetails
})
const mapDispatchToProps = dispatch => ({
  addValToStore: val => dispatch({ type: "ADD", payload: val })
})
export default connect(mapStateToProps, mapDispatchToProps)(App)


// export default Hoc(App);



// export default class App extends React.Component{
//   constructor(Props){
//     super(Props)
//   }
//   render(){
//     console.log(this.context)
//     return(
//       <div>
//         <h1>User Detail</h1>
//         {this.context.map((item,index)=><div>
//           {item.name}
//         </div>)}
//       </div>
//     )
//   }
// }


//  App.contextType=DataContext
