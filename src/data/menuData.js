/*
 * menuData.js — single source of truth for all menu content.
 *
 * Structure mirrors the folders in /public/assets/images/Menu.
 * To add a new plate: add an object to the correct category array.
 * Image paths are relative to /public.
 */

export const MENU = {

  /* ─────────────────────────── SMALL PLATES ─────────────────────────── */

  'small plates': [
    {
      id: 'chawanmushi',
      imageSrc:   '/assets/images/Menu/small-plates/chawanmushi.webp',
      cartoonSrc: '/assets/images/Menu/small-plates/chawanmushiCartoon.webp',
      imageAlt:   'Chawanmushi',
      kanji:      '茶碗蒸し',
      name:       'chawanmushi',
      subtitle:   'Steamed Egg Custard',
      intro:      'silken and trembling, set just beyond liquid.',
      description:
        'A slow-steamed dashi custard poured into lacquered stone cups — scented with yuzu, layered beneath with a single piece of poached crab and a curl of enoki mushroom. Finished tableside with a thread of aged soy and a whisper of smoked bonito oil.',
      outro: 'still. quiet. precise.',
      notes: 'Served warm. Contains shellfish, egg, fish.',
      price: '£8',
    },
    {
      id: 'bao',
      imageSrc:   '/assets/images/Menu/small-plates/bao.webp',
      cartoonSrc: '/assets/images/Menu/small-plates/baoCartoon.webp',
      imageAlt:   'Bao',
      kanji:      '包',
      name:       'bao',
      subtitle:   'Steamed Pork Belly Bun',
      intro:      'soft as a breath, sealed before it cools.',
      description:
        'A pillowed milk bun, hand-folded and steamed to order — packed with twice-cooked chashu, a slick of hoisin, quick-pickled daikon and cucumber, and a scatter of toasted sesame. Served open, so nothing is hidden.',
      outro: 'warm. full. unassuming.',
      notes: 'Contains gluten, soy, sesame, pork.',
      price: '£7',
    },
    {
      id: 'gyozas',
      imageSrc:   '/assets/images/Menu/small-plates/gyozas.webp',
      cartoonSrc: '/assets/images/Menu/small-plates/gyozasCartoon.webp',
      imageAlt:   'Gyozas',
      kanji:      '餃子',
      name:       'gyozas',
      subtitle:   'Pan-Fried Dumplings',
      intro:      'crisp below, cloud above.',
      description:
        'Six dumplings, each one folded by hand. Filled with a blend of Berkshire pork, nira chive, ginger and toasted garlic. Pan-seared in cast iron until the base blisters gold, then steamed shut. Served with a black vinegar dipping sauce cut with sesame and chilli oil.',
      outro: 'crunch. then tenderness.',
      notes: 'Contains gluten, soy, sesame, pork.',
      price: '£7',
    },
    {
      id: 'karaage',
      imageSrc:   '/assets/images/Menu/small-plates/karaage.webp',
      cartoonSrc: '/assets/images/Menu/small-plates/karaageCartoon.webp',
      imageAlt:   'Karaage',
      kanji:      '唐揚げ',
      name:       'karaage',
      subtitle:   'Japanese Fried Chicken',
      intro:      'crackling at the surface, yielding within.',
      description:
        'Free-range chicken thigh, marinated overnight in soy, mirin, sake and fresh ginger — dredged in potato starch and fried twice for a shell that shatters. Served alongside a yuzu kosho mayonnaise and a wedge of charred lemon.',
      outro: 'golden. reckless. earned.',
      notes: 'Contains gluten, soy, egg.',
      price: '£9',
    },
  ],

  /* ────────────────────────────── BROOTHS ────────────────────────────── */

  'brooths': [
    {
      id: 'tonkotsu',
      imageSrc:   '/assets/images/Menu/the-brooths/tonkotsu.webp',
      cartoonSrc: '/assets/images/Menu/the-brooths/tonkotsuCartoon.webp',
      imageAlt:   'Tonkotsu',
      kanji:      '豚骨',
      name:       'tonkotsu',
      subtitle:   'Rich Pork Bone Broth',
      intro:      'twelve hours of quiet violence.',
      description:
        'A bone broth cooked at a rolling boil — not a simmer — until it turns white, heavy, and wholly itself. Poured over thin straight noodles, two slices of chashu, a soy egg cut in half, black garlic oil, pickled ginger and fragrant negi. No shortcuts. No apology.',
      outro: 'deep. white. inevitable.',
      notes: 'Contains gluten, soy, egg, pork.',
      price: '£14',
    },
    {
      id: 'truffle-shio',
      imageSrc:   '/assets/images/Menu/the-brooths/truffle-shio.webp',
      cartoonSrc: '/assets/images/Menu/the-brooths/truffle-shioCartoon.webp',
      imageAlt:   'Truffle Shio',
      kanji:      '塩拉麺',
      name:       'truffle shio',
      subtitle:   'White Truffle Salt Broth',
      intro:      'pale and precise. nothing is by accident.',
      description:
        'A clear chicken and dashi broth, seasoned with aged shio tare and finished with a measure of white truffle oil added at the last moment. Served with wavy ramen noodles, poached chicken, enoki, and a single sheet of nori. The truffle announces itself slowly.',
      outro: 'restrained. then suddenly not.',
      notes: 'Contains gluten, soy, chicken.',
      price: '£16',
    },
    {
      id: 'spiced-tantanmen',
      imageSrc:   '/assets/images/Menu/the-brooths/spiced-tantanmen.webp',
      cartoonSrc: '/assets/images/Menu/the-brooths/spiced-tantanmenCartoon.webp',
      imageAlt:   'Spiced Tantanmen',
      kanji:      '担々麺',
      name:       'spiced tantanmen',
      subtitle:   'Spiced Sesame Broth',
      intro:      'heat that builds. not heat that shouts.',
      description:
        'A sesame and doubanjiang broth — thick, rust-coloured, fragrant with Sichuan peppercorn. Served over thick noodles with spiced pork mince, a soft egg, wilted pak choi, and a swirl of chilli oil. Adjust the heat at the table.',
      outro: 'slow burn. long finish.',
      notes: 'Contains gluten, soy, egg, sesame, pork.',
      price: '£13',
    },
    {
      id: 'kombu-shojin',
      imageSrc:   '/assets/images/Menu/the-brooths/kombu-shojin.webp',
      cartoonSrc: '/assets/images/Menu/the-brooths/kombu-shojinCartoon.webp',
      imageAlt:   'Kombu Shojin',
      kanji:      '昆布精進',
      name:       'kombu shojin',
      subtitle:   'Seaweed Vegan Broth',
      intro:      'the sea, distilled and stilled.',
      description:
        'A shojin-style broth built entirely from kombu, dried shiitake and vegetable dashi — clear, mineral, and deep with umami without a single animal product. Topped with silken tofu, roasted king oyster mushroom, pickled lotus root, wakame and a drizzle of yuzu oil.',
      outro: 'honest. complete. clean.',
      notes: 'Vegan. Contains soy, gluten.',
      price: '£12',
    },
  ],

  /* ──────────────────────────────── SIDES ────────────────────────────── */

  'sides': [
    {
      id: 'chashu',
      imageSrc:   '/assets/images/Menu/sides/chashu.webp',
      cartoonSrc: '/assets/images/Menu/sides/chashuCartoon.webp',
      imageAlt:   'Chashu',
      kanji:      '叉焼',
      name:       'chashu',
      subtitle:   'Braised Pork Belly',
      intro:      'patience rewarded in layers.',
      description:
        'A rolled pork belly, tied and braised low in a bath of soy, mirin, sake and brown sugar for six hours until the fat has surrendered and the meat has softened past resistance. Sliced thick, torched to order, served with a pour of the braising liquor.',
      outro: 'yielding. sweet. irreversible.',
      notes: 'Contains soy, pork.',
      price: '£5',
    },
    {
      id: 'marinated-eggs',
      imageSrc:   '/assets/images/Menu/sides/marinated-eggs.webp',
      cartoonSrc: '/assets/images/Menu/sides/marinated-eggsCartoon.webp',
      imageAlt:   'Marinated Eggs',
      kanji:      '味玉',
      name:       'marinated eggs',
      subtitle:   'Soft Boiled Soy Eggs',
      intro:      'set to the exact second.',
      description:
        'Free-range eggs boiled for six minutes and forty seconds, shocked in ice water, then left to cure overnight in a blend of soy, mirin and sake. The white is firm, the yolk remains golden and jammy at the centre. Served two per portion, halved.',
      outro: 'simple. considered. addictive.',
      notes: 'Contains egg, soy.',
      price: '£3',
    },
    {
      id: 'noodles',
      imageSrc:   '/assets/images/Menu/sides/noodles.webp',
      cartoonSrc: '/assets/images/Menu/sides/noodlesCartoon.webp',
      imageAlt:   'Noodles',
      kanji:      '麺',
      name:       'noodles',
      subtitle:   'Extra Noodles',
      intro:      'the thing the bowl is built around.',
      description:
        'A second serving of our house ramen noodles — made fresh daily with high-gluten flour and kansui water for the characteristic spring and bite. Served plain, ready to absorb whatever remains in your bowl.',
      outro: 'more. always more.',
      notes: 'Contains gluten.',
      price: '£3',
    },
    {
      id: 'truffle-rice-furikake',
      imageSrc:   '/assets/images/Menu/sides/truffle-rice-furikake.webp',
      cartoonSrc: '/assets/images/Menu/sides/truffle-rice-furikakeCartoon.webp',
      imageAlt:   'Truffle Rice Furikake',
      kanji:      'ふりかけ',
      name:       'truffle rice furikake',
      subtitle:   'Truffle Rice with Seasoning',
      intro:      'a small bowl. a significant thing.',
      description:
        'Short-grain Japanese rice, steamed and seasoned with a house-blend furikake of dried nori, sesame, bonito flakes and sea salt — finished with a pour of black truffle oil. Simple enough to be overlooked. Good enough to be ordered twice.',
      outro: 'grounding. earthy. unshowy.',
      notes: 'Contains sesame, fish.',
      price: '£5',
    },
  ],

  /* ─────────────────────────────── DESERTS ───────────────────────────── */

  'deserts': [
    {
      id: 'matcha-chocolate-fondant',
      imageSrc:   '/assets/images/Menu/dessert/matcha-chocolate-fondant.webp',
      cartoonSrc: '/assets/images/Menu/dessert/matcha-chocolate-fondantCartoon.webp',
      imageAlt:   'Matcha Chocolate Fondant',
      kanji:      '抹茶',
      name:       'matcha chocolate fondant',
      subtitle:   'Warm Dark Fondant',
      intro:      'two things, held in tension.',
      description:
        'A dark chocolate fondant baked to order, its centre liquid and warm. Hidden within, a core of ceremonial-grade matcha cream that bleeds green when the shell gives way. Served with a scoop of toasted rice ice cream and a dusting of matcha powder.',
      outro: 'bitter. sweet. collapsing.',
      notes: 'Contains gluten, egg, dairy.',
      price: '£7',
    },
    {
      id: 'miso-caramel-ice-cream',
      imageSrc:   '/assets/images/Menu/dessert/miso-caramel-ice-cream.webp',
      cartoonSrc: '/assets/images/Menu/dessert/miso-caramel-ice-creamCartoon.webp',
      imageAlt:   'Miso Caramel Ice Cream',
      kanji:      '味噌',
      name:       'miso caramel ice cream',
      subtitle:   'Salted Miso Ice Cream',
      intro:      'salt where sweetness expects silence.',
      description:
        'A house-churned ice cream made with white miso folded into a dark caramel base — the salt of the miso cutting through the sugar without apology. Served with a sesame tuile and a small pour of aged black vinegar caramel.',
      outro: 'unexpected. then obvious.',
      notes: 'Contains dairy, egg, sesame, soy.',
      price: '£6',
    },
  ],

  /* ─────────────────────────────── DRINKS ────────────────────────────── */

  'drinks': [],
};
