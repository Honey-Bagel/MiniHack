import Image from "next/image";

export default function LeftSection() {
  return (
    <>
      <div className="flex mx-10">
        <Image
          src="/globe.svg"
          alt="logo"
          width={36}
          height={0}
        />
      </div>
    </>
  );
}