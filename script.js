const gifContainerEl = document.querySelector('#gif-container');

function getGifs() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=hiqCK9aIGMFJKgRC3J9ozEalkC9ohp53&limit=10&rating="g"')
        .then((response) => response.json())
        .then(data => {

            console.log(data.data);

            const results = data.data;

            results.map(gifs => {
                let title = document.createElement('h4');
                let giphyBox = document.createElement('div');
                
                title.textContent = gifs.title;
                giphyBox.innerHTML = `<img src="${gifs.images.original.url}" alt="${gifs.title}" />`;
                
                gifContainerEl.append(title);
                gifContainerEl.append(giphyBox); 
            })
        })      
}

getGifs();  