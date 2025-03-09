import { ComponentType } from "react";
import SavingsUnit1 from "@/pageContent/savings/unit1";
import SavingsUnit2 from "@/pageContent/savings/unit2";
import BorrowingUnit1 from "@/pageContent/borrowing/unit1";
import BorrowingUnit2 from "@/pageContent/borrowing/unit2";
import content from "@/pageContent/default";

export const pageMap: Record<string, ComponentType> = {
  "0": content,
  "1": SavingsUnit1,
  "2": SavingsUnit2,
  "3": BorrowingUnit1,
  "4": BorrowingUnit2,
};

export const pageIds = Object.keys(pageMap);
