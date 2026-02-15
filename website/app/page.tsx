import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import AIWorkflow from "@/components/AIWorkflow";
import MCPDemo from "@/components/MCPDemo";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoTicker />
      <FeatureGrid />
      <HowItWorks />
      <AIWorkflow />
      <MCPDemo />
      <UseCases />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
