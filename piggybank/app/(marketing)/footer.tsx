import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Link href="/team">
          <h1>
            <u>About Us</u>
          </h1>
        </Link>
        <Link href="/about">
          <h1>
            <u>PiggyBank Pal$ 2025</u>
          </h1>
        </Link>
      </div>
    </footer>
  );
};
