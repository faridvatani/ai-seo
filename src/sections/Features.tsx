"use client";
import { ProductImage } from "@/assets";
import { featuresTabs } from "@/data/data";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

const FeatureTab = (
  props: (typeof featuresTabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean },
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) {
      return;
    }
    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);

    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) {
      return;
    }
    dotLottieRef.current.seek(0);
    dotLottieRef.current?.play();
  };

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      onClick={props.onClick}
      className="relative flex gap-2.5 p-2.5 lg:flex-1 items-center border border-white/15 rounded-xl cursor-pointer"
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage: maskImage,
          }}
          className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
        ></motion.div>
      )}
      <div className="inline-flex justify-center items-center size-12 border border-white/15 rounded-lg">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={props.icon}
          className="size-5"
          autoplay
        />
      </div>
      <span className="font-medium">{props.title}</span>
      {props.isNew && (
        <span className="px-2 py-0.5 text-xs bg-[#8c44ff] text-black font-semibold rounded-full">
          new
        </span>
      )}
    </div>
  );
};

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
