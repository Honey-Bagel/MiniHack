"use client";
import Link from "next/link";

export default function MiddleSection() {
  return (
    <>
      <Link href="/">
        <button className="flex m-6 border rounded-lg">
          <div className="text-white p-1">
            Home
          </div>
          <div className="p-1">
            &#127838;
          </div>
        </button>
      </Link>
      <Link href="/about">
        <button className="flex m-6 border rounded-lg">
          <div className="text-white p-1">
            About Us
          </div>
          <div className="p-1">
            &#129388;
          </div>
        </button>
      </Link>
      <Link href="/docs">
        <button className="flex m-6 border rounded-lg">
          <div className="text-white p-1">
            How It Works
          </div>
          <div className="p-1">
            &#127813;
          </div>
        </button>
      </Link>
      <Link href="/gettingStarted">
        <button className="flex m-6 border rounded-lg">
          <div className="text-white p-1">
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