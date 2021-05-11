document.addEventListener("DOMContentLoaded",()=>{
    console.log(200);
    let date, pub, article_section, stock_article, btn
        date = ({
            myDate : new Date().getFullYear(),
            target : document.querySelector("footer p")
            
        })
        /* bouton pour voir les articles */
        btn =document.querySelector(".btn-add")
        date.target.innerText += date.myDate;
        console.log(typeof date)
        /* objet article  titre, date et paragraphe */
        pub = [
            {
                titre: "supra MK4",
                date: `11-05-${date.myDate}`,
                msg: "cest une de voiture de fast and ferious et la meilleurs voituer de vin disssel, c'st une voiture de 280cv d'origine et qui peut aller jusqu'a 1000cv et 1100 N.M.",
                image: "./asset/supra.jpg",
                imoji: "&#128077;"   
            },
            {
                titre: "BMW Z8",
                date: `11-05-${date.myDate}`,
                msg: "Le roadster BMW Z8 est l’une des vedettes du film de 1999 Le monde ne suffit pas.Et comme un autre véhicule de la marque premium allemande des James Bond, la Z8 peut-être contrôlée par télécommande.  ",
                image: "./asset/evo 8.jpg",
                imoji: "&#128077;"   
            },
            {
                titre: "FORD MUSTANG MACH 1",
                date: `11-05-${date.myDate}`,
                msg: "Cette voiture puissante est utilisée durant une poursuite à Las Vegas. Vous avez peut-être en mémoire cette scène durant laquelle la Ford Mustang Mach 1 roule sur deux roues dans une allée très étroite.",
                image: "./asset/e36.jpg",
                imoji: "&#128077;"   
            }

        ]
        
        article_section = document.querySelector(".article_of");
        stock_article = "";
        for(data of pub){
            console.log(
                `${data.titre} ${data.date} ${data.msg} ${data.image} ${data.imoji} `
            )
            stock_article += `

                            <figure>
                                <img src="${data.image}" alt="image">
                                <figcaption>
                                    <h2>${data.titre}</h2>
                                    <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                    <p>${data.msg}<span aria-hidden="true">${data.imoji}</span></p>
                                </figcaption>
                            </figure>`
            }
     
        btn.addEventListener("click",function(){
            article_section.innerHTML = stock_article;
            article_section.classList.toggle("article_on");
           this.classList.toggle("btn-remove");
        })




})