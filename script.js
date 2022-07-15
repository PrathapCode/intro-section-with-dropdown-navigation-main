function firstAction() {
    var x = document.getElementById( "list-one");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible"
    } else {
        x.style.visibility = "hidden"
    }
}

function secondAction() {
    var x = document.getElementById( "list-two");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible"
    } else {
        x.style.visibility = "hidden"
    }
}


function responsive() {

    var query = document.getElementById("original");
    
    if (query.style.visibility === "hidden"){
        query.style.visibility = "visible"; 
          
    } else {
        query.style.visibility = "hidden";
        
    }
}

function fealist() {
    var sum = document.getElementById("FEA-LIST");
    var arrow = document.getElementById("fea-arrow")
    if (sum.style.display === "none") {
        sum.style.display = "block"
        arrow.style.transform = "rotate(180deg"
    } else {
        sum.style.display = "none"
        arrow.style.transform = "rotate(0deg)"
    }
}

function comlist() {
    var sum = document.getElementById("COMP-LIST");
    var arrow = document.getElementById("com-arrow")
    if (sum.style.display === "none") {
        sum.style.display = "block"
        arrow.style.transform = "rotate(180deg"
    } else {
        sum.style.display = "none"
        arrow.style.transform = "rotate(0deg)"
    }
}

