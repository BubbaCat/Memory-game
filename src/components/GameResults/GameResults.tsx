import React from 'react';
import { Container,ResultHeader,Result} from '../GameResults/GameResults.styles';
import { ResultProps } from './GameResults.props';

export const GameResults:React.FC<ResultProps>=({title,results}:ResultProps)=>{
	const renderResults=()=>{
		return results.map(result =>
			(<Result 
				key={result.id}>
				{result.seconds}
			</Result>)
		);
	};

	return (
		<Container>
			<ResultHeader>
				{title}
			</ResultHeader>
			{renderResults()}
		</Container>
	);
};