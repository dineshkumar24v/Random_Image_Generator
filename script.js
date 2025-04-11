const imgContainer = document.querySelector(".img-container")

const btnE1 = document.querySelector(".btn")


btnE1.addEventListener("click", ()=>{
    // console.log("you clicked me!");
    imgNum = 9
    updateImg() 
})

function updateImg (){
    for(let i = 0; i<imgNum; i++){
        const newImg = document.createElement("img")
        newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
        imgContainer.appendChild(newImg)
    }
}