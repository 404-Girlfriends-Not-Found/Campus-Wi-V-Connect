"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/404-error-web-template-with-funny-monster.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Gags", href: "#" },
];

export default function Navbar() {
  return (
    <section className="py-4 lg:py-8 md:py-8">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 border border-white/20 rounded-full p-3 px-4 md:pr-2 items-center">
          <div>
            <Image src={logo} alt="logo" className="h-12 w-auto md:h-20" />
          </div>

          <div className="hidden md:flex gap-6 font-medium">
            {navLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex justify-end items-center gap-2">
            {/* Checkbox hack */}
            <input type="checkbox" id="menu-toggle" className="peer hidden" />

            {/* Hamburger */}
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer md:hidden p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 peer-checked:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Buttons appear on mobile when checkbox is checked */}
            <div className="hidden gap-2 peer-checked:flex sm:flex">
              <Link href="/auth/login">
                <button className="border border-white h-12 rounded-full px-6 font-medium">
                  Login
                </button>
              </Link>

              <Link href="/auth/sign-up">
                <button className="border border-white h-12 rounded-full px-6 font-medium bg-purple-950">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
