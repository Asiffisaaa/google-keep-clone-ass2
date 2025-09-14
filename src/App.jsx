import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NoteCreator from './components/NoteCreator';
import NotesGrid from './components/NotesGrid';
import './index.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  
  const addNote = (title) => {
    const newNote = {
      id: Date.now(),
      title,
      content: '',
      archived: false,
    };
    setNotes([newNote, ...notes]);
  };

  
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (currentNote?.id === id) closeModal();
  };

  
  const archiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  
  const editNote = (note) => {
    setCurrentNote(note);
    setModalOpen(true);
  };

  const saveNote = (updatedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === updatedNote.id ? { ...note, ...updatedNote } : note
      )
    );
    closeModal();
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentNote(null);
  };

  return (
    <div id="app">
      <Header />
      <div className="container">
        <Sidebar />
        <main className="main">
          
          <h2 className="section-title">Notes</h2>
          <NotesGrid
            notes={notes.filter((note) => !note.archived)}
            onDelete={deleteNote}
            onArchive={archiveNote}
            onEdit={editNote}
          />

          
          <h2 className="section-title">Archived</h2>
          <NotesGrid
            notes={notes.filter((note) => note.archived)}
            onDelete={deleteNote}
            onArchive={archiveNote}
            onEdit={editNote}
          />

          
          <NoteCreator addNote={addNote} />

          
          {modalOpen && currentNote && (
            <div className="modal">
              <div className="modal-card">
                <input
                  value={currentNote.title}
                  onChange={(e) =>
                    setCurrentNote({ ...currentNote, title: e.target.value })
                  }
                  placeholder="Title"
                  style={{ width: '100%', marginBottom: '10px' }}
                />
                <textarea
                  value={currentNote.content}
                  onChange={(e) =>
                    setCurrentNote({ ...currentNote, content: e.target.value })
                  }
                  placeholder="Content"
                  style={{ width: '100%', height: '120px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '12px' }}>
                  <button className="tool-btn" onClick={closeModal}>Cancel</button>
                  <button className="tool-btn" onClick={() => saveNote(currentNote)}>Save</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
