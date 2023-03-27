import classnames from 'classnames'
import Header from './Header'
import Footer from './Footer'
import css from './Home.module.css'

const Home = () => (
	<>
		<Header/>
		<main className={css.wrapper}>
			<div className={css.item}>
				<a className={css.link} href="portfolio">
					<div className={classnames(css.overlay, 'portfolio')}/>
					<div id={css.portfolio} className={css.image}/>
					<p className={css.text}>PORTFOLIO</p>
				</a>
			</div>
			<div className={css.item}>
				<a className={css.link} href="archive">
					<div className={classnames(css.overlay, 'archive')}/>
					<div id={css.archive} className={css.image}/>
					<p className={css.text}>ARCHIVE</p>
				</a>
			</div>
			<div className={css.item}>
				<a className={css.link} href="about">
					<div className={classnames(css.overlay, 'about')}/>
					<div id={css.about} className={css.image}/>
					<p className={css.text}>ABOUT</p>
				</a>
			</div>
		</main>
		<Footer/>
	</>
);

export default Home;