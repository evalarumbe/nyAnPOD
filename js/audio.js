(() => {
    const audio = document.querySelector('#nyan-audio');
    const audioToggle = document.querySelector('#audio-toggle');
    
    const toggleAudio = function() {
        if (audio.paused) {
            audio.play();
            audioToggle.classList.add('audible');
        } else if (audio.muted) {
            audio.muted = false;
            audioToggle.classList.add('audible');
        } else {
            audio.muted = true;
            audioToggle.classList.remove('audible');
        }
    };

    audioToggle.addEventListener('click', toggleAudio);
})();