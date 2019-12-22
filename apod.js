(async () => {

    const today = new Date();
    
    todayString = [today.getUTCFullYear(), today.getMonth(), today.getDate()].join('-');

    // why do i need await twice?
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${todayString}`);
    const data = await response.json();
    const { url, explanation } = data;

    const html = document.querySelector('html');

    html.style.background = `#104476 url(${url}) center center / cover no-repeat fixed`;
})();