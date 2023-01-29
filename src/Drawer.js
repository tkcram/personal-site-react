import { useState } from 'react';
import classnames from 'classnames'
import css from './Study.module.css'

const Drawer = ({title, buttonTextCollapsed, buttonTextExpanded, linkText, linkURL, children}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	}

	return (
		<div>
			<div className={css.drawerHeader}>
				<h4 className={css.drawerTitle}>{title}</h4>
				<button className={classnames("button", {[css.buttonExpanded]: isOpen})} onClick={toggleDrawer}>{isOpen ? buttonTextExpanded : buttonTextCollapsed}</button>
				<a href={linkURL}>{linkText}</a>
			</div>
			{ isOpen && (
				<div className={css.drawerBody}>
					{children}
				</div>
			)}
		</div>
	)
}

export default Drawer;