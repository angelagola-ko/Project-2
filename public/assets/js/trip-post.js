async function newtrips(event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    cityLocation = location.replace(/ /g, '-').replace(/\./g, '').toLowerCase();
    const details = document.getElementById('details').value;

    await fetch(`https://api.teleport.org/api/urban_areas/slug:${cityLocation}/images/`)
    .then(function (response) {
        if (response.status == '200') {
            console.log(response.status)
                response.json()
                .then(function (data) {
                    maketrips(data.photos[0].image.mobile);
                });
        } else {
            maketrips(`https://static.turbosquid.com/Preview/001325/331/VU/_DHQ.jpg`);
        }
            
    })
    // End of Get Photo

    async function maketrips(photo) {
        const response = await fetch(`/trips`, {
            method: 'POST',
            body: JSON.stringify({
                location,
                photo,
                details,
                // body.session.user_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            document.location.replace('/trips')
        }
    }
}

document.querySelector('.trips-form').addEventListener('submit', newtrips);
