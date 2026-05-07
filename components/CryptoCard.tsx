"use client"

interface ProjectCardProps {
  title: string;
  address: string;
}

export default function ProjectCard({
  title,
  address,
}: ProjectCardProps) {
  const copyAddress = async () => {
    await navigator.clipboard.writeText(address);
  };

  return (
    <div
      rel="noopener noreferrer"
      className="block p-6 bg-white/5 rounded-lg border border-gray-800/50 
        transition-all duration-500 ease-custom-bezier h-full
        hover:bg-white/10 hover:border-gray-600/50 hover:backdrop-blur-custom"
    >
      <div className="flex gap-4 items-center min-h-full">
        <div onClick={copyAddress} className="cursor-pointer">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-300 font-mono break-all [overflow-wrap:anywhere]">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
}
