import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SocialLink {
  icon: IconDefinition;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: faGithub,
    href: "https://github.com/404oops",
    label: "GitHub",
  },
  {
    icon: faXTwitter,
    href: "https://twitter.com/oops4041555",
    label: "X",
  },
  {
    icon: faSoundcloud,
    href: "https://soundcloud.com/404oops",
    label: "SoundCloud",
  },
  {
    icon: faEnvelope,
    href: "mailto:me@404oops.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full p-4">
      <div className="flex justify-center space-x-1">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-white/5"
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} className="w-6 h-6" />
          </a>
        ))}
      </div>
    </footer>
  );
}
