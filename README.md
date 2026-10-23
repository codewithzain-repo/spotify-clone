<div align="center">

# 🎵 Spotify Clone

### A responsive music player built with HTML, CSS & JavaScript

[![HTML5](https://img.shields.io/badge/HTML5-Markup-orange?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Functionality-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-Responsive-16A34A)](#key-features)
[![Live Demo](https://img.shields.io/badge/Live-Demo-1DB954?logo=vercel&logoColor=white)](https://spotify-clone-ruby-two-48.vercel.app/)

**Explore the project:** [Live Demo](https://spotify-clone-ruby-two-48.vercel.app/)

</div>

---

## 📖 About the Project

Spotify Clone is a Spotify-inspired web music player built as a frontend development project. It features a dark interface, a song library, audio playback controls, and a responsive layout for desktop, tablet, and mobile screens.

The project uses **HTML5, CSS3, and vanilla JavaScript** to practise DOM manipulation, event handling, asynchronous JavaScript, and working with the browser's audio capabilities.

## ✨ Key Features

- 🎧 Play and pause audio tracks
- ⏮️ Previous and next track controls
- 📚 Dynamically load song filenames from `songs.json`
- 🖱️ Select and play tracks from the song library
- 🔊 Volume control
- ⏩ Seek through a track with a progress slider
- ⏱️ Display current playback time and track duration
- ⌨️ Keyboard shortcuts:
  - `Space` — play or pause
  - `←` — seek backward 5 seconds
  - `→` — seek forward 5 seconds
- 📱 Responsive layout for desktop, tablet, and mobile
- 🍔 Mobile navigation menu

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and audio interface |
| CSS3 | Styling, layout, and responsive design |
| JavaScript (ES6+) | Player logic, DOM updates, and event handling |
| Fetch API | Load the song list from JSON |
| HTML Audio API | Play tracks and control playback |
| Vercel | Live deployment |

## 🚀 Live Demo

Try the deployed project here:

**[Open Spotify Clone](https://spotify-clone-ruby-two-48.vercel.app/)**

## ⚙️ Run Locally

1. Clone or download this repository.
2. Open the project folder in your code editor.
3. Ensure your MP3 files are inside `assets/song_list/`.
4. Add each MP3 filename to `songs.json`.
5. Run the project with a local development server, such as the **Live Server** extension in VS Code.
6. Open the local URL provided by the server.

> **Note:** Run the project through a local server rather than opening `index.html` directly, because the app fetches `songs.json`.

### Example `songs.json`

```json
{
  "songs": [
    "song-one.mp3",
    "song-two.mp3"
  ]
}
```

Use the exact filenames of your MP3 files, including spaces and the `.mp3` extension.

## 🎮 Keyboard Controls

| Key | Action |
|---|---|
| `Space` | Play / Pause |
| `←` | Go back 5 seconds |
| `→` | Skip forward 5 seconds |

## 📚 What I Learned

While building this project, I practised:

- Selecting and updating HTML elements with the DOM
- Handling click, input, and keyboard events
- Using `async/await` and the Fetch API to read JSON data
- Managing audio playback with JavaScript
- Updating playback time and seek controls
- Building responsive layouts with CSS Flexbox, Grid, and media queries
- Deploying a frontend project with Vercel

## 🔮 Future Improvements

- Search and filter songs
- Automatically play the next track when a song ends
- Add shuffle and repeat controls
- Create playlists and save favourites
- Improve accessibility and playback error messages

## 👨‍💻 Author

**Muhammad Zain**  
Web Developer | AI Enthusiast | Digital Marketer

- **Live Project:** https://spotify-clone-ruby-two-48.vercel.app
- **GitHub:** https://github.com/codewithzain-repo

---

<div align="center">

**Built with 💚 and JavaScript**

If you find this project useful, consider giving the repository a ⭐

</div>

> **Disclaimer:** This is an educational, fan-made project inspired by Spotify's interface. It is not affiliated with, endorsed by, or sponsored by Spotify. Use your own legally obtained audio files.

