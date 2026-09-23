let boxes = document.querySelectorAll('.box')
// console.log(boxes)
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')
let main = document.querySelector("main")

let playerX = true // X false O
let counter = 0
boxes.forEach((box)=>{
    // console.log(box)
    box.addEventListener('click',()=>{
        // console.log(box)
        // box.innerHTML = "R"

        if(playerX){
            box.innerHTML = "X"
            playerX = false
        }
        else{
            box.innerHTML = "O"
            playerX = true
        }

        box.disabled = true
        counter++
        if(counter==9){
            console.log("Game Draw")
            msgContainer.classList.remove('hide')
            msg.innerHTML = "Game Draw"
            main.innerHTML = " "
        }
    })

})