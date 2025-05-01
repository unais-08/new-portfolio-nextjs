import Link from "next/link";
import SocialLinks from "./SocialLinks";
import ThemeToggler from "./ThemeToggler";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <footer className="bg-secondary-100 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700 text-sm font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col">
          <Link
            href="/"
            className="text-3xl font-extrabold text-primary-600 dark:text-primary-400 tracking-tight"
          >
            Unais
          </Link>
          <p className="mt-4 text-secondary-600 dark:text-secondary-400 leading-relaxed max-w-md">
            Full Stack Developer passionate about building accessible,
            performant, and modern web experiences.
          </p>
          <div className="mt-6">
            <SocialLinks className="flex gap-4" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
              Contact
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-2">
              Open to collaborations or just a friendly chat.
            </p>
            <a
              href="mailto:unaissk1577@example.com"
              className="text-primary-600 dark:text-primary-400 hover:underline break-all"
            >
              unaissk1577@gmail.com
            </a>
          </div>

          <div className="mt-6 sm:mt-8">
            <ThemeToggler />
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-200 dark:border-secondary-700 pt-6 pb-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center text-secondary-600 dark:text-secondary-400">
        <p>© {currentYear} Shaikh Unais. All rights reserved.</p>
        <p className="mt-2 text-xs">
          Built with ❤️ using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
