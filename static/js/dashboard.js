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
    let animationStarted = false;
    
    function animateText() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(animateText, 50); // Slightly faster animation
        }
    }

    // Function to start animation when portfolio section is visible
    function startCatMessageAnimation() {
        if (!animationStarted) {
            animationStarted = true;
            animateText();
        }
    }

    // Intersection Observer to detect when portfolio section is visible
    const portfolioSection = document.querySelector('.portfolio');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCatMessageAnimation();
            }
        });
    }, {
        threshold: 0.3 // Start animation when 30% of portfolio section is visible
    });

    if (portfolioSection) {
        observer.observe(portfolioSection);
    }

    // Add click handler for scroll down indicator
    const scrollIndicator = document.querySelector('.scroll-down-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

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
                    url = './NileshCV.pdf';
                    break;
                case 'portfolio':
                    const portfolioSection = document.querySelector('.portfolio');
                    portfolioSection.hidden = false;
                    // scroll to the portfolio section
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'contact':
                    $('#contactModal').modal('show');
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
            case 'contact':
                $('#contactModal').modal('show');
                break;
            case 'linked_in':
                url = 'https://www.linkedin.com/in/yourusername/';
                break;
            case 'bored':
                url = './NileshCV.pdf';
                break;
        }

        if (url) {
            if (selectedRadio === 'bored') {
                var link = document.createElement('a');
                link.href = url;
                link.download = 'NileshCV.pdf'; // replace with the name you want the downloaded file to have
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

function exploreMore() {
    // Scroll to portfolio section
    const portfolioSection = document.querySelector('.portfolio');
    portfolioSection.hidden = false;
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
}

// Email sending functionality
function sendMessage() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields!');
        return;
    }
    
    // Create mailto link
    const mailtoLink = `mailto:s.nileshkm@gmail.com?subject=${encodeURIComponent('Portfolio Contact: ' + subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Close modal and show success message
    $('#contactModal').modal('hide');
    
    // Clear form
    document.getElementById('contactForm').reset();
    
    // Show success notification (you could enhance this with a better notification system)
    setTimeout(() => {
        alert('Thank you for your message! Your email client should open with the pre-filled message.');
    }, 500);
}

// Cat Chatbot Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatPanel = document.getElementById('chatPanel');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');
    const chatNotification = document.getElementById('chatNotification');
    
    let isChatOpen = false;
    
    // Array of different meow responses
    const meowResponses = [
        "Meow! 🐾",
        "Meow meow! 😸",
        "Meoooow~ 🐱",
        "Meow? 🤔",
        "Meow meow meow! 😻",
        "*purrs* Meow! 😽",
        "Meow! *head bonk* 🐾",
        "Mrow mrow! 😼",
        "Meow meow purr~ 💕",
        "*stretches* Meooow! 😺",
        "Prrrr meow! 🥰",
        "Meow! *tail swish* 😸",
        "Chirp meow! 🐾",
        "*blinks slowly* Meow... 😌",
        "Meow meow! *kneads air* 😻"
    ];
    
    // Toggle chat panel
    function toggleChat() {
        isChatOpen = !isChatOpen;
        if (isChatOpen) {
            chatPanel.classList.add('open');
            chatNotification.style.display = 'none';
            chatInput.focus();
        } else {
            chatPanel.classList.remove('open');
        }
    }
    
    // Add message to chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');
        messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        
        const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        if (isUser) {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-text">${text}</div>
                    <div class="message-time">${currentTime}</div>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <img src="static/img/giphy.gif" alt="Cat" class="message-cat">
                </div>
                <div class="message-content">
                    <div class="message-text">${text}</div>
                    <div class="message-time">${currentTime}</div>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Get random meow response
    function getRandomMeow() {
        return meowResponses[Math.floor(Math.random() * meowResponses.length)];
    }
    
    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addMessage(message, true);
        chatInput.value = '';
        
        // Show typing indicator briefly, then respond with meow
        setTimeout(() => {
            addMessage(getRandomMeow(), false);
        }, 500 + Math.random() * 1000); // Random delay between 500-1500ms
    }
    
    // Event listeners
    chatbotToggle.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);
    chatSend.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Show notification periodically
    setInterval(() => {
        if (!isChatOpen) {
            chatNotification.style.display = 'flex';
            setTimeout(() => {
                if (!isChatOpen) {
                    chatNotification.style.display = 'none';
                }
            }, 3000);
        }
    }, 30000); // Show notification every 30 seconds
});

