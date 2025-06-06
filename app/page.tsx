import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg mx-auto">
        <Link href="/projects">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={1000}
            height={1000}
            priority
            className="max-h-[90vh] mx-auto p-30vw invert"
          />
        </Link>
      </div>
      <Footer />
    </>
  );
}
