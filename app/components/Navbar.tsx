"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, LOGIN_URL, SIGNUP_URL } from "../constants";

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function close() { setOpen(false); }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-[#E5E7EB]"
          : "bg-white border-b border-[#E5E7EB]/60"
      }`}
    >
      {/* ── Desktop bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" onClick={close}>
            <Image
              src="/images/osc.png"
              alt="OsCFinder Technologies"
              width={200}
              height={52}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.highlight ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="ml-1 px-3 py-1.5 text-sm font-semibold text-[#00A86B] bg-[#00C48C]/10 border border-[#00C48C]/30 rounded-full hover:bg-[#00C48C]/20 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-[#1A3A5C] hover:text-[#006285] transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#006285] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                </Link>
              )
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={LOGIN_URL}
              className="text-sm font-semibold text-[#1A3A5C] hover:text-[#006285] px-3 py-2 transition-colors duration-200"
            >
              Login
            </a>
            <a
              href={SIGNUP_URL}
              className="text-sm font-semibold text-white bg-[#00C48C] px-5 py-2 rounded-xl hover:bg-[#00A86B] transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-[#1A3A5C] hover:bg-[#F8FAFC] transition-colors"
          >
            {/* Top bar */}
            <span
              className={`absolute block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            />
            {/* Middle bar */}
            <span
              className={`absolute block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            {/* Bottom bar */}
            <span
              className={`absolute block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile menu — always mounted, animated with height + opacity ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-[#E5E7EB] px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) =>
            link.highlight ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-[#00A86B] bg-[#00C48C]/8 border border-[#00C48C]/20 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-[#1A3A5C] hover:text-[#006285] hover:bg-[#F8FAFC] transition-colors duration-150"
              >
                {link.label}
              </Link>
            )
          )}

          <div className="pt-3 border-t border-[#E5E7EB] mt-2 flex flex-col gap-2.5">
            <a
              href={LOGIN_URL}
              onClick={close}
              className="block text-center text-sm font-semibold text-[#006285] border-2 border-[#006285] px-4 py-2.5 rounded-xl hover:bg-[#006285] hover:text-white transition-all duration-200"
            >
              Login
            </a>
            <a
              href={SIGNUP_URL}
              onClick={close}
              className="block text-center text-sm font-semibold text-white bg-[#00C48C] px-4 py-2.5 rounded-xl hover:bg-[#00A86B] transition-colors duration-200"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
