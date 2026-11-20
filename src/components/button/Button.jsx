import { Icon } from '../icon/Icon.jsx';
import './Button.css';

export const Button = ({ label, href, icon, ...props }) => {
    return (
        <a className="button" href={href} {...props}>
            <span>{label}</span>
            {icon && <Icon id={icon} />}
        </a>
    );
};
