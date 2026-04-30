/*
 * page.tsx — Página principal del admin panel de Payload CMS.
 *
 * Esta ruta captura TODAS las sub-rutas del admin (/admin, /admin/collections, etc.)
 * gracias al parámetro [[...segments]] (segmentos opcionales).
 *
 * No toques este archivo — Payload lo maneja automáticamente.
 */

import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import config from '@payload-config'

// Genera los meta tags (título, etc.) de cada página del admin
export const generateMetadata = ({ params, searchParams }: any) =>
  generatePageMetadata({ config, params, searchParams })

// Renderiza la UI del admin panel de Payload
export default function Page({ params, searchParams }: any) {
  return RootPage({ config, params, searchParams, importMap })
}
