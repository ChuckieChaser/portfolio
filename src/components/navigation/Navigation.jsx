import { useActiveSection } from '../../hooks/useActiveSection.js';
import './Navigation.css';

const NAVIGATION_ITEMS = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'projects', label: 'PROJECTS', href: '#projects' },
    { id: 'skills', label: 'SKILLS', href: '#skills' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
];

const SECTION_IDS = NAVIGATION_ITEMS.map((item) => item.id);

export const Navigation = () => {
    const { activeSectionId, setActiveSectionId } = useActiveSection(SECTION_IDS);

    const handleNavigationClick = (sectionId) => {
        setActiveSectionId(sectionId);
    };

    return (
        <nav className="navigation">
            {NAVIGATION_ITEMS.map((item) => (
                <a className={activeSectionId === item.id ? '--active' : ''} key={item.id} href={item.href} onClick={() => handleNavigationClick(item.id)}>
                    {item.label}
                </a>
            ))}
        </nav>
    );
};
