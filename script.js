const fill=document.querySelector('fill');
const empty=document.querySelectorAll('empty');

fill.addEventListener('dragstart',dragstart);


function dragstart(){
    console.log('start');
}