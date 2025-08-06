"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/seo-research", label: "SEO Analysis" },
    { href: "/contact", label: "Get Started" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-beach-light/20 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl">🏖️</span>
            <div>
              <span className="font-heading text-xl font-bold text-beach-teal group-hover:text-beach-blue transition">
                Beach Bird Studios
              </span>
              <span className="hidden sm:block text-xs text-beach-teal/60">
                Complete SEO Websites
              </span>
            </div>
          </Link>

          <button
            className="md:hidden text-beach-teal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body font-medium transition ${
                    link.label === "Get Started"
                      ? "bg-beach-blue text-white px-6 py-2 rounded-lg hover:bg-beach-blue/90"
                      : "text-beach-teal hover:text-beach-blue"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 border-t border-beach-light/20 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 font-body transition ${
                    link.label === "Get Started"
                      ? "bg-beach-blue text-white px-4 rounded-lg hover:bg-beach-blue/90"
                      : "text-beach-teal hover:text-beach-blue"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}