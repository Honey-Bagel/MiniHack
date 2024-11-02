"use client";
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="relative bg-section h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

    {/* Opacity */}
    <div className="absolute inset-0 bg-black opacity-5"></div>

      {/* Content */}
      <div className="relative text-9xl text-center w-full mt-20 text-black font-bold z-10">
        Meet The Team
      </div>

      {/* Team Grid */}
      <div className="team-grid mt-8 relative z-10 grid grid-cols-2 gap-8 max-w-md mx-auto">
        <div className="team-member text-center">
          <Image
            src="/addisonfoodicon.png"
            alt="Addison Sigsbury"
            width={500}
            height={150}
            className="rounded-full"
          />
          <p className="text-4xl mt-2 text-black">Addison Sigsbury</p>
        </div>
       
        <div className="team-member text-center">
          <Image
            src="/jackfoodicon.png"
            alt="Jack Schoebel"
            width={500}
            height={150}
            className="rounded-full"
          />
          <p className="text-4xl mt-2 text-black">Jack Schoebel</p>
        </div>

        <div className="team-member text-center">
          <Image
            src="/raynefoodicon.png"
            alt="Rayne Desales"
            width={500}
            height={150}
            className="rounded-full"
          />
          <p className="text-4xl mt-2 text-black">Rayne Desales</p>
        </div>

        <div className="team-member text-center">
          <Image
            src="/ericfoodicon.png"
            alt="Eric La"
            width={500}
            height={150}
            className="rounded-full"
          />
          <p className="text-4xl mt-2 text-black">Eric La</p>
        </div>
      </div>

      <style jsx>{`
        .bg-section {
          padding: 20px;
          text-align: center;
          position: relative;
        }
      `}</style>
    </div>
  );
}
