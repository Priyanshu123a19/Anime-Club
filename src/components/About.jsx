import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          welcome to anime club
        </p>

        <AnimatedTitle
          title="Un<b>i<b>te under the <b>r<b>ising sun<br /> a jou<b>r<b>ney where l<b>e<b>gends are bo<b>r<b>n and na<b>k<b>ama a<b>r<b>e fore<b>v<b>er."
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Anime Awakening begins—VIT becomes Nexus Academy</p>
          <p className="text-gray-500">
          where every student’s an anime hero. The Anime Club unites all worlds into one epic fest of fandom, fantasy, and fun!
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
