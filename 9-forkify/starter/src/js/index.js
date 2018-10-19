import axios from 'axios';

async function getResults(query) {

    const key ='87c57a1c06692338e5221fa0128cff7b';

    try {
   const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
   const recipes = res.data.recipes;
   console.log(recipes);
 } catch (error) {
     alert(error);
 }
}

getResults('pizza');


//https://www.food2fork.com/api/get
//https://www.food2fork.com/api/search
//



