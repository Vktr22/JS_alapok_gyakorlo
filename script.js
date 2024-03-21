$("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    const elsoBEKEZDCIM = document.getElementById("f1");
    console.log(elsoBEKEZDCIM);
}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    const kerdesesELEM = document.querySelector("#ide");
    kerdesesELEM.innerHTML += "<p>Jó reggelt</p>";
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    const ELEM = document.querySelector(".ide");
    ELEM.innerHTML += "<p>Jó reggelt</p>";
}

function elemekElerese4() {
    
    let txt = "<ul>";
    for (let i = 0; i<5; i++){
        txt += "<li>"
        txt += Math.floor(Math.random()*20+10)
        txt += "</li>"
    }
    txt += "</ul>";
    const ELEM = document.querySelector(".lista");
    ELEM.innerHTML += txt;
}
function elemekFormazasa() {
    
    const ELEM = document.querySelector(".lista")
    ELEM.classList.add("formazott");        // https://www.w3schools.com/howto/howto_js_add_class.asp
    
}
function esemenyKezeles1() {

    const ELEM = document.querySelector(".lista")
    ELEM.addEventListener("click", varazslat);

    function varazslat(){
        const LISTA = document.querySelector(".lista");
        const ESEMENYDIV = document.querySelector(".kattintasutan")

        ESEMENYDIV.innerHTML += LISTA.innerHTML;
    }
}
function esemenyKezeles2(){
    const DIV = document.querySelector(".feladats");
    DIV.innerHTML +="<button id = 'gomb'></button>";
    const GOMB = document.getElementById("gomb");
    GOMB.addEventListener("click", nyom);
    function nyom() {
         
    }
}