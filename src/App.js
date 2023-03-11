import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import { useEffect, useState } from 'react';
//components
import AddNote from './components/AddNote';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    if (localStorage.getItem('notes')) {
      setNotes(JSON.parse(localStorage.getItem('notes')))
    }
  }, [])

  const addNotes = (note) => {
    setNotes([note, ...notes])
    localStorage.setItem('notes', JSON.stringify([...notes, note]))
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container' >
        <Routes>
        <Route path='/' element={<AddNote addNotes={addNotes} />} />
          <Route path='/notes' element={<Notes notes={notes} deleteNote={deleteNote} />} />
        </Routes>
       </div>
      </BrowserRouter >
    </div >
  );
}

export default App;
