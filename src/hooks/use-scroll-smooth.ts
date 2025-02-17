import { gsap } from "gsap";
import { useState } from "react";
// @ts-ignore
// import { ScrollSmoother } from '../plugins';
import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(useGSAP,  ScrollSmoother)


export default function useScrollSmooth() {
  // @ts-ignore
  const [isScrollSmooth, setIsScrollSmooth] = useState<boolean>(true);
  useGSAP(() => {
    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (smoothWrapper && smoothContent && isScrollSmooth) {

      gsap.config({
        nullTargetWarn: false,
      });

      // ScrollSmoother.create({
      //   smooth: 2,
      //   effects: true,
      //   smoothTouch: 0.1,
      //   normalizeScroll: false,
      //   ignoreMobileResize: true,
      // });
    }
  });
}
