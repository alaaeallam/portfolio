import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 md:py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo_green.png"
            alt="Alaa Logo"
            width={32}
            height={32}
            className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12"
            priority
          />
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
