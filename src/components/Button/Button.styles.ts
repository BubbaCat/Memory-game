import styled from 'styled-components';

interface buttonStylesProps{
	primary?:boolean;
}

export const ButtonStyled = styled.button<buttonStylesProps>`
  font-size: 15px;
  padding: 5px 10px;
  min-width:130px;
  border-radius: 3px;
  border: 2px solid palevioletred;
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  cursor:pointer;
`;