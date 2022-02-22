// TODO consolidate hooks?
import React, { useState, useEffect } from 'react';
import noteService from '../services/notes';
import NotesList from '../components/Notes/NotesList';
import NoteForm from '../components/Notes/NoteForm';

const Notes = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState('');
	const [checked, setChecked] = useState(false);
	const [showAll, setShowAll] = useState(true);
	const [errorMsg, setErrorMsg] = useState('');
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		noteService.getAll().then((initialNotes) => {
			setNotes(initialNotes);
		});
	}, []);

	// add new note from form input (manual version)
	const addNote = (e) => {
		e.preventDefault();
		// prevent submission if note already exists
		let note = notes.find((o) => o.content === newNote);
		if (note) {
			setErrorMsg('That note already exists!');
		} else {
			const noteObject = {
				content: newNote,
				date: new Date().toISOString(),
				important: checked,
			};
			noteService.create(noteObject).then((returnedNote) => {
				console.log('response: ', returnedNote);
			});
			setNotes(notes.concat(noteObject));
			setNewNote('');
			setDisabled(true);
		}
	};

	const handleToggleActive = (id) => {
		const note = notes.find((n) => n.id === id);
		const changedNote = { ...note, active: !note.active };
		noteService
			.update(id, changedNote)
			.then((returnedNote) => {
				setNotes(
					notes.map((note) => (note.id !== id ? note : returnedNote)),
				);
			})
			.catch((error) => {
				console.log("that note doesn't exist ", error);
				setNotes(notes.filter((n) => n.id !== id));
			});
	};

	const handleDeleteNote = (id) => {
		const note = notes.find((n) => n.id === id);
		if (window.confirm('you sure you wanna do this?')) {
			console.log(`delete ${note.id}`);
			noteService
				.delete(id)
				.then((returnedNote) => {
					setNotes(
						notes.map((note) =>
							note.id !== id ? note : returnedNote,
						),
					);
				})
				.catch((error) => {
					setNotes(notes.filter((n) => n.id !== id));
				});
		}
	};

	// handle changes to note input field
	const handleNoteChange = (e) => {
		setErrorMsg('');
		setNewNote(e.target.value);
		// disable submit if user deletes input
		if (e.target.value.length > 0) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	};

	const errorMsgDisplay =
		errorMsg.length === 0 ? 'error--hide' : 'error--show';

	const handleToggleImportant = (e) => {
		setChecked(!checked);
	};

	// filter important notes
	const notesToShow = showAll
		? notes
		: notes.filter((note) => note.important === true);

	const formProps = {
		addNote,
		newNote,
		handleNoteChange,
		disabled,
		errorMsg,
		errorMsgDisplay,
		handleToggleImportant,
	};

	return (
		<main className='Notes'>
			<NoteForm {...formProps} />
			<div className='Notes__content'>
				<h1>Notes</h1>

				<NotesList
					notesToShow={notesToShow}
					showAll={showAll}
					setShowAll={setShowAll}
					toggleActive={handleToggleActive}
					deleteNote={handleDeleteNote}
				/>
			</div>
		</main>
	);
};

export default Notes;

//  // add new note from form input (manual version)
//     const addNote = (e) => {
//         e.preventDefault();
//         // prevent submission if note already exists
//         let note = notes.find((o) => o.content === newNote);
//         if (note) {
//             setErrorMsg('That note already exists!');
//         } else {
//             const noteObject = {
//                 content: newNote,
//                 date: new Date().toISOString(),
//                 important: checked,
//                 id: notes.length + 1,
//             };
//             setNotes(notes.concat(noteObject));
//             setNewNote('');
//             setDisabled(true);
//         }
//     };
