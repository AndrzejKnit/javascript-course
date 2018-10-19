import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {

        const key ='87c57a1c06692338e5221fa0128cff7b';
    
        try {
       const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
       this.result = res.data.recipes;
      // console.log(this.result);
     } catch (error) {
         alert(error);
     }
    }
}
