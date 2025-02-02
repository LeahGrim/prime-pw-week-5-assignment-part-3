console.log('***** Music Collection *****')
// Create a variable `collection` that starts as an empty array.
const collection = [];

/* - Add a function named `addToCollection`. This function should:
  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
  - Create a new object having the above properties
  - Add the new object to the end of the `collection` array
  - Return the newly created object
  -took some creative liberty to add the property "favoriteSong"
*/
function addToCollection (title, artist, yearPublished, favoriteSong) {
  let album= {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    favoriteSong: favoriteSong,
  }
  collection.push(album);
  return album;
}

/* + Test the `addToCollection` function:
  + Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  + Console.log each album as added using the returned value.
  + After all are added, console.log the `collection` array.
*/

// first album is Aura by Ozuna:
console.log(addToCollection('Aura ', 'Ozuna ', '2018 ', 'Devuelveme'));
//we could use our function to store variables globally
let ozuna1 = addToCollection('Aura', 'Ozuna', '2018', 'Devuelveme');
console.log(ozuna1.artist);

//second album is Nibiru:
console.log(addToCollection('Nibiru', 'Ozuna', '2019', 'Temporal'));
//third album is X100PRE by Bad Bunny:
console.log(addToCollection('X100PRE', 'Bad Bunny', '2018', 'Ni Bien Ni Mal'));
//fourth album is el ultímo tour del mundo:
console.log(addToCollection('El Ultimo tour del mundo', 'Bad Bunny', '2020', 'Dákiti'));
//fifth album is Isolation:
console.log(addToCollection('Isolation', 'Kali Uchis', '2018', 'After the Storm'));
//sixth album is Mantra:
console.log(addToCollection('Mantra', 'Sebastian Yatra', '2018', 'Traicionera- Remix'));

//console.log the 'collection' array
console.log(collection);

/*+ Add a function named `showCollection`. This function should:
  + Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  + Console.log the number of items in the array.
  + Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
*/

function showCollection (array){
  console.log(array.length)
  for (let x = 0; x < array.length; x++ ){
    console.log( `${array[x].title} by ${array[x].artist} published in ${array[x].yearPublished} with the best song ${array[x].favoriteSong}`);
  }
}
console.log(showCollection(collection));

/* + Add a function named `findByArtist`. This function should:
  + Take in `artist` (a string) parameter
  + Create an array to hold any results, empty to start
  + Loop through the `collection` and add any objects with a matching artist to the array.
  + Return the array with the matching results. If no results are found, return an empty array.
*/

function findByArtist(artist, array){
  let finderArray= [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].artist === artist) {finderArray.push(artist)
    }
  }
return finderArray
}
console.log(findByArtist('Ozuna', collection));
console.log(findByArtist('Wisin', collection));

//tried to recreate the findByArtist using a for of loop
        function findTheArtist (artist, array){
          let findArray =[];
          for (array of array){
            if (array.artist === artist) {findArray.push(artist)}
          }
          return findArray
        }
        console.log(findTheArtist('Ozuna', collection));
        console.log(findTheArtist('Wisin', collection))


// STRETCH GOALS: I added a criteria on my search function for good measure
/*
+ Create a function called `search`. This function should:
  + Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  ```
  { artist: 'Ray Charles', year: 1957 }
  ```
  + The returned output from `search` should meet these requirements:
    + Return a new array of all items in the `collection` matching *all* of the search criteria.
    + If no results are found, return an empty array.
    + If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
*/
function search(artist, title, year, array){
  let pandoraArray= [];
  for (array of array){
    if (array.artist === artist && array.title === title && array.yearPublished === year)
        {pandoraArray.push(artist, title, year)
    }
  }
return pandoraArray
}

console.log(search('Ozuna', 'Aura', '2018', collection));
console.log(search('Karol G', 'Tusa', '2019', collection));
console.log(search('Sebastian Yatra', 'Mantra', '2018', collection));
