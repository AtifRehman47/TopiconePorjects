let inputage = document.querySelector('.inputage');
let btn = document.querySelector('.btn');
let show = document.querySelector('.show');

btn.addEventListener('click',()=>{
        let age = inputage.value 
        let calculate = 2026-age
        show.innerHTML = `Your age is ${calculate}`                      
})