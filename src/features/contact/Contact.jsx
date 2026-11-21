import { Section } from '../../components/section/Section.jsx';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../components/animation/ScrollReveal.jsx';
import './Contact.css';

const CV_PATH = `${import.meta.env.BASE_URL}cv_avecilla.pdf`;

const LINKS = [
    {
        id: 'explore',
        name: 'EXPLORE',
        items: [
            { id: 'projects', name: 'Projects', link: '#projects' },
            { id: 'skills', name: 'Skills', link: '#skills' },
            { id: 'about', name: 'About', link: '#about' },
        ],
    },
    {
        id: 'connect',
        name: 'CONNECT',
        items: [
            { id: 'github', name: 'GitHub', link: 'https://github.com/ChuckieChaser' },
            { id: 'linkedin', name: 'LinkedIn', link: 'https://www.linkedin.com/in/carl-ruselle-avecilla-3282692a2' },
            { id: 'vitae', name: 'Vitae', link: CV_PATH, download: 'cv_avecilla.pdf' },
        ],
    },
];

export const Contact = () => {
    return (
        <Section id="contact" className="contact__section" title="04 / CONTACT" header="Let's start with a hello.">
            <div className="contact">
                <ScrollReveal className="contact__email">
                    <p>Have a project, an opportunity, or a good question? I'd love to hear from you.</p>

                    <a href="mailto:avecilla.dev@gmail.com">
                        <span>avecilla.dev@gmail.com</span>
                    </a>
                </ScrollReveal>

                <StaggerContainer className="contact__me">
                    <StaggerItem className="contact__me-details">
                        <h4>AVECILLA, CARL RUSELLE</h4>
                        <p>Small steps. Thoughtful builds. Always a work in progress.</p>
                    </StaggerItem>

                    <StaggerContainer className="contact__me-links">
                        {LINKS.map((link) => (
                            <StaggerItem className="links-item" key={link.id}>
                                <span>{link.name}</span>

                                {link.items.map((item) => {
                                    const isExternal = item.link.startsWith('https://');

                                    return (
                                        <a href={item.link} download={item.download} key={item.id} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>
                                            <span>{item.name}</span>
                                        </a>
                                    );
                                })}
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </StaggerContainer>

                <ScrollReveal className="contact__footer">
                    <span>© 2026 Chuckie. Made with care, built to learn.</span>

                    <a href="#home">
                        <span>BACK TO TOP</span>
                    </a>
                </ScrollReveal>
            </div>
        </Section>
    );
};
