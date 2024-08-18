import {
  AcmeLogo,
  ApexLogo,
  CelestialLogo,
  QuantumLogo,
  PulseLogo,
  EchoLogo,
} from "@/assets";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-14">
              {[
                AcmeLogo,
                PulseLogo,
                EchoLogo,
                CelestialLogo,
                ApexLogo,
                QuantumLogo,
              ].map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt="Logo Ticker"
                  className="h-6 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
