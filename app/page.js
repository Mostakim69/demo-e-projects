import Image from "next/image";
import Testimonial from "./components/home/Testimonial/Testimonial";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/footer/Footer";
import Newsletter from "./components/newsletter/Newsletter";
import PopularProduct from "./components/home/PopularProduct";
import Banner from "./components/home/Banner";

export default function Home() {
  return (
    <main>
     <Navbar></Navbar>
     <Newsletter></Newsletter>
     <PopularProduct/>
     <Banner></Banner>
      <Testimonial/>
     <Footer></Footer>
    </main>
  );
}
