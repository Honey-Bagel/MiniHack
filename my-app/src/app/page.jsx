import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="opacity-30 z-0 absolute">
        <Image
          src="/background.jpg"
          width={200}
          height={100}
          // style={{ "width" : "100%", "height" : "100%" }}
          alt="background" 
        /> 
      </div>
      <div className="flex flex-col pt-20 relative z-1">
        <div className="mt-10 ml-32">
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
          <div className="flex">
            <Link href="/gettingStarted">
              <button className="flex m-6 border border-black rounded-lg bg-yellow-500 hover:opacity-80 active:bg-yellow-400/50">
                <div className="text-black font-semibold p-1">
                  Get Started
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/pasta.png"
            width={800}
            height={0}
            alt="pasta"
          />
        </div>
      </div>
    </>
  );
}
