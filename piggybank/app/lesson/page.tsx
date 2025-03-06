import { redirect } from "next/navigation";

import { getLesson, getUserProgress } from "@/db/queries";

const LessonPage = async () => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) return redirect("/learn");

  return <div>Lesson</div>;
};

export default LessonPage;
