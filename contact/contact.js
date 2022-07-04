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

//contact
const linkedinButton = document.querySelector('#linkedin');
const emailButton = document.querySelector('#inputEmail');

homeHeaderButton.addEventListener('click', e =>{
    e.preventDefault();
    window.location = "/../index.html";
})

aboutHeaderButton.addEventListener('click', e => {
    e.preventDefault();
    window.location = "/../about/about.html";
})

homeFooterButton.addEventListener('click', e=>{
    e.preventDefault();
    window.location = "/../index.html";
})

aboutFooterButton.addEventListener('click', e=>{
    e.preventDefault();
    window.location = "/../about/about.html";
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
    window.location = "contact.html";
})

contactFooterButton.addEventListener('click', e=>{
    e.preventDefault();
    window.location = "contact.html";
})

linkedinButton.addEventListener('click', e=>{
    e.preventDefault();
    window.open('https://www.linkedin.com/in/dawid-grabowicz-1484311b1/')
})

function copyEmail(){
    var temporraryText = document.createElement("input");
    temporraryText.type = 'text';
    temporraryText.value = document.getElementById('emailButton').innerText;
    temporraryText.id = 'copyTextID';
    document.body.appendChild(temporraryText)
    var copyText = document.getElementById("copyTextID");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied to clipboard: " + copyText.value);
    document.body.removeChild(copyText);
}
