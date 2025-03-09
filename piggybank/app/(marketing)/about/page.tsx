import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 bg-neutral-50 min-h-screen">
      {/* About Us Header */}
      <h1 className="text-4xl lg:text-6xl font-extrabold text-neutral-800 text-center py-10 mb-12 bg-gradient-to-r from-neutral-700 to-neutral-500 bg-clip-text animate-fade-in">
        About Us
      </h1>

      {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-slide-up">
        <div className="flex justify-center items-center">
          <div className="relative group">
            <Image
              src="/piggywin.svg"
              height={240}
              width={240}
              alt="Piggy"
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-neutral-200 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-700 mb-4 tracking-wide">
            Our Mission
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We&apos;re dedicated to empowering young kids with the tools to
            master personal finance, fostering responsible habits that last a
            lifetime.
          </p>
        </div>
      </div>

      {/* Why Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-slide-up delay-200">
        <div className="flex flex-col justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-700 mb-4 tracking-wide">
            Why It Matters
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Financial literacy is a vital skill often missing from middle school
            curriculums. Without it, students face a tougher transition to
            adulthood and risk developing poor financial habits. A{" "}
            <Link
              href="https://www.weforum.org/stories/2024/04/financial-literacy-money-education/"
              className="font-bold"
            >
              WEF survey
            </Link>
            &nbsp; revealed that fewer than 30% of Americans could ace a simple
            5-question finance test.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="https://assets.weforum.org/editor/5V3xivwocB-evcONwvC03Fnkb3VVziKsFEgHlUwyRyQ.png"
            height={600}
            width={600}
            alt="WEF survey data"
            className="w-full h-auto object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-10 tracking-tight border-b-4 border-indigo-400 pb-4 flex items-center gap-4">
          <span className="text-4xl animate-pulse text-indigo-500">✨</span>{" "}
          Features
        </h1>
        <Carousel className="relative w-full">
          <CarouselContent className="flex gap-6">
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/interactive.png"
                  height={200}
                  width={200}
                  alt="Interactive Piggy"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-semibold text-neutral-700">
                Interactive
              </p>
              <p className="text-sm text-neutral-500 text-center mt-2">
                Engage with fun, hands-on tools designed to captivate young
                learners.
              </p>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/educational.png"
                  height={200}
                  width={200}
                  alt="Educational Piggy"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-semibold text-neutral-700">
                Educational
              </p>
              <p className="text-sm text-neutral-500 text-center mt-2">
                Learn key financial concepts through intuitive, age-appropriate
                lessons.
              </p>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/ease.png"
                  height={200}
                  width={200}
                  alt="Ease of Use"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-semibold text-neutral-700">
                Ease of Use
              </p>
              <p className="text-sm text-neutral-500 text-center mt-2">
                Navigate effortlessly with a simple, kid-friendly interface.
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-300">
            <span className="text-xl">←</span>
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-300">
            <span className="text-xl">→</span>
          </CarouselNext>
        </Carousel>
      </div>
      <div className="mt-2 flex flex-col justify-center p-8 bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-10 tracking-tight border-b-4 border-indigo-400 pb-4 flex items-center gap-4">
          <span className="text-4xl animate-pulse text-indigo-500">👍</span>{" "}
          Made For You
        </h1>
        <Carousel className="relative w-full">
          <CarouselContent className="flex gap-6">
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/user.svg"
                  height={200}
                  width={200}
                  alt="Interactive Piggy"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-semibold text-neutral-700">
                Free For you
              </p>
              <p className="text-sm text-neutral-500 text-center mt-2">
                The core platform is free for all users. This ensures financial
                literacy resources remain accessible to as many students as
                possible, without needing to be part of an organization.
              </p>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/educators.svg"
                  height={200}
                  width={200}
                  alt="Educational Piggy"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-semibold text-neutral-700">
                For Educators
              </p>
              <p className="text-sm text-neutral-500 text-center mt-2">
                PiggyBank Pal$ provides ready-to-use modules that keep students
                engaged while teaching essential financial skills.
              </p>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/parents.svg"
                  height={200}
                  width={200}
                  alt="Ease of Use Piggy"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-semibold text-neutral-700">
                For Parents
              </p>
              <p className="text-sm text-neutral-500 text-center mt-2">
                PiggyBank Pal$ provides a fun and interactive way for children
                to develop financial literacy skills, helping them build healthy
                money habits that will benefit them for life.
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-300">
            <span className="text-xl">←</span>
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-300">
            <span className="text-xl">→</span>
          </CarouselNext>
        </Carousel>
      </div>
      {/* Roadmap Section */}
      <div className="mb-20 animate-slide-up delay-400 pt-2">
        <div className="flex flex-col justify-center max-w-4xl mx-auto p-8 bg-gradient-to-br from-white to-neutral-100 rounded-2xl shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-8 tracking-tight border-b-4 border-neutral-400 pb-3 flex items-center gap-3">
            <span className="text-4xl animate-bounce">🚀</span> Our Future
            RoadMap
          </h2>
          <ul className="space-y-6">
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">🌟</span> Functionality Within 5
                Years
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We&apos;re crafting a cutting-edge website packed with
                accessibility features, multi-language support, and flawless
                cross-platform performance.
              </p>
            </li>
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">🚀</span> Expansion Goals
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We&apos;ll grow into a must-have resource—accessible to all and
                a cornerstone for educating the next generation.
              </p>
            </li>
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">🎓</span> Educational Integration
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Our services will blend into school curriculums and collaborate
                with institutions to make financial education fun and effective.
              </p>
            </li>
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">📚</span> Future Prospects
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We&apos;re eyeing higher education next, expanding our reach and
                building a thriving user community.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
