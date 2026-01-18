# Dean Nafi Music - Website

Website musik profesional untuk Dean Nafi dengan fitur playlist seperti Spotify.

## 📋 Features

✅ **Responsive Design** - Bekerja di semua perangkat (desktop, tablet, mobile)
✅ **Music Player** - Audio player terintegrasi dengan kontrol full
✅ **Playlist Management** - Simpan lagu ke playlist personal
✅ **Lyrics Display** - Lihat lirik lagu dengan modal interaktif
✅ **Social Media Integration** - Link ke YouTube, TikTok, Instagram, WhatsApp
✅ **Local Storage** - Playlist tersimpan di browser
✅ **Download Playlist** - Export playlist ke file text

## 📁 Struktur File

```
dean.nafi/
├── index.html           # File utama website
├── css/
│   └── style.css       # Styling & responsive design
├── js/
│   └── script.js       # Semua fungsi interaktif
└── audio/
    ├── 01-between-the-notes.mp3     # Lagu 1
    ├── 02-not-alone-tonight.mp3     # Lagu 2
    ├── 03-rise-again.mp3            # Lagu 3
    ├── 04-light-in-the-dark.mp3     # Lagu 4
    └── 05-on-my-mind.mp3            # Lagu 5
```

## 🎵 Lagu-Lagu

1. **Between the Notes** - 3:45
2. **Not Alone Tonight** - 3:32
3. **Rise Again** - 3:28
4. **Light in the Dark** - 3:55
5. **On My Mind** - 3:40

## 🚀 Cara Setup

1. **Siapkan File Audio**
   - Letakkan file audio dengan nama:
     - `01-between-the-notes.mp3`
     - `02-not-alone-tonight.mp3`
     - `03-rise-again.mp3`
     - `04-light-in-the-dark.mp3`
     - `05-on-my-mind.mp3`
   - Tempatkan di folder `audio/`

2. **Buka Website**
   - Double-click `index.html` atau
   - Buka dengan live server di VS Code

## 🎯 Fitur Utama

### Music Player
- Play/Pause lagu
- Progress bar dengan durasi
- Volume control

### Playlist
- Tambah lagu ke playlist dengan tombol "Add to Playlist"
- Lihat semua lagu yang disimpan di section "My Playlist"
- Hapus lagu individual atau clear semua
- Download playlist sebagai file text

### Lirik Lagu
- Klik tombol "Lyrics" di setiap lagu
- Modal akan menampilkan lirik lengkap
- Play langsung dari modal

### Social Media & Contact
- Link ke semua akun social media
- WhatsApp chat otomatis dengan pesan sambutan
- Contact form untuk pesan

## 📱 Social Media Links

- **YouTube**: https://youtube.com/@dean-nafi2?si=Raft8rpYgQA-gSKu
- **TikTok**: tiktok.com/@dean.nafi192
- **Instagram**: https://www.instagram.com/dean.nafi?igsh=bzFycG01NmRxZDgw
- **WhatsApp**: 0856 6587 486

## 🎨 Customization

### Mengubah Warna
Edit file `css/style.css` - ubah CSS variables di `:root`:
```css
:root {
    --primary-color: #1DB954;      /* Warna hijau Spotify */
    --secondary-color: #191414;    /* Warna gelap */
    --accent-color: #1ed760;       /* Warna terang */
}
```

### Menambah Lagu Baru
Edit `js/script.js` - tambahkan ke array `songs`:
```javascript
{
    id: 6,
    title: "Song Title",
    artist: "Dean Nafi",
    duration: "3:45",
    audioFile: "audio/06-song-name.mp3",
    lyrics: `<h4>Verse</h4><p>Lyrics here...</p>`
}
```

## 💾 Data Storage

Playlist disimpan di **Local Storage Browser** - tidak perlu database.
Playlist akan tersimpan meski browser ditutup.

## 🔧 Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## 📞 Support

Untuk pertanyaan atau bantuan:
- WhatsApp: 0856 6587 486
- Instagram: @dean.nafi
- TikTok: @dean.nafi192

---

**Made with ❤️ for Dean Nafi Music**
