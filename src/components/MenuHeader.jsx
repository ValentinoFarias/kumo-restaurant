const CATEGORY_META = {
  'small plates': { kanji: 'お つ ま み', en: 'small plates' },
  'broths':       { kanji: 'ら ー め ん', en: 'broths'       },
  'sides':        { kanji: '付 け 合 わ せ', en: 'sides'      },
  'desserts':     { kanji: 'デ ザ ー ト',  en: 'desserts'    },
  'drinks':       { kanji: 'お 飲 み 物',  en: 'drinks'      },
};

export default function MenuHeader({ category = 'small plates' }) {
  const meta = CATEGORY_META[category] ?? CATEGORY_META['small plates'];
  return (
    <div id="menu-header" className="home__menu-header">
      <p className="home__menu-header-jp">{meta.kanji}</p>
      <p className="home__menu-header-en">{meta.en}</p>
    </div>
  );
}
