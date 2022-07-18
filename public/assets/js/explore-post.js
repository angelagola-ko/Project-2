async function newExplore(event) {
    event.preventDefault();

    const location = document.querySelector("input[name='location']")

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '45c6a94a8bmsh5bcee14339fe1d8p116f66jsn588b8abbb08d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    const queryStr = `https://travel-advisor.p.rapidapi.com/locations/search?query=${location.value}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`
    
    fetch(queryStr, options)
        .then(response => response.json())
        .then(response => {
            let photo = response.data[0].result_object.photo.images.small.url;
            let location = response.data[0].result_object.location_string;
            let description = response.data[0].result_object.geo_description;

            newExplore(photo, location, description)})
        .catch(err => console.error(err));

    async function newExplore(photo, location, description) {
        const response = await fetch(`/explore`, {
            method: 'POST',
            body: JSON.stringify({
                location,
                photo,
                description
                // body.session.user_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            document.location.replace('/explore')
        }
    }
}

document.querySelector('.explore-form').addEventListener('submit', newExplore);
