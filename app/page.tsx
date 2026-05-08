import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Problem from "./components/problem";
import TruthAbout from "./components/truthabout";
import VideoSkills from "./components/videoskills";
import TransformProof from "./components/transformproff";
import ObjMissionCTA from "./components/objmissioncta";
import LearningSection from "./components/learningsection";

// import AboutSection from "./users/aboutsection";
// import BackgroundEffects from "./users/backgroundeffect";
// import CTASection from "./users/ctasection";
// import ExpertiseSection from "./users/expertisesection";
// import Footer from "./users/footer";
// import Hero from "./users/hero";
// import Navbar from "./users/navbar";
// import PortfolioSection from "./users/portfoliosection";
// import ProcessSection from "./users/processsection";
// import ServicesSection from "./users/servicessection";
// import TestimonialsSection from "./users/testimonialssection";
// import VideoSection from "./users/videosection";

export default function Home() {
  return (
    
    <main className="bg-[#080808] min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <TruthAbout />
      <LearningSection/>
      <VideoSkills />
      <TransformProof />
      <ObjMissionCTA />
    </main>


    // <main className="min-h-screen bg-[#050505] overflow-x-hidden">
    //   <BackgroundEffects />
    //   <Navbar />
    //   <Hero />
    //   <VideoSection />
    //   <AboutSection />
    //   <ServicesSection />
    //   <ProcessSection />
    //   <PortfolioSection />
    //   <ExpertiseSection />
    //   <TestimonialsSection />
    //   <CTASection />
    //   <Footer />
    // </main>
  );
}
