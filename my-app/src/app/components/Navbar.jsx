import LeftSection from "./navbar_utilities/leftSection";
import MiddleSection from "./navbar_utilities/middleSection";
import RightSection from "./navbar_utilities/rightSection";

export default function Navbar() {
  return (
    <>
      <header className="flex fixed justify-between top-0 inset-x-0 bg-yellow-700 opacity-70 h-20 z-20">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </header>
    </>
  );
}