import React , {useState} from 'react'

export default function Textbox(props) {

  const [text, setText] = useState("Type here");
  // text = "type your message";
  // setText("type your message")
  const upperCase = ()=>{
      console.log("Uppercase btn clicked");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert(" Converted to UpperCase","Success");
      //applied using props as applied in Textbox
  }

  const LowerCase = ()=>{
    console.log("Lowercase btn clicked");
    let newText = text.toLowerCase();
    props.showAlert(" Converted to LowerCase","Success");
    setText(newText);
  }

  const copyText = ()=>{
    console.log("text Copied");
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!","Success");
  }

  const clearText = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert(" Text Cleared","Success");
  }

  const invText = ()=>{
    console.log("Text Inverted");
    let splitString = text.split("");
    let revWord = splitString.reverse();
    let newText = revWord.join("");
    setText(newText);
    newText==="" ? props.showAlert(" Enter the text","Failure") : props.showAlert(" Text Inverted","Success");
  }

  const onChangeHandler = (event)=>{
    console.log("onchange called");
    setText(event.target.value);
  }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark' ? '#030317':'white',color:props.mode==='dark' ? 'white':'black'}} value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="8">Type Here</textarea>
      </div>

      <button disabled={text.length===0} type="button" onClick={upperCase} className="btn btn-primary mx-1 my-1">ConvertToUpperCase</button>
      <button disabled={text.length===0} type="button" onClick={LowerCase} className="btn btn-primary mx-1 my-1">ConvertToLowerCase</button>
      <button disabled={text.length===0} type="button" onClick={copyText} className="btn btn-primary mx-1 my-1">Copy Text</button>
      <button disabled={text.length===0} type="button" onClick={clearText} className="btn btn-primary mx-1 my-1">Clear</button>
      <button disabled={text.length===0} type="button" onClick={invText} className="btn btn-primary mx-1 my-1">Invert</button>
    </div>
      
      <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h3>Text Summary</h3>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
            {/* Using js regex split by whiteSpace or newline */}

        {/* .filter helps in clearing the empty array whose wordCnt===1 */}

        <p> {text==="" ? 0 : 0.008 * text.split(" ").length} min read</p>
        <h4>Preview</h4>
          {text.length>0 ? text: "Enter the text to preview"}
      </div>
    </>
    
  )
}
