function postWishlist(data) {
    const results= fetch(`/api/wishlist/`, {
        method:'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data),
    }) 
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
};

// document.querySelector("#wishlistbtn").addEventListener("submit", (e) => {
//     e.preventDefault();
//     postWishlist();
// });