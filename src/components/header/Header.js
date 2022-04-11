import logo from '../../assets/images/menu-logo.svg'
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-item">
              <a className='menu-link' href='#0'>Features</a>
            </li>
            <li className="menu-item">
              <a className='menu-link' href='#0'>Pricing</a>
            </li>
            <li className="menu-item">
              <a className='menu-link' href='#0'>Services</a>
            </li>
            <li className="menu-item">
              <a className='menu-link' href='#0'>Partners</a>
            </li>            
          </ul>
          <button className="menu-button">
            <a className='button-text' href='#0'>Sign up free</a>
          </button>
        </nav>
      </div>
    </header>
    
  );
}

export default Header;
