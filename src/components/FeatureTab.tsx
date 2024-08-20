import { useRef, useEffect } from "react";
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
import { ComponentPropsWithoutRef } from "react";
import { featuresTabs } from "@/data/data";

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
      (width * 2 - height) / circumference,
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
  }, [props.selected, xPercentage, yPercentage]);

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

export default FeatureTab;
