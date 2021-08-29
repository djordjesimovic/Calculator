function getEntry(){
    return document.querySelector(".entry-value").innerText;
}
function setEntry(num){
    document.querySelector(".entry-value").innerText = num;
}

const entry = document.querySelector(".entry-value");
const broj = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const jedn = document.getElementById("=");

broj[0].addEventListener("click", ispis);
broj[1].addEventListener("click", ispis);
broj[2].addEventListener("click", ispis);
broj[3].addEventListener("click", ispis);
broj[4].addEventListener("click", ispis);
broj[5].addEventListener("click", ispis);
broj[6].addEventListener("click", ispis);
broj[7].addEventListener("click", ispis);
broj[8].addEventListener("click", ispis);
broj[9].addEventListener("click", ispis);

operator[0].addEventListener("click", brisi);
operator[1].addEventListener("click", brisiPoJedan);
operator[2].addEventListener("click", ispis);
operator[3].addEventListener("click", ispis);
operator[4].addEventListener("click", ispis);
operator[5].addEventListener("click", ispis);
operator[6].addEventListener("click", ispis);
operator[7].addEventListener("click", jednako);


function ispis(){
    a = getEntry()
    entry.innerText = a + this.id;
}
function brisi(){
    setEntry("");
}
function brisiPoJedan(){
    let a = getEntry().toString();
    a = a.substr(0, a.length - 1);
    setEntry(a);
}
function jednako(){
    let output = getEntry();
    let resoult = eval(output);
    setEntry(resoult);
}
function jednako2(event){
    if(event.keyCode == 13){
        entry.addEventListener("keypress", jednako);
    }
}
