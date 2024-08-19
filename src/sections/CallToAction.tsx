import { Button } from "@/components/Button";
import { StarsImage, GridLines } from "@/assets";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="relative py-24 animate-moveBg border border-white/15 rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(${StarsImage.src})`,
            backgroundRepeat: "repeat",
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${GridLines.src})`,
            }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl text-center font-medium tracking-tighter max-w-sm mx-auto">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-lg md:text-xl text-center text-white/70 tracking-tight px-5 mt-5 max-w-xs mx-auto">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
