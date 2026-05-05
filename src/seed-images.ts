import { getPayload } from 'payload'
import config from './payload.config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC = path.resolve(__dirname, '../public')

// Maps each menu-item name to its local image paths
const imageMap: Record<string, { image: string; cartoonImage: string }> = {
  'chawanmushi': {
    image:        'assets/images/Menu/small-plates/chawanmushi.webp',
    cartoonImage: 'assets/images/Menu/small-plates/chawanmushiCartoon.webp',
  },
  'bao': {
    image:        'assets/images/Menu/small-plates/bao.webp',
    cartoonImage: 'assets/images/Menu/small-plates/baoCartoon.webp',
  },
  'gyozas': {
    image:        'assets/images/Menu/small-plates/gyozas.webp',
    cartoonImage: 'assets/images/Menu/small-plates/gyozasCartoon.webp',
  },
  'karaage': {
    image:        'assets/images/Menu/small-plates/karaage.webp',
    cartoonImage: 'assets/images/Menu/small-plates/karaageCartoon.webp',
  },
  'tonkotsu': {
    image:        'assets/images/Menu/the-brooths/tonkotsu.webp',
    cartoonImage: 'assets/images/Menu/the-brooths/tonkotsuCartoon.webp',
  },
  'truffle shio': {
    image:        'assets/images/Menu/the-brooths/truffle-shio.webp',
    cartoonImage: 'assets/images/Menu/the-brooths/truffle-shioCartoon.webp',
  },
  'spiced tantanmen': {
    image:        'assets/images/Menu/the-brooths/spiced-tantanmen.webp',
    cartoonImage: 'assets/images/Menu/the-brooths/spiced-tantanmenCartoon.webp',
  },
  'kombu shojin': {
    image:        'assets/images/Menu/the-brooths/kombu-shojin.webp',
    cartoonImage: 'assets/images/Menu/the-brooths/kombu-shojinCartoon.webp',
  },
  'chashu': {
    image:        'assets/images/Menu/sides/chashu.webp',
    cartoonImage: 'assets/images/Menu/sides/chashuCartoon.webp',
  },
  'marinated eggs': {
    image:        'assets/images/Menu/sides/marinated-eggs.webp',
    cartoonImage: 'assets/images/Menu/sides/marinated-eggsCartoon.webp',
  },
  'noodles': {
    image:        'assets/images/Menu/sides/noodles.webp',
    cartoonImage: 'assets/images/Menu/sides/noodlesCartoon.webp',
  },
  'truffle rice furikake': {
    image:        'assets/images/Menu/sides/truffle-rice-furikake.webp',
    cartoonImage: 'assets/images/Menu/sides/truffle-rice-furikakeCartoon.webp',
  },
  'matcha chocolate fondant': {
    image:        'assets/images/Menu/dessert/matcha-chocolate-fondant.webp',
    cartoonImage: 'assets/images/Menu/dessert/matcha-chocolate-fondantCartoon.webp',
  },
  'miso caramel ice cream': {
    image:        'assets/images/Menu/dessert/miso-caramel-ice-cream.webp',
    cartoonImage: 'assets/images/Menu/dessert/miso-caramel-ice-creamCartoon.webp',
  },
}

function toFile(relativePath: string) {
  const absPath = path.join(PUBLIC, relativePath)
  const buffer = fs.readFileSync(absPath)
  const name = path.basename(absPath)
  return { data: buffer, mimetype: 'image/webp', name, size: buffer.length }
}

async function seed() {
  const payload = await getPayload({ config })

  // Fetch all menu items
  const { docs: items } = await payload.find({
    collection: 'menu-items',
    limit: 100,
  })

  console.log(`Found ${items.length} menu items. Uploading images…\n`)

  for (const item of items) {
    const paths = imageMap[item.name as string]
    if (!paths) {
      console.warn(`  ! No image mapping for "${item.name}" — skipping`)
      continue
    }

    console.log(`  ${item.name}`)

    // Upload main image
    const imgFile = toFile(paths.image)
    const imgDoc = await payload.create({
      collection: 'media',
      data: { alt: item.name as string },
      file: imgFile,
    })
    console.log(`    ✓ image     → ${imgDoc.id}`)

    // Upload cartoon image
    const cartFile = toFile(paths.cartoonImage)
    const cartDoc = await payload.create({
      collection: 'media',
      data: { alt: `${item.name} cartoon` },
      file: cartFile,
    })
    console.log(`    ✓ cartoon   → ${cartDoc.id}`)

    // Link both back to the menu item
    await payload.update({
      collection: 'menu-items',
      id: item.id,
      data: {
        image: imgDoc.id,
        cartoonImage: cartDoc.id,
      },
    })
    console.log(`    ✓ linked\n`)
  }

  console.log('All images uploaded and linked.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
