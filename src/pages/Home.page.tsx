import { gsap } from "gsap";
import { useEffect } from "react";
import useScrollSmooth from "../hooks/use-scroll-smooth";
// @ts-ignore
import { ScrollSmoother, ScrollTrigger, SplitText } from "../plugins";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger, SplitText);

// components
import { studioPanel } from "../utils/panel-animation";
import Wrapper from "../layouts/wrapper";
import Header from "../layouts/header/Header";
import StudioPanelOne from "../components/studio-panels/studio-panel-1";
import StudioPanelTwo from "../components/studio-panels/studio-panel-2";
import Hero from "../components/home/Hero";
import SEO from "../components/SEO";

const Home = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      studioPanel()
    }, 100);
    return () => clearTimeout(timer);
  });
  return (
    <Wrapper>
      <SEO
        title="Dtech Online Limited"
        description="Dtech Online Limited is an Internet Service Provider company providing Internet Services since 2003."
        name="Dtech Online Limited"
        type="website"
        url="www.dtechonline.net"
      />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-studio-right-layout">
              {/* hero area start */}

              {/* hero area end */}

              <section className="tp-project-2-area">
                <div className="panels-2 p-relative fix">
                  <div className="panels-container-2 d-flex align-items-center">
                    <Hero />
                    <StudioPanelOne />
                    <StudioPanelTwo />

                  </div>
                </div>
              </section>
            </div>
          </main>

          {/* footer area */}

          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  )
}

export default Home