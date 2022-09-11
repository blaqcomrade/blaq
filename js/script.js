/*------------- aside active work-----------------*/
const asidework = document.querySelectorAll('.aside-item')

function activeW(){
    asidework.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}

asidework.forEach(l=> l.addEventListener('click' , activeW))
/*------------- typing animation-----------------*/
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphics Designer","YouTuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', function(){
    this.classList.toggle('active')
})

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click' , activeWork))