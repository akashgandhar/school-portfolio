import About_Section from "@/components/About_Section";
import Metrics_Section from "@/components/Metrics_Section";
import Slider from "@/components/Slider";
import Founders from "@/components/Founders";
import Whyus_Section from "@/components/Whyus_Section";
import Head from "next/head";
import Image from "next/image";
import Gallery_Section from "@/components/Gallery_Section";

export default function Home() {
  return (
    <>
      
      <main className="min-h-screen">
        <Slider/>
        <About_Section/>
        <Metrics_Section/>
        <Whyus_Section/>
        <Founders/>
        <Gallery_Section/>
      </main>
    </>
  );
}
