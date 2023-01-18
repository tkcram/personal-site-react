import classnames from 'classnames'
import Header from './Header'
import Blurb from './Blurb'
import Footer from './Footer'
import { caseStudies } from './case-studies'
import css from './Portfolio.module.css'

const Portfolio = () => {
	document.documentElement.style.setProperty('--colour','var(--portfolio)')
	return (
		<>
			<Header/>
			<main>
				<Blurb>
					<p> I've been hard at work during my time at Pratt. The following case studies are written to showcase some of the best and biggest projects I've worked on, and demonstrate a wide variety of skills</p>
				</Blurb>
				{Object.values(caseStudies).map((study) => (
					study?.isVisible &&
						<div className={css.section} key={study.id} >
							<img className={css.image} src={study.image}/>
							<div className={css.content}>
								<h2>{study.title}</h2>
								<p>{study.blurb}</p>
								<div className={css.links}>
									<a href={"/portfolio/" + study.id} className="button">Case Study</a>
									<a href={study.link} target="_blank" className="button">Project</a>
								</div>
							</div>
						</div>
				))}

			</main>
			<Footer/>
		</>
	)
}

export default Portfolio

