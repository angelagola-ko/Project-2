const locationDelete = document.getElementById('location').innerHTML;
console.log(locationDelete);

// Delete from wishlist
const deleteHandler = async () => {

    await fetch(`/trips/${locationDelete}`, {
        method: 'DELETE'
    });

    document.location.replace(`/trips`);
};


// delete on click
document.querySelector('.btn-danger').addEventListener('click', deleteHandler);