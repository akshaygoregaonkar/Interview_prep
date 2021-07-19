import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataProviver from './componets/ContextApi'
// import Test from './componets/Test';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './componets/Reducer/reducer'

const initialvalue={
  userdetails:[]
}
const store=createStore(reducer,initialvalue)

ReactDOM.render(
  <React.StrictMode>
     <DataProviver>
       <Provider store={store}>
       <App /> 
       </Provider>
     
     </DataProviver> 
    {/* <Test/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
