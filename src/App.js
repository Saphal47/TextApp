import React ,{useState} from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Outlet
} from "react-router-dom";



function App() {
  const [darkmode,setDarkMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
      //type: type of alert msg
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1000);

    }
  
  const togglemode = () => {
    if(darkmode === 'light'){
       setDarkMode('dark');
       document.body.style.backgroundColor = 'rgb(9 5 72)';
       showAlert(" Dark Mode Enabled","Success");
       document.title="TextApp-DarkMode";
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode Enabled","Success");
      document.title="TextApp-Home";
    }
  }

  return (
    <BrowserRouter>
      <div className="App-header">
      <Navbar title="TextEditor" abtText="About" mode={darkmode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      {/*passing the alert state in this var */}
      
      {/*passing it in textbox to display alert msg while clicking these btns */}           
       <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/">
          <Textbox heading="Enter your message"  mode={darkmode} showAlert={showAlert} />
        </Route>
      </Switch>
       {/*We use exact path for complete matching by React*/}
      
    </div>
  </BrowserRouter>  
  );
}

export default App;

//Now we are seeing the alerts as they are hanged and once cut they disappear
//& load after refresh

//React router will help in viewing both About and Textbox page smoothly