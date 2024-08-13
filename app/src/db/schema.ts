import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const user = pgTable("user", {
    id: serial("id"),
    name: text("name"),
    email: text("email"),
    password: text("password"),
    role: text("role").$type<"admin" | "customer">(),
    createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
    updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
    deletedAt: timestamp("deleted_at", { mode: 'string' }),
});
