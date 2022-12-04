import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <div className="App-header">
      <Navbar title="TextEditor" abtText="Details"/>
      <Textbox/>
    </div>
  );
}

export default App;
