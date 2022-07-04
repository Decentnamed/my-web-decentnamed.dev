//menu Header buttons
const homeHeaderButton = document.querySelector('.homeHeader');
const aboutHeaderButton = document.querySelector('.aboutHeader');
const githubHeaderButton = document.querySelector('.githubHeader');
const contactHeaderButton = document.querySelector('.contactHeader');

//menu Footer buttons
const homeFooterButton = document.querySelector('.homeFooter');
const aboutFooterButton = document.querySelector('.aboutFooter');
const githubFooterButton = document.querySelector('.githubFooter');
const contactFooterButton = document.querySelector('.contactFooter');

//employment label

const careerLabel = document.querySelector('#employmentLabel')

homeHeaderButton.addEventListener('click', e =>{
    e.preventDefault();
    window.location = "/../index.html";
})

aboutHeaderButton.addEventListener('click', e => {
    e.preventDefault();
    window.location = "about.html";
})

homeFooterButton.addEventListener('click', e=>{
    e.preventDefault();
    window.location = "/../index.html";
})

aboutFooterButton.addEventListener('click', e=>{
    e.preventDefault();
    window.location = "about.html";
})

careerLabel.addEventListener('click', e=>{
    e.preventDefault();
    window.location = "/../index.html";
})

githubHeaderButton.addEventListener('click', e=>{
    e.preventDefault();
    window.open('https://github.com/Decentnamed');
})

githubFooterButton.addEventListener('click', e=>{
    e.preventDefault();
    window.open('https://github.com/Decentnamed');
})

contactHeaderButton.addEventListener('click', e=>{
    e.preventDefault();
    window.location = "/../contact/contact.html";
})

contactFooterButton.addEventListener('click', e=>{
    e.preventDefault();
    window.location = "/../contact/contact.html";
})