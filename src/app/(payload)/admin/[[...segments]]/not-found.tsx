/*
 * not-found.tsx — Página 404 personalizada para el admin de Payload.
 *
 * Se muestra cuando el usuario navega a una ruta inexistente dentro del admin.
 * No toques este archivo — Payload lo maneja automáticamente.
 */

import { NotFoundPage } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import config from '@payload-config'

// Renderiza la página 404 del admin de Payload
export default function NotFound() {
  return NotFoundPage({
    config,
    importMap,
    params: Promise.resolve({ segments: [] }),
    searchParams: Promise.resolve({}),
  })
}
