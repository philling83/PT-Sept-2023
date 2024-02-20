const artists = require('./seeds/artists.json');
const songs = require('./seeds/songs.json');

let nextArtistId = 2;

function newArtistId() {
    const newId = nextArtistId;
    nextArtistId++;
    return newId;
}

let nextSongId = 2;

function newSongId() {
    const newId = nextSongId;
    nextSongId++;

    return newId
}

exports.getAllArtists = () => {

    return Object.values(artists);

}

exports.getArtistById = (artistId) => {
    const artist = { ...artists[artistId] };

    const artistSongs = Object.values(songs)
        .filter(el => el.artistId === artistId);

    artist.songs = artistSongs;

    return artist;
}

exports.addNewArtist = (artist) => {
    const { name } = artist;


    const newArtist = {
        name,
        artistId: newArtistId()
    }

    artists[newArtist.artistId] = newArtist;

    return artists[newArtist.artistId];

}

exports.getAllSongs = () => {
    return Object.values(songs);
}

exports.getSongById = (songId) => {
    const song = { ...songs[songId] }

    return song;
}

exports.addNewSongToArtist = (song) => {
    const { name, artistId } = song;

    const newSong = {
        name,
        artistId : Number(artistId),
        songId : newSongId()
    }

    songs[newSong.songId] = newSong;

    return songs[newSong.songId];
}

exports.editSongById = (id, data) => {
    const { name } = data;

    songs[id].name = name;

    return songs[id];
}
