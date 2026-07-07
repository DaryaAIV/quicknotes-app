import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

function NoteForm({ onAddNote, note }) {
    const [noteTitle, setNoteTitle] = useState(note ? note.title : "");
    const [noteText, setNoteText] = useState(note ? note.text : "");

    function textChange(e) {
        setNoteText(e.target.value);
    }

    function titleChange(e) {
        setNoteTitle(e.target.value);
    }

    function submit() {
        if (noteText === "") {
            return;
        }
        onAddNote({ title: noteTitle, noteText: noteText });
        if (!note) {
            setNoteTitle("");
            setNoteText("");
        }
    }

    return (
        <div className="note-form">
            <input type="text" placeholder="Title" value={noteTitle} onChange={titleChange} />
            <TextareaAutosize value={noteText} onChange={textChange} />
            <br />
            <button onClick={submit}>{note ? "Update" : "Add"}</button>
        </div>
    );
}
export default NoteForm;