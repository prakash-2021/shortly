let pastedLink = document.getElementById('pasted-link');
let typedLink = document.getElementById('typed-link');
let shortenBtn = document.getElementById('shorten-btn');
let shortenLink = document.getElementById('shorten-link');
let copyLink = document.getElementById('copy-link');
let copyBtn = document.getElementById('copy-btn');
let linkList = document.getElementById('link-list');

let output;
shortenBtn.addEventListener('click', function(){
    if(pastedLink.value == ''){

    }
    else{
        output += `
        <div class="shorten-link" id="shorten-link">
        <div class="typed-link">
        <p id="typed-link">${pastedLink.value}</p>
        </div>
        
        <div class="copy-menu">
        <p class="copy-link" id="copy-link">https/fb.com</p>
        <button class="copy-btn" id="copy-btn">Copy</button>
        </div>
        </div>
        `
        // shortenLink.style.marginTop = "1em";
        linkList.innerHTML =  output;
        pastedLink.value = null;
    }
})
