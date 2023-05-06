"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products/add", label: "Create Product" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="p-5  shadow-md ">
      <nav className="max-w-7xl mx-auto">
        <ul className="flex items-center gap-4">
          {LINKS.map(({ href, label }) => (
            <li
              key={href}
              className={`${
                pathname === href ? "text-blue-600" : "text-gray-600"
              } font-semibold hover:underline`}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
