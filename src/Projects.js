import css from './Projects.module.css'
import Footer from './Footer'
import Blurb from './Blurb'
import Header from './Header'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { sections, projectInfo } from './project-info'
import { useState } from 'react';

const Projects = (props) => {
	document.documentElement.style.setProperty('--colour','var(--projects)')
	const [modalId, setModalId] = useState(null);
	const projectsBySection = {};

	Object.values(projectInfo).forEach(project => {
		const section = project.section;

		if (!projectsBySection[section]) {
			projectsBySection[section] = []
		}

		projectsBySection[section].push(project)
	})

	return (
		<>
			<Header/>
			<main>
				{modalId && <ProjectModal closeModal={() => setModalId(null)} projectId={modalId}/>}
				<Blurb>
					<p> This section is all about what I've been working on the last few years, both for work and school. Topics range from avian distributions and rental housing, through to D&D and my dog Pascal.</p>
				</Blurb>
				<div>
					{Object.values(sections).map(section => {
						if (!projectsBySection[section]) {
							return null
						}

						return (
							<div key={section} id={section} className={css.section}>
								<h2>{section}</h2>
								<ul className={css.items}>
									{projectsBySection[section].map(project => (
										project?.isVisible && <ProjectCard key={project.id} {...project} openModal={setModalId}/>
									))}
								</ul>
							</div>
						)
					})}
				</div>
			</main>
			<Footer/>
		</>
	)
}

export default Projects;