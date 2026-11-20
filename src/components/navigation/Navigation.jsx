import { useState } from 'react';
import './Navigation.css';

const NAVIGATION_ITEMS = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'projects', label: 'PROJECTS', href: '#projects' },
    { id: 'skills', label: 'SKILLS', href: '#skills' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export const Navigation = () => {
    const [activeId, setActiveId] = useState('home');

    const toggleActiveId = (id) => {
        setActiveId(id);
    };

    return (
        <nav className="navigation">
            {NAVIGATION_ITEMS.map((item) => (
                <a className={activeId === item.id ? '--active' : ''} key={item.id} href={item.href} onClick={() => toggleActiveId(item.id)}>
                    {item.label}
                </a>
            ))}
        </nav>
    );
};
