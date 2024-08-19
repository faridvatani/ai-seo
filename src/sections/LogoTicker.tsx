"use client";
import {
  AcmeLogo,
  ApexLogo,
  CelestialLogo,
  QuantumLogo,
  PulseLogo,
  EchoLogo,
} from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  AcmeLogo,
  PulseLogo,
  EchoLogo,
  CelestialLogo,
  ApexLogo,
  QuantumLogo,
];

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt="Logo Ticker"
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
