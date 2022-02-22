import React from 'react';
import Note from './Note';

const NotesList = ({
    notesToShow,
    showAll,
    setShowAll,
    toggleActive,
    deleteNote,
}) => {
    return (
        <div className='Notes__list'>
            <ul>
                {notesToShow.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        toggleActive={() => toggleActive(note.id)}
                        deleteNote={() => deleteNote(note.id)}
                    />
                ))}
            </ul>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
        </div>
    );
};

export default NotesList;
