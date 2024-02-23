"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Alan Walker", "Faded");
let album2 = make_album("Zara Larsson", "Uncover");
let album3 = make_album("Sabrina Carpenter", "Eyes Wide Open", 12);
console.log(album1);
console.log(album2);
console.log(album3);
