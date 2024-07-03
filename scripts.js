const messages=[
    "<strong>¡Eres increíble!</strong>",
    "<strong>¡Sigue adelante!</strong>",
    "<strong>¡Cree en ti mismo!</strong>",
    "<strong>¡Puedes lograr cualquier cosa!</strong>",
    "<strong>¡Mantén una actitud positiva!</strong>",
    "<strong>¡Sueña en grande y atrévete a fallar!</strong>"
];

let availableMessages=[...messages];
let lastColor='';

const clickSound=document.getElementById('click-sound');
clickSound.playbackRate=2.0;

document.getElementById('box').addEventListener('click', function(){
    if(availableMessages.length===0){
        availableMessages=[...messages];
    }
        let randomColor=getRandomColor();
        while(randomColor===lastColor){
            randomColor=getRandomColor();
        }
        lastColor=randomColor;
        const randomIndex=Math.floor(Math.random()*availableMessages.length);
        const randomMessage =availableMessages.splice(randomIndex, 1)[0];

        this.style.backgroundColor=randomColor;
        this.style.boxShadow= `0 0 30px ${randomColor}`;

        const textColor=getContrastColor(randomColor);
        this.style.color=textColor;

        this.innerHTML=randomMessage;

        clickSound.currentTime=0;
        clickSound.play();
    
});

function getRandomColor(){
    const colors=["#1976D2","#1E88E5","#039BE5","#03A9F4","#00BCD4","#4CAF50","#8BC34A","#CDDC39","#FFEB3B", "#FFC107"]
    return colors[Math.floor(Math.random()*colors.length)];
}

function getContrastColor(hexColor){
    const r=parseInt(hexColor.substr(1,2),16);
    const g=parseInt(hexColor.substr(3,2),16);
    const b=parseInt(hexColor.substr(5,2),16);
    const brightness=(r*299+g*587+b*114)/1000;
    return brightness>=128?'#000':'#fff';
}