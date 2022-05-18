let pastedLink = document.getElementById('pasted-link');
let typedLink = document.getElementById('typed-link');
let shortenBtn = document.getElementById('shorten-btn');
let shortenLink = document.getElementById('shorten-link');
let copyLink = document.getElementById('copy-link');
let copyBtn = document.getElementById('copy-btn');
let linkList = document.getElementById('link-list');
let statTxt = document.getElementById('statTxt')
let addText = document.getElementById('add-link');

let output = "";
shortenBtn.addEventListener('click', function(){
    if(pastedLink.value == ''){
        pastedLink.style.outline = "2px solid red";
        pastedLink.classList.add('active-error');
        addText.style.display = "block";

    }
    else{
        output += `
        <div class="shorten-link" id="shorten-link">
        <div class="typed-link">
        <p id="typed-link">${pastedLink.value}</p>
        </div>
        
        <div class="copy-menu">
        <p class="copy-link" id="copy-link">https/fb.com</p>
        <button class="copy-btn" id="copy-btn" onclick = "funcopy(this)">Copy</button>
        </div>
        </div>
        `
        linkList.innerHTML =  output;
        pastedLink.value = null;
        pastedLink.style.outline = "none";
        pastedLink.classList.remove('active-error');
        addText.style.display = "none";
    }
})
function funcopy(btn){
    btn.style.background = "hsl(257, 27%, 26%)"
    btn.innerHTML = "Copied!"
}
