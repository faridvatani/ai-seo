"use client";
import { ProductImage } from "@/assets";
import { featuresTabs } from "@/data/data";
import { DotLottiePlayer } from "@dotlottie/react-player";

export const Features = () => {
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
          {featuresTabs.map((tab, index) => (
            <div
              key={index}
              className="flex gap-2.5 p-2.5 lg:flex-1 items-center border border-white/15 rounded-xl"
            >
              <div className="inline-flex justify-center items-center size-12 border border-white/15 rounded-lg">
                <DotLottiePlayer src={tab.icon} className="size-5" autoplay />
              </div>
              <span className="font-medium">{tab.title}</span>
              {tab.isNew && (
                <span className="px-2 py-0.5 text-xs bg-[#8c44ff] text-black font-semibold rounded-full">
                  new
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="p-2.5 border border-white/20 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg mt-3"
            style={{
              backgroundImage: `url(${ProductImage.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
