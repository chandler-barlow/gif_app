/* Author: Chandler Barlow
 * Description: 
 * These functions are for interacting with the tenor api
 * they're used in the main component
 */

// Returns a promise of trending gifs
export function getTrendingGifs(){
    const key = 'M2B4PG8HC8FN';
    var url = `https://api.tenor.com/v1/trending?key=${key}`;
    return fetch(url, {method: 'GET'})
           .then( response =>{
               return response.json();
           })
           .then(json => {
            return json.results;
           });  
}

// Takes a search term as an argument and returns gifs matching the term
export function getGifByTerm(search, amount){
    const key = 'M2B4PG8HC8FN';
    // Returns 24 gifs is default because I think that amount fits well on the screen
    if (amount === null) {
        amount = 28;
    }
    var url = `https://api.tenor.com/v1/search?q=${search}&key=${key}&limit=${amount}`;
    return fetch(url, {method: 'GET'})
           .then( response =>{
               return response.json();
           })
           .then(json => {
            return json.results;
           });  
}
