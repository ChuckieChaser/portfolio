import { Icon } from '../icon/Icon.jsx';
import { Button } from '../button/Button.jsx';

import './Topbar.css';

const CV_PATH = `${import.meta.env.BASE_URL}cv_avecilla.pdf`;

export const TopBar = () => {
    return (
        <header className="topbar">
            <div className="topbar__wordmark">
                <a href="#home">AVECILLA</a>
            </div>

            <div className="topbar__action">
                <div className="topbar__action-link">
                    <a href="https://github.com/ChuckieChaser" target="_blank" rel="noopener noreferrer">
                        <Icon id="github-icon" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/carl-ruselle-avecilla-3282692a2" target="_blank" rel="noopener noreferrer">
                        <Icon id="linkedin-icon" />
                        <span>LinkedIn</span>
                    </a>
                    <a href={CV_PATH} download="cv_avecilla.pdf">
                        <Icon id="cv-icon" />
                        <span>Vitae</span>
                    </a>
                </div>

                <div className="topbar__action-cta">
                    <Button label="Let's Talk" href="#contact" icon="arrow-icon" />
                </div>
            </div>
        </header>
    );
};
