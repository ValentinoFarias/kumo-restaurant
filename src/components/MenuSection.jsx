'use client';

import { useState } from 'react';
import KumoMenu from '@/components/KumoMenu';
import KumoDish from '@/components/KumoDish';
import MenuHeader from '@/components/MenuHeader';
import ComingSoon from '@/components/ComingSoon';

const DEFAULT_CATEGORY = 'small plates';

export default function MenuSection({ menu }) {
  const DEFAULT_DISH = menu[DEFAULT_CATEGORY]?.[0] ?? {};
  const [activeCategory, setActiveCategory] = useState(DEFAULT_CATEGORY);
  const [selectedDish, setSelectedDish] = useState(DEFAULT_DISH);

  function handleCategoryChange(category) {
    setActiveCategory(category);
    const first = menu[category]?.[0];
    if (first) setSelectedDish(first);
  }

  return (
    <>
      <MenuHeader category={activeCategory} />
      <div className="home__menu-block">
        <KumoMenu
          menu={menu}
          selectedDishId={selectedDish.id}
          onSelectDish={setSelectedDish}
          onCategoryChange={handleCategoryChange}
        />
        {/* Only render KumoDish when not on drinks */}
        {activeCategory !== 'drinks' && <KumoDish {...selectedDish} />}
      </div>

      {/* Rendered outside the grid so it can be centered like MenuHeader */}
      {activeCategory === 'drinks' && <ComingSoon />}
    </>
  );
}
