import logo from '../../assets/images/menu-logo.svg'
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a className='logo-link' href='#0'>
            <img src={logo} alt="logo" />
          </a>
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
          <a className="menu-button" href='#0'>
            Sign up free
          </a>
        </nav>
      </div>
    </header>
    
  );
}

export default Header;
