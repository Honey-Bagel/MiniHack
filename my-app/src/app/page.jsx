import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col pt-20">
        <div className="mt-40 ml-32">
          <div className="flex text-5xl font-bold text-black mb-4">
            <div className="flex">
              "Got <span className="pl-2 pr-2 text-yellow-500">Food</span> in the Fridge, No Ideas?
            </div>
          </div>
          <div className="flex text-2xl font-semibold text-grey-700 mt-2">
            <div className="flex">
              Let's Make Magic with What's in Your Fridge!"
            </div>
          </div>
          <div>
            <Link href="/gettingStarted">
              <button className="flex m-6 border rounded-lg bg-yellow-500">
                <div className="text-black font-semibold p-1">
                  Get Started
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
