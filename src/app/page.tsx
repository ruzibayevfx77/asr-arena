import BronJoyi from "@/components/mijoz/BronJoyi";
import Footer from "@/components/mijoz/Footer";
import Hero from "@/components/mijoz/Hero";
import Joylashuv from "@/components/mijoz/Joylashuv";
import Marquee from "@/components/mijoz/Marquee";
import Narxlar from "@/components/mijoz/Narxlar";
import Navbar from "@/components/mijoz/Navbar";
import ZalXaritasi from "@/components/mijoz/ZalXaritasi";

export default function BoshSahifa() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Narxlar />
        <ZalXaritasi />
        <BronJoyi />
        <Joylashuv />
      </main>
      <Footer />
    </>
  );
}