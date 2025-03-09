import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 bg-neutral-50 min-h-screen">
      {/* About Us Header */}
      <h1 className="text-4xl lg:text-6xl font-extrabold text-neutral-800 text-center py-10 mb-12 bg-gradient-to-r from-neutral-700 to-neutral-500 bg-clip-text animate-fade-in">
        Meet Our Team
      </h1>
      {/* Core Values */}
      <div className="mb-20 animate-slide-up delay-400 pt-2">
        <div className="flex flex-col justify-center max-w-4xl mx-auto p-8 bg-gradient-to-br from-white to-neutral-100 rounded-2xl shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-8 tracking-tight border-b-4 border-neutral-400 pb-3 flex items-center gap-3">
            <span className="text-4xl animate-bounce">🚀</span>Our Core Values
          </h2>
          <ul className="space-y-6">
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">🗣️</span> Transparent Communication
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Fostering clear and open communication remains key to treating
                everyone with respect. No one deserves to be unheard.
              </p>
            </li>
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">💡</span>Open Feedback
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We treat your ideas seriously. Our company is not built on ideas
                in isolation. We rely on an open community to drive innovation.
              </p>
            </li>
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">👥</span>User-focus
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Our main focus is on you, the user. Our products and services
                are intuitive, with a clean, easy-to-use design. Compared to
                competitors, our services will be free for you.
              </p>
            </li>
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">🛠️</span> Quality-Driven
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                No one wants a delayed product, or a rushed product full of
                bugs. We are committed to only releasing products and services
                with high standards.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-10 tracking-tight border-b-4 border-indigo-400 pb-4 flex items-center gap-4">
          Our Team Members
        </h1>
        <Carousel className="relative w-full">
          <CarouselContent className="flex gap-6">
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4">
                <Image
                  src="/about/denny.png"
                  height={200}
                  width={200}
                  alt="Denny Li"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-bold text-neutral-700">
                <Link href="https://www.linkedin.com/in/dennyli01/">
                  Denny Li
                </Link>
              </p>
              <p>Frontend Developer</p>
              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  I have knowledge in both frontend and backend development.
                </p>
                <br />
                <p>
                  Additionally, on the business side, I&apos;m proficient in
                  financial and accounting concepts.
                </p>
                <br />
                <b>Skills:</b>
                <ul>
                  <li>Supply Chain & Accounting</li>
                  <li>Clean-up and Organization</li>
                  <li>Python and Java</li>
                  <li>React, Tailwind CSS, NextJs</li>
                </ul>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4">
                <Image
                  src="/about/tyreese.png"
                  height={200}
                  width={200}
                  alt="Tyreese D. Davidson"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-bold text-neutral-700">
                <Link href="https://www.linkedin.com/in/tyreese-davidson/">
                  Tyreese D. Davidson
                </Link>
              </p>
              <p>Backend Developer</p>
              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  For the past two summers, I have done research and internships
                  where I gained experience in front-end development and a bit
                  of machine learning.
                </p>
                <br />
                <p>Outside of academics, I enjoy collecting hats.</p>
                <br />
                <b>Skills:</b>
                <ul>
                  <li>Python and Java</li>
                  <li>SQL Databases</li>
                  <li>Education Technology</li>
                </ul>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4">
                <Image
                  src="/about/anya.png"
                  height={200}
                  width={200}
                  alt="Anya Kumar"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-bold text-neutral-700">
                <Link href="https://www.linkedin.com/in/anyakumar/">
                  Anya Kumar
                </Link>
              </p>
              <p>Project Lead</p>
              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  I have worked with several startups, allowing me to gain a
                  strong foundation in business operations as well as tech
                  development.
                </p>
                <br />
                <p>
                  I enjoy travelling, lifting, hiking, cooking and doing
                  anything adventurous in my spare time.
                </p>
                <br />
                <b>Skills:</b>
                <ul>
                  <li>Worked in startups</li>
                  <li>Project Management</li>
                  <li>Product Development</li>
                </ul>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4">
                <Image
                  src="/about/jon.png"
                  height={200}
                  width={200}
                  alt="Jon Schaeffer"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-bold text-neutral-700">
                <Link href="https://www.linkedin.com/in/j-schaeffer/">
                  Jon Schaeffer
                </Link>
              </p>
              <p>Backend Developer</p>
              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  I have a strong background in software development, financial
                  analysis, and leadership.
                </p>
                <br />
                <p>
                  I have internship experience in both software engineering and
                  wealth management.
                </p>
                <br />
                <b>Skills:</b>
                <ul>
                  <li>Azure DevOps and Confluence</li>
                  <li>Entrepreneurship</li>
                  <li>Business Planning</li>
                  <li>Wealth Management</li>
                </ul>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4">
                <Image
                  src="/about/karina.png"
                  height={200}
                  width={200}
                  alt="Karina Makhani"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <p className="text-lg font-bold text-neutral-700">
                <Link href="https://www.linkedin.com/in/karinamakhani/">
                  Karina Makhani
                </Link>
              </p>
              <p>Project Roadmap Planner</p>
              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  My experience is predominantly in software engineering, as
                  well as designing and implementing scalable systems.
                </p>
                <br />
                <p>
                  In my free time, I enjoy traveling to new places, spending
                  time at the beach, and trying new things - I recently started
                  learning embroidery!
                </p>
                <br />
                <b>Skills:</b>
                <ul>
                  <li>Java, C++, Python</li>
                  <li>AWS services</li>
                  <li>Backend Development</li>
                </ul>
              </div>
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
      {/* Organization */}
      <div className="mb-20 animate-slide-up delay-400 pt-2">
        <div className="flex flex-col justify-center max-w-4xl mx-auto p-8 bg-gradient-to-br from-white to-neutral-100 rounded-2xl shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-8 tracking-tight border-b-4 border-neutral-400 pb-3 flex items-center gap-3">
            <span className="text-4xl animate-bounce">🖥️</span>Our Organization
          </h2>
          <ul className="space-y-6">
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">📱</span> Communication
              </h2>
              <p className="text-neutral-600 leading-relaxed">Text/SMS</p>
            </li>
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">🗂️📋</span>Project Management Tools
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                <b>Workspace:</b> Atlassian Kanban with Jira
                <br />
                <b>Repository: </b>
                <Link
                  href="https://github.com/DerivedFunction/crispy-octo-doodle"
                  className="underline"
                >
                  GitHub
                </Link>
              </p>
            </li>
            <li className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">🗓️</span>Meeting Schedule
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Every Sunday at 6:00pm. &nbsp;
                <Link
                  href="https://lehigh.zoom.us/j/98366599006?pwd=8mJe2d7OCZ4DyrrNqKGQODsRuNQ6nE.1"
                  className="underline"
                >
                  Zoom Link for members not available
                </Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-10 tracking-tight border-b-4 border-indigo-400 pb-4 flex items-center gap-4">
          Tech Stack and Architecture
        </h1>
        <Carousel className="relative w-full">
          <CarouselContent className="flex gap-6">
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/react.svg"
                  height={100}
                  width={200}
                  alt="Item 1"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out object-contain"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <Link href="https://react.dev/">
                <p className="text-lg font-bold text-neutral-700 ">React</p>
              </Link>
              <p>Frontend</p>

              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  A free and open-source front-end JavaScript library to build
                  user interfaces based on components.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/next.svg"
                  height={200}
                  width={200}
                  alt="NextJs"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <Link href="https://nextjs.org/">
                <p className="text-lg font-bold text-neutral-700">NextJs</p>
              </Link>
              <p>FrontEnd/Backend</p>

              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  By Vercel, for React-based web applications with server-side
                  rendering and static rendering. Next.js is created by Vercel
                  for React-based web applications with server-side rendering
                  and static rendering. Vercel also recompiles automatically
                  whenever changes are pushed to GitHub.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/neon.svg"
                  height={200}
                  width={200}
                  alt="Neon Tech"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <Link href="https://neon.tech/home">
                <p className="text-lg font-bold text-neutral-700">
                  Neon PostgreSQL
                </p>
              </Link>
              <p>Backend Database</p>
              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  The database on a serverless platform designed to build
                  reliable and scalable applications faster. It provides
                  structured data storage, which is essential for tracking
                  student progress, quizzes, and rewards. It ensures ACID
                  compliance for data integrity.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/drizzle.svg"
                  height={200}
                  width={200}
                  alt="Neon Tech"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <Link href="https://orm.drizzle.team/">
                <p className="text-lg font-bold text-neutral-700">
                  Drizzle Studio
                </p>
              </Link>
              <p>Admin Database Manager</p>
              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  Drizzle studio grabs your drizzle config file, connects to
                  your database and lets you browse, add, delete and update
                  everything based on your existing drizzle sql schema. It
                  supports explicit null and empty string values, booleans,
                  numbers and big integers, json objects and json arrays.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/clerk.svg"
                  height={200}
                  width={200}
                  alt="Item 4"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <Link href="https://clerk.com/">
                <p className="text-lg font-bold text-neutral-700">Clerk</p>
              </Link>
              <p>User Authentication</p>
              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  Clerk is a complete suite of embeddable UIs, flexible APIs,
                  and admin dashboards to authenticate and manage users. It
                  streamlines secure user sign-in and integrates seamlessly with
                  the front end. No passwords are stored in the databases.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative group mb-4 w-[200px] h-[200px] flex flex-col justify-end">
                <Image
                  src="/about/stripe.svg"
                  height={200}
                  width={200}
                  alt="Item 5"
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 ease-out"
                />
                <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-400"></div>
              </div>
              <Link href="https://stripe.com/">
                <p className="text-lg font-bold text-neutral-700">Stripe</p>
              </Link>
              <p>Payment Manager</p>
              <div className="text-sm text-neutral-500 mt-2">
                <p>
                  Accept payments online and in person, embed financial
                  services, and power custom revenue models.
                </p>
              </div>
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
    </div>
  );
}
