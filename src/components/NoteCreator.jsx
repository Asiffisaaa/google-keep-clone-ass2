import React, { useState } from 'react';

function NoteCreator({ addNote }) {
  const [title, setTitle] = useState('');

  const handleAddNote = () => {
    if (!title.trim()) {
      alert('Please enter a note title.');
      return;
    }
    addNote(title.trim());
    setTitle('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddNote();
    }
  };

  return (
    <section className="note-creator" aria-label="Create note">
      <div className="creator-input">
        <input
          type="text"
          placeholder="Take a note..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="creator-tools">
          <button className="tool-btn" onClick={handleAddNote} data-tooltip="Add note">
            ＋
          </button>
        </div>
      </div>
    </section>
  );
}

export default NoteCreator;
