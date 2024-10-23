const tabs = document.querySelector(".tabs");
const btns = [...document.querySelectorAll(".button")];
const articles = [...document.querySelectorAll(".content")];


tabs.addEventListener("click",(e)=>{
    const id = e.target.dataset.id;

    if(id){
        btns.forEach(  btn => btn.classList.toggle("live",btn === e.target));

        articles.forEach(  article => article.classList.toggle("live",article.id === id));


    }
});