import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <footer className="bg-secondary-100 dark:bg-secondary-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-primary-600 dark:text-primary-400"
            >
              Unais
            </Link>
            <p className="mt-4 text-secondary-600 dark:text-secondary-400">
              Full Stack Developer passionate about creating innovative web
              solutions.
            </p>
            <SocialLinks className="flex space-x-4 mt-6" />
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
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
              Contact
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-2">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              your.email@example.com
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-200 dark:border-secondary-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
            © {currentYear} Shaikh Unais. All rights reserved.
          </p>
          <p className="text-secondary-600 dark:text-secondary-400 text-sm mt-2 md:mt-0">
            Designed and built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
