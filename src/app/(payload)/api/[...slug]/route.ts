/*
 * route.ts — Rutas de la API REST de Payload CMS.
 *
 * Este archivo captura TODAS las llamadas a /api/* y las redirige a Payload.
 * Payload genera automáticamente endpoints REST para cada colección, por ejemplo:
 *   GET  /api/menu-items     → lista todos los platos
 *   POST /api/bookings       → crea una nueva reserva
 *   GET  /api/media          → lista todos los archivos subidos
 *
 * No toques este archivo — Payload lo maneja automáticamente.
 */

import { REST_DELETE, REST_GET, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'
import config from '@payload-config'

// Exporta los handlers HTTP que Next.js App Router necesita
export const GET = REST_GET(config)
export const POST = REST_POST(config)
export const DELETE = REST_DELETE(config)
export const PATCH = REST_PATCH(config)
export const PUT = REST_PUT(config)
