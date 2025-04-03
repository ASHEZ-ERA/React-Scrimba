import image from "../components/react.png"

export default function Navbar(){
    return (
      <header className="header">
        <nav className="header-nav">
          <img
            src= {image}
            alt="reactLogo"
            className="header-nav-img"
          ></img>
          <span className="header-nav-text">ReactLogo</span>
        </nav>
      </header>
    );
}
