import { sqliteTable, integer, text, blob } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// ─── UserLogin Table ────────────────────────────────
export const userLogin = sqliteTable("UserLogin", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email").unique(),
  passwordHash: blob("password_hash"),
  passwordSalt: blob("password_salt"),
});

// ─── CheckoutSummary Table ──────────────────────────
export const checkoutSummary = sqliteTable("CheckoutSummary", {
  userId: integer("user_id")
    .primaryKey()
    .references(() => userLogin.id),
  phone: text("phone"),
  zipCode: text("zipCode"),
  streetAddress: text("streetAddress"),
  city: text("city"),
  province: text("province"),
});

// ─── Relations (optional, for joins) ────────────────
export const userLoginRelations = relations(userLogin, ({ one }) => ({
  checkoutSummary: one(checkoutSummary, {
    fields: [userLogin.id],
    references: [checkoutSummary.userId],
  }),
}));

export const checkoutSummaryRelations = relations(checkoutSummary, ({ one }) => ({
  user: one(userLogin, {
    fields: [checkoutSummary.userId],
    references: [userLogin.id],
  }),
}));

