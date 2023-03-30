var globalTotal = 1;
var userTotal = 0;


function refreshGlobal() {
    globalTotal = localStorage.getItem("globalTotal")
    if (globalTotal == null) {
        globalTotal = 0;
    } else {
        globalTotal = parseInt(globalTotal, 10);
    }

    document.getElementById("globalTotal").innerHTML = "Global Total: " + globalTotal;
}

(function (){
    refreshGlobal();
})();

document.getElementById("addButton").onclick = function(){
    userTotal += 1;
    document.getElementById("userTotal").innerHTML = "Your Total: " + userTotal;
}

document.getElementById("sendButton").onclick = function(){

    globalTotal += userTotal;
    userTotal = 0;
    localStorage.setItem("globalTotal", globalTotal);
    document.getElementById("userTotal").innerHTML = "Your Total: " + userTotal;

    refreshGlobal();

}

document.getElementById("refreshButton").onclick = function(){
    refreshGlobal();

}