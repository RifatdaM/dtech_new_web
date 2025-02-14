import React from 'react'
import { motion } from "framer-motion"
import styles from './why-dtech-card.module.css'

interface WhyDtechCardProps {
    backgroundImage: string
    title: string
    description: string
    backgroundColor: string
}

const WhyDtechCard: React.FC<WhyDtechCardProps> = ({ backgroundImage, title, description, backgroundColor }) => {
    if (!backgroundImage || !title || !description || !backgroundColor) {
        console.error("AnimatedCard: All props are required")
        return null
    }
    const truncatedDescription = description.length > 150 ? `${description.slice(0, 147)}...` : description
    return (


        <motion.div
            className={styles.card}
            initial="initial"
            whileHover="hover"
            animate="initial"
            style={
                {
                    "--background-image": `url(${backgroundImage})`,
                    "--background-color": backgroundColor,
                } as React.CSSProperties
            }
        >
            <motion.div className={styles.content}>
                <motion.div className={styles.backgroundOverlay} variants={overlayVariants} />
                <motion.div className={styles.textContent}>
                    <motion.span className={styles.firstLetter} variants={firstLetterVariants}>
                        {title[0]}
                    </motion.span>
                    <motion.h2 className={styles.title} variants={textVariants}>
                        {title}
                    </motion.h2>
                    <motion.p className={styles.description} variants={textVariants}>
                        {truncatedDescription}
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>


    )
}

const overlayVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0 },
}

const textVariants = {
    initial: { color: "#333" },
    hover: { color: "#fff" },
}

const firstLetterVariants = {
    initial: { WebkitTextFillColor: "transparent" },
    hover: { WebkitTextFillColor: "#fff" },
}
export default WhyDtechCard