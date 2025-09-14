export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <div className="item active" id="nav-notes"><span>💡</span><span>Notes</span></div>
        <div className="item" id="nav-reminders"><span>🔔</span><span>Reminders</span></div>
        <div className="item" id="nav-edit-labels"><span>✏️</span><span>Edit labels</span></div>
        <div className="item" id="nav-archive"><span>📦</span><span>Archive</span></div>
        <div className="item" id="nav-trash"><span>🗑️</span><span>Trash</span></div>
      </nav>
    </aside>
  );
}
