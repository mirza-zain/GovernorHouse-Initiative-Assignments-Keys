//Function of make_album() is used to create a dictionary of music albums. It takes two parameters, artist name and album title. It returns a dictionary with artist name and album title.
type Album = {
    artist: string;
    title: string;
    tracks?: number; 
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {artist, title};

    if(tracks){
        album.tracks = tracks;
    }

    return album;
}

let album1: Album = make_album("Alan Walker", "Faded");
let album2: Album = make_album("Zara Larsson", "Uncover");
let album3: Album = make_album("Sabrina Carpenter", "Eyes Wide Open", 12);

console.log(album1);
console.log(album2);
console.log(album3);

export{}