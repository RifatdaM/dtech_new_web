import { useEffect } from "react"
import { useGSAP } from "@gsap/react"
import { hoverBtn } from "../utils/hover-btn"
import { gsap } from "gsap";

// plugins
// @ts-ignore
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "../plugins";
// custom hooks
import useScrollSmooth from "../hooks/use-scroll-smooth"

// animations
import { bounceAnimation, fadeAnimation, revelAnimationOne, revelAnimationTwo } from "../utils/title-animation"

// components
import Wrapper from "../layouts/wrapper"
import GalleryOne from "../components/gallery/gallery-one"
import HeroBannerFour from "../components/hero-banner/hero-banner-four"
import SEO from "../components/SEO"
import HeaderFive from "../layouts/header/header-five"
import CounterOne from "../components/counter/counter-one";
import BrandTwo from "../components/brand/brand-two";
import AboutOne from "../components/about/about-one";
import WhyDtech from "../components/cards/why-dtech";
import DtechServices from "../components/services/dtech-service";
import FooterTwo from "../layouts/footer/footer-two";
import FooterFour from "../layouts/footer/footer-four";
import ContactOne from "../components/contact/contact-one";
import { ctaAnimation } from "../utils/cta-anim";
import { textInvert } from "../utils/text-invert";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText)

const Home2 = () => {
    useScrollSmooth();

    useEffect(() => {
        document.body.classList.add("tp-smooth-scroll");
        return () => {
            document.body.classList.remove("tp-smooth-scroll");
        };
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
            cursorAnimation();
        }
    }, []);

    useGSAP(() => {
        const timer = setTimeout(() => {
            try {
                fadeAnimation();
                revelAnimationOne();
                hoverBtn();
                // revelAnimationTwo();
                bounceAnimation()
                ctaAnimation()
                textInvert()
            } catch (error) {
                console.error('Animation error:', error);
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    return (
        <Wrapper>
            {/* magic cursor start */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>
            <SEO
                title="Dtech Online Limited - Home 2"
                description="Dtech Online Limited is an Internet Service Provider company providing Internet Services since 2003."
                name="Dtech Online Limited"
                type="website"
                url="www.dtechonline.net"
            />


            {/* <Header2 /> */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderFive />

                        {/* hero area start */}
                        <HeroBannerFour />
                        {/* hero area end */}

                        <DtechServices />

                        <AboutOne />


                        <WhyDtech />

                        <GalleryOne />


                        <BrandTwo />

                        <CounterOne />

                        <ContactOne />

                        <FooterFour />

                    </main>
                </div>
            </div>
        </Wrapper>
    )
}

export default Home2