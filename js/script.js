// Songs Database
const songs = [
    {
        id: 1,
        title: "Between the Notes",
        artist: "Dean Nafi",
        duration: "3:45",
        audioFile: "audio/01-between-the-notes.mp3",
        imageFile: "images/01-between-the-notes.jpg",
        lyrics: `<h4>Verse 1 (Indonesia)</h4>
<p>Di bawah lampu yang redup malam ini</p>
<p>Nada jatuh pelan, seperti hati</p>
<p>Ku tekan tuts putih hitam ini</p>
<p>Mencari kamu di setiap melodi</p>

<p>Bayangmu datang, lalu pergi</p>
<p>Seperti chord yang tak selesai</p>
<p>Ku mainkan rasa, ku ulang lagi</p>
<p>Meski tahu akhirnya sama saja</p>

<h4>Pre-Chorus (Indonesia)</h4>
<p>Setiap detik terasa lambat</p>
<p>Saat namamu terucap lirih</p>
<p>Di antara nada yang ku mainkan</p>
<p>Ada kamu… yang tak pernah pergi</p>

<h4>Chorus (English)</h4>
<p>I'm lost between the notes I play</p>
<p>Thinking about you every day</p>
<p>My heart keeps singing your name</p>
<p>Even when you're far away</p>

<p>I tried to let you go tonight</p>
<p>But you're still dancing in my mind</p>
<p>Every key leads back to you</p>
<p>In black and white, it's always you</p>

<h4>Verse 2 (Indonesia)</h4>
<p>Kursi ini dingin tanpamu</p>
<p>Tapi hangat oleh kenangan</p>
<p>Setiap lagu tentang rindu</p>
<p>Tak pernah selesai ku mainkan</p>

<p>Aku diam, tapi musik bicara</p>
<p>Tentang cinta yang tertahan</p>
<p>Jika kamu masih mendengar</p>
<p>Dengarlah… ini pengakuan</p>

<h4>Pre-Chorus (English)</h4>
<p>Every second feels so slow</p>
<p>When your shadow starts to show</p>
<p>I play the truth I couldn't say</p>
<p>Hoping you still feel the same</p>

<h4>Bridge (Indonesia + English)</h4>
<p>Jika suatu hari kau kembali</p>
<p>I'll be right here, same melody</p>
<p>Tak ada janji, hanya lagu</p>
<p>Just me, this piano, and you</p>

<h4>Outro (Indonesia)</h4>
<p>Saat lagu ini berakhir nanti</p>
<p>Rasa ini masih tertinggal`
    },
    {
        id: 2,
        title: "Not Alone Tonight",
        artist: "Dean Nafi",
        duration: "3:32",
        audioFile: "audio/02-not-alone-tonight.mp3",
        imageFile: "images/02-not-alone-tonight.jpg",
        lyrics: `<h4>Verse 1</h4>
<p>Late night, city's quiet now</p>
<p>My thoughts are getting loud</p>
<p>I'm standing in the dark again</p>
<p>Trying to figure out</p>

<h4>Pre-Chorus</h4>
<p>If you hear this melody</p>
<p>Know it's calling out your name</p>

<h4>Chorus</h4>
<p>I'm not alone tonight</p>
<p>I'm not alone tonight</p>
<p>Even when the world feels cold</p>
<p>I'm not alone tonight</p>

<h4>Verse 2</h4>
<p>Late night, city's quiet now</p>
<p>My thoughts are getting loud</p>
<p>I'm standing in the dark again</p>
<p>Trying to figure out</p>

<h4>Pre-Chorus</h4>
<p>If you hear this melody</p>
<p>Know it's calling out your name</p>

<h4>Chorus</h4>
<p>I'm not alone tonight</p>
<p>I'm not alone tonight</p>
<p>Even when the world feels cold</p>
<p>I'm not alone tonight</p>

<h4>Outro</h4>
<p>Not alone…`
    },
    {
        id: 3,
        title: "Rise Again",
        artist: "Dean Nafi",
        duration: "3:28",
        audioFile: "audio/03-rise-again.mp3",
        imageFile: "images/03-rise-again.jpg",
        lyrics: `<h4>Verse 1</h4>
<p>Lights are breaking through the dark</p>
<p>I was lost but here we are</p>
<p>Every scar reminds me now</p>
<p>I survived, I won't fall down</p>

<h4>Pre-Chorus</h4>
<p>When the night pulls me below</p>
<p>I can feel my heartbeat grow</p>

<h4>Chorus</h4>
<p>I rise again</p>
<p>From the pain, from the fire</p>
<p>I rise again</p>
<p>Getting stronger, getting higher</p>
<p>I rise again</p>
<p>Even when I'm torn apart</p>
<p>I rise again</p>
<p>With this beating heart</p>

<h4>Verse 2</h4>
<p>Shadows whisper I'm not enough</p>
<p>But I've been here, I'm still tough</p>
<p>Every step feels heavy now</p>
<p>But I swear I won't back down</p>

<h4>Pre-Chorus</h4>
<p>Hear the sound inside my chest</p>
<p>This is more than just a test</p>

<h4>Chorus</h4>
<p>I rise again</p>
<p>From the pain, from the fire</p>
<p>I rise again</p>
<p>Getting stronger, getting higher</p>
<p>I rise again</p>
<p>Even when I'm torn apart</p>
<p>I rise again</p>
<p>With this beating heart</p>

<h4>Outro</h4>
<p>I rise again…</p>
<p>Yeah, I rise again…`
    },
    {
        id: 4,
        title: "Light in the Dark",
        artist: "Dean Nafi",
        duration: "3:55",
        audioFile: "audio/04-light-in-the-dark.mp3",
        imageFile: "images/04-light-in-the-dark.jpg",
        lyrics: `<h4>Verse 1</h4>
<p>Walking through the night alone</p>
<p>City lights begin to fade</p>
<p>Every step feels heavy now</p>
<p>But I still call your name</p>

<h4>Pre-Chorus</h4>
<p>When the world is falling down</p>
<p>And I'm losing who I am</p>
<p>In the silence I hear</p>
<p>A voice pulling me back</p>

<h4>Chorus</h4>
<p>You're the light in the dark</p>
<p>When I'm breaking apart</p>
<p>Even when I'm lost</p>
<p>I know where you are</p>
<p>You're the light in the dark</p>
<p>Through the pain, through the scars</p>
<p>I keep moving on</p>
<p>'Cause I know who you are</p>

<h4>Verse 2</h4>
<p>I've been running from my fears</p>
<p>Trying just to feel alive</p>
<p>Every shadow in my mind</p>
<p>Turns to fire when you shine</p>

<h4>Pre-Chorus</h4>
<p>I was down but not defeated</p>
<p>I was weak but still I stand</p>
<p>In the echoes of my heart</p>
<p>I finally understand</p>

<h4>Chorus</h4>
<p>You're the light in the dark</p>
<p>When I'm breaking apart</p>
<p>Even when I'm lost</p>
<p>I know where you are</p>
<p>You're the light in the dark</p>
<p>Through the pain, through the scars</p>
<p>I keep moving on</p>
<p>'Cause I know who you are</p>

<h4>Outro</h4>
<p>Light in the dark…</p>
<p>You're my light in the dark…`
    },
    {
        id: 5,
        title: "On My Mind",
        artist: "Dean Nafi",
        duration: "3:40",
        audioFile: "audio/05-on-my-mind.mp3",
        imageFile: "images/05-on-my-mind.jpg",
        lyrics: `<h4>Verse 1</h4>
<p>3 a.m., lights are fading</p>
<p>Phone still in my hand</p>
<p>All the words we never said</p>
<p>Keep running through my head</p>

<h4>Pre-Chorus</h4>
<p>I tried to move on, tried to be strong</p>
<p>But every road leads back to you</p>

<h4>Chorus</h4>
<p>You're on my mind</p>
<p>Every night, every time</p>
<p>I try to sleep, you pull me back</p>
<p>You're on my mind</p>
<p>You're on my mind</p>
<p>In the dark, in the light</p>
<p>I let you go a thousand times</p>
<p>But you're on my mind</p>

<h4>Verse 2</h4>
<p>City feels so empty</p>
<p>Even when I'm not alone</p>
<p>All these songs are talking</p>
<p>Like they know what I don't</p>

<h4>Pre-Chorus</h4>
<p>I tried to move on, tried to be strong</p>
<p>But every road leads back to you</p>

<h4>Chorus</h4>
<p>You're on my mind</p>
<p>Every night, every time</p>
<p>I try to sleep, you pull me back</p>
<p>You're on my mind</p>
<p>You're on my mind</p>
<p>In the dark, in the light</p>
<p>I let you go a thousand times</p>
<p>But you're on my mind</p>

<h4>Outro</h4>
<p>Still on my mind…</p>
<p>Yeah, you're still on my mind`
    }
];

