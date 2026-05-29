/**
 * @copyright 2026 codewithjainsahab
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: '/images/project-1.png',
        title: 'Library Management System',
        tags: ['OOPS', 'Development'],
        projectLink: 'https://github.com/naman-jain-1912/Library-Management-System.git'
    },
    {
        imgSrc: '/images/project-2.webp',
        title: 'Carbon Aware Shopping Assistant',
        tags: ['OOPS', 'Sustainability'],
        projectLink: 'https://github.com/naman-jain-1912/Carbon-Aware-Shopping-Assistant.git'
    },
];

const Work = () => {
    return (
        <>
            <section
                id="work"
                className="section">
                <div className="container">

                    <h2 className="headline-2 mb-8">
                        MY PORTFOLIO HIGHLIGHTS
                    </h2>

                    <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
                        {
                            works.map(({ imgSrc, title, tags, projectLink }, key) => (
                                <ProjectCard
                                    key={key}
                                    imgSrc={imgSrc}
                                    title={title}
                                    tags={tags}
                                    projectLink={projectLink}
                                    classes="reveal-up"
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work