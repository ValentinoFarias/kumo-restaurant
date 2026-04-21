export default function HomePage() {
  return (
    <div className="home">
      <div className="home__hero">
        <video
          className="home__hero-video"
          src="/assets/video/hero-home.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="home__hero-overlay" />
        <div className="home__hero-frame" />
        <p className="home__hero-title-en">kumo ramen</p>
        <p className="home__hero-title-jp">雲ラーメン</p>
      </div>

      <nav className="home__navbar">
        <p className="home__navbar-menu-en">menu</p>
        <p className="home__navbar-menu-jp">メニュー</p>
        <img
          className="home__navbar-logo"
          src="/assets/images/logoKumo.png"
          alt="Kumo Ramen"
        />
        <p className="home__navbar-book-jp">リザーブ</p>
        <a className="home__navbar-book-en" href="/book">
          book
        </a>
      </nav>

      <p className="home__section-title-jp">お つ ま み</p>
      <p className="home__section-title-en">small plates</p>

      <div className="home__menu-nav">
        <p>small plates</p>
        <p>brooths</p>
        <p>sides</p>
        <p>deserts</p>
        <p>drinks</p>
      </div>

      <div className="home__dish">
        <div className="home__dish-image-wrap">
          <img
            className="home__dish-image"
            src="/assets/images/chawanmushi.png"
            alt="Chawanmushi"
          />
        </div>
        <p className="home__dish-kanji">茶碗蒸し</p>
      </div>

      <div className="home__description">
        <p>
          <span className="home__description-name">chawanmushi</span>
          <span> - Steamed Egg Custard</span>
        </p>
        <p>&#8203;</p>
        <p>silken and trembling, set just beyond liquid.</p>
        <p>
          A slow-steamed dashi custard poured into lacquered stone cups —
          scented with yuzu, layered beneath with a single piece of poached
          crab and a curl of enoki mushroom. Finished tableside with a thread
          of aged soy and a whisper of smoked bonito oil.
        </p>
        <p>&#8203;</p>
        <p>still. quiet. precise.</p>
        <p>&#8203;</p>
        <p>Served warm. Contains shellfish, egg, fish.</p>
      </div>

      <footer className="home__footer">
        <div className="home__footer-contact">
          <div className="home__footer-col">
            <p className="home__footer-col-heading">restaurant</p>
            <div className="home__footer-col-body">
              <p>3 frederick place</p>
              <p>bs8 1as</p>
              <p>bristol</p>
              <p>uk</p>
            </div>
          </div>
          <div className="home__footer-col">
            <p className="home__footer-col-heading">opening hours</p>
            <div className="home__footer-col-body">
              <p>monday to sunday</p>
            </div>
            <div className="home__footer-col-body">
              <p>11:30-15 &amp; 16-21</p>
            </div>
          </div>
          <div className="home__footer-col">
            <p className="home__footer-col-heading">contact</p>
            <div className="home__footer-col-body">
              <p>hello@kumoramen.co.uk</p>
            </div>
          </div>
        </div>

        <div className="home__footer-logo-wrap">
          <img
            className="home__footer-logo"
            src="/assets/images/logoKumoFoot.png"
            alt="Kumo Ramen"
          />
          <p className="home__footer-brand-jp">雲ラーメン</p>
          <p className="home__footer-brand-en">kumo ramen</p>
        </div>
      </footer>
    </div>
  );
}
