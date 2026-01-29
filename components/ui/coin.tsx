"use client";

import { useCoins } from "@/app/providers/coinProvider";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Coin({ id }: { id: string }) {
  const { coinsCollected, collectCoin } = useCoins();

  const controls = useAnimation();
  const [collected, setCollected] = useState(false);

  const collect = async () => {
    collectCoin(id);
    if (collected) return;
    setCollected(true);

    await controls.start({
      y: -300,
      rotateY: 1080,
      opacity: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    });
  };

  const coinHasbeenCollected = useMemo(() => {
    return coinsCollected.includes(id);
  }, []);

  if (coinHasbeenCollected) {
    return <></>;
  }

  return (
    <div className="w-10 h-10 perspective-[1200px]">
      <motion.div
        onClick={collect}
        animate={controls}
        initial={{ opacity: 1 }}
        className="
          relative w-full h-full cursor-pointer
          [transform-style:preserve-3d]
          drop-shadow-[0_12px_16px_rgba(0,0,0,0.35)]
        "
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-full overflow-hidden [backface-visibility:hidden] [transform:translateZ(10px)]">
          <Image src="/coin/coin-faces.png" alt="" fill />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_60%)]" />
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-full overflow-hidden [backface-visibility:hidden] rotate-y-180 [transform:translateZ(10px)]">
          <Image src="/coin/coin-faces.png" alt="" fill />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.25),transparent_60%)]" />
        </div>

        {/* Edge (this is the magic) */}
        <div
          className="
            absolute inset-0 rounded-full
            rotate-y-90
            scale-x-[0.18]
            bg-[url('/coin/coin-side.png')]
            bg-repeat
            bg-center
          "
        />
      </motion.div>
    </div>
  );
}
