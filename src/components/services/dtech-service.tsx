import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import logo from "../../assets/img/dtech/logo.svg"
// import "../../assets/img/dtech/bg.webp"
// import { motion } from "framer-motion"
import styles from './dtech-service.module.scss'
gsap.registerPlugin(ScrollTrigger)


const serviceValues = [
    { name: "design", position: { x: -20, y: -30 } },
    { name: "experience", position: { x: -35, y: -15 } },
    { name: "unique", position: { x: 20, y: -30 } },
    { name: "narrative", position: { x: 35, y: -15 } },
    { name: "connection", position: { x: -35, y: 15 } },
    { name: "character", position: { x: -20, y: 30 } },
    { name: "audience", position: { x: 35, y: 15 } },
    { name: "brand", position: { x: 20, y: 30 } },
];


const DtechServices = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const servicesRef = useRef<HTMLDivElement[]>([])
    const backgroundRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current || !backgroundRef.current) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 5%",
                end: "bottom end",
                scrub: 1,
                pin: true,
            },
        })

        // Add subtle rotation animation to the centerpiece
        gsap.to('.centerpiece img', {
            rotate: 360,
            duration: 20,
            repeat: -1,
            ease: "none"
        })

        // Add parallax effect to background
        gsap.to(backgroundRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom 10%",
                scrub: true,
                markers:false,
            },
            y: "-20%",
            ease: "none"
        })

        servicesRef.current.forEach((service, index) => {
            const { x, y } = serviceValues[index].position

            // Initial position (clustered)
            gsap.set(service, {
                xPercent: -50,
                yPercent: -50,
            })

            // Animate to spread out position
            tl.to(
                service,
                {
                    x: `${x}vw`,
                    y: `${y}vh`,
                    duration: 1,
                },
                0,
            )
            //  add floting effect
            
        })

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.parallaxBackground} ref={backgroundRef}></div>
            <div className={styles.content}>
                <div className={styles.centerpiece}>
                    <img src={logo} alt="Logo" />
                </div>

                {serviceValues.map((service, index) => (
                    <div
                        key={service.name}
                        ref={(el) => (servicesRef.current[index] = el as HTMLDivElement)}
                        className={styles.service}
                    >
                        {service.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DtechServices