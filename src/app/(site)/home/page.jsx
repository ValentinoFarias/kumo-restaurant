import { getPayload } from 'payload'
import config from '@payload-config'
import HomePage from '@/views/HomePage'

export const dynamic = 'force-dynamic'

const SLUG_TO_LABEL = {
  'small-plates': 'small plates',
  broths:         'broths',
  sides:          'sides',
  desserts:       'desserts',
  drinks:         'drinks',
}

const CATEGORY_ORDER = ['small plates', 'broths', 'sides', 'desserts', 'drinks']

function buildMenu(docs) {
  const menu = Object.fromEntries(CATEGORY_ORDER.map(cat => [cat, []]))
  for (const doc of docs) {
    const cat = SLUG_TO_LABEL[doc.category] ?? doc.category
    if (!menu[cat]) continue
    menu[cat].push({
      id:          String(doc.id),
      imageSrc:    doc.image?.url ?? '',
      cartoonSrc:  doc.cartoonImage?.url ?? '',
      imageAlt:    doc.name,
      kanji:       doc.kanji       ?? '',
      name:        doc.name,
      subtitle:    doc.subtitle    ?? '',
      intro:       doc.intro       ?? '',
      description: doc.description ?? '',
      outro:       doc.outro       ?? '',
      notes:       doc.notes       ?? '',
      price:       doc.price != null ? `£${doc.price}` : '',
    })
  }
  return menu
}

export default async function Page() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'menu-items',
    where: { available: { equals: true } },
    limit: 100,
    depth: 1,
  })
  const menu = buildMenu(docs)
  return <HomePage menu={menu} />
}
