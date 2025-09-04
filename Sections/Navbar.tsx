import Image from "next/image";
import logo from "@/assets/404-error-web-template-with-funny-monster.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Features", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Gags", href: "#" },
];

export default function Navbar() {
  return (
    <section className="py-4">
      <div className="container  mx-auto px-2 py-1.5">
        <div className="flex items-center justify-between border border-white/15 rounded-xl py-1 px-1 p-1 bg-gray-800">
          <Image
            src={logo}
            alt="logo image"
            width={50}
            height={50}
            className="ml-4"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="block md:hidden bg-red-500"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </div>
    </section>
  );
}
