import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import years from "../../assets/img/dtech/22Years.svg"

const Hero = () => {
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const yearsRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Words animation
        gsap.set(wordRefs.current, {
            x: -50,
            opacity: 0
        });

        // Years SVG animation setup
        gsap.set(yearsRef.current, {
            opacity: 0,
            scale: 0.5,
            rotation: -180
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".tp-studio-hero-heading-1",
                start: "top center+=100",
                toggleActions: "play none none reverse",
            }
        });

        // Words animation
        tl.to(wordRefs.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: {
                each: 0.5,
                ease: "none"
            },
            ease: "power2.out",
            clearProps: "all"
        });

        // Years SVG animation
        tl.to(yearsRef.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
        }, "-=1"); // Start slightly before words animation ends

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="panel-2 tp-studio-height">
            <div className="tp-studio-hero-area tp-studio-hero-space tp-studio-height tp-studio-plr p-relative fix pt-145 pb-145">
                <div className="container container-1480">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="tp-studio-hero-title-box p-relative">
                                <h1 className="tp-studio-hero-heading-1 d-flex flex-column">
                                    {['Reliability', 'Expertise', 'Dedication', 'Adaptation'].map((word, index) => (
                                        <span
                                            key={index}
                                            ref={el => wordRefs.current[index] = el}
                                            style={{ display: 'inline-block', marginRight: '15px' }}
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </h1>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <img 
                                ref={yearsRef}
                                src={years} 
                                alt="22 Years of Excellence" 
                                style={{
                                    transformOrigin: 'center center',
                                    willChange: 'transform, opacity'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;