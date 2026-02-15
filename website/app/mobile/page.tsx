import type { Metadata } from "next";
import Nav from "@/components/Nav";
import MobileHero from "@/components/mobile/MobileHero";
import MobileFeatures from "@/components/mobile/MobileFeatures";
import MobileUseCases from "@/components/mobile/MobileUseCases";
import MobileCTA from "@/components/mobile/MobileCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Crawlio Mobile — Download Websites on iPhone & iPad",
  description:
    "Download entire websites from your iPhone or iPad. Same powerful CrawlioCore engine, native iOS experience with Liquid Glass design.",
  openGraph: {
    title: "Crawlio Mobile — The Web, In Your Pocket",
    description:
      "Download entire websites from your iPhone or iPad. Native iOS app with Liquid Glass design.",
    url: "https://crawlio.app/mobile",
    siteName: "Crawlio",
    type: "website",
  },
};

export default function MobilePage() {
  return (
    <>
      <Nav />
      <MobileHero />
      <MobileFeatures />
      <MobileUseCases />
      <MobileCTA />
      <Footer />
    </>
  );
}
