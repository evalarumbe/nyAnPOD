(async () => {
    const getUserDate = (userDate) => {
        if (!userDate) {
            throw new Error('Please choose a date.');
        }

        const date = new Date(userDate);
        const earliestApod = new Date('1995-06-20');
        const today = new Date();

        // Expected: YYYY-MM-DD only
        // TODO: only accept valid dates. (Fail on 31 Sept, 30 Feb)
        if (!userDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
            throw new Error('Please enter a date in the format YYYY-MM-DD or select one from the calendar.');
        }

        if (date < earliestApod || date > today) {
            throw new RangeError('Please choose a date between 1st Jan 2015 and today.');
        }

        return new Date (date);
    };
    
    const renderApod = async (date = new Date()) => {
        const html = document.querySelector('html');

        dateString = [date.getUTCFullYear(), date.getMonth() + 1, date.getDate()].join('-');
        
        // TODO: Whole bunch of error handling, see Trello
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateString}`);
        const data = await response.json();
        const { url, title, explanation } = data;
        
        // TODO: use above real data. This is a placeholder (too many requests)
        // const url = "https://apod.nasa.gov/apod/image/1707/M63-HST-Subaru-S1024.jpg";
        // const title = "Messier 63: The Sunflower Galaxy";
        // const explanation = "A bright spiral galaxy of the northern sky, Messier 63 is about 25 million light-years distant in the loyal constellation Canes Venatici. Also cataloged as NGC 5055, the majestic island universe is nearly 100,000 light-years across. That's about the size of our own Milky Way Galaxy. Known by the popular moniker, The Sunflower Galaxy, M63 sports a bright yellowish core in this sharp composite image from space- and ground-based telescopes. Its sweeping blue spiral arms are streaked with cosmic dust lanes and dotted with pink star forming regions. A dominant member of a known galaxy group, M63 has faint, extended features that are likely star streams from tidally disrupted satellite galaxies. M63 shines across the electromagnetic spectrum and is thought to have undergone bursts of intense star formation.";
    
        // set the APOD background
        html.style.background = `#31aafe url(${url}) center center / cover no-repeat fixed`;
    
        // display the APOD info
        const h1 = document.querySelector('#info h1');
        h1.textContent = title;
        const p = document.querySelector('#info p');
        p.textContent = explanation;
    };
    
    const setPopUp = () => {
        const togglePopUp = function() {

            // aria-expanded is used on the #info element and on its buttons,
            // because this keeps a11y happy and makes the CSS more readable
            document.querySelectorAll('.info-container *').forEach(el => {
                // We start with aria-expanded="false" because if we left it out completely, there would be no indication to screen readers that the element is expandable. (This is why we need the conditional instead of just using toggleAttribute every time)
                // Yes, we need to use strings to represent 'true' and 'false'. I didn't write the spec, I'm horrified too.
                if (info.getAttribute('aria-expanded') === 'false') {
                    el.setAttribute('aria-expanded', 'true');
                } else {
                    el.toggleAttribute('aria-expanded');
                }
            });  
        };

        document.querySelectorAll('.toggle-info').forEach((btn) => {btn.addEventListener('click', togglePopUp)});
    };
    
    const handleDateForm = function(event) {
        // Don't navigate on submit
        event.preventDefault();

        try {
            renderApod(getUserDate(this.date.value));
            setPopUp();
        } catch (error) {
            console.error(error);
            // TODO: notify user
        }
    };

    document.querySelector('#apod-date').addEventListener('submit', handleDateForm);
})();