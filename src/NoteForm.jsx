import { useState } from "react";

function NoteForm({onAddNote}) {
    const [noteText, setNoteText] = useState("");

    function textChange(e) {
        setNoteText(e.target.value);
    }

    function submit() {
        if (noteText === ""){
            return ;
        }
        onAddNote(noteText);
        setNoteText("");
    }

    return(
        <div className="note-form">
            <textarea
            value={noteText}
            onChange={textChange}
            />
            <br />
            <button onClick={submit}>Add</button>
        </div>
    );
}
export default NoteForm;