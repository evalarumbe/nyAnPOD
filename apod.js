(async () => {

    const today = new Date();
    
    todayString = [today.getUTCFullYear(), today.getMonth(), today.getDate()].join('-');

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${todayString}`);

    console.log(response);
})();