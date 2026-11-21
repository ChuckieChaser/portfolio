import { useState } from 'react';

export const usePreview = () => {
    const [hoveredPreview, setHoveredPreview] = useState(null);
    const [selectedPreview, setSelectedPreview] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 9 });

    const handlePreviewSelect = (event, project) => {
        if (event) {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        }

        setHoveredPreview(project);
    };

    const handlePreviewMovement = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handlePreviewClear = () => {
        setHoveredPreview(null);
    };

    const handlePreviewToggle = (project, event) => {
        const isTouchInput = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;
        const isKeyboardInput = event.detail === 0;

        if (!isTouchInput && !isKeyboardInput) {
            return;
        }

        setSelectedPreview((currentPreview) => (currentPreview?.id === project.id ? null : project));
    };

    const handlePreviewClose = () => {
        setSelectedPreview(null);
    };

    return {
        activePreview: selectedPreview ?? hoveredPreview,
        selectedPreview,
        cursorPosition,
        handlePreviewSelect,
        handlePreviewMovement,
        handlePreviewClear,
        handlePreviewToggle,
        handlePreviewClose,
    };
};
