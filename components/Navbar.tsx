"use client";

import { File, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

import { useCoins } from "@/app/providers/coinProvider";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const { coinsCollected } = useCoins();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Animate
  }, [coinsCollected]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 ${
        scrolled ? "bg-black" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-16 flex justify-between items-center text-white py-2">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </Link>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <span className="items-center">{coinsCollected}/5</span>{" "}
            <Image
              src="/coin/coin-front.png"
              alt="Coin"
              width={34}
              height={34}
              className="inline-block"
            />
          </div>

          {/* <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button
                variant={"outline"}
                className="hover:!bg-transparent hover:opacity-70 cursor-pointer"
              >
                <Image
                  src="/blob-gradient.png"
                  alt="Blob gradient"
                  width={30}
                  height={30}
                />
                Ask
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-[525px] p-0 overflow-hidden">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/jbMZ7HOPMOyccgvjo3qIC"
                width="100%"
                loading="eager"
                style={{
                  height: "100%",
                  minHeight: 700,
                }}
                // frameborder="0"
              ></iframe>
            </DialogContent>
          </form>
        </Dialog> */}
          {/* <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"}>
              <Image
                src="/blob-gradient.png"
                alt="Blob gradient"
                width={50}
                height={50}
              />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/jbMZ7HOPMOyccgvjo3qIC"
              width="100%"
              style={{
                height: "100%",
                minHeight: 700,
              }}
              // frameborder="0"
            ></iframe>
          </SheetContent>
        </Sheet> */}

          <Button variant={"accent"}>Contact</Button>
          {/* <Button variant={"ghost"}>
          <File />
        </Button> */}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
