import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li> Nameless </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/notes">Notes</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;