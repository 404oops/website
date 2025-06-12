import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faSoundcloud,
  faBandcamp,
  faPatreon,
  faBluesky,
  faThreads,
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
    icon: faPatreon,
    href: "https://patreon.com/c/404oops",
    label: "Patreon",
  },
  {
    icon: faBandcamp,
    href: "https://404oops.bandcamp.com/",
    label: "Bandcamp",
  },
  {
    icon: faXTwitter,
    href: "https://twitter.com/oops4041555",
    label: "X",
  },
  {
    icon: faThreads,
    href: "https://www.threads.net/@oops4041555",
    label: "Threads",
  },
  {
    icon: faBluesky,
    href: "https://bsky.app/profile/404oops.com",
    label: "Bluesky",
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
      <div className="flex flex-wrap justify-center space-x-1">
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
