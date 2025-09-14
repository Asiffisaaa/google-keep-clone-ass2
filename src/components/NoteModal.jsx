import { useState, useEffect } from 'react';

export default function NoteModal({ note, isOpen, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  if (!isOpen || !note) return null;

  const handleSave = () => {
    onSave({ ...note, title, content });
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{ width: '100%', border: 0, fontSize: '18px', marginBottom: '8px' }}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Take a note..."
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '12px' }}>
          <button onClick={onClose} className="tool-btn">Cancel</button>
          <button onClick={handleSave} className="tool-btn">Save</button>
        </div>
      </div>
    </div>
  );
}
