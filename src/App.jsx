import { useState } from 'react'
import './App.css'
import { jsPDF } from "jspdf";

function App() {
  const [text, setText] = useState("")
  const [note, setNote] = useState([]);

  const handleSumbit = () => {
    e.preventDefault();
    setNote([...note, text])
    setText("")

  }
  const handleClick = (e) => {
    e.preventDefault();
    if (text.length == 0) return 

    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("a4.pdf");
  }
  return (
    <div className='container'>
      <h1>Notes Saver</h1>
      <form className='myform' onSubmit={handleSumbit}>
        <textarea cols="90" rows="20" className='textfield' placeholder='Write Notes Here ...'
          value={text}
          onChange={(e) => { setText(e.target.value) }}
        ></textarea>
        <button className='btn' onClick={handleClick}>Download</button>
      </form>
    </div>
  )
}

export default App
