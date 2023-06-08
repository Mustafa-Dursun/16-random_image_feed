const container = document.querySelector('.container');
const loading = document.querySelector('.loading');
const gallery = document.querySelector('.gallery');
const urlLorem = 'https://picsum.photos/';


const rows =30;
for (let i = 0; i < rows; i++) {
    const img = document.createElement("img");
    img.src = `${urlLorem}${getRandomSize()}`
    container.appendChild(img);
};

function getRandomNumber(){
    return Math.floor(Math.random()*10) +300;
}

function getRandomSize(){
    return `${getRandomNumber()}/${getRandomNumber()}`
}


window.addEventListener('load', () => {
    loading.style.display = 'none';
    gallery.style.display = 'block';
})
 