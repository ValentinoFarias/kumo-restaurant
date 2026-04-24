'use client';

import { useState } from 'react';
import { MENU } from '@/data/menuData';
import KumoMenu from '@/components/KumoMenu';
import KumoDish from '@/components/KumoDish';
import MenuHeader from '@/components/MenuHeader';
import ComingSoon from '@/components/ComingSoon';

const DEFAULT_CATEGORY = 'small plates';
const DEFAULT_DISH = MENU[DEFAULT_CATEGORY][0];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(DEFAULT_CATEGORY);
  const [selectedDish, setSelectedDish] = useState(DEFAULT_DISH);

  function handleCategoryChange(category) {
    setActiveCategory(category);
    const first = MENU[category]?.[0];
    if (first) setSelectedDish(first);
  }

  return (
    <>
      <MenuHeader category={activeCategory} />
      <div className="home__menu-block">
        <KumoMenu
          selectedDishId={selectedDish.id}
          onSelectDish={setSelectedDish}
          onCategoryChange={handleCategoryChange}
        />
        {/* Show the coming soon placeholder for drinks, dish card for everything else */}
        {activeCategory === 'drinks' ? <ComingSoon /> : <KumoDish {...selectedDish} />}
      </div>
    </>
  );
}
