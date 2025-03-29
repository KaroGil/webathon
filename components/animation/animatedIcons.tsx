"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import turtle from "@/public/turtle.png";
import type { StaticImageData } from "next/image";
import duck from "@/public/duck.png";

type AnimatedIconsProps = {
  n: number;
  bade?: boolean;
  children: React.ReactNode;
};

type IconData = {
  x: string;
  y: string;
};

export const AnimatedIcons = ({ n, bade, children }: AnimatedIconsProps) => {
  const [iconsData, setIconsData] = useState<IconData[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: n }).map(() => ({
      x: `${Math.floor(Math.random() * 95)}%`,
      y: `${Math.floor(Math.random() * 95)}%`,
    }));
    setIconsData(generated);
  }, [n]);

  let icon = turtle;
  if (bade) {
    icon = duck;
  }

  return (
    <div className="relative">
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {iconsData.map((pos, index) => (
          <AnimatedIcon
            key={index}
            xOffset={pos.x}
            yOffset={pos.y}
            delay={index * 0.5}
            repeatDelay={5}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

type AnimatedIconProps = {
  xOffset: string;
  yOffset: string;
  delay: number;
  repeatDelay: number;
  icon: StaticImageData;
};

export const AnimatedIcon = ({
  xOffset,
  yOffset,
  delay,
  repeatDelay,
  icon,
}: AnimatedIconProps) => (
  <motion.div
    style={{
      position: "absolute",
      top: yOffset,
      left: xOffset,
      zIndex: 0,
    }}
    initial={{ opacity: 0 }}
    animate={{
      x: "200%",
      y: ["0%", "20%", "-10%", "-5%"],
      opacity: [null, 1, 1, 1, 1, 0],
      rotate: [null, -10, 2, -5],
    }}
    transition={{
      delay,
      repeatDelay,
      duration: 5,
      repeat: Infinity,
    }}
  >
    <Image src={icon} alt="floating icon" height={100} width={100} />
  </motion.div>
);
