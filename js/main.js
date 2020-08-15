const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const modal = document.querySelector(".modal");

const openModal = () =>{
    console.log("open modal");
    modal.classList.remove("hidden");
}

const closeModal = () =>{
    console.log("close modal");
    modal.classList.add("hidden");
}
modal.addEventListener("click",closeModal);
openButton.addEventListener("click",openModal);
closeButton.addEventListener("click",closeModal);
