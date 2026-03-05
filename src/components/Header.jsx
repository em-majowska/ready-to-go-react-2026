import logo from "../assets/rocket.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="rocket logo" />
        <h1>Ready To Go</h1>
      </div>
    </header>
  );
};

export default Header;
