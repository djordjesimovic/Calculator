// function getHistory(){
//     return document.querySelector(".history-value").innerText;
// }
// function setHistory(num){
//     document.querySelector(".history-value").innerText = num;
// }

function getEntry(){
    return document.querySelector(".entry-value").innerText;
}
function setEntry(num){
    document.querySelector(".entry-value").innerText = num;
}


// var history = document.querySelector(".history-value");
var entry = document.querySelector(".entry-value");
var number = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");

function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}


for(var i=0; i<number.length;i++){
    number[i].addEventListener("click", function(){
        const a = entry.innerText;
        entry.innerText = a + this.id;
    })
}
for(var i=0; i<operator.length;i++){
    operator[i].addEventListener("click", function(){
        // var a = entry.innerText;
        // entry.innerText = a + this.id;
        if(this.id == "C")
        {
            setEntry("");
        }
        else if(this.id == "CE")
        {
            var output = reverseNumberFormat(getEntry()).toString();
            if(output){
                output = output.substr(0, output.length - 1);
                setEntry(output);
            }
        }
        else{
            var output = getEntry();

            if(output!=""){
                output = reverseNumberFormat(output);
                
                if(this.id == "="){
                    var resoult = eval(output);
                    setEntry(resoult);
                }
            }
            
        }
        
    })
}