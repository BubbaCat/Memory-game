export interface CardProps{
	card: ICard
	handleClick:(card:ICard)=>void;
}

export interface ICard {
	id:string,
	alt_description?:string,
	frontImgUrl:string,
	backImgUrl?:string,
	isVisible:boolean,
	isFlipped:boolean,
	pairId:string,
}