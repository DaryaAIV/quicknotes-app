import { useState, useEffect } from 'react';
import NoteForm from "./NoteForm";
import NoteCard from "./NoteCard";
import './App.css'

const CATEGORIES = [
  { id: "personal", name: "Personal", color: "#fff9c4" },
  { id: "work", name: "Work", color: "#ffcdd2" },
  { id: "study", name: "Study", color: "#c8e6c9" },
  { id: "urgent", name: "Urgent", color: "#e1bff7" }
];

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("myNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  function addNote({ title, noteText, category }) {
    const newNote = {
      id: Date.now(),
      title: title,
      text: noteText,
      category: category,
      noteDate: new Date()
    };

    setNotes([...notes, newNote]);
  }

  function deleteNote(idToDel) {
    const currNotes = notes.filter(note => note.id !== idToDel);
    setNotes(currNotes);
  }

  function updateNote(noteId, { title, text , category}) {
    const updateNotes = notes.map(note => {
      if (note.id === noteId) {
        return {
          ...note,
          title: title,
          text: text,
          category: category,
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
        <NoteForm onAddNote={addNote} categories={CATEGORIES} />
        <div className="note-grid">
          {notes.map((oneNote) => (
            <NoteCard key={oneNote.id} note={oneNote} noteToDelete={deleteNote} noteToUpdate={updateNote} categories={CATEGORIES} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
