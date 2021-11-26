console.log('***** Music Collection *****')
// Create a variable `collection` that starts as an empty array.
const collection = [];

/* - Add a function named `addToCollection`. This function should:
  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
  - Create a new object having the above properties
  - Add the new object to the end of the `collection` array
  - Return the newly created object
*/
function addToCollection (title, artist, yearPublished) {
  let album= {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(album);
  return album;
}

/* - Test the `addToCollection` function:
  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  - Console.log each album as added using the returned value.
  - After all are added, console.log the `collection` array.
*/

console.log(addToCollection('Aura ', 'Ozuna ', '2018 '));
