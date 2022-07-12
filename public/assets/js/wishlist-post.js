async function newWishlist(event) {
    event.preventDefault();

    // Get photo
    var getCity = function (city) {
        cityLocation = city.replace(/ /g, '-').replace(/\./g, '').toLowerCase();
        console.log(cityLocation);

        fetch(`https://api.teleport.org/api/urban_areas/slug:${cityLocation}/images/`)
        .then(function (response) {
            if (response.statusText != 'OK') {
                return `https://static.turbosquid.com/Preview/001325/331/VU/_DHQ.jpg`;
            } else {
                response.json()
                .then(function (data) {
                    return data.photos[0].image.mobile;
                });
            }
        })
    }
    // End of Get Photo

    const location = document.getElementById('location').value;
    const photo = getCity(location)

    await fetch(`/wishlist`, {
        method: 'POST',
        body: JSON.stringify({
            location,
            photo,
            // body.session.user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.location.replace('/wishlist');
}

document.querySelector('.wishlist-form').addEventListener('submit', newWishlist);
