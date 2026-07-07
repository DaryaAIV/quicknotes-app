import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
function NoteCard({ note, noteToDelete }) {

    const [opened, { open, close }] = useDisclosure(false);

    function deleteClick(e) {
        e.stopPropagation();
        const isDelete = confirm("Are you sure you want to delete your note?")
        if (isDelete) {
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

    return (
        <>
            <Modal opened={opened} onClose={close} centered withCloseButton={false}>
                <div>
                    {note.title ? <h2>{note.title}</h2> : null}
                    <h3>{note.text}</h3>
                    <p>date: {formatDate}</p>
                </div>
            </Modal>
            <div className="card" onClick={open}>
                <button className="delete-btn" onClick={deleteClick}>X</button>
                {note.title ? <h2>{note.title}</h2> : null}
                <h3>{note.text}</h3>
                <p className="note-date">date: {formatDate}</p>

            </div>
        </>
    );
}
export default NoteCard;