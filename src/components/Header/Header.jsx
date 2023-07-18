// import a css file containig article styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
import './Header.scss';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
  </header>
);

export default Header;
