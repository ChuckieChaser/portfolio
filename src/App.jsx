import { TopBar } from './components/topbar/Topbar.jsx';
import { Navigation } from './components/navigation/Navigation.jsx';

import { Home } from './features/home/Home.jsx';
import { Projects } from './features/projects/Projects.jsx';
import { Skills } from './features/skills/Skills.jsx';
import { About } from './features/about/About.jsx';
import { Contact } from './features/contact/Contact.jsx';

const App = () => {
    return (
        <>
            <div className="background" aria-hidden="true">
                <div className="background__grid"></div>
            </div>

            <TopBar />

            <Navigation />

            <div className="content">
                <Home />

                <Projects />

                <Skills />

                <About />

                <Contact />
            </div>
        </>
    );
};

export default App;
