

const expertiseData = [
    {

        title:'Web development',
        icon:'Globe.svg',
        description:' Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolore, dignissimos? Consequatur repellat quos mollitia fuga eaque recusandae similique nisi? '
        
    },
    {

        title:'UI/UX DESIGN',
        icon:'Globe.svg',
        description:' Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolore, dignissimos? Consequatur repellat quos mollitia fuga eaque recusandae similique nisi? '
        
    },
    {

        title:'Mobile development',
        icon:'Globe.svg',
        description:' Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolore, dignissimos? Consequatur repellat quos mollitia fuga eaque recusandae similique nisi? '
        
    },
  
]

 


document.addEventListener('DOMContentLoaded',() =>{
    const cards = document.querySelector('.cards');

    cards.innerHTML = "";
    expertiseData.forEach(data => {
           cards.innerHTML += `<div class="cards-item">
                                        <span style="color: white;">
                                            <img  src="./assets/images/${data.icon}" alt="icon__description"/> 
                                        </span>
                                        <div>
                                            <h3 class="title">
                                                ${data.title}
                                            </h3>
                                            <p class="paragraph">
                                                ${data.description}
                                            </p>
                                        </div>
                                </div>`
    });
    

})