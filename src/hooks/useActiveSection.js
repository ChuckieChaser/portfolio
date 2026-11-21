import { useEffect, useState } from 'react';

const DEFAULT_BOTTOM_TOLERANCE = 4;
const ACTIVE_LINE_RATIO = 0.35;

export const useActiveSection = (sectionIds, options = {}) => {
    const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] ?? '');
    const bottomTolerance = options.bottomTolerance ?? DEFAULT_BOTTOM_TOLERANCE;

    useEffect(() => {
        if (!Array.isArray(sectionIds) || sectionIds.length === 0) {
            return undefined;
        }

        const sectionElements = sectionIds.map((sectionId) => document.getElementById(sectionId)).filter(Boolean);

        if (sectionElements.length === 0) {
            return undefined;
        }

        const lastSectionId = sectionElements[sectionElements.length - 1].id;
        let animationFrameId = null;

        const updateActiveSection = () => {
            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = window.requestAnimationFrame(() => {
                animationFrameId = null;

                const scrollBottom = window.scrollY + window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;

                if (scrollBottom >= documentHeight - bottomTolerance) {
                    setActiveSectionId(lastSectionId);
                    return;
                }

                const activationLine = window.innerHeight * ACTIVE_LINE_RATIO;
                let nextActiveSectionId = sectionElements[0].id;

                for (const sectionElement of sectionElements) {
                    if (sectionElement.getBoundingClientRect().top > activationLine) {
                        break;
                    }

                    nextActiveSectionId = sectionElement.id;
                }

                setActiveSectionId(nextActiveSectionId);
            });
        };

        updateActiveSection();
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        window.addEventListener('resize', updateActiveSection);

        return () => {
            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }

            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('resize', updateActiveSection);
        };
    }, [sectionIds, bottomTolerance]);

    return {
        activeSectionId,
        setActiveSectionId,
    };
};
