export interface imgDataAPI {
	id:string;
	alt_description?:string;
	urls: {
		regular:string;
	}
}

export interface ServiceAPI<T>{
	readonly _apiBaseUrl:string;
	getResource:(url:string)=>Promise<Response>;
	getPhotos:(amount:number)=>Promise<T>;
}

export class ImgService<T> implements ServiceAPI<T>{
	public readonly _apiBaseUrl:string;

	constructor() {
		this._apiBaseUrl = 'https://api.unsplash.com/';
	}

	getResource = async (url:string):Promise<Response> => {
		const res = await fetch(`${this._apiBaseUrl}${url}`,{
			headers:{
				Authorization:`Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
			}
		});
		
		if (!res.ok) {
			throw new Error(
				`Could not fetch ${url}` + `, received ${res.status}`
			);
		}
		return res;
	};

	getPhotos = async (amount:number):Promise<T> =>{
		const res = await this.getResource(`photos/random?count=${amount}`);
		return res.json();
	}
}

export const imgAPI = new ImgService<imgDataAPI[]>();
