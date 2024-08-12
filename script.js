// List of songs
const songs = [
    {
        title: "Zihal e Miskin",
        artist: "Vishal Mishra",
        src: "Zihaal e Miskin(PagalWorld.com.sb).mp3"
    },
    {
        title: "O mahi",
        artist: "Arjit Singh",
        src: "O Mahi O Mahi(PagalWorld.com.sb).mp3"
    }
];

// Select elements
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Current song index
let currentSongIndex = 0;

// Load the first song
loadSong(currentSongIndex);

// Function to load a song
function loadSong(index) {
    const song = songs[index];
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

// Play the song
function playSong() {
    audio.play();
    playBtn.textContent = 'Pause';
    playBtn.classList.add('playing');
}

// Pause the song
function pauseSong() {
    audio.pause();
    playBtn.textContent = 'Play';
    playBtn.classList.remove('playing');
}

// Play or pause the song on button click
playBtn.addEventListener('click', () => {
    const isPlaying = playBtn.classList.contains('playing');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Play the previous song
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

// Play the next song
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});
