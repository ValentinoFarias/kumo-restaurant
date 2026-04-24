/*
 * KumoMenu — accordion side nav that drives KumoDish via MenuSection.
 *
 * Each category header toggles its plate list open/closed.
 * Clicking a plate name calls onSelectDish with the full dish object,
 * which MenuSection passes down to KumoDish to render.
 */

'use client';

import { useState } from 'react';
import { MENU } from '@/data/menuData';

export default function KumoMenu({ selectedDishId, onSelectDish, onCategoryChange }) {
  const [openCategory, setOpenCategory] = useState(null);

  function handleCategoryClick(category) {
    const willOpen = openCategory !== category;
    setOpenCategory(willOpen ? category : null);
    if (willOpen) onCategoryChange(category);
  }

  return (
    <nav className="home__menu-nav">
      {Object.entries(MENU).map(([category, dishes]) => {
        const isOpen = openCategory === category;

        return (
          <div key={category} className="home__menu-nav-item">

            {/* Category label — toggles the dish list */}
            <button
              className={`home__menu-nav-btn${isOpen ? ' home__menu-nav-btn--open' : ''}`}
              onClick={() => handleCategoryClick(category)}
              aria-expanded={isOpen}
            >
              {category}
            </button>

            {/* Plate list — unfolds with max-height transition */}
            <ul
              className={`home__menu-nav-plates${isOpen ? ' home__menu-nav-plates--open' : ''}`}
              aria-hidden={!isOpen}
            >
              {dishes.length > 0 ? (
                dishes.map((dish) => (
                  <li key={dish.id}>
                    {/* Clicking a plate name selects it in MenuSection */}
                    <button
                      className={`home__menu-nav-plate${selectedDishId === dish.id ? ' home__menu-nav-plate--active' : ''}`}
                      onClick={() => onSelectDish(dish)}
                    >
                      {dish.name}
                    </button>
                  </li>
                ))
              ) : (
                <li className="home__menu-nav-plate home__menu-nav-plate--empty">
                  coming soon
                </li>
              )}
            </ul>

          </div>
        );
      })}
    </nav>
  );
}
