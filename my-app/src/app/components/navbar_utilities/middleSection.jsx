"use client";
import Link from "next/link";

export default function MiddleSection() {
  return (
    <>
      <Link href="/">
        <div className="text-white flex m-6">
          Home
        </div>
      </Link>
      <Link href="/about">
        <div className="text-white flex m-6">
          About Us
        </div>
      </Link>
      <Link href="/docs">
        <div className="text-white flex m-6">
          How It Works
        </div>
      </Link>
      <Link href="/gettingStarted">
        <div className="text-white flex m-6">
          Get Started
        </div>
      </Link>
    </>
  );
}