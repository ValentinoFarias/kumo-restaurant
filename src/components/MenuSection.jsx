/*
 * MenuSection — client wrapper that connects KumoMenu and KumoDish.
 *
 * Owns the selectedDish state so that clicking a plate name in the accordion
 * updates what KumoDish renders, without either child needing to know about
 * the other.
 */

'use client';

import { useState } from 'react';
import { MENU } from '@/data/menuData';
import KumoMenu from '@/components/KumoMenu';
import KumoDish from '@/components/KumoDish';

// Default to the first dish in small plates so the page never loads empty
const DEFAULT_DISH = MENU['small plates'][0];

export default function MenuSection() {
  const [selectedDish, setSelectedDish] = useState(DEFAULT_DISH);

  return (
    <div className="home__menu-block">
      {/* Accordion nav — calls setSelectedDish when a plate is clicked */}
      <KumoMenu
        selectedDishId={selectedDish.id}
        onSelectDish={setSelectedDish}
      />

      {/* Dish card — re-renders whenever selectedDish changes */}
      <KumoDish {...selectedDish} />
    </div>
  );
}
