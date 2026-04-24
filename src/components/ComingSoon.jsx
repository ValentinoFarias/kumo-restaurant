/*
 * ComingSoon.jsx
 * Placeholder shown in the dish area when the Drinks category is selected.
 * The text is always visible at reduced opacity and glows full neon pink on hover,
 * matching the kanji neon effect used in KumoDish.
 */

export default function ComingSoon() {
  return (
    // Spans both the dish and description grid columns so it fills the full right side
    <div className="home__coming-soon">
      {/* Neon teal border frame — mirrors the hero frame style but in teal */}
      <div className="home__coming-soon-frame">
        <p className="home__coming-soon-text">coming soon</p>
      </div>
    </div>
  );
}
