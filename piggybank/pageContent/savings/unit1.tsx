import Image from "next/image";
import React from "react";

export default function content() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
        <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
          <Image src="/piggywin.svg" height={240} width={240} alt={"piggy"} />
        </div>

        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-500 max-w-[480px] text-center">
            Unit 1: Financial Planning Basics
          </h1>

          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <p>
              Your own goals and the things you do affect your money. To use
              your money in the best way, you should make a money plan. This
              plan has five simple steps: deciding what you want, consider
              alternatives, making a plan, starting it, and keeping an eye on
              how it&apos;s going.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-500 max-w-[480px] text-center">
            Step 1: Decide What You Want
          </h1>

          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <p>
              First, think about what you really need. Let&apos;s say you want a
              bike because you need a way to get around. We get them because
              they&apos;re handy, help us get to school or to meet up with
              friends, or just for fun. But money-wise, they&apos;re something
              we spend on. They lose value over time—they don&apos;t grow like
              money in a piggy bank. So, getting a bike might slow down how fast
              you can save up for something big, like a new iPhone. Plus, bikes
              need cash for stuff like fixing them, new tires, or even a lock.
              Keep all this in mind while you&apos;re making your plan!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-500 max-w-[480px] text-center">
            Step 2: Consider Alternatives
          </h1>

          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <p>
              Ask yourself, do you really need that new bike or the PS5? Before
              you buy one, think about other options. Could you walk, take the
              bus, or maybe even skateboard instead? Does your old gaming
              console still work? Sometimes, one thing you want can affect
              something else you&apos;re working toward. Making smart choices
              now can help you reach bigger goals later.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-500 max-w-[480px] text-center">
            Step 3: Make the Plan
          </h1>

          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <p>
              Write down your goal, the item you want to buy, how much it costs,
              and about how long you think it will take to reach that goal.
              Maybe you will realize that it may be unrealistic to save up for a
              super expensive gaming console in just one month if you only get a
              small allowance! Break big goals into smaller, achievable steps.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-500 max-w-[480px] text-center">
            Steps 4 & 5: Start and Monitor
          </h1>

          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <p>
              Once you&apos;ve made the plan, it&apos;s time to work toward
              achieving that goal. Track your progress regularly and adjust if
              needed. Remember to celebrate small wins along the way! Financial
              planning is about making smart choices today that will help you
              achieve what&apos;s important to you tomorrow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
