


const hatixKarte = document.querySelector("#hatix-karte");
const hatixKarteParent = document.querySelector("#hatix-karte").parentNode;

const newDivHintergrund = document.createElement("div");
newDivHintergrund.classList.add("mod_article", "slideshow", "blue", "block", "custom-hinterground-1");

hatixKarteParent.insertBefore(newDivHintergrund, hatixKarte);

const newDivTextWrapper = document.createElement("div");
newDivTextWrapper.classList.add("custom-text-wrapper");
newDivHintergrund.appendChild(newDivTextWrapper);

const newTitle = document.createElement("h1");
newTitle.classList.add("new-title-h1");
newTitle.textContent = "Harzweitmobil im Landkreis Goslar und Göttingen";
newDivTextWrapper.appendChild(newTitle);
