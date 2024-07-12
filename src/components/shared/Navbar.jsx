import Image from "next/image";
import Link from "next/link";
import Logo from "/public/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center py-2">
      <Link href="/">
        <Image src={Logo} alt="logo" width={50} height={50} />
      </Link>

      <ul className="flex items-center text-xl text-slate-600 gap-4">
        <li>
          <Link href="/hotels">Recommended Places</Link>
        </li>

        <li>
          <Link href="/about-us">About Us</Link>
        </li>

        <li>
          <Link href="/contact-us">Contact us</Link>
        </li>

        <li>
          <Link href="/bookings">Bookings</Link>
        </li>

        <li>
          <Link
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:brightness-105 active:bg-blue-600"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
