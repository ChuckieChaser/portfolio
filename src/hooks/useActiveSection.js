import { useEffect, useState } from 'react';

const DEFAULT_ROOT_MARGIN = '-20% 0px -45% 0px';
const DEFAULT_THRESHOLD = [0, 0.1, 0.25, 0.5, 0.75, 1];
const DEFAULT_BOTTOM_TOLERANCE = 4;

export const useActiveSection = (sectionIds, options = {}) => {
    const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] ?? '');

    const rootMargin = options.rootMargin ?? DEFAULT_ROOT_MARGIN;
    const customThreshold = options.threshold;
    const bottomTolerance = options.bottomTolerance ?? DEFAULT_BOTTOM_TOLERANCE;

    useEffect(() => {
        if (!Array.isArray(sectionIds) || sectionIds.length === 0) {
            return undefined;
        }

        const threshold = customThreshold ?? DEFAULT_THRESHOLD;

        const sectionElements = sectionIds.map((sectionId) => document.getElementById(sectionId)).filter(Boolean);

        if (sectionElements.length === 0) {
            return undefined;
        }

        const lastSectionId = sectionElements[sectionElements.length - 1].id;

        const isAtBottom = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            return scrollPosition >= documentHeight - bottomTolerance;
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (isAtBottom()) {
                    setActiveSectionId(lastSectionId);
                    return;
                }

                const visibleEntries = entries.filter((entry) => entry.isIntersecting).sort((firstEntry, secondEntry) => secondEntry.intersectionRatio - firstEntry.intersectionRatio);

                if (visibleEntries.length === 0) {
                    return;
                }

                setActiveSectionId(visibleEntries[0].target.id);
            },
            {
                rootMargin,
                threshold,
            }
        );

        const handleScroll = () => {
            if (isAtBottom()) {
                setActiveSectionId(lastSectionId);
            }
        };

        sectionElements.forEach((sectionElement) => {
            observer.observe(sectionElement);
        });

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds, rootMargin, customThreshold, bottomTolerance]);

    return {
        activeSectionId,
        setActiveSectionId,
    };
};
