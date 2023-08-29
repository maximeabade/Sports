var boxeTabObject;
var crossfitTabObject;
var muscuTabObject;

fetch("./noSQL/boxe.JSON")  
    .then(response => response.json())
    .then(jsonData => {
    boxeTabObject = jsonData;
    })
    .catch(error => console.error(error));

fetch("./noSQL/crossfit.JSON")
    .then(response => response.json())
    .then(jsonData => {
    crossfitTabObject = jsonData;
    })
    .catch(error => console.error(error));

fetch("./noSQL/muscu.JSON")
    .then(response => response.json())
    .then(jsonData => {
    muscuTabObject = jsonData;
    })
    .catch(error => console.error(error));


//vide les tableaux du panier, des boxe, des crossfit et des muscu, et on verifie si le user est admin pour laisser la possibilité d'afficher les stocks
function removeChildren(){
    var boxeContainer = document.getElementById("boxeContainer");
    var crossfitContainer = document.getElementById("crossfitContainer");
    var muscuContainer = document.getElementById("muscuContainer");
    //now we remove every of its child
    if(boxeContainer.hasChildNodes()) {
        while (boxeContainer.firstChild) {
            boxeContainer.removeChild(boxeContainer.firstChild);
        }
    }else if(crossfitContainer.hasChildNodes()) {
        while (crossfitContainer.firstChild) {
            crossfitContainer.removeChild(crossfitContainer.firstChild);
        }
    }else if(muscuContainer.hasChildNodes()) {
        while (muscuContainer.firstChild) {
            muscuContainer.removeChild(muscuContainer.firstChild);
        }
    }
};


//////////////////////////////////////--GÉNÉRATION DES HTML DES PRODUITS + INTERACTIONS--//////////////////////////////////////
function boxeChilds() {  
    removeChildren();
    var container = document.getElementById("boxeContainer");
    for(var i=0; i<boxeTabObject.length; i++) {
        var guitare = boxeTabObject[i];
        var div1 = document.createElement("div");
            div1.setAttribute("class", "row");
            div1.setAttribute("style", "margin-bottom: 20px;");
            div1.setAttribute("style", "border: none; color: black;");
        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-12");
        var h4 = document.createElement("h4");
        var Strong1 = document.createElement("strong");
            Strong1.innerHTML = guitare.Name;
        var p1 = document.createElement("p");
            p1.innerHTML = guitare.Details;
        var p2 = document.createElement("p");
        {
            h4.appendChild(Strong1);
            div3.appendChild(h4);
            div3.appendChild(p1);
            div3.appendChild(p2);
            div1.appendChild(div3);
            container.appendChild(div1);

        }

    }
}

function crossfitChilds() {
    removeChildren();
    var container = document.getElementById("crossfitContainer");
    for(var i=0; i<crossfitTabObject.length; i++) {
        var crossfit = crossfitTabObject[i];
        var div1 = document.createElement("div");
            div1.setAttribute("class", "row");
            div1.setAttribute("style", "margin-bottom: 20px;");
            div1.setAttribute("style", "border: none; color: black;");
        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-12");
        var h4 = document.createElement("h4");
        var Strong1 = document.createElement("strong");
            Strong1.innerHTML = crossfit.Name;
        var p1 = document.createElement("p");
            p1.innerHTML = crossfit.Details;
        var p2 = document.createElement("p");
        {
            h4.appendChild(Strong1);
            div3.appendChild(h4);
            div3.appendChild(p1);
            div3.appendChild(p2);
            div1.appendChild(div3);
            container.appendChild(div1);

        }
    }
}

function muscuChilds() {
    removeChildren();
    var container = document.getElementById("muscuContainer");
    for(var i=0; i<muscuTabObject.length; i++) {
        var exo = muscuTabObject[i];
        var div1 = document.createElement("div");
            div1.setAttribute("class", "row");
            div1.setAttribute("style", "margin-bottom: 20px;");
            div1.setAttribute("style", "border: none; color: black;");
        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-12");
        var h4 = document.createElement("h4");
        var Strong1 = document.createElement("strong");
            Strong1.innerHTML = exo.Name;
        var p1 = document.createElement("p");
            p1.innerHTML = exo.Details;
        var p2 = document.createElement("p");
        {
            h4.appendChild(Strong1);
            div3.appendChild(h4);
            div3.appendChild(p1);
            div3.appendChild(p2);
            div1.appendChild(div3);
            container.appendChild(div1);

        }
    }
}

