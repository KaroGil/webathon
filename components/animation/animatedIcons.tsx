"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
import type { StaticImageData } from "next/image";
import turtle from "@/public/turtle.png";

type AnimatedIconsProps = {
  n: number;
  children: React.ReactNode;
};

export const AnimatedIcons = ({ n, children }: AnimatedIconsProps) => {
  const keys = [...new Array(n).keys()];

  const icons = [turtle];

  return (
    <div className="relative">
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {keys.map((key) => {
          const xOffset = Math.floor(Math.random() * 95);
          const yOffset = Math.floor(Math.random() * 95);

          const icon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <AnimatedIcon
              delay={key * 0.5}
              repeatDelay={7}
              xOffset={`${xOffset}%`}
              yOffset={`${yOffset}%`}
              key={key}
              icon={icon}
            />
          );
        })}
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
      top: xOffset,
      left: yOffset,
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
      delay: delay,
      repeatDelay: repeatDelay,
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
    }}
  >
    <Image src={icon} alt="" height={100} width={100} />
  </motion.div>
);
