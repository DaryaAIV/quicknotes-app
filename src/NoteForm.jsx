import { useState , useEffect} from "react";
import TextareaAutosize from "react-textarea-autosize";

function NoteForm({ onAddNote, note, categories = [] }) {
    const [noteTitle, setNoteTitle] = useState(note ? note.title : "");
    const [noteText, setNoteText] = useState(note ? note.text : "");
    const [category, setCategory] = useState(note ? note.category : "");

    useEffect(() => {
        if (!note && categories.length > 0 && !category) {
            setCategory(categories[0].id);
        }
    }, [categories, note, category]);


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
        onAddNote({ title: noteTitle, noteText: noteText, category: category });
        if (!note) {
            setNoteTitle("");
            setNoteText("");
            setCategory(categories[0]?.id || "");
        }
    }

    return (
        <div className="note-form">
            <input type="text" placeholder="Title" value={noteTitle} onChange={titleChange} />
            <TextareaAutosize value={noteText} onChange={textChange} />
            <br />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
            </select>
            <button onClick={submit}>{note ? "Update" : "Add"}</button>
        </div>
    );
}
export default NoteForm;