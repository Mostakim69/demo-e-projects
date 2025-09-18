import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/footer/Footer";
import Banner from "./components/home/Banner";

export default function Home() {
  return (
    <main>
     <Navbar></Navbar>
     <Banner></Banner>
     <Footer></Footer>
    </main>
  );
}
