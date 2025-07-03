let userInput = document.querySelector("input");
console.log(userInput);

let addbtn = document.querySelector("button");
console.log(addbtn);

let mainbox = document.querySelector(".main");
console.log(mainbox);

addbtn.addEventListener("click", () => {
    console.log("clicked");

    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";

    let newpara = document.createElement("p");
    newpara.classList.add("newlist");

    let btn1 = document.createElement("button");
    btn1.innerText = "Remove";
    btn1.classList.add("newbtn");

    container.appendChild(newpara);
    container.appendChild(btn1);
    mainbox.appendChild(container);

    newpara.style.marginTop = "25px";
    btn1.style.marginTop = "25px";

    let uservalue = userInput.value;
    newpara.innerText = uservalue;
    console.log(uservalue);

    btn1.addEventListener("click", () => {
        console.log("removed");
        container.remove();
    });



});   
