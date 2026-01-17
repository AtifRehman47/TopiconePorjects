function check() {
       let inputTemp = document.querySelector('.inputTemp').value;
       
       let form = (inputTemp * 9/5) + 32;

       let show = document.querySelector('.show');
       show.innerHTML = `The temperature is ${form} °F`;
}