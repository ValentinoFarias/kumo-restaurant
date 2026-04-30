/*
 * payload.config.ts — Configuración principal de Payload CMS para Kumo Ramen.
 *
 * Define las colecciones (tablas/modelos) que se van a gestionar desde el admin:
 *   - MenuItems  → los platos del menú (reemplaza menuData.js)
 *   - Media      → imágenes y archivos subidos desde el admin
 *   - Pages      → contenido de texto de las páginas del sitio
 *   - Bookings   → reservas que llegan desde el formulario de booking
 *
 * El admin panel estará disponible en: /admin
 */

import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

// Necesario para usar __dirname en módulos ES
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',

  // El admin panel va a estar en /admin
  admin: {
    user: 'users',
  },

  // Editor de texto enriquecido (para descripciones largas)
  editor: lexicalEditor(),

  // Las colecciones definen los tipos de contenido que maneja el CMS
  collections: [

    /* ─────────────────────────────────────────────────────────
     *  USERS — Colección de administradores del CMS
     *  Payload la requiere para el sistema de login del admin
     * ───────────────────────────────────────────────────────── */
    {
      slug: 'users',
      auth: true, // Habilita login con email + contraseña
      admin: {
        useAsTitle: 'email',
      },
      fields: [],
    },

    /* ─────────────────────────────────────────────────────────
     *  MENU ITEMS — Los platos del menú de Kumo Ramen
     *  Reemplaza el archivo estático menuData.js
     * ───────────────────────────────────────────────────────── */
    {
      slug: 'menu-items',
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'category', 'price'],
        group: 'Menú',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Nombre del plato',
          required: true,
        },
        {
          name: 'kanji',
          type: 'text',
          label: 'Kanji (caracteres japoneses)',
        },
        {
          name: 'category',
          type: 'select',
          label: 'Categoría',
          required: true,
          options: [
            { label: 'Small Plates', value: 'small-plates' },
            { label: 'Broths (Ramen)', value: 'broths' },
            { label: 'Sides', value: 'sides' },
            { label: 'Desserts', value: 'desserts' },
            { label: 'Drinks', value: 'drinks' },
          ],
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtítulo (ej: "Steamed Egg Custard")',
        },
        {
          name: 'intro',
          type: 'text',
          label: 'Intro (frase corta poética)',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción completa del plato',
        },
        {
          name: 'outro',
          type: 'text',
          label: 'Outro (frase de cierre)',
        },
        {
          name: 'notes',
          type: 'text',
          label: 'Alérgenos y notas',
        },
        {
          name: 'price',
          type: 'text',
          label: 'Precio (ej: "£8")',
        },
        {
          // Imagen principal del plato
          name: 'image',
          type: 'upload',
          label: 'Foto del plato',
          relationTo: 'media',
        },
        {
          // Versión cartoon/ilustrada del plato
          name: 'cartoonImage',
          type: 'upload',
          label: 'Ilustración del plato',
          relationTo: 'media',
        },
        {
          // Controla el orden en que aparece en el menú
          name: 'order',
          type: 'number',
          label: 'Orden de aparición',
          defaultValue: 0,
          admin: {
            description: 'Número más bajo = aparece primero en la categoría',
          },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────
     *  MEDIA — Imágenes y archivos
     *  Payload maneja subida de archivos automáticamente
     * ───────────────────────────────────────────────────────── */
    {
      slug: 'media',
      upload: {
        // Las imágenes se guardan en /public/media
        staticDir: path.resolve(dirname, 'public/media'),
      },
      admin: {
        group: 'Contenido',
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          label: 'Texto alternativo (para accesibilidad)',
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────
     *  PAGES — Contenido de texto de las páginas del sitio
     *  Para editar textos sin tocar el código
     * ───────────────────────────────────────────────────────── */
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
        group: 'Contenido',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título de la página',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          label: 'URL slug (ej: "home", "menu", "book")',
          required: true,
          unique: true,
          admin: {
            description: 'Identificador único. Usa guiones en vez de espacios.',
          },
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Contenido',
          editor: lexicalEditor(),
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────
     *  BOOKINGS — Reservas del restaurante
     *  Centraliza todas las reservas en un solo lugar
     * ───────────────────────────────────────────────────────── */
    {
      slug: 'bookings',
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'date', 'guests', 'status'],
        group: 'Reservas',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Nombre del cliente',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Teléfono (opcional)',
        },
        {
          name: 'date',
          type: 'date',
          label: 'Fecha de la reserva',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
        {
          name: 'guests',
          type: 'number',
          label: 'Cantidad de personas',
          required: true,
          min: 1,
          max: 20,
        },
        {
          name: 'notes',
          type: 'textarea',
          label: 'Notas especiales (alergias, ocasiones, etc.)',
        },
        {
          name: 'status',
          type: 'select',
          label: 'Estado de la reserva',
          defaultValue: 'pending',
          options: [
            { label: '⏳ Pendiente', value: 'pending' },
            { label: '✅ Confirmada', value: 'confirmed' },
            { label: '❌ Cancelada', value: 'cancelled' },
          ],
          admin: {
            position: 'sidebar',
          },
        },
      ],
    },
  ],

  // Adaptador de base de datos: PostgreSQL
  db: postgresAdapter({
    pool: {
      // La URL de conexión viene del archivo .env.local
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  // Directorio raíz del proyecto (necesario para Payload)
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
