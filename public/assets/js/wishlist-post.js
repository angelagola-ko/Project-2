async function newWishlist(event) {
    event.preventDefault();

    const location = document.getElementById('location').value;

    const response = await fetch(`/wishlist`, {
        method: 'POST',
        body: JSON.stringify({
            location,
            // body.session.user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.location.replace('/wishlist');
}

document.querySelector('.wishlist-form').addEventListener('submit', newWishlist);
