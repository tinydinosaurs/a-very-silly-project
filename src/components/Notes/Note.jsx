import React from 'react';

const Note = ({ note, toggleActive, deleteNote }) => {
    const activeLabel = note.active ? 'restore' : 'deactivate';
    const className = note.active ? 'Note__inactive' : 'Note__active';

    return (
        <li key={note.date} className={className}>
            {note.content}
            <button className='Note__toggle-done' onClick={toggleActive}>
                {activeLabel}
            </button>
            <button className='Note__toggle-done' onClick={deleteNote}>
                Delete
            </button>
        </li>
    );
};

export default Note;
