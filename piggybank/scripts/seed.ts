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
      {
        id: 4,
        title: "Financial Planning",
        imageSrc: "/planning.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Saving and Spending
        title: "Introduction to Saving",
        description: "Learn the fundamentals of saving money",
        order: 1,
      },
      {
        id: 2,
        courseId: 1, // Saving and Spending
        title: "Planning a Budget",
        description: "Master the art of budgeting",
        order: 2,
      },
      {
        id: 3,
        courseId: 2, // Borrowing and Debt
        title: "Understanding Debt",
        description: "Explore debt types and management",
        order: 1,
      },
      {
        id: 4,
        courseId: 3, // Investments
        title: "Introduction to Investments",
        description: "Discover the basics of investing",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Introduction to Saving
        order: 1,
        title: "Why Save Money?",
      },
      {
        id: 2,
        unitId: 1, // Introduction to Saving
        order: 2,
        title: "How to Save Money",
      },
      {
        id: 3,
        unitId: 2, // Planning a Budget
        order: 1,
        title: "Creating a Budget",
      },
      {
        id: 4,
        unitId: 2, // Planning a Budget
        order: 2,
        title: "Sticking to a Budget",
      },
      {
        id: 5,
        unitId: 3, // Understanding Debt
        order: 1,
        title: "Types of Debt",
      },
      {
        id: 6,
        unitId: 3, // Understanding Debt
        order: 2,
        title: "Managing Debt",
      },
      {
        id: 7,
        unitId: 4, // Introduction to Investments
        order: 1,
        title: "Investment Basics",
      },
      {
        id: 8,
        unitId: 4, // Introduction to Investments
        order: 2,
        title: "Types of Investments",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Why Save Money?
        type: "SELECT",
        question: "What is the primary reason to save money?",
        order: 1,
      },
      {
        id: 2,
        lessonId: 1, // Why Save Money?
        type: "SELECT",
        question: "Which is not correct?",
        order: 2,
      },
      {
        id: 3,
        lessonId: 2, // How to Save Money
        type: "SELECT",
        question:
          "What is the most effective first step to start saving money?",
        order: 1,
      },
      {
        id: 4,
        lessonId: 3, // Creating a Budget
        type: "SELECT",
        question:
          "What is the essential first step in creating a personal budget?",
        order: 1,
      },
      {
        id: 5,
        lessonId: 4, // Types of Debt
        type: "SELECT",
        question: "Which type of debt typically has the highest interest rate?",
        order: 1,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 1: Why Save Money?
      {
        challengeId: 1,
        text: "To prepare for unexpected emergencies",
        correct: true,
        imageSrc: "/emergency.svg",
      },
      {
        challengeId: 1,
        text: "To buy luxury items immediately",
        correct: false,
        imageSrc: "/luxury.svg",
      },
      {
        challengeId: 1,
        text: "To impress friends with spending",
        correct: false,
        imageSrc: "/friends.svg",
      },
      {
        challengeId: 1,
        text: "To avoid paying taxes",
        correct: false,
        imageSrc: "/taxes.svg",
      },

      {
        challengeId: 2,
        text: "Spend Money wisely",
        correct: false,
        imageSrc: "/emergency.svg",
      },
      {
        challengeId: 2,
        text: "Saving money is important",
        correct: false,
        imageSrc: "/luxury.svg",
      },
      {
        challengeId: 2,
        text: "Given money to random strangers",
        correct: true,
        imageSrc: "/friends.svg",
      },
      {
        challengeId: 2,
        text: "We can save money to buy a house or car",
        correct: false,
        imageSrc: "/taxes.svg",
      },
      // Challenge 3: How to Save Money
      {
        challengeId: 3,
        text: "Track and reduce unnecessary expenses",
        correct: true,
        imageSrc: "/expenses.svg",
      },
      {
        challengeId: 3,
        text: "Borrow money from friends",
        correct: false,
        imageSrc: "/borrow.svg",
      },
      {
        challengeId: 3,
        text: "Spend all income immediately",
        correct: false,
        imageSrc: "/spend.svg",
      },
      {
        challengeId: 3,
        text: "Invest everything in stocks",
        correct: false,
        imageSrc: "/stocks.svg",
      },
      // Challenge 4: Creating a Budget
      {
        challengeId: 4,
        text: "Calculate your monthly income",
        correct: true,
        imageSrc: "/income.svg",
      },
      {
        challengeId: 4,
        text: "Buy budgeting software first",
        correct: false,
        imageSrc: "/software.svg",
      },
      {
        challengeId: 4,
        text: "Guess your expenses",
        correct: false,
        imageSrc: "/guess.svg",
      },
      {
        challengeId: 4,
        text: "Set unrealistic savings goals",
        correct: false,
        imageSrc: "/goals.svg",
      },
      // Challenge 5: Types of Debt
      {
        challengeId: 5,
        text: "Credit card debt",
        correct: true,
        imageSrc: "/credit-card.svg",
      },
      {
        challengeId: 5,
        text: "Mortgage debt",
        correct: false,
        imageSrc: "/mortgage.svg",
      },
      {
        challengeId: 5,
        text: "Student loans",
        correct: false,
        imageSrc: "/student-loan.svg",
      },
      {
        challengeId: 5,
        text: "Car loans",
        correct: false,
        imageSrc: "/car-loan.svg",
      },
    ]);

    console.log("Seeding database complete");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};
main();
