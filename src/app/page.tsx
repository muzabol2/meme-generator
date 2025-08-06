"use client";
import { MemeGenerator } from "@/features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 pt-32 bg-githubBackground text-white">
      <MemeGenerator />
    </main>
  );
}
