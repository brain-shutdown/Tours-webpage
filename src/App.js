import React from 'react';
import useFetch from './useFetch';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
	const { data, loading } = useFetch(url);

	return (
		<main>
			<header className='title'>
				<h2 className='loading'>{loading ? 'loading...' : 'Our Tours'}</h2>
				<div className='underline'></div>
			</header>
			{data && <Tours data={data} />}
		</main>
	);
}

export default App;
