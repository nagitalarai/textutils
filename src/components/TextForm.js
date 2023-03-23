import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick =() =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Coverted to UpperCase!","success");
  }
  const handleLoClick =() =>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Coverted to LowerCase!","success");

  }
  const handleClearClick =() =>{
    console.log("Clear was clicked" + text);
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared!","success");
  }
  const handleCopy=() =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");

  }
  const handleRemove =() =>{
    let newText = text.split(/ [ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!","success");
  }

  const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value);
  }


  const [text, setText] = useState('')
  return (
    <>
    <div className="container" style= {{color : props.mode === 'dark'?'white': 'black' }}>
        <h1> {props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#252939': 'white' , color : props.mode === 'dark'?'white': 'black'  }} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleRemove}>Remove Extra Space</button>

   
    </div>
    <div className='container my-3' style= {{color : props.mode === 'dark'?'white': 'black' }}>
      <h1>Your Text Summary</h1>
      <p>
        {text.split(" ").length} words and {text.length} Characters.
      </p>
      <p>
      {0.008 * text.split(" ").length} Minutes read
      </p>
      <h2>
        Preview
      </h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
