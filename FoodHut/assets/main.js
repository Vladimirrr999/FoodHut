console.log("hello");

var niz=["index.html", "About.html", "meni.html"];
var nizTekst = ["Home", "About Us", "Meni"];
var html = "<ul>";
for(let i=0;i<niz.length;i++){
    html +=`<li><a href="${niz[i]}">${nizTekst[i]}</a></li> `;
}
html += "</ul>";
var y = document.getElementById("Prvi").innerHTML = html;