import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });
const main = async () => {
  try {
    console.log("Seed database");
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.challenges);
    await db.delete(schema.lessons);
    await db.delete(schema.units);
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Saving and Spending",
        imageSrc: "/savings.svg",
      },
      {
        id: 2,
        title: "Borrowing and Debt",
        imageSrc: "/bank.svg",
      },
      {
        id: 3,
        title: "Investments",
        imageSrc: "/investment.svg",
      },
    ]);
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, //saving
        title: "Unit 1",
        description: "Saving and spending",
        order: 1,
      },
      {
        id: 2,
        courseId: 1, //saving
        title: "Unit 2",
        description: "Planning a Budget",
        order: 4,
      },
      {
        id: 3,
        courseId: 1, // saving
        title: "Unit 3",
        description: "Saving For the Future",
        order: 5,
      },
    ]);
    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // saving and spending
        order: 1,
        title: "Why to Save Money",
      },
      {
        id: 2,
        unitId: 1, // saving and spending
        order: 2,
        title: "Saving Money on Deals",
      },
      {
        id: 3,
        unitId: 1, // saving and spending
        order: 3,
        title: "Needs and Wants",
      },
      {
        id: 4,
        unitId: 1, // saving and spending
        order: 4,
        title: "Why to Save Money",
      },
      {
        id: 5,
        unitId: 1, // saving and spending
        order: 5,
        title: "Saving Money on Deals",
      },
      {
        id: 6,
        unitId: 1, // saving and spending
        order: 6,
        title: "Needs and Wants",
      },
      {
        id: 7,
        unitId: 1, // saving and spending
        order: 7,
        title: "Why to Save Money",
      },
      {
        id: 8,
        unitId: 1, // saving and spending
        order: 8,
        title: "Saving Money on Deals",
      },
      {
        id: 9,
        unitId: 1, // saving and spending
        order: 9,
        title: "Needs and Wants",
      },
    ]);
    await db.insert(schema.challenges).values([
      {
        id: 1,
        //Why to Save Money
        lessonId: 1,
        type: "INFO",
        question:
          "Saving money is very important! Click on each button to continue.",
        order: 1,
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        text: "Save money for emergencies",
        correct: true,
        imageSrc: "/ambulance.svg",
      },
      {
        challengeId: 1,
        text: "Save money for purchases",
        correct: true,
        imageSrc: "/shop.svg",
      },
      {
        challengeId: 1,
        text: "Save money for long term goals",
        correct: true,
        imageSrc: "/car.svg",
      },
    ]);
    console.log("Seeding database complete");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};
main();
