import Image from "next/image";

export default function LeftSection() {
  return (
    <>
      <div className="flex mx-4 bg-transparent">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={0}
        />
      </div>
    </>
  );
}