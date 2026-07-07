import { useState } from 'react';
import NoteForm from "./NoteForm";
import NoteCard from "./NoteCard";
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  function addNote({title, noteText}) {
    const newNote = {
      id: Date.now(),
      title: title,
      text: noteText,
      noteDate: new Date()
    };

    setNotes([...notes, newNote]);
  }

  function deleteNote(idToDel) {
    const currNotes = notes.filter(note => note.id !== idToDel);
    setNotes(currNotes);
  }

  return (
    <>
      <div className='App'>
        <h1>QuickNotes</h1>
        <NoteForm onAddNote={addNote} />
        <div className="note-grid">
          {notes.map((oneNote) => (
            <NoteCard key={oneNote.id} note={oneNote} noteToDelete={deleteNote} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
