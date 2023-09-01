


const hatixKarte = document.querySelector("#hatix-karte");
const hatixKarteParent = document.querySelector("#hatix-karte").parentNode;

const newDivHintergrund = document.createElement("div");
newDivHintergrund.classList.add("mod_article", "slideshow", "light-blue", "block", "custom-hinterground-1");

hatixKarteParent.insertBefore(newDivHintergrund, hatixKarte);

const newDivTextWrapper = document.createElement("div");
newDivTextWrapper.classList.add("custom-text-wrapper");
newDivHintergrund.appendChild(newDivTextWrapper);

const newTitle = document.createElement("h1");
newTitle.classList.add("new-title-h1", "ce_headline", "lightblue");
newTitle.textContent = "Harzweitmobil im Landkreis Goslar und Göttingen";
newDivTextWrapper.appendChild(newTitle);

const newTextContent = document.createElement("p");
newTextContent.classList.add("new-textcontent-p", "ce_text", "intro");
newTextContent.innerHTML += `Im Landkreis Goslar und Göttingen führt ein <a href="https://www.harz-nah-dran.de/harzweitmobil.html" class="custom-href-text">zum interaktiven Linien</a> online zur nächsten Haltestelle und zeigt die nächsten Abfahrten an.`;
newDivTextWrapper.appendChild(newTextContent);

const newButtonTextWrapper = document.createElement("div");
newButtonTextWrapper.classList.add("new-button-text");
newButtonTextWrapper.innerHTML += `
<a href="https://www.harz-nah-dran.de/harzweitmobil.html">
    <img src="https://www.harz-nah-dran.de/files/vsn/images/layout/hyperlink.png"/>
    <span>Zum interaktiven Liniennetzplan</span>
</a>`;
newDivTextWrapper.appendChild(newButtonTextWrapper);
