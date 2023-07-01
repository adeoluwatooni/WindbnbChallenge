import logo from '../assets/logo.svg'
import searchIcon from '../assets/search-icon.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="windbnb logo" />
      </div>
      <div className='inputs'>
        <input className='locationInput' type="text" placeholder='LOCATION' />
        <input className='guestsInput' type="text" placeholder='Add Guests' />
        <button>
          <img src={searchIcon} alt="search"  />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;