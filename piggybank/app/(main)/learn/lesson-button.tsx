"use client";

import { Check, PiggyBank, Coins } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progess";

type LessonButtonProps = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
}: LessonButtonProps) => {
  const isCompleted = !current && !locked;
  const isLast = index === totalCount;
  const Icon = isCompleted ? Check : isLast ? PiggyBank : Coins;
  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div className="flex justify-center items-center p-2">
        {current ? (
          <div className="relative h-[102px] w-[102px]">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 animate-bounce rounded-xl border-2 bg-white px-3 py-2.5 font-bold uppercase tracking-wide text-purple-500">
              Start
              <div
                className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="relative h-[102px] w-[102px] border-4 border-gray-300 rounded-2xl">
              <Button
                size="default"
                variant={locked ? "locked" : "secondary"}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70px] w-[70px] border-b-8"
              >
                <Icon
                  className={cn(
                    "h-10 w-10",
                    locked
                      ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                      : "fill-primary-foreground text-primary-foreground",
                    isCompleted && "fill-none stroke-[4]"
                  )}
                />
              </Button>
            </div>
            <div className="pt-1">
              <Progress className="h-2" value={percentage} />
            </div>
          </div>
        ) : (
          <Button
            size="default"
            variant={locked ? "locked" : "secondary"}
            className="h-[70px] w-[70px] border-b-8"
          >
            <Icon
              className={cn(
                "h-10 w-10",
                locked
                  ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                  : "fill-primary-foreground text-primary-foreground",
                isCompleted && "fill-none stroke-[4]"
              )}
            />
          </Button>
        )}
      </div>
    </Link>
  );
};
