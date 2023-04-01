import React, { useState } from 'react';
import ProjectModal from './ProjectModal'
import css from './Study.module.css'

const RelatedStudies = ({children}) => {
	const [modalId, setModalId] = useState(null);
	return (
		<>
		{modalId && <ProjectModal closeModal={() => setModalId(null)} projectId={modalId}/>}
			<ul className={css.related}>
				{React.Children.map(children, (child) => {
			      	return React.cloneElement(child, {
			        	openModal: setModalId
			      	});
			    })}
			</ul>
		</>
	);
}

export default RelatedStudies