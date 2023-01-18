import classnames from 'classnames'
import { NavLink, useLocation } from "react-router-dom";
import css from './Header.module.css'
import { caseStudies } from './case-studies'


const Header = () => {
	const { pathname } = useLocation();
	return (
		<header >
			<div className={css.header}>
				<NavLink to="/"><h1 className={css.title}>Tk Cram</h1></NavLink>

				<nav>
					<ul className={css.navigation}>
						<li className={classnames(css.portfolio, css.item)}>
							<NavLink to="/portfolio" className={({isActive}) => classnames(css.text, {"portfolio": isActive})}>Portfolio</NavLink>
							<ul className={css.dropdown}>
							{Object.values(caseStudies).map(caseStudies => (
								caseStudies?.isVisible && 
								<li key={caseStudies.id} className={classnames(css.portfolio, css.item)}>
									<NavLink to={`/portfolio/${caseStudies.id}`} className={css.text}>{caseStudies.nav}</NavLink>
								</li>
							))}
							</ul>
						</li>

						<li className={classnames(css.projects, css.item)}>
							<NavLink to="/projects" className={({isActive}) => classnames(css.text, {"projects": isActive})}>Projects</NavLink>
						</li>

						<li className={classnames(css.about, css.item)}>
							<NavLink to="/about" className={({isActive}) => classnames(css.text, {"about": isActive})}>About</NavLink>
							<ul className={css.dropdown}>
								<li className={classnames(css.about, css.item)}>
									<NavLink to="/about" className={css.text}>Biography</NavLink>
								</li>
								<li className={classnames(css.about, css.item)}>
									<a href="Pdfs/Tk_Cram_Resume.pdf" target="_blank" className={css.text}>Resume</a>
								</li>
								<li className={classnames(css.about, css.item)}>
									<a href="mailto:scram142@pratt.edu" className={css.text}>Contact</a>
								</li>
							</ul>
						</li> 			
					</ul>
				</nav>
			</div>

			{pathname != "/" && <div className={css.bar}/>}

		</header>
	);
}

export default Header;