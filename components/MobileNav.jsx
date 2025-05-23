"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger
  aria-label="Open mobile navigation menu"
  className="flex justify-center items-center"
>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <VisuallyHidden>
          <SheetTitle id="mobile-menu-title">
            Mobile navigation menu
          </SheetTitle>
          <SheetDescription id="mobile-menu-description">
            Mobile navigation menu with site links and logo.
          </SheetDescription>
        </VisuallyHidden>
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl flex justify-center items-center">
          <Link href="/" >
            <Image
              src="/assets/logo_green.webp"
              alt="Alaa Logo"
              width={128}
              height={128}
              className="w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32"
              priority
            />
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
