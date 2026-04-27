export default function NavBar({ page = "book" }) {
  if (page === "home") {
    return (
      <nav className="home__navbar">
        <div className="home__navbar-menu">
          <a className="home__navbar-menu-en" href="#menu-header">menu</a>
          <p className="home__navbar-menu-jp">メニュー</p>
        </div>

        <a className="home__navbar-logo-link" href="#footer">
          <img
            className="home__navbar-logo"
            src="/assets/images/logoKumo.png"
            alt="Kumo Ramen"
          />
        </a>

        <div className="home__navbar-book">
          <p className="home__navbar-book-jp">リザーブ</p>
          <a className="home__navbar-book-en" href="/book">book</a>
        </div>
      </nav>
    );
  }

  return (
    <nav className="home__navbar">
      <div className="home__navbar-menu">
        <a className="home__navbar-menu-en" href="/#menu-header">menu</a>
        <p className="home__navbar-menu-jp">メニュー</p>
      </div>

      <a className="home__navbar-logo-link" href="/">
        <img
          className="home__navbar-logo"
          src="/assets/images/logoKumo.png"
          alt="Kumo Ramen"
        />
      </a>

      <div className="home__navbar-book">
        <p className="home__navbar-book-jp">リザーブ</p>
        <a className="home__navbar-book-en" href="#calendar">book</a>
      </div>
    </nav>
  );
}
