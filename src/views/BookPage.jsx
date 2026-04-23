import HeroVideo from "../components/HeroVideo";
import NavBar from "../components/NavBar";

const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const WEEKS = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, null, null, null, null],
];

const SELECTED = 18;

export default function BookPage() {
  return (
    <div className="book">
      {/* Hero */}
      <HeroVideo page="book" />

      {/* Navbar */}
      <NavBar page="book" />

      {/* Section heading */}
      <div className="book__heading">
        <p className="book__heading-jp">リザーブ</p>
        <p className="book__heading-en">Book a table</p>
      </div>

      {/* Calendar */}
      <div className="book__calendar-wrap">
        <div className="book__calendar">
          <div className="book__cal-header">
            <span className="book__cal-month">May 2023</span>
            <div className="book__cal-nav">
              <button className="book__cal-btn">
                <img src="/assets/images/chevron-left.png" alt="Previous" className="book__cal-chevron" />
              </button>
              <button className="book__cal-btn">
                <img src="/assets/images/chevron-right.png" alt="Next" className="book__cal-chevron" />
              </button>
            </div>
          </div>

          <div className="book__cal-grid">
            {DAYS.map((d) => (
              <div key={d} className="book__cal-cell book__cal-cell--day">
                {d}
              </div>
            ))}
            {WEEKS.map((week, wi) =>
              week.map((day, di) => {
                if (!day)
                  return (
                    <div key={`${wi}-${di}`} className="book__cal-cell book__cal-cell--inactive">
                      {wi === 4 ? di + 4 : ""}
                    </div>
                  );
                const isSelected = day === SELECTED;
                return (
                  <button
                    key={day}
                    className={`book__cal-cell book__cal-cell--date${isSelected ? " book__cal-cell--selected" : ""}`}
                  >
                    {day}
                  </button>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="book__footer">
        <div className="book__footer-contact">
          <div className="book__footer-col">
            <p className="book__footer-col-heading">restaurant</p>
            <div className="book__footer-col-body">
              <p>3 frederick place</p>
              <p>bs8 1as</p>
              <p>bristol</p>
              <p>uk</p>
            </div>
          </div>
          <div className="book__footer-col">
            <p className="book__footer-col-heading">opening hours</p>
            <div className="book__footer-col-body">
              <p>monday to sunday</p>
            </div>
            <div className="book__footer-col-body book__footer-col-body--gap">
              <p>11:30-15 &amp; 16-21</p>
            </div>
          </div>
          <div className="book__footer-col">
            <p className="book__footer-col-heading">contact</p>
            <div className="book__footer-col-body">
              <p>hello@kumoramen.co.uk</p>
            </div>
          </div>
        </div>

        <div className="book__footer-logo-wrap">
          <img
            className="book__footer-logo"
            src="/assets/images/logoKumoFoot.png"
            alt="Kumo Ramen"
          />
          <p className="book__footer-brand-jp">雲ラーメン</p>
          <p className="book__footer-brand-en">kumo ramen</p>
        </div>
      </footer>
    </div>
  );
}
