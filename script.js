
/* ==================================================
   1. HAMBURGER MENU
================================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".ham-nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        menuBtn.classList.toggle("open");
        navLinks.classList.toggle("open");
    });
}


/* ==================================================
   2. GET SONGS FROM SERVER
================================================== */


async function getSongs() {
    const response = await fetch("songs.json");

    if (!response.ok) {
        throw new Error("songs.json load nahi hui");
    }

    const data = await response.json();

    const songs = data.songs.map(function (filename) {
        return "assets/song_list/" +
            encodeURIComponent(filename);
    });

    return songs;
}
 


/* ==================================================
   3. PLAYER ELEMENTS
================================================== */

const playBtn = document.querySelector(".play-btn");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

const songsList = document.querySelector(".songs-list ul");
const songTitle = document.querySelector(".play-title");
const playTime = document.querySelector(".play-time");

const volumeBar = document.querySelector(".play-volume input");
const seekBar = document.querySelector(".play-range input");


/* ==================================================
   4. MAIN FUNCTION
================================================== */

async function main() {
    try {
        const songs = await getSongs();

        console.log("Available songs:", songs);

        if (songs.length === 0) {
            console.log("Koi MP3 song nahi mila.");
            return;
        }

        let currentIndex = 0;
        const audio = new Audio(songs[currentIndex]);


        /* ==========================================
           5. GET CLEAN SONG TITLE
        ========================================== */

        function getSongTitle(song) {
            let title = decodeURIComponent(song);

            // Sirf filename nikalo
            title = title.split(/[\\/]/).pop();

            // MP3 extension remove karo
            title = title.replace(/\.mp3$/i, "");

            return title;
        }

        function updateSongTitle() {
            songTitle.textContent = getSongTitle(
                songs[currentIndex]
            );
        }


        /* ==========================================
           6. RENDER SONGS IN YOUR LIBRARY
        ========================================== */

        function renderSongs() {
            songsList.innerHTML = "";

            songs.forEach(function (song, index) {
                const li = document.createElement("li");

                li.textContent = getSongTitle(song);
                li.style.cursor = "pointer";

                li.addEventListener("click", function () {
                    playSong(index);
                });

                songsList.appendChild(li);
            });
        }


        /* ==========================================
           7. PLAY SELECTED SONG
        ========================================== */

        function playSong(index) {
            currentIndex = index;

            audio.src = songs[currentIndex];
            updateSongTitle();

            audio.play().catch(function (error) {
                console.log("Song play nahi hua:", error);
            });
        }

        renderSongs();
        updateSongTitle();


        /* ==========================================
           8. VOLUME CONTROL
        ========================================== */

        audio.volume = 0.5;

        volumeBar.value = 50;

        volumeBar.addEventListener("input", function () {
            audio.volume = Number(volumeBar.value) / 100;
        });


        /* ==========================================
           9. SEEK BAR
        ========================================== */

        audio.addEventListener("loadedmetadata", function () {
            seekBar.max = audio.duration;
            seekBar.value = 0;
        });

        audio.addEventListener("timeupdate", function () {
            seekBar.value = audio.currentTime;
        });

        seekBar.addEventListener("input", function () {
            audio.currentTime = Number(seekBar.value);
        });


        /* ==========================================
           10. FORMAT SONG TIME
        ========================================== */

        function formatTime(seconds) {
            if (!Number.isFinite(seconds)) {
                return "00:00";
            }

            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);

            return (
                String(minutes).padStart(2, "0") +
                ":" +
                String(secs).padStart(2, "0")
            );
        }

        audio.addEventListener("loadedmetadata", function () {
            playTime.textContent =
                formatTime(audio.currentTime) +
                "/" +
                formatTime(audio.duration);
        });

        audio.addEventListener("timeupdate", function () {
            playTime.textContent =
                formatTime(audio.currentTime) +
                "/" +
                formatTime(audio.duration);
        });


        /* ==========================================
           11. PLAY / PAUSE BUTTON
        ========================================== */

        playBtn.addEventListener("click", function () {
            if (audio.paused) {
                audio.play().catch(function (error) {
                    console.log("Song play nahi hua:", error);
                });
            } else {
                audio.pause();
            }
        });


        /* ==========================================
           12. UPDATE PLAY / PAUSE ICON
        ========================================== */

        audio.addEventListener("play", function () {
            playBtn.src = "assets/player svg/pause.svg";
        });

        function showPlayIcon() {
            playBtn.src =
                "assets/player svg/play-svgrepo-com.svg";
        }

        audio.addEventListener("pause", showPlayIcon);
        audio.addEventListener("ended", showPlayIcon);


        /* ==========================================
           13. NEXT SONG
        ========================================== */

        nextBtn.addEventListener("click", function () {
            if (currentIndex < songs.length - 1) {
                playSong(currentIndex + 1);
            }
        });


        /* ==========================================
           14. PREVIOUS SONG
        ========================================== */

        previousBtn.addEventListener("click", function () {
            if (currentIndex > 0) {
                playSong(currentIndex - 1);
            }
        });


        /* ==========================================
           15. KEYBOARD SHORTCUTS
        ========================================== */

        document.addEventListener("keydown", function (e) {

            // Input fields mein shortcuts disable
            if (
                e.target.tagName === "INPUT" ||
                e.target.tagName === "TEXTAREA" ||
                e.target.isContentEditable
            ) {
                return;
            }

            // Space: Play / Pause
            if (e.code === "Space") {
                e.preventDefault();

                if (audio.paused) {
                    audio.play().catch(function (error) {
                        console.log(error);
                    });
                } else {
                    audio.pause();
                }
            }

            // Left Arrow: 5 seconds backward
            if (e.code === "ArrowLeft") {
                e.preventDefault();

                audio.currentTime = Math.max(
                    0,
                    audio.currentTime - 5
                );
            }

            // Right Arrow: 5 seconds forward
            if (e.code === "ArrowRight") {
                e.preventDefault();

                if (Number.isFinite(audio.duration)) {
                    audio.currentTime = Math.min(
                        audio.duration,
                        audio.currentTime + 5
                    );
                }
            }
        });

    } catch (error) {
        console.log("Songs load karne mein error:", error);
    }
}


/* ==================================================
   16. START PLAYER
================================================== */

main();
