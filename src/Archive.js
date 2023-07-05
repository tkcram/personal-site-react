import css from './Archive.module.css'
import Footer from './Footer'
import Blurb from './Blurb'
import Header from './Header'
import Card from './Card'
import ProjectModal from './ProjectModal'
import { sections, projectInfo } from './project-info'
import { useState } from 'react';

const Archive = (props) => {
	document.documentElement.style.setProperty('--colour','var(--archive)')
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
					<p>I've worked on a wide variety of projects the last few years and use this space to collect them all. Topics range from avian distributions and rental housing, through to D&D and my dog Pascal.</p>
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
										project?.isVisible && <Card key={project.id} {...project} openModal={setModalId}/>
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

export default Archive;