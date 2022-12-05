import React ,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

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
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode Enabled","Success");
    }
  }

  return (
    <div className="App-header">
      <Navbar title="TextEditor" abtText="Details" mode={darkmode} togglemode={togglemode}/>
      <Alert alert={alert}/>

      <Textbox showAlert={showAlert} heading="Enter Your message" mode={darkmode}/>
      {/*passing it in textbox to display alert msg while clicking these btns */}
      {/*passing the alert state in this var */}
    </div>
  );
}

export default App;

//Now we are seeing the alerts as they are hanged and once cut they disappear
//& load after refresh