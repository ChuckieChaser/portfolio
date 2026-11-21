import { Section } from '../../components/section/Section.jsx';
import { Icon } from '../../components/icon/Icon.jsx';
import { StaggerContainer, StaggerItem } from '../../components/animation/ScrollReveal.jsx';
import { Preview } from './components/Preview.jsx';

import { usePreview } from './hooks/usePreview.js';

import pamantasanRecordsPreview from '../../assets/pamantasanrecords.png';
import bluePulsePreview from '../../assets/bluepulse.png';
import graceBandsPreview from '../../assets/gracebands.png';

import './Project.css';

const PROJECTS = [
    {
        id: 'pamantasanrecords',
        title: 'Pamantasan Records',
        index: '01',
        year: '2026',
        image: pamantasanRecordsPreview,
        path: 'CAPSTONE / PAMANTASAN RECORDS',
        description: 'Engineered a cloud document management platform featuring memo routing, Cloud Vision OCR extraction, Vertex AI classification and summarization, and vector embeddings for semantic search.',
        flavor: 'AI-assisted document management built for records offices to organize files, route memos, and find information fast.',
        stacks: ['React.js', 'Tailwind CSS', 'Firebase', 'Google Cloud', 'Vertex AI', 'Cloud Vision OCR'],
        link: 'https://github.com/ChuckieChaser/pamantasan',
    },
    {
        id: 'bluepulse',
        title: 'Blue Pulse',
        index: '02',
        year: '2025',
        image: bluePulsePreview,
        path: 'INTEGRATION / BLUE PULSE',
        description: 'Built a web-based pharmacy POS system for inventory tracking, transaction processing, and modular REST API integration with enterprise systems.',
        flavor: 'Pharmacy POS module built for smooth counter checkout, stock oversight, and connected operations.',
        stacks: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'RESTful APIs'],
        link: 'https://github.com/Artysl4yer/SIA',
    },
    {
        id: 'gracebands',
        title: 'GraceBands',
        index: '03',
        year: '2025',
        image: graceBandsPreview,
        path: 'PERSONAL / GRACEBANDS',
        description: 'Built a responsive e-commerce storefront featuring interactive product catalogs, shopping cart state management, and reusable UI components.',
        flavor: 'Handcrafted accessory storefront designed for smooth browsing, fluid transitions, and effortless checkout.',
        stacks: ['React.js', 'Tailwind CSS', 'Motion'],
        link: 'https://github.com/ChuckieChaser/Gracebands',
    },
];

export const Projects = () => {
    const { activePreview, selectedPreview, cursorPosition, handlePreviewSelect, handlePreviewMovement, handlePreviewClear, handlePreviewToggle, handlePreviewClose } = usePreview();

    return (
        <Section id="projects" title="01 / PROJECTS" header="Small projects. Real progress.">
            <div className="projects" onMouseMove={handlePreviewMovement} onMouseLeave={handlePreviewClear}>
                <StaggerContainer className="projects__catalog" staggerDelay={0.2}>
                    {PROJECTS.map((project) => (
                        <StaggerItem
                            className={`project__catalog-item${selectedPreview?.id === project.id ? ' --selected' : ''}`}
                            key={project.id}
                            onMouseEnter={(event) => handlePreviewSelect(event, project)}
                        >
                            <button
                                type="button"
                                className="project__details-trigger"
                                aria-haspopup="dialog"
                                aria-expanded={selectedPreview?.id === project.id}
                                onClick={(event) => handlePreviewToggle(project, event)}
                            >
                                <span>{project.index}</span>

                                <div className="item__content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>

                                    <div className="item__content-stack">
                                        <span>{project.stacks.join(' • ')}</span>
                                    </div>
                                </div>
                            </button>

                            <a href={project.link} aria-label={`View ${project.title} on GitHub`} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
                                <Icon id="arrow-icon" />
                            </a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <Preview preview={activePreview} cursor={cursorPosition} isSelected={Boolean(selectedPreview)} onClose={handlePreviewClose} />
            </div>
        </Section>
    );
};
