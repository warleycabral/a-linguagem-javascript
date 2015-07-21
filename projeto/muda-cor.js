var table = document.getElementById("mainTable");
console.log(table);
var trs = table.getElementsByTagName("td");
percorreArray(trs, function(tr){
    tr.addEventListener("mouseover", function(){
        this.setAttribute("bgcolor", "grey");
        this.setAttribute("style", "color: blue; font-weight: bold;")

    });
    
    tr.addEventListener("mouseout", function(){
        this.setAttribute("bgcolor", "");
        this.setAttribute("style", "")

    });
});