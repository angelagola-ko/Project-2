async function newExplore(event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    cityLocation = location.replace(/ /g, '-').replace(/\./g, '').toLowerCase();

    await fetch(`https://api.teleport.org/api/urban_areas/slug:${cityLocation}/images/`)
    .then(function (response) {
        if (response.status == '200') {
            console.log(response.status)
                response.json()
                .then(function (data) {
                    makeExplore(data.photos[0].image.mobile, location);
                });
        } else {
            makeExplore(`https://static.turbosquid.com/Preview/001325/331/VU/_DHQ.jpg`, location);
        }
            
    })
    // End of Get Photo

    async function makeExplore(photo, location) {
        const response = await fetch(`/explore`, {
            method: 'POST',
            body: JSON.stringify({
                location,
                photo,
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
