import React from 'react';

function NotesGrid({ notes, onDelete, onArchive, onEdit }) {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <div className="note-card" key={note.id}>
          <div className="note-title">{note.title}</div>
          <div className="note-content">{note.content}</div>
          <div className="note-actions">
            <div
              className="action"
              data-tooltip="Edit"
              onClick={() => onEdit(note)}
            >
              ✏️
            </div>
            <div
              className="action"
              data-tooltip={note.archived ? "Unarchive" : "Archive"}
              onClick={() => onArchive(note.id)}
            >
              📦
            </div>
            <div
              className="action"
              data-tooltip="Delete"
              onClick={() => onDelete(note.id)}
            >
              🗑️
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotesGrid;
