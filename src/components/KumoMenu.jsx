/*
 * KumoMenu — accordion side nav for the menu section.
 *
 * Each category is a button that toggles an animated plate list below it.
 * Plate names are derived from the image filenames in public/assets/images/Menu
 * (Cartoon variants excluded).
 */

'use client';

import { useState } from 'react';

// Plate names per category — sourced from /public/assets/images/Menu subfolders
const MENU_DATA = {
  'small plates': ['bao', 'chawanmushi', 'gyozas', 'karaage'],
  'brooths':      ['kombu shojin', 'spiced tantanmen', 'tonkotsu', 'truffle shio'],
  'sides':        ['chashu', 'marinated eggs', 'noodles', 'truffle rice furikake'],
  'deserts':      ['matcha chocolate fondant', 'miso caramel ice cream'],
  'drinks':       [],
};

export default function KumoMenu() {
  // Tracks which category is open; null = all collapsed
  const [openCategory, setOpenCategory] = useState(null);

  // Toggle the clicked category; clicking an open one closes it
  function handleClick(category) {
    setOpenCategory(openCategory === category ? null : category);
  }

  return (
    <nav className="home__menu-nav">
      {Object.entries(MENU_DATA).map(([category, plates]) => {
        const isOpen = openCategory === category;

        return (
          <div key={category} className="home__menu-nav-item">

            {/* Category label — acts as the accordion trigger */}
            <button
              className={`home__menu-nav-btn${isOpen ? ' home__menu-nav-btn--open' : ''}`}
              onClick={() => handleClick(category)}
              aria-expanded={isOpen}
            >
              {category}
            </button>

            {/* Plate list — max-height transition produces the unfold effect */}
            <ul
              className={`home__menu-nav-plates${isOpen ? ' home__menu-nav-plates--open' : ''}`}
              aria-hidden={!isOpen}
            >
              {plates.length > 0 ? (
                plates.map((plate) => (
                  <li key={plate} className="home__menu-nav-plate">{plate}</li>
                ))
              ) : (
                <li className="home__menu-nav-plate home__menu-nav-plate--empty">coming soon</li>
              )}
            </ul>

          </div>
        );
      })}
    </nav>
  );
}
