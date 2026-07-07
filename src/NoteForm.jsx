import { useState } from "react";

function NoteForm({ onAddNote }) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");

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

        setNoteTitle("");
        setNoteText("");
    }

    return (
        <div className="note-form">
            <input type="text" placeholder="Title" value={noteTitle} onChange={titleChange} />
            <textarea value={noteText} onChange={textChange} />
            <br />
            <button onClick={submit}>Add</button>
        </div>
    );
}
export default NoteForm;