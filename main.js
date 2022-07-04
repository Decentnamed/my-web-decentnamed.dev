
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

//project buttons
const project1 = document.querySelector('.project1');
const project2 = document.querySelector('.project2');
const project3 = document.querySelector('.project3');
const project4 = document.querySelector('.project4');
const project5 = document.querySelector('.project5');

//About button in body
const aboutButton = document.querySelector('#about');


aboutHeaderButton.addEventListener('click', e => {
    e.preventDefault();
    window.location = "about/about.html";
})

aboutFooterButton.addEventListener('click', e => {
    e.preventDefault();
    window.location = "about/about.html";
})

aboutButton.addEventListener('click', e => {
    e.preventDefault();
    window.location = "about/about.html";
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
    window.location = "contact/contact.html";
})

contactFooterButton.addEventListener('click', e=>{
    e.preventDefault();
    window.location = "contact/contact.html";
})

