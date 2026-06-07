import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Projects | 404oops`,
  description: `My projects and work.`,
};

const projects = [
  {
    title: `musique+`,
    description:
      `A Discord bot made for Music links and processing them. When you send a link, it shows previews and links to other streaming services. Currently defunct, since the services used for link processing are broken. Made with Bun and Discord.js.`,
    href: `https://github.com/404oops/musiqueplus`,
    image: `/covers/mpluslogo.png`,
  },
  {
    title: `ESPWR`,
    description: `An ecosystem made with an ESP32 that can remotely power your computer on and off, and also features a web interface and watchdog software can automatically power cycle your computer if it becomes unresponsive. Made in C and Bootstrap 2`,
    href: `https://github.com/404oops/ESPWR`,
  },
  {
    title: `RPiRCM`,
    description: `A tool for booting hekate on Nintendo Switches from Raspberry Pi devices. Made with GitHub Actions and rpi-image-gen.`,
    href: `https://github.com/404oops/RPiRCM`,
  },
  {
    title: `virt-manager-web`,
    description: `A dockerized web interface for managing virtual machines, made from a base GUI template. Useful for managing VMs on headless servers. Built with GitHub Actions and jlesage/baseimage-gui`,
    href: `https://github.com/404oops/virt-manager-web`,
  },
  {
    title: `Tesla ($10)`,
    description: `An audio recorder, similar to Image-Line's Edison, that costs a quarter of the price and works on every DAW. Made with JUCE.`,
    href: `https://www.patreon.com/posts/tesla-151193557`,
    image: `/covers/tesla.png`,
  },
  {
    title: `Audinspect`,
    description:
      `A simple audio inspector, made for quick viewing and listening of audio files. Built with Electron + React and wavesurfer.js, built with GitHub Actions.`,
    href: `https://github.com/404oops/audinspect`,
    image: `/covers/audinspect.png`,
  },
  {
    title: `NamecheapDDNS`,
    description:
      `A simple program made for managing DDNS (A+) records on your macOS machine, since there aren't other native ones. Only supports macOS Sonoma and above.`,
    href: `https://github.com/404oops/NamecheapDDNS`,
  },
  {
    title: `ALMITWV`,
    description:
      `A program made for giving you information about your computer specifications. Doesn't really go much deeper than that. Useful for a quick specification list. Means "A little more info than winver". Made with C# and WinForms.`,
    href: `https://github.com/404oops/ALMITWV`,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center mb-10">
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
