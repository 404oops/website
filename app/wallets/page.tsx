import type { Metadata } from "next";
import Link from "next/link";
import CryptoCard from "@/components/CryptoCard";

export const metadata: Metadata = {
  title: "Crypto Wallets | 404oops",
  description: "My wallets",
};

const projects = [
  {
    title: "Monero (XMR)",
    address: "43gur9R7d17cvqhRwiS2ZM6wFr2g5SkmTEvvfgv5M8dFS2twgMMQi9TX6jJnnJFJ1uPgBJKVX918C19Q5XArfZGNRd6FzM7"
  },
  {
    title: "Ethereum (ETH)",
    address: "0x2F81104BaA0Ab87c6aacAAD2dB089BFABa52f848",
  },
  {
    title: "Solana (SOL)",
    address: "3Zob26GKboxGhzmqsf4pzD7XrEh4gZmGeBzXd7PHEf2z",
  },
  {
    title: "Bitcoin (BTC)",
    address: "bc1qc52jwk7m2pqarskza2uelrn4nf4ycssdyud3hm",
  },
  {
    title: "Ripple (XRP)",
    address: "rnv7BqJ9TWosqsMQngS6bpxLTchagimyjg",
  },
  {
    title: "Litecoin (LTC)",
    address: "ltc1qkcd7eg3udjvqk5l62u3n83447vf3f83h7q6rl7",
  },
  {
    title: "TRON (TRX)",
    address: "TGEFskzFgYNobDG5cuED4DXtjBcNxxQwao",
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center max-w-xl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold">My Crypto Wallets</h1>
        <h3 className="text-xl font-bold mb-4 underline">
          <Link href="/">Go back</Link>
        </h3>
        <h2 className="text-lg font-semibold mb-4">
          Click on the boxes to copy the addresses. If you want to support me, you can send crypto to any of these wallets. Thank you!
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <CryptoCard
              key={index}
              title={project.title}
              address={project.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
