const Header = () => {
  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  Home
                </span>
              </li>
              <li>
                <span id="about-link">About</span>
              </li>
              <li>
                <span id="portfolio-link">Portfolio</span>
              </li>
              <li>
                <span id="contact-link">Contact</span>
              </li>
              <li>
                <span id="blog-link">Blog</span>
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email :<span> innerpeace41025@gmail.com</span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};
export default Header;
