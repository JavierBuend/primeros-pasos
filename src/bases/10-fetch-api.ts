import type { GiphyRandomResponse, Gif } from "../data/giphy.response";

const API_KEY = 'OQ72Fc8wDq3JRNIgeLqUAHlFTOnZwXZ0';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

const creatImgOnDom = (url:string)=>{
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}


myRequest.then((response)=> response.json())
.then(({data}: GiphyRandomResponse)=> {

    const imageUrl = data.images.original.url;
    creatImgOnDom(imageUrl);


})
.catch((error)=>{
    console.error(error);
})