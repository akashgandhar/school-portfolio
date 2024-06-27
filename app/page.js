import About_Section from "../components/About_Section";
import Metrics_Section from "../components/Metrics_Section";
import Slider from "../components/Slider";
import Founders from "../components/Founders";
import Whyus_Section from "../components/Whyus_Section";
import Head from "next/head";
import Image from "next/image";
import Gallery_Section from "../components/Gallery_Section";

export default function Home() {
  return (
    <>
      
      <main className="min-h-screen  bg-no-repeat  ">
        <Slider/>
        <div className="flex items-center justify-center bg-[#255c39] text-white text-2xl md:text-3xl">

        <h1 class="text-3xl font-bold tracking-tight py-4  w-full text-center sm:text-4xl">
          Welcome to Ojas Sikshan and Prasikshan Sansthan
        </h1>
        </div>
        <About_Section/>
        <Metrics_Section/>
        <Whyus_Section/>
        <Founders/>
        <Gallery_Section/>
      </main>
    </>
  );
}
