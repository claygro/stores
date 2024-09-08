import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const styles = {
    color: "black",
  };
  const cart = {
    color: "white",
  };
  function show() {
    document.querySelector(".menu-nav").style.display = "flex";
  }
  function hide() {
    document.querySelector(".menu-nav").style.display = "none";
  }
  return (
    <>
      <main className="header-nav">
        <img src={logo} className="logo" />

        <section className="searchAndIcon">
          <input type="text" placeholder="Search" className="search" />
          <i className="fa-solid fa-magnifying-glass btn" style={styles}></i>
        </section>
        <button onClick={show} className="show menu-hide-show-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <nav className="first-nav">
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <li className="link">Home</li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to="/about"
            style={{
              textDecoration: "none",
            }}
          >
            <li className="link">About</li>
          </NavLink>
          <details className="details">
            <summary>Collection</summary>
            <div className="collection">
              <NavLink className="link" to="/collection">
                <p className="list">Men</p>
              </NavLink>
            </div>
          </details>
          <NavLink
            to="/login"
            style={{
              textDecoration: "none",
            }}
            className={(e) => (e.isActive ? "red" : "")}
          >
            <li className="link">Login</li>
          </NavLink>
          <i className="fa-solid fa-cart-flatbed-suitcase" style={cart}></i>
        </nav>

        {/* for menu bar */}
        <nav className="menu-nav">
          <button className="cross menu-hide-show-btn" onClick={hide}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <li className="link">Home</li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to="/about"
            style={{
              textDecoration: "none",
            }}
          >
            <li className="link">About</li>
          </NavLink>
          <details className="details">
            <summary>Collection</summary>
            <div className="collection">
              <NavLink className="link " to="/collection">
                <p className="list">Men</p>
              </NavLink>
            </div>
          </details>
          <NavLink
            to="/login"
            style={{
              textDecoration: "none",
            }}
            className={(e) => (e.isActive ? "red" : "")}
          >
            <li className="link">Login</li>
          </NavLink>
          <i className="fa-solid fa-cart-flatbed-suitcase" style={cart}></i>
        </nav>
      </main>
    </>
  );
};

export default Navbar;
