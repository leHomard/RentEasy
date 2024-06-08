import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const lessors = pgTable('lessors', {
  id: serial('id').primaryKey(),
  firstName: text('first_name'),
  lastName: text('last_name'),
});
