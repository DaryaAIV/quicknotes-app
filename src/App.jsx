import { useState, useEffect } from 'react';
import NoteForm from "./NoteForm";
import NoteCard from "./NoteCard";
import './App.css'

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("myNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  function addNote({ title, noteText }) {
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

  function updateNote(noteId, { title, text }) {
    const updateNotes = notes.map(note => {
      if (note.id === noteId) {
        return {
          ...note,
          title: title,
          text: text,
          updateDate: new Date()
        };
      }
      return note;
    });
    setNotes(updateNotes);
  }

  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div className='App'>
        <h1>QuickNotes</h1>
        <NoteForm onAddNote={addNote} />
        <div className="note-grid">
          {notes.map((oneNote) => (
            <NoteCard key={oneNote.id} note={oneNote} noteToDelete={deleteNote} noteToUpdate={updateNote} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
