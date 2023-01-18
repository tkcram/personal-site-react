import classnames from 'classnames'
import Header from './Header'
import Blurb from './Blurb'
import Footer from './Footer'
import css from './About.module.css'


const About = () => {
	document.documentElement.style.setProperty('--colour','var(--about)')
	
	return (		
		<>
			<Header/>
			<main>
				<Blurb>
					<p> Kia ora! My name's Sebastian Te Kahuturehu Cram, or just call me <b>Tk</b>. I'm a Data Analyst hailing from Aotearoa/New Zealand, currently in NYC living my best life. </p>
				</Blurb>
				
				<div className={css.wrapper}>
					<div className={css.sidebar}>
						<img className={css.image} src="/images/about.jpeg" alt="No, I don't know how to smize"/>
						<a className={css.link} href="mailto:scram142@pratt.edu">E-mail</a>
						<a className={css.link} href="https://www.linkedin.com/in/sebastian-cram-a9b238191/" target="_blank">LinkedIn</a>
						<a className={css.link} href="https://github.com/tkcram" target="_blank">GitHub</a>
						<a className={css.link} href="https://public.tableau.com/app/profile/tk.cram" target="_blank">Tableau</a>
					</div>
					<div className={css.blurb}>
						<p>A little about me:</p>
						<ul>
							<li><p>I have a BSc in <a href="https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/logic-computation.html" target="_blank">Logic & Computation</a> from The University of Auckland and am working towards an <a href="https://www.pratt.edu/academics/information/degrees/data-analytics-and-visualization-ms/" target="_blank">MS in Data Analytics and Visualization</a> at Pratt.</p></li>
							<li><p>I'm engaged to the phenomenal <a href="http://www.cahalanejennifer.com/" target="_blank">Jenny Cahalane</a> and we have a magnificent mutt <a href="http://scram142.neocities.org/" target="_blank">Sir Tubias Pascal of Selby</a>.</p></li>
							<li><p>I used to perform for the circus, specialising in partner acrobatics and trapeze. These days I train at <a href="https://www.aerialartsnyc.com">Aerial Arts NYC</a>.</p></li>
							<li><p>I've circumnavigated the earth! Some favourite places include Tokyo, Venice, Berlin, and NYC.</p></li>
							<li><p>I've been doing a lot of reading recently on birds, mythology, and bird mythology.</p></li>
							<li><p>I play a lot of Hearthstone, and have hit Rank 1 Legend! Minecraft, Civilization, and XCOM are some of my other favourites.</p></li>
							<li><p>I enjoy running TTRPG campaigns in systems such as Dungeons & Dragons and The Chronicles of Darkness.</p></li>
						</ul>
					</div>
				</div>
			</main>
			<Footer/>
		</>
		)
}

export default About