const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "") {
        myImage.setAttribute("src", "");
    } else {
        myImage.setAttribute("src", "");
    }
};





