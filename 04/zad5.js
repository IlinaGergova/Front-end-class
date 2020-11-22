zad5("#32a881","#a82c6e");
function zad5(sColor1,sColor2){
    var paragraphs = document.getElementsByTagName('p');
    console.log(paragraphs.length);
    paragraphs.style.backgroundColor = sColor1;

    var headerTitle = document.getElementsByClassName("headertitle");
    console.log(headerTitle.length);
    headerTitle.stylr.backgroundColor = sColor2;

    var header = `${paragraphs.length} paragraphs, ${headerTitle} elements with class <headertitle>.`;
    var createEl = document.createElement("h2");
    createEl.textContent=header;
    var headerRef = document.getElementById("project_title");
    headerRef.appendChild(createEl);


}