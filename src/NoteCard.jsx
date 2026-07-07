
function NoteCard({note}){
    return(
        <div className="card">
            <h3>{note.text}</h3>
            <p>date: {note.noteDate.toString()}</p>
        </div>
    );
}
export default NoteCard;