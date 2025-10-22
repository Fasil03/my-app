function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <img className="nav-logo" src="/favicon.ico" alt="React logo" />
        <h3 className="nav-title">ReactFacts</h3>
          <ul className="nav-list">
            <li>Contact</li>
            <li>Reference</li>
          </ul>
      </nav>
    </header>
  );
}

export default Navbar;
