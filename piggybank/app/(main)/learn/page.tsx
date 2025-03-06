import { FeedWrapper } from "@/components/ui/feed-wrapper";
import { StickWrapper } from "@/components/ui/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/ui/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickWrapper>
        <UserProgress
          activeCourse={{ title: "Spending", imageSrc: "/mascot.png" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickWrapper>

      <FeedWrapper>
        <Header title="course" />
      </FeedWrapper>
    </div>
  );
};
export default LearnPage;
