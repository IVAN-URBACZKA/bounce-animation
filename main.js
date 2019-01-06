const titre = document.querySelector('h1');

const cadre = document.querySelector('div');

const maxHeight = cadre.clientHeight;
const maxWidth = cadre.clientWidth;

titre.style.position = "relative";

let topPos = 0;
let leftPos = 0;

let forceH = -2;
let forceW = -2;

function animation(){
   if(topPos==0 || leftPos==0){
        forceH *= -1;
        forceW *= -1;

        
    }
    else if(topPos == maxHeight - titre.offsetHeight || leftPos == maxWidth - titre.offsetWidth ){
        forceH *= -1;
        forceW *= -1;
    }

    topPos += forceH;

    leftPos += forceW;



    titre.style.top = topPos + "px";

    titre.style.left = leftPos + "px";



    requestAnimationFrame(animation);


}

requestAnimationFrame(animation);
