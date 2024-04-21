console.log("dashboard.js");
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.press-start-text').addEventListener('click', function () {
        console.log("click")
        document.querySelector('.game_options_div').hidden = false;
        document.querySelector('.press-start-text').style.display = 'None';
        document.querySelector('.game_options_div').focus();


    });


    // Select the text element
    const textElement = document.querySelector('#animated-text');

    // Get the text and clear the element
    const text = textElement.textContent;
    textElement.textContent = '';

    // Function to add one letter at a time
    let i = 0;
    function animateText() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(animateText, 70); // adjust the speed of animation here
        }
    }

    // Start the animation
    animateText();

    // music player js
    const cartoonAudio = new Audio('static/music/Cartoon.mp3');
    const forceAudio = new Audio('static/music/force.mp3');
    const hopeAudio = new Audio('static/music/hope.mp3');
    const janjiAudio = new Audio('static/music/Janji.mp3');

    // selecting elements
    const prevBtn = document.querySelector('.previous');
    const playBtn = document.querySelector('.play-pause');
    const nextBtn = document.querySelector('.next');
    const songName = document.querySelector('.song-name');
    const playPauseIcon = document.querySelector('#play-pause-icon');
    const progressBar = document.querySelector('#music-progress');

    const songs = [
        { ele: cartoonAudio, audioName: 'Cartoon by NCS' },
        { ele: forceAudio, audioName: 'Force by NCS' },
        { ele: hopeAudio, audioName: 'Hope by NCS' },
        { ele: janjiAudio, audioName: 'Janji by NCS' },
    ];

    for (const song of songs) {
        song.ele.addEventListener('ended', () => {
            updateSong('next');
            playPauseSong();
        })
    }
    // Update progress bar


    let current = 0;
    let currentSong = songs[current].ele;
    songName.textContent = songs[current].audioName;

    playBtn.addEventListener('click', () => {
        playPauseSong();
    })

    nextBtn.addEventListener('click', () => {
        updateSong('next');
        playPauseSong();
    });

    prevBtn.addEventListener('click', () => {
        updateSong('prev');
        playPauseSong();
    });

    const updateSong = (action) => {
        currentSong.pause();
        currentSong.currentTime = 0;

        if (action === 'next') {
            current++;
            if (current > songs.length - 1) current = 0;
        }
        if (action === 'prev') {
            current--;
            if (current < 0) current = songs.length - 1;
        }
        currentSong = songs[current].ele;
        songName.textContent = songs[current].audioName;
    }

    const playPauseSong = () => {
        if (currentSong.paused) {
            currentSong.play();
            playPauseIcon.className = 'ph-bold ph-pause';
        }
        else {
            currentSong.pause();
            playPauseIcon.className = 'ph-bold ph-play';
        }
        // updateProgress(); // Update progress bar when song starts
    }

    const currentTimeSpan = document.querySelector('.current_time');

    // Function to update time
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        currentTimeSpan.textContent = formattedTime;
    }

    // Update time immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);

    $(document).ready(function () {
        $("#btnSubmit").click(function () {
            var selectedRadio = document.querySelector('input[name="answer"]:checked').value;
            var url;

            switch (selectedRadio) {
                case 'github':
                    url = 'https://github.com/zeroconnect';
                    break;

                case 'linked_in':
                    url = 'https://www.linkedin.com/in/nileshkm/';
                    break;
                case 'bored':
                    url = '/static/documents/NileshKM-Resume.pdf';
                    break;
                case 'portfolio':
                    const portfolioSection = document.querySelector('.portfolio');
                    portfolioSection.hidden = false;
                    // scroll to the portfolio section
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                    break;
            }

            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});

document.addEventListener('keydown', function (event) {
    const optionRadios = document.querySelectorAll('.option-radio');
    if (event.key === ' ') {
        console.log("sapce bar")
        document.querySelector('.game_options_div').hidden = false;
        document.querySelector('.press-start-text').style.display = 'None';
        document.querySelector('.game_options_div').focus();

    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        const checkedIndex = Array.from(optionRadios).findIndex(radio => radio.checked);
        let nextIndex;
        if (event.key === 'ArrowUp') {
            nextIndex = (checkedIndex - 1 + optionRadios.length) % optionRadios.length;
        } else {
            nextIndex = (checkedIndex + 1) % optionRadios.length;
        }
        optionRadios[nextIndex].checked = true;
        optionRadios[nextIndex].focus();
    }

});

document.addEventListener('keydown', function (event) {
    console.log("inside envet listner")
    if (event.key === 'Enter') {
        var selectedRadio = document.querySelector('input[name="answer"]:checked').value;
        var url;

        switch (selectedRadio) {
            case 'github':
                url = 'https://github.com/zeroconnect';
                break;
            case 'portfolio':
                const portfolioSection = document.querySelector('.portfolio');
                portfolioSection.hidden = false;
                // scroll to the portfolio section
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'linked_in':
                url = 'https://www.linkedin.com/in/yourusername/';
                break;
            case 'bored':
                url = '/static/documents/NileshCV.pdf';
                break;
        }

        if (url) {
            if (selectedRadio === 'bored') {
                var link = document.createElement('a');
                link.href = url;
                link.download = 'NileshKM-Resume.pdf'; // replace with the name you want the downloaded file to have
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                window.open(url, '_blank');
            }
        }
    }
});


window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
});


// js end

function closeWindow() {
    window.close();
}

