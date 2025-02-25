import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="Navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">NAMELESS</Link>
          <div className="navbar-links">
            <Link to="/about">ABOUT US</Link>
            <Link to="/notes">NOTES</Link>
            <a href="https://github.com/ethan-ngo/CS4800-Netflix" target="_blank" rel="noopener noreferrer">OUR PRODUCT</a>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;