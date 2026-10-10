import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import Image from "next/image";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

export default function Home() {
  return (
   <div>
    <Marquee/>
    <Banner/>
   </div>
  );
}
