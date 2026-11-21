import { useEffect, useRef } from 'react';
import { AnimatePresence, m, useAnimate, useReducedMotion } from 'motion/react';
import './Preview.css';

export const Preview = ({ preview, cursor, isSelected, onClose }) => {
    const [dialogRef, animate] = useAnimate();
    const shouldReduceMotion = useReducedMotion();
    const isClosingRef = useRef(false);

    const closeDialog = async () => {
        const dialog = dialogRef.current;
        if (!dialog?.open || isClosingRef.current) {
            return;
        }

        isClosingRef.current = true;
        const duration = shouldReduceMotion ? 0.16 : 0.24;

        await Promise.all([
            animate('[data-preview-backdrop]', { opacity: 0 }, { duration, ease: 'easeIn' }).finished,
            animate('[data-preview-card]', { opacity: 0, y: 8, scale: 0.99 }, { duration, ease: 'easeIn' }).finished,
        ]);

        if (dialog.open) {
            dialog.close();
        }
        isClosingRef.current = false;
    };

    useEffect(() => {
        if (!isSelected) {
            return undefined;
        }

        const dialog = dialogRef.current;
        if (!dialog) {
            return undefined;
        }

        if (!dialog.open) {
            dialog.showModal();
        }

        const duration = shouldReduceMotion ? 0.16 : 0.24;
        animate('[data-preview-backdrop]', { opacity: 1 }, { duration, ease: 'easeOut' });
        animate('[data-preview-card]', { opacity: 1, y: 0, scale: 1 }, { duration, ease: 'easeOut' });

        return () => {
            if (dialog.open) {
                dialog.close();
            }
        };
    }, [isSelected, animate, dialogRef, shouldReduceMotion]);

    let hoverPreview = null;
    if (preview && !isSelected) {
        const cardWidth = 640;
        const cardHeight = 480;
        const margin = 16;
        const offsetX = 24;
        const offsetY = -48;

        const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1280;
        const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 720;

        let left = cursor.x + offsetX;
        if (left + cardWidth + margin > viewportWidth) {
            left = cursor.x - cardWidth - offsetX;
        }

        left = Math.max(margin, Math.min(left, viewportWidth - cardWidth - margin));

        let top = cursor.y + offsetY;
        top = Math.max(margin, Math.min(top, viewportHeight - cardHeight - margin));

        hoverPreview = (
            <m.aside
                key={preview.id}
                className="preview preview--hover"
                style={{ left, top }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.28, ease: 'easeOut' } }}
                exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
            >
                <img src={preview.image} alt={`${preview.title} preview`} />

                <div className="preview__body">
                    <div className="preview__body-detail">
                        <span>{preview.path}</span>
                        <span>{preview.year}</span>
                    </div>

                    <p>{preview.flavor}</p>
                </div>
            </m.aside>
        );
    }

    return (
        <>
            <AnimatePresence mode="wait">{hoverPreview}</AnimatePresence>

            {isSelected && preview && (
                <dialog
                    id="project-preview-dialog"
                    className="preview-modal"
                    ref={dialogRef}
                    onClose={onClose}
                    onCancel={(event) => {
                        event.preventDefault();
                        closeDialog();
                    }}
                >
                    <div className="preview-modal__scrim" data-preview-backdrop onClick={closeDialog}></div>
                    <article className="preview-modal__card" data-preview-card aria-labelledby="preview-modal-title">
                        <div className="preview-modal__header">
                            <h3 id="preview-modal-title">{preview.title}</h3>
                            <button type="button" className="preview-modal__close" aria-label="Close project details" onClick={closeDialog}>
                                &times;
                            </button>
                        </div>

                        <img src={preview.image} alt={`${preview.title} project preview`} />

                        <div className="preview__body">
                            <div className="preview__body-detail">
                                <span>{preview.path}</span>
                                <span>{preview.year}</span>
                            </div>
                            <p>{preview.flavor}</p>
                        </div>
                    </article>
                </dialog>
            )}
        </>
    );
};
