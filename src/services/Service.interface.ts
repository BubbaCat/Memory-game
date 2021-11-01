export interface ServiceAPI<T>{
	readonly _apiBaseUrl:string;
	getResource:(url:string)=>Promise<Response>;
	getPhotos:(amount:number)=>Promise<T>;
}

export interface imgDataAPI {
	id:string;
	alt_description?:string;
	urls: {
		regular:string;
	}
}