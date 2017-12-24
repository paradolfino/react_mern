// write a function to retrieve a blob of json
// make an ajax request! Use FETCH function.
//http://rallycoding.herokuapp.com/api/music_albums

/*function fetchAlbums() { //es6
    fetch('http://rallycoding.herokuapp.com/api/music_albums') //endpoint
        .then(res => res.json()) //return promise, when resolved, of response json
        .then(json => console.log(json)); //return promise, when resolved, of json and then log json
}

fetchAlbums();*/

/*async function fetchAlbums() { //es8
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums'); //await response from api endpoint
    const json = await res.json(); //assign json to response.json
    console.log(json);
}*/

const fetchAlbums = async () => { //es8 arrow function
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums'); //await response from api endpoint
    const json = await res.json(); //assign json to response.json
    console.log(json);
}