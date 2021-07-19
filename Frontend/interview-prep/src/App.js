
import './App.css';
import Debounce from './components/Debaunce_Thorottle/Debounce';
import Throttle from './components/Debaunce_Thorottle/Throttle';
import Parent from './components/HOC/Parent';

// import Test from './components/Test';
import TestParent from './components/HOC/TestParent';
import PropTypeParent from './components/PropType/PropTypeParent';


function App() {
  return (
    <div className="App">
     {/* <Test/> */} 
     {/* <TestParent/> */}
     {/* <Parent/> */}
     {/* <PropTypeParent/> */}
     {/* <Debounce/> */}
     <Throttle/>

    
         </div>
  );
}

export default App;
