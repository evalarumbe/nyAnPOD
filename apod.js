(async () => {

    const renderApod = async () => {
        const html = document.querySelector('html');
        const exp = document.querySelector('#explanation');
    
        const today = new Date();    
        todayString = [today.getUTCFullYear(), today.getMonth(), today.getDate()].join('-');
    
        // TODO: why do i need await twice?
        // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${todayString}`);
        // const data = await response.json();
        // const { url, explanation } = data;
    
    
        // TODO: use above real data. This is a placeholder (too many requests)
        const url = "https://apod.nasa.gov/apod/image/1707/M63-HST-Subaru-S1024.jpg";
        const explanation = "A bright spiral galaxy of the northern sky, Messier 63 is about 25 million light-years distant in the loyal constellation Canes Venatici. Also cataloged as NGC 5055, the majestic island universe is nearly 100,000 light-years across. That's about the size of our own Milky Way Galaxy. Known by the popular moniker, The Sunflower Galaxy, M63 sports a bright yellowish core in this sharp composite image from space- and ground-based telescopes. Its sweeping blue spiral arms are streaked with cosmic dust lanes and dotted with pink star forming regions. A dominant member of a known galaxy group, M63 has faint, extended features that are likely star streams from tidally disrupted satellite galaxies. M63 shines across the electromagnetic spectrum and is thought to have undergone bursts of intense star formation.";
    
        // set the APOD background
        html.style.background = `#104476 url(${url}) center center / cover no-repeat fixed`;
    
        // display the APOD explanation
        const p = exp.querySelector('p');
        p.textContent = explanation;
    };

    const setPopUp = () => {
        const togglePopUp = function() {
            const exp = document.querySelector('#explanation');
            exp.toggleAttribute('aria-expanded');
        };

        document.querySelector('#show-exp').addEventListener('click', togglePopUp);
    };

    renderApod();
    setPopUp();
})();