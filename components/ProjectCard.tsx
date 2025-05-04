import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  href: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  href,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white/5 rounded-lg border border-gray-800/50 
        transition-all duration-500 ease-custom-bezier h-full
        hover:bg-white/10 hover:border-gray-600/50 hover:backdrop-blur-custom"
    >
      <div className="flex gap-4 items-center min-h-full">
        {image && (
          <div className="flex-shrink-0">
            <Image
              src={image}
              alt={title}
              width={96}
              height={96}
              className="w-24 h-24 object-cover rounded-md"
            />
          </div>
        )}
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
}
