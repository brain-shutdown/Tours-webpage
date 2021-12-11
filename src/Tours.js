import React, { useState } from 'react';
import Tour from './Tour';

const Tours = ({ data }) => {
	const [tours, setTours] = useState(data);

	function removeTour(id) {
		setTours((tours) => tours.filter((tour) => tour.id !== id));
	}
	return (
		<section>
			{tours.map((tour) => {
				return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
			})}
		</section>
	);
};

export default Tours;
