"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import SocialLinks from "./SocialLinks";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);
  const headerRef = useRef(null);

  // Calculate header height and optimize scroll event handling
  useEffect(() => {
    // Get initial header height
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(lastScrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Update header height on resize
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" },
  ];

  // Handle mobile menu link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-secondary-900/90 shadow-md backdrop-blur-sm"
          : "bg-transparent dark:bg-secondary-900/90 shadow-none"
      }`}
    >
      <div className="container-custom py-4 px-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation - Left Side */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Elements */}
          <div className="hidden md:flex items-center space-x-4">
            <SocialLinks className="flex space-x-3" />
            <ThemeToggler />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button and Theme Toggler */}
          <div className="flex items-center md:hidden ml-auto">
            <ThemeToggler />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="text-secondary-700 dark:text-secondary-300 focus:outline-none ml-3"
            >
              {menuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced with better aesthetics and alignment */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white dark:bg-secondary-900 flex flex-col"
          style={{
            top: `${headerHeight}px`,
            height: `calc(100vh - ${headerHeight}px)`,
          }}
          aria-modal="true"
          role="dialog"
        >
          <div className="container-custom flex-1 overflow-y-auto py-6">
            <div className="max-w-md mx-auto px-4">
              <nav className="mb-8">
                <ul className="flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <li
                      key={link.name}
                      className="border-b border-gray-100 dark:border-gray-800 pb-2"
                    >
                      <Link
                        href={link.href}
                        className="block text-lg font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 px-2 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                        onClick={handleLinkClick}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 mb-8">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full text-center py-3"
                  onClick={handleLinkClick}
                >
                  Resume
                </a>
              </div>

              {/* Theme toggle in mobile menu */}
              <div className="mt-6 text-center">
                <ThemeToggler size={24} />
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-medium text-secondary-700 dark:text-secondary-300 mb-4 px-2 text-center">
                  Connect with me
                </h3>
                <div className="flex justify-center">
                  <SocialLinks className="flex space-x-6" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
