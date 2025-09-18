import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/footer/Footer";
import PopularProduct from "./components/home/PopularProduct";
import Banner from "./components/home/Banner";
import SpecialOffers from "./components/home/SpecialOffers";

export default function Home() {
  return (
    <main>
     <Navbar></Navbar>
     <PopularProduct/>
     <SpecialOffers/>
     <Banner></Banner>
     <Footer></Footer>
    </main>
  );
}
