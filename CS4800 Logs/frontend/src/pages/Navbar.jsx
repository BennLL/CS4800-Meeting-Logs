import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="Navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">NAMELESS</Link>
          <div className="navbar-links">
            <Link to="/about">ABOUT US</Link>
            <Link to="/notes">NOTES</Link>
            <a href="https://github.com/alimomennasab/CS4800-Group-Project" target="_blank" rel="noopener noreferrer">OUR PRODUCT</a>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;