const openSign = document.getElementById("open");
const modal = document.querySelector(".modal");
const closebtn = modal.querySelector("button");
const overlay = modal.querySelector(".modal-overlay");

const openModal = () => {
    modal.classList.remove("hidden");
}
const closeModal = () =>{
    modal.classList.add("hidden");
}
overlay.addEventListener("click", closeModal);
closebtn.addEventListener("click", closeModal);
openSign.addEventListener("click", openModal);