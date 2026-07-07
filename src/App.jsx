import { useState } from 'react';
import NoteForm from "./NoteForm";
import NoteCard from "./NoteCard";
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  function addNote(noteText) {
    const newNote = {
      text: noteText,
      noteDate: new Date()
    };

    setNotes([...notes, newNote]);
  }

  return (
    <>
      <div className='App'>
        <h1>QuickNotes</h1>
        <NoteForm onAddNote={addNote}/>
        <div className="note-grid">
            {notes.map((oneNote, index) => (
              <NoteCard key={index} note={oneNote}/>
            ))}
        </div>
      </div>
    </>
  )
}

export default App
