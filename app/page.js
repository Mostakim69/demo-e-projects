import Image from "next/image";
import Testimonial from "./components/home/Testimonial/Testimonial";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/footer/Footer";
import Newsletter from "./components/newsletter/Newsletter";
import PopularProduct from "./components/home/PopularProduct";
import Banner from "./components/home/Banner";
import SpecialOffers from "./components/home/SpecialOffers";
import Catagories from "./components/catagories/Catagories";
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts";
import Banner from "./components/home/banner/Banner";

export default function Home() {
  return (
    <main>
      hello world
      <Testimonial/>
     <Navbar></Navbar>
     <Newsletter></Newsletter>
     <PopularProduct/>
     <SpecialOffers/>
     <Banner></Banner>
     <Footer></Footer>
      <Navbar></Navbar>
      <Banner />
      <Catagories />
      <FeaturedProducts />
      <PopularProduct />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  );
}
