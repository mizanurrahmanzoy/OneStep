import Navbar from "@/components/layout/Navbar";
import Container from "@/components/shared/Container";

import HomeContent from "@/components/home/HomeContent";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen">

      <Navbar />

      <Container>
        <HomeContent />
      </Container>


    </main>
  );
}