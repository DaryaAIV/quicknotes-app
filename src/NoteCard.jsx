
function NoteCard({note, noteToDelete}){

    function deleteClick(){
        const isDelete = confirm("Are you sure you want to delete your note?")
        if(isDelete){
            noteToDelete(note.id);
        }
    }
    const formatDate = note.noteDate.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });

    return(
        <div className="card">
            <h3>{note.text}</h3>
            <p className="note-date">date: {formatDate}</p>
            <button className="delete-btn" onClick={deleteClick}>X</button>
        </div>
    );
}
export default NoteCard;