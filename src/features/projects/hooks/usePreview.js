import { useState } from 'react';

export const usePreview = () => {
    const [activePreview, setActivePreview] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 9 });

    const handlePreviewSelect = (event, project) => {
        if (event) {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        }

        setActivePreview(project);
    };

    const handlePreviewMovement = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handlePreviewClear = () => {
        setActivePreview(null);
    };

    return { activePreview, cursorPosition, handlePreviewSelect, handlePreviewMovement, handlePreviewClear };
};
