async function newExplore(event) {
    event.preventDefault();

    const location = document.querySelector('input[name="location"]').value;

    const response = await fetch(`/explore`, {
        method: 'POST',
        body: JSON.stringify({
            location,
            // body.session.user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.location.replace('/explore');
}

document.querySelector('.explore-form').addEventListener('submit', newExplore);
