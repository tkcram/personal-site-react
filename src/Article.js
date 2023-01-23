import { useParams } from 'react-router-dom' 
import Header from './Header'
import Footer from './Footer'
import { articles } from './article-info'
import css from './Study.module.css'


const Article = () => {
	const { title } = useParams();
	document.documentElement.style.setProperty('--colour','var(--projects)')
	
	return(
		<>
			<Header/>
			<main className={css.top}>
				<div className={css.left}>
					<ol className={css.skips}>
					{Object.values(articles[title].headings).map(headings => {
						return (
							<li key={headings.ref} className={css.skip}>
								<a href={headings.ref}>{headings.text}</a>
							</li>
						)
					})}
					</ol>
				</div>
				<div className={css.content}>
					{articles[title].markup}
				</div>
				<div className={css.right}></div>
			</main>
			<Footer/>
		</>
	)
}

export default Article