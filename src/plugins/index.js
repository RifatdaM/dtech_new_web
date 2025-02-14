// export { default as SplitText } from "./gsap-split-text";
// export { default as ScrollTrigger } from "./gsap-scroll-trigger";
// export { default as ScrollSmoother } from "./gsap-scroll-smoother";
// export { default as cursorAnimation } from "./tp-cursor";
// export { default as chroma } from "./chroma.min";
// export { default as WebGL } from "./webgl";
import "./gsap-scroll-trigger";
import "./gsap-scroll-smoother";
import "./gsap-split-text";
import "./scroll-magic";
import "./tp-cursor";
import "./webgl";

// Get plugins from globalThis instead of window
export const ScrollTrigger = globalThis.ScrollTrigger;
export const ScrollSmoother = globalThis.ScrollSmoother;
export const SplitText = globalThis.SplitText;
export const cursorAnimation = globalThis.cursorAnimation;
export const WebGL = globalThis.WebGL;
export const chroma = globalThis.chroma;
