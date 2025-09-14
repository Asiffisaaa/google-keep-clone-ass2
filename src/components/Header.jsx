export default function Header() {
  return (
    <header className="topbar">
      <div className="brand">
        <button id="menuToggleBtn" className="tool-btn" title="Toggle menu" style={{fontSize: "20px"}}>☰</button>
        <div className="logo">💡</div>
        <h1 style={{fontSize: "18px"}}>GoogleKeep</h1>
      </div>

      <div className="search">
        <input id="searchInput" placeholder="Search" />
      </div>

      <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
        <button id="refreshBtn" className="tool-btn" title="Refresh">⟳</button>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocK85ETg9zoh-kznKVVWJpkRKnmXEa0zYdikJN1uenD9teb_rphl=s360-c-no" 
             alt="" style={{width: "40px", height: "40px", borderRadius: "50%"}} />
      </div>
    </header>
  );
}
