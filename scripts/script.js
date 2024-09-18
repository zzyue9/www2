const thumbImages = document.querySelector('.thumbImages');
const fullImg= document.querySelector('.fullImage');
const dark=document.querySelector('.dark');
const darkButton=document.querySelector('.darkButton');
let files=['image0.png','image1.png','image2.png','image3.png']
function loadImage() {
    const img =document.createElement('img');
    img.src="../images/"+files[0];
    fullImg.appendChild(img);
    for(let i=0;i<files.length;i++){
        const img =document.createElement('img');
        img.src="../images/"+files[i];
        thumbImages.appendChild(img);
    }
    
}

function handleClick(e){
    fullImg.querySelector('img').src=e.target.src;
}

//这里的e是按钮
function dark_change(e){
    const layer = e.target;
    const currentText = layer.textContent.trim();
    if(currentText==='Dark'){
        layer.textContent='Light';
        dark.style.zIndex = '100';
    }else{
        layer.textContent='Dark';
        dark.style.zIndex = '-1';
        
    }
}

loadImage();
for(let i=0;i<files.length;i++){
    thumbImages.children[i].addEventListener('click',handleClick);
}
darkButton.addEventListener('click',dark_change);


