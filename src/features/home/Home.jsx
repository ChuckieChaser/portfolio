import { Section } from '../../components/section/Section.jsx';
import { Button } from '../../components/button/Button.jsx';

import './Home.css';

export const Home = () => {
    return (
        <Section id="home" title="SOFTWARE DEVELOPER / ALWAYS A WORK IN PROGRESS" tagline="Good ideas deserve a thoughtful build.">
            <div className="home">
                <div className="home__description">
                    <p>I'm Carl Ruselle Avecilla, an aspiring software developer turning curiosity into clean, useful experiences. Learning by doing, one project at a time.</p>
                </div>

                <div className="home__action">
                    <Button label="Explore my projects" href="#projects" />
                    <span>&bull; Open to my first developer role</span>
                </div>
            </div>
        </Section>
    );
};
