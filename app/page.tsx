import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Problem from "./components/problem";
import TruthAbout from "./components/truthabout";
import VideoSkills from "./components/videoskills";
import TransformProof from "./components/transformproff";
import ObjMissionCTA from "./components/objmissioncta";

export default function Home() {
  return (
    <main className="bg-[#080808] min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <TruthAbout />
      <VideoSkills />
      <TransformProof />
      <ObjMissionCTA />
    </main>
  );
}
