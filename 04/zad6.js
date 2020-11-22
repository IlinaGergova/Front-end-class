function zad6(){
    var table = document.createElement("table");
    table.style.border="1";
    document.body.appendChild(table);

    var caption = document.createElement("caption");
    caption.textContent="Table caption";
    table.appendChild(caption);

    var thead = table.createElement("thead");
    var tr = thead.createElement("tr");
    var arr = ["Evidence Rating", "Effect", "Efficacy", "Consensus", "Comments"];
    for(let i = 0; i < 5; i++){
        var th = tr.createElement("th");
        th.textContent = arr[i];
    }

    var tbody=table.createElement("tbody");
    var tr2 = tbody.createElement("tr");
    var arr2=["A","Power Output","3 Stars","80% 18 studies","Lorem ipsum dolor sit amet"];
    for(let k=0;k<5;k++){
        var td = tr2.createElement("td");
        td.textContent = arr2[k];
    }

    var tr3 = tbody.createElement("tr");
    var arr3=["B","Weight","4 Stars","100% 65 studies","Lorem ipsum dolor sit amet"];
    for(let k=0;k<5;k++){
        var td = tr3.createElement("td");
        td.textContent = arr3[k];
    }
    
}