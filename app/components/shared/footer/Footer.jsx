// components/Footer.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/logo.png"


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & Name */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image src={logoImg} alt="Smart Shop Logo" width={40} height={40} />
            <h1 className="text-xl font-bold text-white">Smart Shop</h1>
          </div>
          <p className="text-sm text-gray-400">
           Smart Shop is your reliable e-commerce partner. We help online businesses manage inventory, track sales, and grow efficiently.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h2 className="text-white font-semibold mb-3">About Us</h2>
          <p className="text-sm text-gray-400">
            At Smart Shop, our mission is to revolutionize e-commerce by using
            artificial intelligence to provide accurate sales predictions and
            efficient inventory management. We believe in empowering businesses
            to grow smarter and faster.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white font-semibold mb-3">Contact Info</h2>
          <p className="text-sm">Email: support@smartshop.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>
          <p className="text-sm">Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Media + Policies */}
        <div>
          <h2 className="text-white font-semibold mb-3">Connect With Us</h2>
          <div className="flex gap-4 mb-4">
            <Link href="https://github.com" target="_blank">
              <FaGithub className="w-6 h-6 hover:text-white" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="w-6 h-6 hover:text-white" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="w-6 h-6 hover:text-white" />
            </Link>
          </div>
          <div className="text-sm space-y-1">
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
            <br />
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Smart Shop. All rights reserved. | Powered
        by AI Technology
      </div>
    </footer>
  );
}
