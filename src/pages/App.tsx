import React from 'react';
import { Game, Header } from '../components';
import { Wrapper } from './App.styles';

function App(): JSX.Element {

	return (
		<Wrapper>
			<Header />
			<Game />
		</Wrapper>
	);
}

export default App;