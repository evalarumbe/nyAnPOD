(async () => {

    const info = document.querySelector('#info');

    const renderApod = async () => {
        const html = document.querySelector('html');
    
        const today = new Date();    
        todayString = [today.getUTCFullYear(), today.getMonth(), today.getDate()].join('-');
    
        // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${todayString}`);
        // const data = await response.json();
        // const { url, title, explanation } = data;
        
        // TODO: use above real data. This is a placeholder (too many requests)
        const url = "https://apod.nasa.gov/apod/image/1707/M63-HST-Subaru-S1024.jpg";
        const title = "Messier 63: The Sunflower Galaxy";
        const explanation = "A bright spiral galaxy of the northern sky, Messier 63 is about 25 million light-years distant in the loyal constellation Canes Venatici. Also cataloged as NGC 5055, the majestic island universe is nearly 100,000 light-years across. That's about the size of our own Milky Way Galaxy. Known by the popular moniker, The Sunflower Galaxy, M63 sports a bright yellowish core in this sharp composite image from space- and ground-based telescopes. Its sweeping blue spiral arms are streaked with cosmic dust lanes and dotted with pink star forming regions. A dominant member of a known galaxy group, M63 has faint, extended features that are likely star streams from tidally disrupted satellite galaxies. M63 shines across the electromagnetic spectrum and is thought to have undergone bursts of intense star formation.";
    
        // set the APOD background
        html.style.background = `#104476 url(${url}) center center / cover no-repeat fixed`;
    
        // display the APOD info
        const h1 = info.querySelector('h1');
        h1.textContent = title;
        const p = info.querySelector('p');
        p.textContent = explanation;
    };

    const setPopUp = () => {
        const togglePopUp = function() {
            info.toggleAttribute('aria-expanded');
        };

        // TODO: descrture this into an array when you remember what you were trying to do here. did you want to target both x and button?
        document.querySelectorAll('.toggle-info').forEach((btn) => {btn.addEventListener('click', togglePopUp)});
    };

    renderApod();
    setPopUp();
})();