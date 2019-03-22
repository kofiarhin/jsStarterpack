import axios from "axios";
export default class Search {



	constructor(query) {

		this.query = query;
	}


	async getResults () {


		const key = "2546bac631d9b3a6cedf3f06e99077e4";

		const url =`https://www.food2fork.com/api/search?key=${key}`;

		const recipes=  await axios(url);


		this.results  = recipes.data.recipes;
	}


}