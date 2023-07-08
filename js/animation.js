
(function(){
    document.querySelector('#loader').classList.add('loader');
    

    document.addEventListener('DOMContentLoaded',()=>{
         setTimeout(() =>{
            document.querySelector('#loader').classList.remove('loader'); 
            document.querySelector('.overlay').classList.remove('overlay-hide');
         },2000)
    })
})()
