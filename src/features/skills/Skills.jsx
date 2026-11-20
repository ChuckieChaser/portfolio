import { Section } from '../../components/section/Section.jsx';
import './Skill.css';

const SKILLS = [
    {
        id: 'languages',
        index: '01',
        category: 'Languages',
        stacks: ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'PHP', 'Python', 'Java', 'C++'],
    },
    {
        id: 'frameworks',
        index: '02',
        category: 'Frameworks',
        stacks: ['React.js', 'Tailwind CSS', 'Motion', 'Node.js', 'Express.js', 'RESTful APIs', 'GraphQL'],
    },
    {
        id: 'services',
        index: '03',
        category: 'Services',
        stacks: ['Firebase', 'Cloud Functions', 'Google Cloud', 'Vertex AI', 'Cloud Vision'],
    },
    {
        id: 'databases',
        index: '04',
        category: 'Databases',
        stacks: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB'],
    },
    {
        id: 'tools',
        index: '05',
        category: 'Tools',
        stacks: ['Git', 'Docker', 'Figma', 'VS Code', 'Postman'],
    },
];

export const Skills = () => {
    return (
        <Section id="skills" title="02 / SKILLS" header="A small, growing toolkit.">
            <div className="skills">
                {SKILLS.map((skill) => (
                    <div className="skills__item" key={skill.id}>
                        <h4>
                            <sup>{skill.index}</sup>
                            {skill.category}
                        </h4>

                        <div className="skills__item-list">
                            {skill.stacks.map((stack) => (
                                <span key={stack}>{stack}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
