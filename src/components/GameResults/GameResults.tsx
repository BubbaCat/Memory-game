import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container,ResultHeader,Result} from '../GameResults/GameResults.styles';

export const GameResults:React.FC=()=>{
	const results = useSelector((state: RootState) => state.resultState.results);

	const renderResults=()=>{
		const filteredResults = [...results].sort((a,b) => a.seconds-b.seconds);
		return filteredResults.map(result =>
			(<Result 
				key={result.id}>
				{result.seconds}
			</Result>)
		);
	};

	return (
		<Container>
			<ResultHeader>
				Количество секунд
			</ResultHeader>
			{renderResults()}
		</Container>
	);
};