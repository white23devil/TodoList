let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" , function(){
    // console.log(inp.value);     // just print the value in console
    // inp.value = "";               //Clear the placeholder after the value is added
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value= "";

});


//Not applicable for new elements
let delbtns = document.querySelectorAll(".delete");
for(delBtn of delbtns){
    delBtn.addEventListener("click" , function(){
        // console.log("Element deleted");
        let parent = this.parentElement;
        console.log(parent);
        parent.remove();

    });
}

//Event Delegation: Type of phenomina where we use bubbuling technique. we will add event to parent not on child
ul.addEventListener("click" , function(event){
    // console.dir(event.target.nodeName);  // Tell which on which element out event is trigger
    if(event.target.nodeName == "BUTTON"){
        let litstItem = event.target.parentElement;
        litstItem.remove();
        console.log("delete");
    }
    // console.log("Button click");
});