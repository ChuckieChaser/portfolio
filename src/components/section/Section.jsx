import { ScrollReveal } from '../animation/ScrollReveal.jsx';
import './Section.css';

export const Section = ({ id, title, tagline, header, className = '', children }) => {
    return (
        <section id={id} className={`section ${className}`}>
            <ScrollReveal className="section__title">
                <span>{title}</span>

                {tagline && <h1>{tagline}</h1>}
                {header && <h2>{header}</h2>}
            </ScrollReveal>

            <div className="section__content">{children}</div>
        </section>
    );
};
