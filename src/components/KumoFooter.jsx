import Image from "next/image";

export default function KumoFooter() {
  return (
    <footer id="footer" className="home__footer">
      <div className="home__footer-contact">
        <div className="home__footer-col">
          <p className="home__footer-col-heading">address</p>
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
          <div className="home__footer-col-body home__footer-col-body--gap">
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
        <Image
          className="home__footer-logo"
          src="/assets/images/logoKumoFoot.png"
          alt="Kumo Ramen"
          width={309}
          height={338}
        />
        <p className="home__footer-brand-jp">雲ラーメン</p>
        <p className="home__footer-brand-en">kumo ramen</p>
      </div>
    </footer>
  );
}
