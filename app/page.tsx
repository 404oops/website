import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg mx-auto">
        <Link href="/projects">
          <Image
            src="/logo.png"
            alt="Logo"
            width={2000}
            height={2000}
            priority
            className="w-auto h-auto max-h-[90%] min-h-0 mx-auto p-20vw"
          />
        </Link>
      </div>
      <Footer />
    </>
  );
}
