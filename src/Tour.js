import React, { useState } from 'react';

const Tour = ({ id, name, image, info, price, removeTour }) => {
	const [isReadMore, setIsReadMore] = useState(false);
	return (
		<article className='single-tour'>
			<img src={image} alt={name} />
			<footer>
				<div className='tour-info'>
					<h4>{name}</h4>
					<p className='tour-price'>${price}</p>
				</div>
				<p className='tour-description'>
					{isReadMore ? info : `${info.substring(0, 200)}...`}
					<button onClick={() => setIsReadMore(!isReadMore)}>{isReadMore ? 'Show Less' : 'Read More'}</button>
				</p>
				<button className='delete-btn' onClick={() => removeTour(id)}>
					Not Interested
				</button>
			</footer>
		</article>
	);
};

export default Tour;
