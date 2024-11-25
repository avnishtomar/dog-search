import { FaSearch } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>
        <FaSearch size={20} /> DogSearch
      </h1>
    </header>
  );
}

export default Header;
