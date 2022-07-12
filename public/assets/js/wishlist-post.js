async function newWishlist(event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    cityLocation = location.replace(/ /g, '-').replace(/\./g, '').toLowerCase();

    await fetch(`https://api.teleport.org/api/urban_areas/slug:${cityLocation}/images/`)
    .then(function (response) {
        if (response.status == '200') {
            console.log(response.status)
                response.json()
                .then(function (data) {
                    makeWishlist(data.photos[0].image.mobile, location);
                });
        } else {
            makeWishlist(`https://static.turbosquid.com/Preview/001325/331/VU/_DHQ.jpg`, location);
        }
            
    })
    // End of Get Photo

    async function makeWishlist(photo, location) {
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
        }).then(document.location.replace('/wishlist'))
    }
}

document.querySelector('.wishlist-form').addEventListener('submit', newWishlist);
