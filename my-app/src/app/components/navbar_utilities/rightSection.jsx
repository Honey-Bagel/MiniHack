import Link from "next/link";

export default function RightSection() {
  return (
    <>
      <Link href="/recipe">
        <button className="flex m-6 border rounded-lg">
          <div className="text-white p-1">
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