import css from './Projects.module.css'

const ProjectCard = ({shortTitle, image, link, inPortfolio, id, openModal }) => {
	return (
		<li className={css.item}>
			<img className={css.image} src={image} alt=""/>
			<div className={css.banner}>
				<p>{shortTitle}</p>
				<div>
					<button className={css.modal} onClick={() => openModal(id)}>i<i className="fa-solid fa-circle-info"></i></button>
				</div>
			</div>
		</li>
	)
}

export default ProjectCard;