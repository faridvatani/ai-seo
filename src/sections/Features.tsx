"use client";
import { ProductImage } from "@/assets";
import { featuresTabs } from "@/data/data";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { useState } from "react";
import FeatureTab from "@/components/FeatureTab";

export const Features = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const backgroundPositionX = useMotionValue(
    featuresTabs[0].backgroundPositionX,
  );
  const backgroundPositionY = useMotionValue(
    featuresTabs[0].backgroundPositionY,
  );
  const backgroundSizeX = useMotionValue(featuresTabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (tabIndex: number) => {
    setCurrentTab(tabIndex);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, featuresTabs[tabIndex].backgroundSizeX],
      animateOptions,
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), featuresTabs[tabIndex].backgroundPositionX],
      animateOptions,
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), featuresTabs[tabIndex].backgroundPositionY],
      animateOptions,
    );
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-lg md:text-xl text-white/70 text-center tracking-tight mt-5 max-w-2xl mx-auto">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 mt-10">
          {featuresTabs.map((tab, tabIndex) => (
            <FeatureTab
              key={tabIndex}
              {...tab}
              onClick={() => handleSelectTab(tabIndex)}
              selected={currentTab === tabIndex}
            />
          ))}
        </div>
        <div className="p-2.5 border border-white/20 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg mt-3"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${ProductImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
