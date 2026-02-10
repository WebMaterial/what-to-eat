import logo from '../assets/common/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <img src={logo} alt="logo" width={120} height={60} />
      </h1>
    </header>
  );
}

export default Header;