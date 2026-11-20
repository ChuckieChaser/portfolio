import { Section } from '../../components/section/Section.jsx';
import './Contact.css';

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
            { id: 'vitae', name: 'Vitae', link: '/cv_avecilla.pdf', download: 'cv_avecilla.pdf' },
        ],
    },
];

export const Contact = () => {
    return (
        <Section id="contact" className="contact__section" title="04 / CONTACT" header="Let's start with a hello.">
            <div className="contact">
                <div className="contact__email">
                    <p>Have a project, an opportunity, or a good question? I'd love to hear from you.</p>

                    <a href="mailto:avecilla.dev@gmail.com">
                        <span>avecilla.dev@gmail.com</span>
                    </a>
                </div>

                <div className="contact__me">
                    <div className="contact__me-details">
                        <h4>AVECILLA, CARL RUSELLE</h4>
                        <p>Small steps. Thoughtful builds. Always a work in progress.</p>
                    </div>

                    <div className="contact__me-links">
                        {LINKS.map((link) => (
                            <div className="links-item" key={link.id}>
                                <span>{link.name}</span>

                                {link.items.map((item) => (
                                    <a href={item.link} download={item.download} key={item.id} target="_blank" rel="noopener noreferrer">
                                        <span>{item.name}</span>
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact__footer">
                    <span>© 2026 Chuckie. Made with care, built to learn.</span>

                    <a href="#home">
                        <span>BACK TO TOP</span>
                    </a>
                </div>
            </div>
        </Section>
    );
};
