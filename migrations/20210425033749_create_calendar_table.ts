import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("calendar", (table) => {
    table.uuid("id").primary();
    table.string("title").notNullable();
    table.string("description").nullable();
    table.string("timezone").notNullable();
    table.uuid("owner_id").notNullable();
    table.timestamp("created_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("calendar");
}
