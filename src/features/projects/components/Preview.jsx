import './Preview.css';

export const Preview = ({ preview, cursor }) => {
    if (!preview) {
        return null;
    }

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

    const cardStyle = {
        transform: `translate3d(${left}px, ${top}px, 0)`,
    };

    return (
        <aside className="preview" style={cardStyle}>
            <img src={preview.image} alt={`${preview.title} preview`} />

            <div className="preview__body">
                <div className="preview__body-detail">
                    <span>{preview.path}</span>
                    <span>{preview.year}</span>
                </div>

                <p>{preview.flavor}</p>
            </div>
        </aside>
    );
};
