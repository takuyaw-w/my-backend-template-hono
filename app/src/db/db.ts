import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import * as relations from './relations'
import 'dotenv/config'

const client = postgres(process.env.DATABASE_URL as string, { max: 1 })
export const db = drizzle(client, { schema: { ...schema, ...relations }, logger: true })
