
import { motion } from "framer-motion";

const PaymentSuccessAnimation = () => {
    const circleVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    const tickVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 2,
            },
        },
    };
    return (
        <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="overflow-visible"
        >
            <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="green"
                fill="none"
                strokeWidth="10"
                variants={circleVariants}
                initial="hidden"
                animate="visible"
            />
            <motion.path
                d="M70 100 L90 120 L130 80"
                stroke="green"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                variants={tickVariants}
                initial="hidden"
                animate="visible"
            />
        </svg>
    )
}

export default PaymentSuccessAnimation