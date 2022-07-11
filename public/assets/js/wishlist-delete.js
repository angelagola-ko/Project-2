const locationDelete = document.getElementById('city').innerHTML;
console.log(locationDelete);

// Delete from wishlist
const deleteHandler = async () => {

    await fetch(`/api/wishlist/${locationDelete}`, {
        method: 'DELETE'
    });

    document.location.replace(`/wishlist`);
};


// delete on click
document.querySelector('.btn-danger').addEventListener('click', deleteHandler);