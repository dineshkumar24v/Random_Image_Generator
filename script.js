const imgContainer = document.querySelector(".img-container")

const btnE1 = document.querySelector(".btn")

document.querySelectorAll(".img-container img").forEach(img => {
    img.classList.add("show");
});


btnE1.addEventListener("click", ()=>{
    // console.log("you clicked me!");
    imgNum = 9  // here imgNum isn't declared using let/const/var so it becomes a global variable
    updateImg() 
})

// using the Picsum API to fetch random images
function updateImg (){
    for(let i = 0; i<imgNum; i++){
        const newImg = document.createElement("img")
        newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
        // Add 'show' class after the image is appended to trigger animation
        newImg.addEventListener("load", () => {
            newImg.classList.add("show");
        });
         // Append the image to the container
        imgContainer.appendChild(newImg)
    }
}