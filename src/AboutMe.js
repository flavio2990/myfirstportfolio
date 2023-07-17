import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaJs, FaGitAlt, FaDatabase, FaPaintBrush } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <div className='underline'></div>

            <h2>
                About Me:
            </h2>
            <p>
                | Meta React Native Specialization Certificate | Professional Certificate Meta Front-End Developer |</p>
            <h2>
                Technical Skills:
            </h2>
            <h4>
                Languages:
            </h4>
            <p>
                English (B1), Spanish(Native).
            </p>
            <h4>
                Programming Languages:
            </h4>
            <p>
                JavaScript (ES6+)
            </p>
            <h4>
                Libraries & Frameworks:
            </h4>
            <p>
                React.JS, React Native
            </p>
            <h4>
                Databases:
            </h4>
            <p>
                SQL
            </p>
            <h4>
                Utilities:
            </h4>
            <p> Lodash</p>
            <h4>
                Version Control:
            </h4>
            <p>Git, GitHub</p>
            <h4>
                Tools:
            </h4>
            <p>
                Miro
            </p>
            <div className='underline'></div>
            <div className="icon-row">
                <div>
                    <FaHtml5 />
                    <p>| HTML5 |</p>
                </div>
                <div>
                    <FaCss3 />
                    <p>CSS |</p>
                </div>
                <div>
                    <FaJs />
                    <p>JavaScript |</p>
                </div>
                <div>
                    <FaReact />
                    <p>React.JS |</p>
                </div>
                <div>
                    <FaReact />
                    <p>React Native |</p>
                </div>
                <div>
                    <FaGitAlt />
                    <p>GitHub |</p>
                </div>
                <div>
                    <FaDatabase />
                    <p>Database |</p>
                </div>
                <div>
                    <MdDashboard />
                    <p>UX/UI |</p>
                </div>
                <div>
                    <BsGraphUp />
                    <p>Data Management |</p>
                </div>
            </div>
        </div>
    );
}