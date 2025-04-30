import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function SocialLinks({ className, size = 20 }) {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <FiGithub size={size} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <FiLinkedin size={size} />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <FiTwitter size={size} />,
    },
  ];

  return (
    <div className={className}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
