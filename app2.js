function getHistory(){
    return document.querySelector(".history-value").innerText;
}
function setHistory(num){
    document.querySelector(".history-value").innerText = num;
}

function getEntry(){
    return document.querySelector(".history-value").innerText;
}
function setEntry(num){
    document.querySelector(".entry-value").innerText = num;
}

// setEntry("888");
// setHistory("999");

var history = document.querySelector(".history-value");
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
        // if(history.innerText.length > 1){
        //     history.innerText = "";
        // }
        const a = history.innerText;
        const b = entry.innerText;
        entry.innerText = b + this.id;
        history.innerText = a + this.id;
    })
}
for(var i=0; i<operator.length;i++){
    operator[i].addEventListener("click", function(){
        if(this.id == "C")
        {
            setHistory("");
            setEntry("");
        }
        else if(this.id == "CE")
        {
            var output = reverseNumberFormat(history.innerText).toString();
            if(output){
                output = output.substr(0, output.length - 1);
                setHistory(output);
                setEntry(output);
            }
        }
        else{
            var output = getEntry;
            var history = getHistory;

            if(output!=""){
                output =reverseNumberFormat(output);
                history+=output;

                if(this.id == "="){
                    var resoult = eval(history);
                    setEntry(resoult);
                }
            }
        }
        
    })
}