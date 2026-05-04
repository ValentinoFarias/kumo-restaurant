import type { CollectionConfig } from 'payload'

export const MenuItems: CollectionConfig = {
  slug: 'menu-items',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'available'],
    components: {
      beforeList: ['./components/admin/CategoryFilter'],
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'kanji',
      type: 'text',
      admin: { description: 'Japanese characters, e.g. 茶碗蒸し' },
    },
    {
      name: 'subtitle',
      type: 'text',
      admin: { description: 'One-line English descriptor, e.g. "Steamed Egg Custard"' },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Small Plates', value: 'small-plates' },
        { label: 'Broths', value: 'broths' },
        { label: 'Sides', value: 'sides' },
        { label: 'Desserts', value: 'desserts' },
        { label: 'Drinks', value: 'drinks' },
      ],
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      admin: { description: 'Price in GBP (e.g. 8 for £8)' },
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      admin: { description: 'Main dish photo' },
    },
    {
      name: 'cartoonImage',
      type: 'relationship',
      relationTo: 'media',
      admin: { description: 'Hover cartoon variant' },
    },
    {
      name: 'intro',
      type: 'text',
      admin: { description: 'Short poetic opening (2–3 words), e.g. "Silky. Delicate."' },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: { description: 'Full preparation & ingredient details' },
    },
    {
      name: 'outro',
      type: 'text',
      admin: { description: 'Short sensory close (2–3 words), e.g. "Pure comfort."' },
    },
    {
      name: 'notes',
      type: 'text',
      admin: { description: 'Allergen warnings and serving notes, e.g. "Contains eggs, dairy. Served warm."' },
    },
    {
      name: 'available',
      type: 'checkbox',
      defaultValue: true,
      admin: { description: 'Uncheck to hide this item from the menu' },
    },
  ],
}
