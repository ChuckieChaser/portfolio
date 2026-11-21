import { m, useReducedMotion } from 'motion/react';

const VIEWPORT_OPTIONS = {
    once: false,
    amount: 0.2,
    margin: '0px',
};

const REVEAL_VARIANTS = {
    hidden: {
        opacity: 0,
        y: 32,
        transition: {
            duration: 0.42,
            ease: 'easeIn',
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.68,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const REDUCED_REVEAL_VARIANTS = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.32,
            ease: 'easeOut',
        },
    },
};

export const ScrollReveal = ({ children, className, ...props }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <m.div
            {...props}
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTIONS}
            variants={shouldReduceMotion ? REDUCED_REVEAL_VARIANTS : REVEAL_VARIANTS}
        >
            {children}
        </m.div>
    );
};

export const StaggerContainer = ({ children, className, staggerDelay = 0.12, ...props }) => {
    const shouldReduceMotion = useReducedMotion();
    const staggerVariants = {
        hidden: {
            transition: {
                staggerChildren: shouldReduceMotion ? 0.03 : 0.07,
                staggerDirection: -1,
            },
        },
        visible: {
            transition: {
                delayChildren: shouldReduceMotion ? 0 : 0.04,
                staggerChildren: shouldReduceMotion ? 0.06 : staggerDelay,
            },
        },
    };

    return (
        <m.div
            {...props}
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTIONS}
            variants={staggerVariants}
        >
            {children}
        </m.div>
    );
};

export const StaggerItem = ({ children, className, ...props }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <m.div {...props} className={className} variants={shouldReduceMotion ? REDUCED_REVEAL_VARIANTS : REVEAL_VARIANTS}>
            {children}
        </m.div>
    );
};
