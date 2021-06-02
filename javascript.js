'use strict';
const images = [
    ["Gordura e magnésio: Abacate", './img/abacate.jpeg'], 
    ["Magnésio: Banana", './img/banana.jpeg',], 
    ["Ferro: Brocólis", './img/brocolis.jpeg',], 
    ["Iodo: Crustáceos", './img/crustaceos.jpeg',], 
    ["Proteína: Ervilha", './img/ervilha.jpeg',], 
    ["Proteína: Feijão", './img/feijao.jpeg',], 
    ["Ferro: Frango", './img/frango.jpeg',], 
    ["Proteína: Queijo", './img/queijo.jpeg',], 
    ["Iodo: Sal", './img/sal.jpeg',],
];

function getRandom(max = 18){
    let arr = [];
    let i = 0;
    while(arr.length!=max){
        let val = Math.ceil(Math.random()*18);
        if(!arr.includes(val)){
            arr.push(val);
        }
        i++;
    }
    return arr;
}

let main = document.querySelector('main');

for (let i = 0, j = 0; j < images.length*2; i++,j++) {
    if(i==9){
        i=0;
    }
    main.innerHTML += `<div class='card'><img src='${images[i][1]}' alt='${images[i][0]}'></div>`;
}
let datas = document.querySelectorAll('.card');
let ordem = getRandom();

let escolhas = [];


datas.forEach((el,i)=>{
    el.style.order = ordem[i];
    el.addEventListener('click' ,()=>{
        
        if(escolhas.length == 1){
            datas.forEach(el=>{
                el.style.pointerEvents = 'none';
                escolhas[0].style.pointerEvents = 'none';
                setTimeout(() => {
                    el.style.pointerEvents = 'auto';
                }, 1500/2);
            })
           
            setTimeout(() => {
                escolhas[0].style.pointerEvents = 'auto';
            }, 1500/2);
            setTimeout(() => {
                resetar(escolhas);  
            }, 1500/2);
            setTimeout(() => {
                escolhas = [];         
            }, 1500/2);

        }
        el.firstChild.style.opacity = 1;
        escolhas.push(el.firstChild);
    });

});

function resetar(arr){
    try {
        // console.log(arr[0]);
        arr[0].style.opacity = 0;
        arr[1].style.opacity = 0;
        console.log(arr[0].parentElement.style.order, arr[1].parentElement.style.order);
        if(arr[0].alt === arr[1].alt && arr[0].parentElement.style.order != arr[1].parentElement.style.order ){
            arr[0].parentElement.remove();
            arr[1].parentElement.remove();
            let fala = arr[0].alt.split(':');
            alert("Nutriente: "+fala[0]+"\nAlimento: "+fala[1]);
            let tam = document.querySelectorAll('.card');
            console.log(tam.length);
            if(tam.length == 0){
                alert('Você Venceu, parabéns!!!!');
                if(confirm('Deseja recomeçar?')){
                    window.location.reload();
                }
            }
        }
        return false;
    } catch (error) {
        return true;
    }
}