let currentSongIndex = -1;
let playlist = JSON.parse(localStorage.getItem('deanNafiPlaylist')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderSongs();
    updatePlaylist();
});

// Render Songs
function renderSongs() {
    const songsGrid = document.getElementById('songsGrid');
    songsGrid.innerHTML = '';

    songs.forEach((song, index) => {
        const songCard = document.createElement('div');
        songCard.className = 'song-card';
        songCard.innerHTML = `
            <div class="song-card-image">
                <img src="${song.imageFile}" alt="${song.title}" onerror="this.style.display='none'">
                <i class="fas fa-music"></i>
            </div>
            <div class="song-number">${song.id}</div>
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <div class="song-card-actions">
                <button class="song-btn play-btn" onclick="playSong(${index})">
                    <i class="fas fa-play"></i> Play
                </button>
                <button class="song-btn lyrics-btn" onclick="showLyrics(${index})">
                    <i class="fas fa-book"></i> Lyrics
                </button>
            </div>
        `;
        songsGrid.appendChild(songCard);
    });
}

// Play Song
function playSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    const audioPlayer = document.getElementById('audioPlayer');
    // Set image
    const albumImg = document.getElementById('albumImg');
    const musicIcon = document.getElementById('musicIcon');
    albumImg.src = song.imageFile;
    albumImg.onload = function() {
        albumImg.style.display = 'block';
        musicIcon.style.display = 'none';
    };
    albumImg.onerror = function() {
        albumImg.style.display = 'none';
        musicIcon.style.display = 'block';
    };
    
 

