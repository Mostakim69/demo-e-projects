import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/footer/Footer";
import Newsletter from "./components/newsletter/Newsletter";

export default function Home() {
  return (
    <main>
     <Navbar></Navbar>
     <Newsletter></Newsletter>
     <Footer></Footer>
    </main>
  );
}
