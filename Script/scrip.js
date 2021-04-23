const input = document.querySelector("#input");
const button = document.querySelector("button");

button.onclick = function(){
    input.select();
    document.execCommand("copy")
    alert("Copied")
}
