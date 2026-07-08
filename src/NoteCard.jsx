import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import NoteForm from "./NoteForm";

function NoteCard({ note, noteToDelete, noteToUpdate, categories = [] }) {

    const [opened, { open, close }] = useDisclosure(false);

    function deleteClick(e) {
        e.stopPropagation();
        const isDelete = confirm("Are you sure you want to delete your note?")
        if (isDelete) {
            noteToDelete(note.id);
        }
    }
    const formatDate = new Date(note.noteDate).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });

    const formatUpdateDate = note.updateDate ? new Date(note.updateDate).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    }) : null;

    const currentCategory = categories.find(cat => cat.id === note.category);
    const cardColor = currentCategory ? currentCategory.color :"#d8e6f8";

    return (
        <>
            <Modal opened={opened} onClose={close} centered withCloseButton={false}>
                <NoteForm
                    note={note}
                    categories={categories}
                    onAddNote={(updatedData) => {
                        noteToUpdate(note.id, {
                            title: updatedData.title,
                            text: updatedData.noteText,
                            category: updatedData.category
                        });
                        close();
                    }}
                />
            </Modal>
            <div className="card" onClick={open} style={{ backgroundColor: cardColor }}>
                <button className="delete-btn" onClick={deleteClick}>X</button>
                {note.title ? <h2>{note.title}</h2> : null}
                <h3>{note.text}</h3>
                <p className="note-date">date: {formatDate}</p>
                {note.updateDate ? <p className="note-date">Updated: {formatUpdateDate}</p> : null}

            </div>
        </>
    );
}
export default NoteCard;