const init = async () => {
    const data = await fetch('/api/places').then(data=>data.json()).then(data=>console.log('Data: ',data));
}

init();