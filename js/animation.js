
(function(){
    document.querySelector('#loader').classList.add('loader');

    document.addEventListener('DOMContentLoaded',()=>{
         setTimeout(() =>{
            document.querySelector('#loader').classList.remove('loader'); 
         },2000)
    })
})()
