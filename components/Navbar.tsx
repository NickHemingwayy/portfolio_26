"use client";

import { CircleCheck, File, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

import { useCoins } from "@/app/providers/coinProvider";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import confetti from "canvas-confetti";

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

  useEffect(() => {
    if (coinsCollected.length === 5) {
      console.log("coins collected");
      launchConfetti();
    }
  }, [coinsCollected]);

  const launchConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

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
            {coinsCollected.length === 5 ? (
              <CircleCheck className="text-green-200" />
            ) : (
              <></>
            )}
            <Image
              src="/coin/coin-faces.png"
              alt="Coin"
              width={34}
              height={34}
              className="inline-block"
            />
          </div>

          <Button variant={"outline"} asChild>
            <Link
              href="/resume/Nicholas_Hemingway_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <File />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
