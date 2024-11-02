import Link from "next/link";

export default function RightSection() {
  return (
    <>
      <Link href="/recipe">
        <button className="flex m-6 border border-black rounded-lg bg-yellow-400 hover:opacity-80 active:bg-yellow-400/50">
          <div className="text-black font-bold p-1">
            Your New Recipe!
          </div>
          <div className="p-1">
            &#129386;
          </div>
        </button>
      </Link>
    </>
  );
}