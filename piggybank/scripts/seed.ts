import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });
const main = async () => {
  try {
    console.log("Seed database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.insert(schema.courses).values([
      {
        title: "Saving",
        imageSrc: "/savings.svg",
      },
      {
        title: "Spending",
        imageSrc: "/spending.svg",
      },
      {
        title: "Borrowing and Debt",
        imageSrc: "/bank.svg",
      },
      {
        title: "Investments",
        imageSrc: "/investment.svg",
      },
    ]);
    console.log("Seeding database complete");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};
main();
