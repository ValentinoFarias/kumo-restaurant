/*
 * next.config.mjs — Configuración de Next.js para Kumo Ramen.
 *
 * withPayload envuelve la config de Next.js para que Payload CMS
 * pueda funcionar correctamente dentro del proyecto.
 */

import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
}

// withPayload agrega las rutas del admin y la API de Payload automáticamente
export default withPayload(nextConfig)
