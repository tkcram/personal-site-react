import { projectInfo } from './project-info'
import css from './ProjectModal.module.css'

const ProjectModal = ({ projectId, closeModal }) => {
	const project = projectInfo[projectId]
	
	if (!project) {
		closeModal()
	}

	return (
		<div className={css.wrapper}>
			<div className={css.content}>
				<button className={css.close} onClick={closeModal}>x</button>
				<img className={css.image} src={project.image} alt=""/>
				<div className={css.text}>
					<a className={css.title} href={project.link} target="_blank" rel="noreferrer"><h2>{project.fullTitle}</h2></a>
					<dl>
						<dt><h3>The Project</h3></dt>
						<dd><p>{project.abstract}</p></dd>

						<dt><h3>My Contributions</h3></dt>
						<dd>
							<ul>
								{project.contributions.map(contribution => 
									<li key={contribution.slice(0,10).replace(' ', '-')}><p>{contribution}</p></li>
								)}
							</ul>
						</dd>

						{project.citation && <dt><h3>Citation</h3></dt>}
						{project.citation && <dd><p>{project.citation}</p></dd>}

						<dt><h3>Links</h3></dt>
						<dd><p>
							{project.additionalLinks.map((link, idx) => 
								<a key={link.text.replace(' ', '-')} href={link.url} target="_blank" rel="noreferrer">{link.text}{(idx < project.additionalLinks.length - 1) && '; '}</a>
							)}
						</p></dd>

						<dt><h3>Tags</h3></dt>
						<dd><p>{project.tags.join(', ')}</p></dd>
					</dl>
				</div>
			</div>
		</div>
	)
}

export default ProjectModal;