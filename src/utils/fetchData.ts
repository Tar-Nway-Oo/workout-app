type Options = {
   method: string;
   headers: {
       'X-RapidAPI-Key': string;
       'X-RapidAPI-Host': string;
   };
}

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c58ea6428msh31c2ea48e34f5e3p1e9b0cjsnd1bf32fb7b22',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export async function fetchData(url: string, options: Options) {
   const response = await fetch(url, options);
	const result: string[] = await response.json();
   return result;
}

