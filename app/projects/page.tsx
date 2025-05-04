import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | 404oops",
  description: "My projects and work.",
};

const projects = [
  {
    title: "GRIT",
    description:
      "MEMENTO PARVITATEM TUAM - 'Remember your smallness' alludes to the fact that we are all people no matter what we do or how big we think we are.",
    href: "https://song.link/404oops-grit",
    image: "/covers/gritcover.png",
  },
  {
    title: "RADIOACTIVE",
    description:
      "An experimental A/B featuring a track that I had fun with making during a voice chat session",
    href: "https://album.link/radioactive",
    image: "/covers/radioactivecover.jpg",
  },
  {
    title: "SEEZAAG (THE FINAL CUT)",
    description:
      "A rework of gZIP's most famous song, SEEZAAG, featuring a better fusion between Uptempo Hardcore and Dubstep and interesting parts",
    href: "https://song.link/seezaag-the-final-cut",
    image: "/covers/tfccover.jpg",
  },
  {
    title: "gZIP",
    description:
      "A 6-track EP featuring a fusion between Hardcore and Dubstep and a Hardbass track",
    href: "https://album.link/gZIP",
    image: "/covers/gzipcover.jpg",
  },
  {
    title: "musique+",
    description:
      "A Discord bot made for Music links and processing them. When you send a link, it shows previews and links to other streaming services.",
    href: "https://musique.404oops.com",
    image: "/covers/mpluslogo.png",
  },
  {
    title: "NamecheapDDNS",
    description:
      "A simple program made for managing DDNS (A+) records on your macOS machine, since there aren't other native ones. Only supports macOS Sonoma and above.",
    href: "https://github.com/404oops/NamecheapDDNS",
  },
  {
    title: "ALMITWV",
    description:
      "A program made for giving you information about your computer specifications. Doesn't really go much deeper than that. Useful for a quick specification list",
    href: "https://github.com/404oops/ALMITWV",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold">Projects</h1>
        <h3 className="text-xl font-bold mb-8 underline">
          <Link href="/">Go back</Link>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
