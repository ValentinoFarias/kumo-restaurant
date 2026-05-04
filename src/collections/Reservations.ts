import type { CollectionConfig } from 'payload'

export const Reservations: CollectionConfig = {
  slug: 'reservations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'date', 'time', 'partySize', 'status'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: { date: { pickerAppearance: 'dayOnly' } },
    },
    {
      name: 'time',
      type: 'select',
      required: true,
      options: [
        { label: '11:30', value: '11:30' },
        { label: '12:00', value: '12:00' },
        { label: '12:30', value: '12:30' },
        { label: '13:00', value: '13:00' },
        { label: '13:30', value: '13:30' },
        { label: '14:00', value: '14:00' },
        { label: '14:30', value: '14:30' },
        { label: '16:00', value: '16:00' },
        { label: '16:30', value: '16:30' },
        { label: '17:00', value: '17:00' },
        { label: '17:30', value: '17:30' },
        { label: '18:00', value: '18:00' },
        { label: '18:30', value: '18:30' },
        { label: '19:00', value: '19:00' },
        { label: '19:30', value: '19:30' },
        { label: '20:00', value: '20:00' },
        { label: '20:30', value: '20:30' },
      ],
    },
    {
      name: 'partySize',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      admin: { description: 'Online bookings are capped at 5 guests. Larger groups must call.' },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: { description: 'Special requests: allergies, occasions, accessibility needs' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
  ],
}
