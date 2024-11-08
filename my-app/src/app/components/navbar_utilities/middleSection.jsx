"use client";
import Link from "next/link";

export default function MiddleSection() {
  return (
    <>
      <Link href="/">
        <button className="flex m-6 border border-black rounded-lg bg-yellow-400 hover:opacity-80 active:bg-yellow-400/50">
          <div className="text-black font-bold p-1">
            Home
          </div>
          <div className="p-1">
            &#127838;
          </div>
        </button>
      </Link>
      <Link href="/about">
        <button className="flex m-6 border border-black rounded-lg bg-yellow-400 hover:opacity-80 active:bg-yellow-400/50">
          <div className="text-black font-bold p-1">
            Meet The Team
          </div>
          <div className="p-1">
            &#129388;
          </div>
        </button>
      </Link>
      <Link href="/docs">
        <button className="flex m-6 border border-black rounded-lg bg-yellow-400 hover:opacity-80 active:bg-yellow-400/50">
          <div className="text-black font-bold p-1">
            How It Works
          </div>
          <div className="p-1">
            &#127813;
          </div>
        </button>
      </Link>
      <Link href="/gettingStarted">
        <button className="flex m-6 border border-black rounded-lg bg-yellow-400 hover:opacity-80 active:bg-yellow-400/50">
          <div className="text-black font-bold p-1">
            Get Started
          </div>
          <div className="p-1">
            &#129363;
          </div>
        </button>
      </Link>
    </>
  );
}