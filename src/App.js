import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    
  })
  
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
  const toggleMode = () =>{
    if (mode === 'light') {
     setMode('dark');
     document.body.style.backgroundColor = '#05163a';
     showAlert("Dark mode has been enabled", "success");
     document.title = 'TextUtils - Dark Mode';
     
    } else {
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enabled", "success");
     document.title = 'TextUtils - Light Mode';
    //  setInterval(() => {
    //  document.title = 'TextUtils is Amazing Mode';
      
    //  }, 2000);
    //  setInterval(() => {
    //  document.title = 'Install TextUtils Now';
      
    //  }, 1500);
     
    } 
   }

  return (
  <>
   { /* <Navbar title = "TextUtils" aboutText='About' /> */ }
{/* <Router> */}
<Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode}  aboutText ="About"/>
{/* <About/> */}
<Alert alert={alert}/>
<div className = "container my-3"> 
{/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
<TextForm showAlert={showAlert} heading = "Enter the Text to Analyze below" mode={mode}/>
          {/* </Route>
        </Switch> */}
         
         
      </div>
      {/* </Router> */}
 

    </>
  );
}

export default App;
