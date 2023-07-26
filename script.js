const touches = document.querySelectorAll('.button');
const ecran = document.querySelector('.ecran');
const boutton = document.querySelector('.button');

let value = "";

let toucheArray = Array.from(touches);

toucheArray.forEach((touche) => {
    touche.addEventListener('click',(e)=>{
        ecran.style.color ='black'
        
        if (e.target.innerHTML == "="){
            value = eval(value)
            ecran.textContent = value
        } else if(e.target.innerHTML == "C"){
            value = "";
            ecran.textContent = value
        } else{
            value+= e.target.innerHTML
            ecran.textContent = value
        }
    })
})
