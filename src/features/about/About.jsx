import { Section } from '../../components/section/Section.jsx';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../components/animation/ScrollReveal.jsx';
import './About.css';

const PASSIONS = [
    {
        id: 'hobby',
        index: '01',
        name: 'HOBBY',
        description: 'Crafting interactive game mechanics',
        flavor: 'Experimenting with game loops, feel, and responsive controls.',
    },
    {
        id: 'learn',
        index: '02',
        name: 'LEARNING',
        description: 'Mastering UI architecture and state',
        flavor: 'Sharpening React patterns, component design, and clean CSS layouts.',
    },
    {
        id: 'look',
        index: '03',
        name: 'LOOKING FOR',
        description: 'A place to build and grow',
        flavor: 'Open to internship and junior developer roles.',
    },
];

export const About = () => {
    return (
        <Section id="about" title="03 / ABOUT" header="A developer in the making.">
            <div className="about">
                <ScrollReveal className="about__me">
                    <p>I'm Carl Ruselle Avecilla, an Information Technology student and an aspiring software developer focused on turning complex requirements into clean, reliable software.</p>
                    <br />
                    <p>
                        My work spans modular React interfaces, structured CSS architectures, RESTful APIs, relational databases, and cloud-integrated AI workflows. Outside of web development, I prototype gameplay systems and mechanics—a habit
                        that sharpens how I approach state management, edge cases, and system design.
                    </p>
                    <br />
                    <p>
                        I value maintainable code, thoughtful architecture, and steady iteration with every release. I'm currently seeking an entry-level web development role where I can contribute to production software, collaborate with an
                        engineering team, and continue growing as a developer.
                    </p>
                </ScrollReveal>

                <StaggerContainer className="about__passion">
                    {PASSIONS.map((passion) => (
                        <StaggerItem className="about__passion-item" key={passion.id}>
                            <span>
                                {passion.index} / {passion.name}
                            </span>
                            <h4>{passion.description}</h4>
                            <p>{passion.flavor}</p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </Section>
    );
};
