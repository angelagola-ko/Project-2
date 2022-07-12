async function newTrips(event) {
    event.preventDefault();

    const location = document.querySelector('input[name="location"]').value;

    const response = await fetch(`/trips`, {
        method: 'POST',
        body: JSON.stringify({
            location,
            // body.session.user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.location.replace('/trips');
}

document.querySelector('container').addEventListener('submit', newTrips);