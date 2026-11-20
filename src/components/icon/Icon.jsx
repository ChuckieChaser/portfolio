import iconsUrl from '../../assets/icons.svg?no-inline';
import './Icon.css';

export const Icon = ({ id, ...props }) => {
    return (
        <svg className="icon" {...props}>
            <use href={`${iconsUrl}#${id}`} />
        </svg>
    );
};
