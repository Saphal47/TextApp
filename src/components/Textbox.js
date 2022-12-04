import React , {useState} from 'react'

export default function Textbox() {

  const [text, setText] = useState("Type here");
  // text = "type your message";
  // setText("type your message")
  const upperCase = ()=>{
      console.log("Uppercase btn clicked");
      let newText = text.toUpperCase();
      setText(newText);
  }

  const LowerCase = ()=>{
    console.log("Lowercase btn clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }


  const clearText = ()=>{
    let newText = '';
    setText(newText);
  }

  const invText = ()=>{
    console.log("Text Inverted");
    let splitString = text.split("");
    let revWord = splitString.reverse();
    let newText = revWord.join("");
    setText(newText);
  }

  const onChangeHandler = (event)=>{
    console.log("onchange called");
    setText(event.target.value);
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Enter your message</h1></label>
        <textarea className="form-control" value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="8">Type Here</textarea>
      </div>

      <button type="button" onClick={upperCase} className="btn btn-primary mx-1">ConvertToUpperCase</button>
      <button type="button" onClick={LowerCase} className="btn btn-primary mx-1">ConvertToLowerCase</button>
      <button type="button" onClick={clearText} className="btn btn-primary mx-1">Clear</button>
      <button type="button" onClick={invText} className="btn btn-primary mx-1">Invert</button>

      <div className="container">
        <h3>Text Summary</h3>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
      </div>
    </>
    
  )
}