// Toggle Play/Pause
function togglePlayPause() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseButton();
}

// Update Play/Pause Button
function updatePlayPauseButton() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

// Seek Audio
function seekAudio() {
    const progressBar = document.getElementById('progressBar');
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
}

// Change Volume
function changeVolume() {
    const volumeSlider = document.getElementById('volumeSlider');
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = volumeSlider.value / 100;
}   audioPlayer.src = song.audioFile;
    audioPlayer.play();

    // Update play/pause button
    updatePlayPauseButton();
    audioPlayer.src = song.audioFile;
    audioPlayer.play();

    // Update album art
    updateAlbumArt();
}

// Update Album Art
function updateAlbumArt() {
    const albumArt = document.getElementById('albumArt');
    const colors = ['#1DB954', '#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3'];
    const randomColor = colors[currentSongIndex % colors.length];
    albumArt.style.background = `linear-gradient(135deg, ${randomColor}, rgba(255,255,255,0.1))`;
}

// Show Lyrics
function showLyrics(index) {
    const song = songs[index];
    const modal = document.getElementById('songModal');
    
    document.getElementById('modalSongTitle').textContent = song.title;
    document.getElementById('lyricsContent').innerHTML = song.lyrics;
    
    modal.style.display = 'block';
    currentSongIndex = index;
}

// Close Modal
function closeSongModal() {
    document.getElementById('songModal').style.display = 'none';
}

// Play Modal Song
function playModalSong() {
    playSong(currentSongIndex);
    closeSongModal();
}

// Add to Playlist
function addToPlaylist() {
    if (currentSongIndex === -1) {
        alert('Please select a song first!');
        return;
    }
    addSongToPlaylist(currentSongIndex);
}

// Add Modal to Playlist
function addModalToPlaylist() {
    addSongToPlaylist(currentSongIndex);
    closeSongModal();
}

// Add Song to Playlist Helper
function addSongToPlaylist(index) {
    const song = songs[index];
    
    // Check if song already exists
    const exists = playlist.some(item => item.id === song.id);
    if (!exists) {
        playlist.push(song);
        savePlaylist();
        updatePlaylist();
        showNotification(`${song.title} added to playlist!`);
    } else {
        showNotification(`${song.title} is already in your playlist!`);
    }
}

// Update Playlist UI
function updatePlaylist() {
    const playlistEmpty = document.getElementById('playlistEmpty');
    const playlistItems = document.getElementById('playlistItems');
    
    playlistItems.innerHTML = '';
    
    if (playlist.length === 0) {
        playlistEmpty.style.display = 'block';
    } else {
        playlistEmpty.style.display = 'none';
        
        playlist.forEach((song, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'playlist-item';
            listItem.innerHTML = `
                <div class="playlist-item-info">
                    <div class="playlist-item-title">${song.title}</div>
                    <div class="playlist-item-artist">${song.artist}</div>
                </div>
                <button class="remove-btn" onclick="removeFromPlaylist(${index})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            `;
            playlistItems.appendChild(listItem);
        });
    }
}

// Remove from Playlist
function removeFromPlaylist(index) {
    const song = playlist[index];
    playlist.splice(index, 1);
    savePlaylist();
    updatePlaylist();
    showNotification(`${song.title} removed from playlist!`);
}

// Clear Playlist
function clearPlaylist() {
    if (playlist.length === 0) {
        alert('Your playlist is already empty!');
        return;
    }
    
    if (confirm('Are you sure you want to clear your entire playlist?')) {
        playlist = [];
        savePlaylist();
        updatePlaylist();
        showNotification('Playlist cleared!');
    }
}

// Save Playlist to LocalStorage
function savePlaylist() {
    localStorage.setItem('deanNafiPlaylist', JSON.stringify(playlist));
}

// Download Playlist
function downloadPlaylist() {
    if (playlist.length === 0) {
        alert('Your playlist is empty!');
        return;
    }

    let content = 'Dean Nafi Music - My Playlist\n';
    content += '================================\n\n';
    
    playlist.forEach((song, index) => {
        content += `${index + 1}. ${song.title}\n`;
        content += `   Artist: ${song.artist}\n`;
        content += `   Duration: ${song.duration}\n\n`;
    });

    content += '\nDownloaded from: Dean Nafi Music\n';
    content += `Date: ${new Date().toLocaleDateString()}\n`;

    // Create and download file
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', 'dean-nafi-playlist.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    showNotification('Playlist downloaded successfully!');
}

// Handle Contact Form
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    // You can add email sending functionality here
    showNotification('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #1DB954;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease-in-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('songModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});
