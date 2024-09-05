"use client";
import { config } from "@/config";
import { GitHubLink } from "@/components";
import { MemeGenerator } from "@/features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-githubBackground text-white">
      <header className="w-full flex items-center justify-between p-4 bg-githubHeader bg-opacity-90 fixed top-0 left-0 right-0 shadow-md z-50">
        <h1 className="text-3xl font-bold text-white">{config.title}</h1>
        <GitHubLink />
      </header>

      <MemeGenerator />
    </main>
  );
}
