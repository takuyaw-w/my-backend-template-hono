import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { db } from './db/db'
const app = new Hono()

app.get('/', async (c) => {
  return c.json(process.env)
})

app.get('/env', async (c) => {
  const aaa = await db.query.user.findFirst()
  return c.json(aaa)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
