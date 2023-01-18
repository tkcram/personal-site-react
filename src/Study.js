import classnames from 'classnames'
import { useParams, Link } from 'react-router-dom' 
import Header from './Header'
import Footer from './Footer'
import { caseStudies } from './case-studies'
import css from './Study.module.css'


const Study = () => {
	const { title } = useParams();
	document.documentElement.style.setProperty('--colour','var(--portfolio)')
	
	return(
		<>
			<Header/>
			<main className={css.top}>
				<div className={css.left}>
					<ol className={css.skips}>
					{Object.values(caseStudies[title].headings).map(headings => {
						return (
							<li key={headings.ref} className={css.skip}>
								<a href={headings.ref}>{headings.text}</a>
							</li>
						)
					})}
					</ol>
				</div>
				<div className={css.content}>
					{caseStudies[title].markup}
				</div>
				<div className={css.right}></div>
			</main>
			<Footer/>
		</>
	)
}

export default Study