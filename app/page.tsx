import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg mx-auto">
        <a href="/projects">
          <Image
            src="/logo.png"
            alt="Logo"
            width={1600}
            height={1600}
            priority
            className="w-auto h-auto max-h-[80%] min-h-0 mx-auto p-50vw"
          />
        </a>
      </div>
      <Footer />
    </>
  );
}
