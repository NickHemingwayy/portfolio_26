"use client";

import { File, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

import { useCoins } from "@/app/providers/coinProvider";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { coinsCollected } = useCoins();
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isRoot = pathname === "/";

  useEffect(() => {
    // Animate
  }, [coinsCollected]);

  useEffect(() => {
    if (!isRoot) {
      return;
    }

    const handleScroll = () => {
      const navHeight = navRef.current?.offsetHeight || 0;
      if (window.scrollY >= window.innerHeight - navHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isRoot]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-20 ${
        scrolled || !isRoot ? "bg-black" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-16 flex justify-between items-center text-white py-2">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </Link>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <span className="items-center">{coinsCollected.length}/5</span>{" "}
            <Image
              src="/coin/coin-faces.png"
              alt="Coin"
              width={34}
              height={34}
              className="inline-block"
            />
          </div>

          <Button variant={"accent"}>Contact</Button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
