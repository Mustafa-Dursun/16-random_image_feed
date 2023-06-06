const container = document.querySelector('.container');
const urlLorem = 'https://picsum.photos/';


const rows =30;

for (let i = 0; i < rows; i++) {
    const img = document.createElement("img");
    img.src = `${urlLorem}${getRandomSize()}`
    container.appendChild(img);
    console.log(img);
    
};

function getRandomNumber(){
    return Math.floor(Math.random()*10) +300;
}
console.log(getRandomNumber());

function getRandomSize(){
    return `${getRandomNumber()}/${getRandomNumber()}`
}
console.log(getRandomSize());
