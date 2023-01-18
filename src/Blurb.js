import css from './Blurb.module.css'

const Blurb = ({children}) => (
	<>
		<div className={css.text}>
			{children}
		</div>
		<div className={css.bar}/>
	</>
)

export default Blurb