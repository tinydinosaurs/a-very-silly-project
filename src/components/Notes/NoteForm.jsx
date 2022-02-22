import React from 'react';

const NoteForm = ({
    addNote,
    newNote,
    handleNoteChange,
    disabled,
    errorMsg,
    errorMsgDisplay,
    handleToggleImportant,
}) => {
    return (
        <div className='Notes__form'>
            <h2>Add Note</h2>
            <form onSubmit={addNote} className='Notes__form__container'>
                <div className='Notes__form__inputs'>
                    <input
                        type='text'
                        className='Notes__form__text'
                        placeholder='add a new note'
                        value={newNote}
                        onChange={handleNoteChange}
                    />
                    <label className='switch'>
                        <input
                            type='checkbox'
                            onChange={handleToggleImportant}
                        />
                        <span className='slider round'></span>
                        <span className='label'>is this note important?</span>
                    </label>
                </div>

                <button
                    className='btn, Notes__form__btn'
                    type='submit'
                    disabled={disabled}
                >
                    save
                </button>
            </form>
            <p className={errorMsgDisplay}>{errorMsg}</p>
        </div>
    );
};

export default NoteForm;
